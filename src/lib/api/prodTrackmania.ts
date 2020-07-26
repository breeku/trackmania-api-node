import fetch from 'node-fetch'

import { urls, setHeaders } from '../main'

/**
 * Get configuration of a client
 *
 * Requires no authentication
 *
 * @returns 3 Keys with id and timeout and settings
 *
 */
export const getClientConfig = async () => {
    const response = await fetch(urls.prodTrackmania + '/client/config', {
        method: 'GET',
    })
    const json = await response.json()

    return json
}

/**
 * Get all the IDs from all the zones for internal use and to be able to call endpoints using this IDs
 *
 * Requires level 2 authentication
 *
 * @param string Access token
 * @returns Big JSON with all the zones ids, names, links to flags, etc.
 *
 * Each zone has an identifier called zoneId and it can be a children of other zones, so there is also a parentId
 *
 * The root of all zones is World that has a null parentId
 *
 */
export const getZones = async (accessToken: string) => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await fetch(urls.prodTrackmania + '/zones', {
        method: 'GET',
        headers,
    })
    const json = await response.json()

    return json
}

/**
 * Get account zone
 *
 * Requires level 2 authentication
 *
 * @param string Access token
 * @param string Account ID
 * @returns ..
 *
 * Object which has your trackmania join date, accountId and zoneId
 *
 */
export const getAccountZone = async (accessToken: string, accountId: string) => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await fetch(
        urls.prodTrackmania + '/accounts/' + accountId + '/zone',
        {
            method: 'GET',
            headers,
        },
    )
    const json = await response.json()

    return json
}

/**
 * Get Trophies
 *
 * Requires level 2 authentication
 *
 * @param string Access token
 * @returns An object called Gain, with only another object called Solo, and then SoloMedal,
 *
 * and then for every other object inside this one (ClubOfficial, ClubUnofficial,
 * SoloAll, SoloBlack, SoloBlue, SoloGreen, SoloRed, SoloWhite, TrackOfTheDay)
 *
 * it returns if the person obtained all bronze, silver, gold and author medal of that group.
 *
 */
export const getTrophies = async (accessToken: string) => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await fetch(urls.prodTrackmania + '/trophies/settings', {
        method: 'GET',
        headers,
    })
    const json = await response.json()

    return json
}

/**
 * Get Trophy count
 *
 * Requires level 2 authentication
 *
 * @param string Access token
 * @returns An object called Gain, with only another object called Solo, and then SoloMedal,
 *
 * and then for every other object inside this one (ClubOfficial, ClubUnofficial,
 * SoloAll, SoloBlack, SoloBlue, SoloGreen, SoloRed, SoloWhite, TrackOfTheDay)
 *
 * it returns if the person obtained all bronze, silver, gold and author medal of that group.
 *
 */
export const getTrophyCount = async (accessToken: string, accountId: string) => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await fetch(
        urls.prodTrackmania + '/accounts/' + accountId + '/trophies/lastYearSummary',
        {
            method: 'GET',
            headers,
        },
    )
    const json = await response.json()

    return json
}

/**
 * Get info about a season, with all the details, included info about map ids
 *
 * Requires level 2 authentication
 *
 * @param string Access token
 * @param string The seasons uuid
 * @returns Object which has all seasons maps ids and timestamps
 *
 */
export const getSeason = async (accessToken: string, uuid: string) => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await fetch(urls.prodTrackmania + '/seasons/' + uuid, {
        method: 'GET',
        headers,
    })
    const json = await response.json()

    return json
}

/**
 * Get info about a server
 *
 * Requires level 2 authentication
 *
 * @param string Access token
 * @param string Id, account or server?
 * @returns ..
 *
 */
export const getServer = async (accessToken: string, id: string) => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await fetch(urls.prodTrackmania + '/servers/someId' + id, {
        method: 'GET',
        headers,
    })
    const json = await response.json()

    return json
}
