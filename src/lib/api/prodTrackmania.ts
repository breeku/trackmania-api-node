import axios from 'axios'

import { urls, setHeaders } from '../main'
import {
    ImapRecords,
    ISeason,
    ItrophyCount,
    Itrophies,
    IaccountZone,
    Izones,
    IclientConfig,
} from './prodTrackmania.d'

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
