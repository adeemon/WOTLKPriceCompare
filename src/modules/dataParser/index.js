import { endPointApi as API } from './endPointAPI';

class DataParser {
    static async getDataFromRealm(realm, auction) {
        let output = await API.getAllData(realm, auction);
        return output;
    }

    static async getAuctionsFromResponse(response) {
        let allAuctions = await response;
        return allAuctions.auctions;
    }
}

export { DataParser }