export interface ImapRecords {
    accountId: string
    filename: string
    gameMode: string
    gameModeCustomData: string
    mapId: string
    medal: number
    recordScore: recordScore
    removed: boolean
    scopeId: null | number | string
    scopeType: string
    timestamp: string
    url: string
}

type recordScore = {
    respawnCount: number
    score: number
    time: number
}

export interface ISeason {
    creationTimestamp: string
    creatorId: string
    endTimestamp: string
    gameMode: string
    gameModeCustomData: string
    isOfficial: boolean
    name: string
    recordScoreType: string
    seasonId: string
    seasonMapList: seasonMap[]
}

type seasonMap = {
    mapId: string
    timestamp: string
}

export interface ItrophyCount {
    accountId: string
    points: number
    t1Count: number
    t2Count: number
    t3Count: number
    t4Count: number
    t5Count: number
    t6Count: number
    t7Count: number
    t8Count: number
    t9Count: number
    timestamp: string
}

export interface Itrophies {
    gain: {
        Solo: {
            SoloMedal: {
                ClubOfficial: {
                    allBronze: allBronze
                    allSilver: allSilver
                    allGold: allGold
                    allAuthor: allAuthor
                }
                ClubUnofficial: {
                    allSilver: allSilver
                    allGold: allGold
                    allAuthor: allAuthor
                }
                SoloAll: {
                    allAuthor: allAuthorT5
                }
                SoloBlack: {
                    allBronze: allBronze
                    allSilver: allSilver
                    allGold: allGold
                    allAuthor: allAuthor
                }
                SoloBlue: {
                    allBronze: allBronze
                    allSilver: allSilver
                    allGold: allGold
                    allAuthor: allAuthor
                }
                SoloGreen: {
                    allBronze: allBronze
                    allSilver: allSilver
                    allGold: allGold
                    allAuthor: allAuthor
                }
                SoloRed: {
                    allBronze: allBronze
                    allSilver: allSilver
                    allGold: allGold
                    allAuthor: allAuthor
                }
                SoloWhite: {
                    allBronze: allBronze
                    allSilver: allSilver
                    allGold: allGold
                    allAuthor: allAuthor
                }
                TrackOfTheDay: {
                    allGold: allGold
                    allAuthor: allAuthor
                }
            }
        }
    }
}

type allBronze = { t1Count: number }

type allSilver = { t2Count: number }

type allGold = { t3Count: number }

type allAuthor = { t4Count: number }

type allAuthorT5 = { t5Count: number }

export interface IaccountZone {
    accountId: string
    timestamp: string
    zoneId: string
}

export interface Izones {
    icon: string
    name: string
    parentId: string
    zoneId: string
}

export interface IclientConfig {
    keys: clientKey[]
    settings: clientSettings
}

type clientKey = {
    id: number
    timeout: number
    key: string
}

type clientSettings = {
    KillSwitch_ProfileChunk: number
    KillSwitch_TitleConfig: number
    KillSwitch_TitleLadder: number
    KillSwitch_TitlePolicy: number
    KillSwitch_TitleProfileChunk: number
    KillSwitch_Xp: number
    AdsClearCacheOnExit: number
    AdsMandatory: number
    MapRecordResetTimestamp: number
    ClientIP: string
}
