import axios from 'axios'

import { urls, setHeaders } from '../main'

/**
 * Obtain all the seasons, including seasonsIds, groupIds, mapIds, etc.
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param string Access token
 *
 */
export const getSeasons = async (
    accessToken: string,
    offset: number,
    length: number,
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

    return response['data'] as IallSeasons
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
    clubId: null | string // might also be a number...
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
