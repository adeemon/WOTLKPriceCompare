import { DataParser } from "../dataParser";
import { AuctionsFilter } from "./auctionsFilter";
import { suggestedAuctions } from "./suggestedAuctions"
import { RealmList } from "./realms"
import { configAH } from './config'
export class AHengine {
    constructor(auctionID) {
        this.auctionID = auctionID;
        this.AHDB = {};
    }
    async init() {
        let output = await this.getAllItemsCompare(configAH.AHid);
        return (output);
    }

    async getAuctionsInfo(realmID) {
        let auctionsList = await (this.getAuctionsFromRealm(realmID, this.auctionID));
        let outputMap = new Map();

        for (let key in suggestedAuctions) {
            let itemName = suggestedAuctions[key];
            let itemPrice = AuctionsFilter.getItemAvgPrice(key - 0, auctionsList)
            outputMap.set(itemName, itemPrice);
        }
        return outputMap;
    }

    async getItemsCompare(itemID) {
        if (!suggestedAuctions.hasOwnProperty(itemID)) {
            return 0;
        }
        let realmList = new RealmList();
        let outputMap = new Map();
        let realms = realmList.getRealmsList(this.auctionID);
        for (let realm in realms) {
            let auctionsList = await this.getAuctionsFromRealm(realms[realm], this.auctionID);
            let realmItemPrice = await AuctionsFilter.getItemAvgPrice(itemID, auctionsList);
            outputMap.set(realm, realmItemPrice);
        }
        return outputMap;
    }

    async getAuctionsFromRealm(realmID) {
        if (this.AHDB.hasOwnProperty(realmID)) {
            return this.AHDB[realmID]
        } else {
            const data = DataParser.getAuctionsFromResponse(DataParser.getDataFromRealm(realmID, this.auctionID));
            this.AHDB[realmID] = await data;
            return data;
        }
    }

    async getItemsInfo(itemID) {
        let itemData = new Map();
        let itemNameMap = new Map();
        let output = new Map();
        itemData = await this.getItemsCompare(itemID, this.auctionID);
        itemNameMap.set('Item name', suggestedAuctions[itemID]);
        itemData = await new Map([...itemData].sort((a, b) => {
            return a[1] - b[1]
        }));
        output = await new Map([...itemNameMap, ...itemData]);
        return output;
    }

    async getAllItemsCompare() {
        let output = [];
        for (let item in suggestedAuctions) {
            let itemInfo = await this.getItemsInfo(item - 0, this.auctionID);
            output.push(itemInfo);
            // TODO: это надо удалить, когда буду переделывать под нормальный интерфейс
            console.log(itemInfo);
        }
        return output;
    }
}