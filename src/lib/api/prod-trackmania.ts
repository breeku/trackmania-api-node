import axios from 'axios'

import { urls, setHeaders } from '../main'

/**
 * Get configuration of a client
 *
 * ## **Requires no authentication**
 *
 * @category Level 0
 *
 */
export const getClientConfig = async (): Promise<IclientConfig> => {
    const response = await axios({
        url: urls.prodTrackmania + '/client/config',
        method: 'GET',
    })

    return response['data']
}

/**
 * Get all the IDs from all the zones for internal use and to be able to call endpoints using this IDs
 *
 * ## **Requires level 1 authentication**
 *
 * @category level 1
 * @param string Access token
 *
 */
export const getZones = async (accessToken: string): Promise<Izones[]> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/zones',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get account zone
 *
 * ## **Requires level 1 authentication**
 *
 * @category level 1
 * @param string Access token
 * @param string Account ID
 *
 */
export const getAccountZone = async (
    accessToken: string,
    accountId: string,
): Promise<IaccountZone> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/accounts/' + accountId + '/zone',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get Trophies
 *
 * ## **Requires level 1 authentication**
 *
 * @category level 1
 * @param string Access token
 *
 */
export const getTrophies = async (accessToken: string): Promise<Itrophies> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/trophies/settings',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get Trophy count
 *
 * ## **Requires level 1 authentication**
 *
 * @category level 1
 * @param string Access token
 *
 */
export const getTrophyCount = async (
    accessToken: string,
    accountId: string,
): Promise<ItrophyCount> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/accounts/' + accountId + '/trophies/lastYearSummary',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get info about a season, with all the details, included info about map ids
 *
 * ## **Requires level 1 authentication**
 *
 * @category level 1
 * @param string Access token
 * @param string The seasons uuid
 *
 */
export const getSeason = async (accessToken: string, uuid: string): Promise<Iseason> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/seasons/' + uuid,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get info about a server
 *
 * ## **Requires level 1 authentication**
 *
 * @category level 1
 * @param string Access token
 * @param string Id, account or server?
 * @returns unknown
 *
 */
export const getServer = async (accessToken: string, id: string) => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/servers/' + id,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get map records for a account
 *
 * ## **Requires level 1 authentication**
 *
 * @category level 1
 * @param string Access token
 * @param string accountId
 */
export const getMapRecords = async (
    accessToken: string,
    accountId: string,
): Promise<ImapRecords[]> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/mapRecords/?accountIdList=' + accountId,
        method: 'GET',
        headers,
    })

    return response['data']
}

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

export interface Iseason {
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
                    allAuthor: allAuthorTiers // A guess
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
type allAuthorTiers = {
    t5Count: number
    t6Count?: number
    t7Count?: number
    t8Count?: number
    t9Count?: number
}

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
