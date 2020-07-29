import axios from 'axios'

import { urls, setHeaders } from '../main'

/**
 * Obtain all the seasons, including seasonsIds, groupIds, mapIds, etc.
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param string Access token
 * @param number Offset (default = 0)
 * @param number Length (default = 1)
 *
 */
export const getSeasons = async (
    accessToken: string,
    offset: number = 0,
    length: number = 1,
): Promise<IallSeasons> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/campaign/official?offset=' +
            offset +
            '&length=' +
            length,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Obtain all the track of the days, with their respective mapUid and seasonUid
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param string Access token
 * @param number Offset (default = 0)
 * @param number Length (default = 1)
 *
 */
export const getTOTDs = async (
    accessToken: string,
    offset: number = 0,
    length: number = 1,
): Promise<ITOTDs> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/campaign/month?offset=' +
            offset +
            '&length=' +
            length,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * List clubs campaigns (used when we are in Solo Screen and looking for Club Campaigns)
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param string Access token
 * @param number Offset (default = 0)
 * @param number Length (default = 75)
 * @param string Sort (default = 'popularity')
 * @param string Order (default = 'DESC')
 *
 */
export const getClubCampaigns = async (
    accessToken: string,
    offset: number = 0,
    length: number = 75,
    sort: string = 'popularity',
    order: string = 'DESC',
): Promise<IclubCampaigns> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/club/campaign?offset=' +
            offset +
            '&length=' +
            length +
            '&sort=' +
            sort +
            '&order=' +
            order,
        method: 'GET',
        headers,
    })

    return response['data']
}

interface IallSeasons {
    campaignList: campaign[]
    itemCount: number
}

type campaign = {
    id: number
    seasonUid: string
    name: string
    color: string
    useCase: number
    clubId: unknown
    leaderboardGroupUid: string
    publicationTimestamp: number
    publishedDate: number
    year: number
    week: number
    day: number
    monthYear: number
    month: number
    monthDay: number
    published: boolean
    playlist: playlist[]
    latestSeasons: latestSeason[]
    categories: category[]
    media: media
}

type playlist = {
    id: number
    position: number
    mapUid: string
}
type latestSeason = {
    uid: string
    name: string
    startTimestamp: number
    startDate: number
    endTimestamp: number
    endDate: number
    relativeStart: number
    relativeEnd: number
    campaignId: number
    active: boolean
}

type category = {
    position: number
    length: number
    name: string
}

type media = {
    buttonBackgroundUrl: string
    buttonForegroundUrl: string
    popUpBackgroundUrl: string
    popUpImageUrl: string
    liveButtonBackgroundUrl: string
}

interface ITOTDs {
    monthList: month[]
    itemCount: number
}

type month = {
    year: number
    month: number
    lastDay: number
    days: day[]
    media: media
}

type day = {
    campaignId: number
    mapUid: string
    day: number
    monthDay: number
    seasonUid: string
    relativeStart: number
    relativeEnd: number
    leaderboardGroup: unknown
}

interface IclubCampaigns {
    clubCampaignList: clubCampaign[]
    maxPage: number
    itemCount: number
}

type clubCampaign = {
    clubId: number
    clubIconUrl: string
    clubDecalUrl: string
    campaignId: number
    publicationTimestamp: number
    publishedOn: number
    creationTimestamp: number
    activityId: number
    mediaUrl: string
    name: string
    campaign: campaign
    popularityLevel: number
}
