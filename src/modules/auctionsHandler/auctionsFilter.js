class AuctionsFilter {
    static getFirstAuctionsByID(itemID, auctionsList){
        let auctions = auctionsList;
        let filteredAuctions = [];
        filteredAuctions = auctions.filter(auction => auction.item.id === itemID);
        filteredAuctions = this.reduceZeroBuyoutAuctions(filteredAuctions);
        filteredAuctions = this.sortAuctionsByPrice(filteredAuctions);
        return filteredAuctions.slice(0, 25);
    }

    static sortAuctionsByPrice(auctionsList) {
        return auctionsList.sort((a, b) => a.buyout - b.buyout);
    }

    static reduceZeroBuyoutAuctions(auctionsList){
        return auctionsList.filter(element => element.buyout >= 1);
    }

    static getItemAvgPrice(itemID, auctionsList){
        let auctions = auctionsList;
        let itemAuctions = this.getFirstAuctionsByID(itemID, auctions);
        let average = itemAuctions.reduce((sum, current) => {
            return sum - 0 + current.buyout;
        }, 0);
        average = average / (itemAuctions.length * 10000);
        return average.toFixed(2);
    }
}

export { AuctionsFilter }