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

    return response['data'] as IclientConfig
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
export const getZones = async (accessToken: string): Promise<ReadonlyArray<Izones>> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/zones',
        method: 'GET',
        headers,
    })

    return response['data'] as ReadonlyArray<Izones>
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

    return response['data'] as IaccountZone
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

    return response['data'] as Itrophies
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

    return response['data'] as ItrophyCount
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
export const getSeason = async (accessToken: string, uuid: string): Promise<ISeason> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/seasons/' + uuid,
        method: 'GET',
        headers,
    })

    return response['data'] as ISeason
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
): Promise<ReadonlyArray<ImapRecords>> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.prodTrackmania + '/mapRecords/?accountIdList=' + accountId,
        method: 'GET',
        headers,
    })

    return response['data'] as ReadonlyArray<ImapRecords>
}

export interface ImapRecords {
    readonly accountId: string
    readonly filename: string
    readonly gameMode: string
    readonly gameModeCustomData: string
    readonly mapId: string
    readonly medal: number
    readonly recordScore: recordScore
    readonly removed: boolean
    readonly scopeId: null | number | string
    readonly scopeType: string
    readonly timestamp: string
    readonly url: string
}

type recordScore = {
    readonly respawnCount: number
    readonly score: number
    readonly time: number
}

export interface ISeason {
    readonly creationTimestamp: string
    readonly creatorId: string
    readonly endTimestamp: string
    readonly gameMode: string
    readonly gameModeCustomData: string
    readonly isOfficial: boolean
    readonly name: string
    readonly recordScoreType: string
    readonly seasonId: string
    readonly seasonMapList: readonly seasonMap[]
}

type seasonMap = {
    readonly mapId: string
    readonly timestamp: string
}

export interface ItrophyCount {
    readonly accountId: string
    readonly points: number
    readonly t1Count: number
    readonly t2Count: number
    readonly t3Count: number
    readonly t4Count: number
    readonly t5Count: number
    readonly t6Count: number
    readonly t7Count: number
    readonly t8Count: number
    readonly t9Count: number
    readonly timestamp: string
}

export interface Itrophies {
    readonly gain: {
        readonly Solo: {
            readonly SoloMedal: {
                readonly ClubOfficial: {
                    readonly allBronze: allBronze
                    readonly allSilver: allSilver
                    readonly allGold: allGold
                    readonly allAuthor: allAuthor
                }
                readonly ClubUnofficial: {
                    readonly allSilver: allSilver
                    readonly allGold: allGold
                    readonly allAuthor: allAuthor
                }
                readonly SoloAll: {
                    readonly allAuthor: allAuthorT5
                }
                readonly SoloBlack: {
                    readonly allBronze: allBronze
                    readonly allSilver: allSilver
                    readonly allGold: allGold
                    readonly allAuthor: allAuthor
                }
                readonly SoloBlue: {
                    readonly allBronze: allBronze
                    readonly allSilver: allSilver
                    readonly allGold: allGold
                    readonly allAuthor: allAuthor
                }
                readonly SoloGreen: {
                    readonly allBronze: allBronze
                    readonly allSilver: allSilver
                    readonly allGold: allGold
                    readonly allAuthor: allAuthor
                }
                readonly SoloRed: {
                    readonly allBronze: allBronze
                    readonly allSilver: allSilver
                    readonly allGold: allGold
                    readonly allAuthor: allAuthor
                }
                readonly SoloWhite: {
                    readonly allBronze: allBronze
                    readonly allSilver: allSilver
                    readonly allGold: allGold
                    readonly allAuthor: allAuthor
                }
                readonly TrackOfTheDay: {
                    readonly allGold: allGold
                    readonly allAuthor: allAuthor
                }
            }
        }
    }
}

type allBronze = { readonly t1Count: number }

type allSilver = { readonly t2Count: number }

type allGold = { readonly t3Count: number }

type allAuthor = { readonly t4Count: number }

type allAuthorT5 = { readonly t5Count: number }

export interface IaccountZone {
    readonly accountId: string
    readonly timestamp: string
    readonly zoneId: string
}

export interface Izones {
    readonly icon: string
    readonly name: string
    readonly parentId: string
    readonly zoneId: string
}

export interface IclientConfig {
    readonly keys: readonly clientKey[]
    readonly settings: clientSettings
}

type clientKey = {
    readonly id: number
    readonly timeout: number
    readonly key: string
}

type clientSettings = {
    readonly KillSwitch_ProfileChunk: number
    readonly KillSwitch_TitleConfig: number
    readonly KillSwitch_TitleLadder: number
    readonly KillSwitch_TitlePolicy: number
    readonly KillSwitch_TitleProfileChunk: number
    readonly KillSwitch_Xp: number
    readonly AdsClearCacheOnExit: number
    readonly AdsMandatory: number
    readonly MapRecordResetTimestamp: number
    readonly ClientIP: string
}
