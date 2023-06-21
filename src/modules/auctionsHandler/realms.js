class RealmList {
    constructor() {
        this.hordeRealms = {
            Auberdine: 4441,
            // Lakeshire: 4442,
            MirageRaceway: 4454,
            Razorfen: 4455,
            NethergradeKeep: 4456,
            Sulfuron: 4464,
            FLAMEGOR: 4474,
            //Venoxis: 4477,
            Mograine: 4701,
            // Amnenar: 4703,
            // Ashbringer: 4742,
            // Transcendence: 4745,
            // Giantstalker: 4811,
            Mandokir: 4813,
            //Gehenas: 4476,
            Golemagg: 4465,
        }
        this.allianceRelms = {
            //Everlook: 4440,
            Auberdine: 4441,
            Lakeshire: 4442,
            PyrewoodVillage: 4453,
            //MirageRaceway: 4454,
            NethergradeKeep: 4456,
            Sulfuron: 4464,
            FLAMEGOR: 4474,
            Firemaw: 4467,
            //Venoxis: 4477,
            Earthshaker: 4749,
            PyrewoodVillage: 4453,
        }
        this.allRealms = {
            Everlook: 4440,
            Auberdine: 4441,
            Lakeshire: 4442,
            //Chromie: 4452,
            PyrewoodVillage: 4453,
            MirageRaceway: 4454,
            Razorfen: 4455,
            NethergradeKeep: 4456,
            Sulfuron: 4464,
            //Golemagg: 4465,
            //Patchwerk: 4466,
            //Firemaw: 4467,
            FLAMEGOR: 4474,
            //Gehenas: 4476,
            Venoxis: 4477,
            //HydraxianWaterlords: 4678,
            Mograine: 4701,
            Amnenar: 4703,
            Ashbringer: 4742,
            Transcendence: 4745,
            Earthshaker: 4749,
            Giantstalker: 4811,
            Mandokir: 4813,
            //Thekal: 4815,
            //Jindo: 4816
        }
    }

    getRealmsList(auctionHouseId) {
        switch (auctionHouseId) {
            case 2:
                {
                    return this.allianceRelms;
                }
            case 6:
                {
                    return this.hordeRealms;
                }
            default:
                {
                    return this.allRealms;
                }
        }
    }
}
export { RealmList }