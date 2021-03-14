import axios from 'axios'

import { urls, setHeaders } from '../main'

/**
 * Obtain all the seasons, including seasonsIds, groupIds, mapIds, etc.
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {number} offset - Offset (default = 0)
 * @param {number} length - Length (default = 1)
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
 * @param {string} accessToken - Access token
 * @param {number} offset - Offset (default = 0)
 * @param {number} length - Length (default = 1)
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
 * @param {string} accessToken - Access token
 * @param {number} offset - Offset (default = 0)
 * @param {number} length - Length (default = 75)
 * @param {string} sort - Sort (default = 'popularity')
 * @param {string} order - Order (default = 'DESC')
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
/**
 * Returns info about the campaign based on both the campaignId and the clubId (used in Clubs)
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {number} clubId - Club ID
 * @param {number} campaignId - Campaign ID
 *
 */
 export const getClubCampaignById = async (
    accessToken: string,
    clubId: number,
    campaignId: number,
): Promise<IclubCampaign> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/club/' +
            clubId +
            '/campaign/' +
            campaignId,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Returns your record in everymap of that group, and your position in each zone
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string} groupUid - Group uid
 *
 */
export const getMyGroupRecords = async (
    accessToken: string,
    groupUid: string,
): Promise<IgroupRecords> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.liveServices + '/api/token/leaderboard/group/' + groupUid + '/map',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get your position in a group (ex: overall ranking on Summer Season 2020 in world, country, etc.)
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string} groupUid - Group uid
 *
 */
export const getMyPositionGroup = async (
    accessToken: string,
    groupUid: string,
): Promise<IpositionGroup> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.liveServices + '/api/token/leaderboard/group/' + groupUid,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get the top leaders on a group (ex: top rankings on Summer Season 2020 in world, country, etc.)
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string} groupUid - Group uid
 *
 */
export const getTopPlayersGroup = async (
    accessToken: string,
    groupUid: string,
): Promise<IgroupTopPlayers> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.liveServices + '/api/token/leaderboard/group/' + groupUid + '/top',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Obtain the top players on a specific map from a specific group
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string} groupUid - Group uid
 * @param {string} mapUid - Map uid
 *
 */
export const getTopGroupPlayersMap = async (
    accessToken: string,
    groupUid: string,
    mapUid: string,
): Promise<ImapTopPlayer> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/leaderboard/group/' +
            groupUid +
            '/map/' +
            mapUid +
            '/top',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Obtain the leaderboards around a score
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string} groupUid - Group uid
 * @param {string} mapUid - Map uid
 * @param {number} score - Score
 *
 */
export const getLeaderboardsAroundScore = async (
    accessToken: string,
    groupUid: string,
    mapUid: string,
    score: number,
): Promise<ImapTopPlayer> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/leaderboard/group/' +
            groupUid +
            '/map/' +
            mapUid +
            '/surround/0/50?score=' +
            score,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get the top players of a map, with no restriction of a group like the others endpoints
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string} mapUid - Map uid
 *
 */
export const getTopPlayersMap = async (
    accessToken: string,
    mapUid: string,
): Promise<ImapTopPlayer> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/leaderboard/group/Personal_Best/map/' +
            mapUid +
            '/top',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Get the surrounding players around your score on a map, with no restriction of a group like the others endpoints (this is used in that little leaderboard in game)
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string} mapUid - Map uid
 *
 */
export const getSurroundingPlayersMap = async (
    accessToken: string,
    mapUid: string,
): Promise<ImapTopPlayer> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/leaderboard/group/Personal_Best/map/' +
            mapUid +
            '/surround/1/1',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * This is used to obtain the clubs in the Live section of the game
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {number} offset - Offset (default = 0)
 * @param {number} length - Length (default = 75)
 * @param {string} sort - Sort (default = 'popularity')
 * @param {string} order - Order (default = 'DESC')
 *
 */
export const getClubRooms = async (
    accessToken: string,
    offset: number = 0,
    length: number = 75,
    sort: string = 'popularity',
    order: string = 'DESC',
): Promise<IclubRooms> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/club/room?offset=' +
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

/**
 * Returns info about the room based on both the roomId and the clubId (used in Clubs)
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {number} clubId - Club ID
 * @param {number} roomId - Room ID
 *
 */
 export const getClubRoomById = async (
    accessToken: string,
    clubId: number,
    roomId: number,
): Promise<IclubRoom> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/club/' +
            clubId +
            '/room/' +
            roomId,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Obtain the information about the current arcade room and the next room
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 *
 */
export const getArcadeRooms = async (accessToken: string): Promise<IarcadeRooms> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.liveServices + '/api/token/channel/officialhard',
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * List all the clubs in the club section
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {number} offset - Offset (default = 0)
 * @param {number} length Length (default = 90)
 *
 */
export const getClubs = async (
    accessToken: string,
    offset: number = 0,
    length: number = 90,
): Promise<Iclubs> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/club/mine?offset=' +
            offset +
            '&length=' +
            length,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Obtain all the information about the members of a club
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {number} clubId - Clubid
 * @param {number} offset - Offset (default = 0)
 * @param {number} length - Length (default = 27)
 *
 */
export const getClubMembers = async (
    accessToken: string,
    clubId: number,
    offset: number = 0,
    length: number = 27,
): Promise<IclubMembers> => {
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url:
            urls.liveServices +
            '/api/token/club/' +
            clubId +
            '/member?offset=' +
            offset +
            '&length=' +
            length,
        method: 'GET',
        headers,
    })

    return response['data']
}

/**
 * Obtain player rankings
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string[]} accountIds - Account ids
 *
 */
export const getPlayerRankings = async (accessToken: string, accountIds: string[]) => {
    const obj = accountIds.map(id => {
        return { accountId: id }
    })
    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.liveServices + '/api/token/leaderboard/trophy/player',
        method: 'POST',
        data: {
            listPlayer: obj,
        },
        headers,
    })

    return response['data']
}

export interface IallSeasons {
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

export interface ITOTDs {
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

export interface IclubCampaigns {
    clubCampaignList: clubCampaign[]
    maxPage: number
    itemCount: number
}

export interface IclubCampaign {
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

export interface IgroupRecords {
    [key: string]: record
}

type record = {
    groupUid: string
    mapUid: string
    score: number
    zones: zone[]
}

type zone = {
    zoneId: string
    zoneName: string
    ranking: ranking
}

type ranking = {
    position: number
    length: number
}

export interface IpositionGroup {
    groupUid: string
    sp: number
    zones: zone[]
}

export interface IgroupTopPlayers {
    groupUid: string
    tops: tops[]
}

type tops = {
    zoneId: string
    zoneName: string
    top: top[]
}

type top = {
    accountId: string
    zoneId: string
    zoneName: string
    position: number
    sp?: number
    score?: number
}

export interface ImapTopPlayer {
    groupUid: string
    mapUid: string
    tops: tops[]
}

export interface IclubRooms {
    clubRoomList: clubRoom[]
    maxPage: number
    itemCount: number
}

export interface IclubRoom {
    id: number
    clubId: number
    nadeo: boolean
    roomId: number
    campaignId: unknown
    playerServerLogin: unknown
    activityId: number
    mediaUrl: string
    name: string
    room: room
    popularityLevel: number
    creationTimestamp: number
}

type clubRoom = {
    id: number
    clubId: number
    nadeo: boolean
    roomId: number
    campaignId: unknown
    playerServerLogin: unknown
    activityId: number
    mediaUrl: string
    name: string
    room: room
    popularityLevel: number
    creationTimestamp: number
}

type room = {
    id: number
    name: string
    region: unknown
    serverAccountId: string
    maxPlayers: number
    playerCount: number
    maps: string[]
    script: string
    scriptSettings: scriptSettings
}

type scriptSettings = {
    S_ForceLapsNb: { key: string; value: string; type: string }
    S_DecoImageUrl_Screen16x9: {
        key: string
        value: string
        type: string
    }
}

export interface IarcadeRooms {
    uid: string
    name: string
    playerCount: number
    currentTimeSlot: timeSlot
    nextTimeSlot: timeSlot
}

type timeSlot = {
    startTimestamp: number
    endTimestamp: number
    name: string
    maps: string[]
    currentMap: string
    relativeStart: number
    relativeEnd: number
    mediaUrl: string
}

export interface Iclubs {
    clubList: unknown[]
    maxPage: number
    clubCount: number
}

export interface IclubMembers {
    clubMemberList: clubMember[]
    maxPage: number
    itemCount: number
}

type clubMember = {
    accountId: string
    role: string
    creationTimestamp: number
    creationDate: number
    vip: boolean
}

export interface IleaderboardsAroundScore {
    groupUid: string
    mapUid: string
    levels: level[]
}

type level = {
    zoneId: string
    zoneName: string
    level: top[]
}
