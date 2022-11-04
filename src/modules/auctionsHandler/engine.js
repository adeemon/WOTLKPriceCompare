import { DataParser } from "../dataParser";
import { AuctionsFilter } from "./auctionsFilter";
import { suggestedAuctions } from "./suggestedAuctions"
import { RealmList } from "./realms"

class AHEngine {
    static async init() {
        let auctionID = 6;
        let itemID = 43102;
        let realmID = 4453;
        //this.getAuctionsInfo('4453', '6');
        //console.log(suggestedAuctions[itemID]);
        //let output = await this.getItemsInfo(itemID, 6);
        let output = await this.getAllItemsCompare(auctionID);
        console.log(output);
    }

    static async getAuctionsInfo(realmID, auctionID) {
        let auctionsList = await (this.getAuctionsFromRealm(realmID, auctionID));
        let outputMap = new Map();

        for (let key in suggestedAuctions) {
            let itemName = suggestedAuctions[key];
            let itemPrice = AuctionsFilter.getItemAvgPrice(key - 0, auctionsList)
            outputMap.set(itemName, itemPrice);
        }
        return outputMap;
    }

    static async getItemsCompare(itemID, auctionID) {
        if (!suggestedAuctions.hasOwnProperty(itemID)) {
            return 0;
        }
        let realmList = new RealmList();
        let outputMap = new Map();
        let realms = realmList.getRealmsList(auctionID);
        for (let realm in realms) {
            let auctionsList = await this.getAuctionsFromRealm(realms[realm], auctionID);
            let realmItemPrice = await AuctionsFilter.getItemAvgPrice(itemID, auctionsList);
            outputMap.set(realm, realmItemPrice);
        }
        return outputMap;
    }

    static async getAuctionsFromRealm(realmID, auctionID) {
        return await DataParser.getAuctionsFromResponse(DataParser.getDataFromRealm(realmID, auctionID));
    }

    static async getItemsInfo(itemID, auctionID) {
        let itemData = new Map();
        let itemNameMap = new Map();
        let output = new Map();
        itemData = await this.getItemsCompare(itemID, auctionID);
        itemNameMap.set('Item name', suggestedAuctions[itemID]);
        itemData = await new Map([...itemData].sort((a, b) => {
            return a[1] - b[1]
        }));
        output = await new Map([...itemNameMap, ...itemData]);
        return output;
    }

    static async getAllItemsCompare(auctionID) {
        let output = [];
        for (let item in suggestedAuctions) {
            let itemInfo = await this.getItemsInfo(item - 0, auctionID);
            output.push(itemInfo);
            console.log(itemInfo);
        }
        return output;
    }
}

export { AHEngine }