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
export declare const getSeasons: (accessToken: string, offset?: number, length?: number) => Promise<IallSeasons>;
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
export declare const getTOTDs: (accessToken: string, offset?: number, length?: number) => Promise<ITOTDs>;
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
export declare const getClubCampaigns: (accessToken: string, offset?: number, length?: number, sort?: string, order?: string) => Promise<IclubCampaigns>;
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
export declare const getClubCampaignById: (accessToken: string, clubId: number, campaignId: number) => Promise<IclubCampaign>;
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
export declare const getMyGroupRecords: (accessToken: string, groupUid: string) => Promise<IgroupRecords>;
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
export declare const getMyPositionGroup: (accessToken: string, groupUid: string) => Promise<IpositionGroup>;
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
export declare const getTopPlayersGroup: (accessToken: string, groupUid: string) => Promise<IgroupTopPlayers>;
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
export declare const getTopGroupPlayersMap: (accessToken: string, groupUid: string, mapUid: string) => Promise<ImapTopPlayer>;
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
export declare const getLeaderboardsAroundScore: (accessToken: string, groupUid: string, mapUid: string, score: number) => Promise<ImapTopPlayer>;
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
export declare const getTopPlayersMap: (accessToken: string, mapUid: string) => Promise<ImapTopPlayer>;
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
export declare const getSurroundingPlayersMap: (accessToken: string, mapUid: string) => Promise<ImapTopPlayer>;
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
export declare const getClubRooms: (accessToken: string, offset?: number, length?: number, sort?: string, order?: string) => Promise<IclubRooms>;
/**
 * Obtain the information about the current arcade room and the next room
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 *
 */
export declare const getArcadeRooms: (accessToken: string) => Promise<IarcadeRooms>;
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
export declare const getClubs: (accessToken: string, offset?: number, length?: number) => Promise<Iclubs>;
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
export declare const getClubMembers: (accessToken: string, clubId: number, offset?: number, length?: number) => Promise<IclubMembers>;
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
export declare const getPlayerRankings: (accessToken: string, accountIds: string[]) => Promise<any>;
export interface IallSeasons {
    campaignList: campaign[];
    itemCount: number;
}
declare type campaign = {
    id: number;
    seasonUid: string;
    name: string;
    color: string;
    useCase: number;
    clubId: unknown;
    leaderboardGroupUid: string;
    publicationTimestamp: number;
    publishedDate: number;
    year: number;
    week: number;
    day: number;
    monthYear: number;
    month: number;
    monthDay: number;
    published: boolean;
    playlist: playlist[];
    latestSeasons: latestSeason[];
    categories: category[];
    media: media;
};
declare type playlist = {
    id: number;
    position: number;
    mapUid: string;
};
declare type latestSeason = {
    uid: string;
    name: string;
    startTimestamp: number;
    startDate: number;
    endTimestamp: number;
    endDate: number;
    relativeStart: number;
    relativeEnd: number;
    campaignId: number;
    active: boolean;
};
declare type category = {
    position: number;
    length: number;
    name: string;
};
declare type media = {
    buttonBackgroundUrl: string;
    buttonForegroundUrl: string;
    popUpBackgroundUrl: string;
    popUpImageUrl: string;
    liveButtonBackgroundUrl: string;
};
export interface ITOTDs {
    monthList: month[];
    itemCount: number;
}
declare type month = {
    year: number;
    month: number;
    lastDay: number;
    days: day[];
    media: media;
};
declare type day = {
    campaignId: number;
    mapUid: string;
    day: number;
    monthDay: number;
    seasonUid: string;
    relativeStart: number;
    relativeEnd: number;
    leaderboardGroup: unknown;
};
export interface IclubCampaigns {
    clubCampaignList: clubCampaign[];
    maxPage: number;
    itemCount: number;
}
declare type clubCampaign = {
    clubId: number;
    clubIconUrl: string;
    clubDecalUrl: string;
    campaignId: number;
    publicationTimestamp: number;
    publishedOn: number;
    creationTimestamp: number;
    activityId: number;
    mediaUrl: string;
    name: string;
    campaign: campaign;
    popularityLevel: number;
};
export interface IclubCampaign {
    clubId: number;
    clubIconUrl: string;
    clubDecalUrl: string;
    campaignId: number;
    publicationTimestamp: number;
    publishedOn: number;
    creationTimestamp: number;
    activityId: number;
    mediaUrl: string;
    name: string;
    campaign: campaign;
    popularityLevel: number;
}
export interface IgroupRecords {
    [key: string]: record;
}
declare type record = {
    groupUid: string;
    mapUid: string;
    score: number;
    zones: zone[];
};
declare type zone = {
    zoneId: string;
    zoneName: string;
    ranking: ranking;
};
declare type ranking = {
    position: number;
    length: number;
};
export interface IpositionGroup {
    groupUid: string;
    sp: number;
    zones: zone[];
}
export interface IgroupTopPlayers {
    groupUid: string;
    tops: tops[];
}
declare type tops = {
    zoneId: string;
    zoneName: string;
    top: top[];
};
declare type top = {
    accountId: string;
    zoneId: string;
    zoneName: string;
    position: number;
    sp?: number;
    score?: number;
};
export interface ImapTopPlayer {
    groupUid: string;
    mapUid: string;
    tops: tops[];
}
export interface IclubRooms {
    clubRoomList: clubRoom[];
    maxPage: number;
    itemCount: number;
}
declare type clubRoom = {
    id: number;
    clubId: number;
    nadeo: boolean;
    roomId: number;
    campaignId: unknown;
    playerServerLogin: unknown;
    activityId: number;
    mediaUrl: string;
    name: string;
    room: room;
    popularityLevel: number;
    creationTimestamp: number;
};
declare type room = {
    id: number;
    name: string;
    region: unknown;
    serverAccountId: string;
    maxPlayers: number;
    playerCount: number;
    maps: string[];
    script: string;
    scriptSettings: scriptSettings;
};
declare type scriptSettings = {
    S_ForceLapsNb: {
        key: string;
        value: string;
        type: string;
    };
    S_DecoImageUrl_Screen16x9: {
        key: string;
        value: string;
        type: string;
    };
};
export interface IarcadeRooms {
    uid: string;
    name: string;
    playerCount: number;
    currentTimeSlot: timeSlot;
    nextTimeSlot: timeSlot;
}
declare type timeSlot = {
    startTimestamp: number;
    endTimestamp: number;
    name: string;
    maps: string[];
    currentMap: string;
    relativeStart: number;
    relativeEnd: number;
    mediaUrl: string;
};
export interface Iclubs {
    clubList: unknown[];
    maxPage: number;
    clubCount: number;
}
export interface IclubMembers {
    clubMemberList: clubMember[];
    maxPage: number;
    itemCount: number;
}
declare type clubMember = {
    accountId: string;
    role: string;
    creationTimestamp: number;
    creationDate: number;
    vip: boolean;
};
export interface IleaderboardsAroundScore {
    groupUid: string;
    mapUid: string;
    levels: level[];
}
declare type level = {
    zoneId: string;
    zoneName: string;
    level: top[];
};
export {};
