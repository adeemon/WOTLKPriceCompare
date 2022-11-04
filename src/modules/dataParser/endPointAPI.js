import { AuthToken } from './authtoken'

class endPointApi {
    static getAllData = (realmID, auctionID) => {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject("Таймаут наступил");
            }, 10000);

            AuthToken.getToken().then(result => {
                const getUrl = `https://eu.api.blizzard.com/data/wow/connected-realm/${realmID}/auctions/${auctionID}?namespace=dynamic-classic-eu&locale=en_US&access_token=${result}`;
                fetch(getUrl).then(
                    data => {
                        data.json().then(
                            parsedData => {
                                resolve(parsedData)
                                clearTimeout(timeoutId);
                            },
                            errJson => {
                                reject(`Err in parse ${errJson}`);
                                clearTimeout(timeoutId);
                            }
                        )
                    },
                    error => {
                        reject(`Err in getProducts: ${error}`);
                        clearTimeout(timeoutId);
                    }
                )
            });
        })
    }
}

export { endPointApi }