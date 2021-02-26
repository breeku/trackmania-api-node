"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerRankings = exports.getClubMembers = exports.getClubs = exports.getArcadeRooms = exports.getClubRooms = exports.getSurroundingPlayersMap = exports.getTopPlayersMap = exports.getLeaderboardsAroundScore = exports.getTopGroupPlayersMap = exports.getTopPlayersGroup = exports.getMyPositionGroup = exports.getMyGroupRecords = exports.getClubCampaigns = exports.getTOTDs = exports.getSeasons = void 0;
const axios_1 = __importDefault(require("axios"));
const main_1 = require("../main");
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
exports.getSeasons = async (accessToken, offset = 0, length = 1) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/campaign/official?offset=' +
            offset +
            '&length=' +
            length,
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getTOTDs = async (accessToken, offset = 0, length = 1) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/campaign/month?offset=' +
            offset +
            '&length=' +
            length,
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getClubCampaigns = async (accessToken, offset = 0, length = 75, sort = 'popularity', order = 'DESC') => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
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
    });
    return response['data'];
};
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
exports.getClubCampaignById = async (accessToken, clubId, campaignId) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/club/' +
            clubId +
            '/campaign/' +
            campaignId,
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getMyGroupRecords = async (accessToken, groupUid) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices + '/api/token/leaderboard/group/' + groupUid + '/map',
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getMyPositionGroup = async (accessToken, groupUid) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices + '/api/token/leaderboard/group/' + groupUid,
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getTopPlayersGroup = async (accessToken, groupUid) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices + '/api/token/leaderboard/group/' + groupUid + '/top',
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getTopGroupPlayersMap = async (accessToken, groupUid, mapUid) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/leaderboard/group/' +
            groupUid +
            '/map/' +
            mapUid +
            '/top',
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getLeaderboardsAroundScore = async (accessToken, groupUid, mapUid, score) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/leaderboard/group/' +
            groupUid +
            '/map/' +
            mapUid +
            '/surround/0/50?score=' +
            score,
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getTopPlayersMap = async (accessToken, mapUid) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/leaderboard/group/Personal_Best/map/' +
            mapUid +
            '/top',
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getSurroundingPlayersMap = async (accessToken, mapUid) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/leaderboard/group/Personal_Best/map/' +
            mapUid +
            '/surround/1/1',
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getClubRooms = async (accessToken, offset = 0, length = 75, sort = 'popularity', order = 'DESC') => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
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
    });
    return response['data'];
};
/**
 * Obtain the information about the current arcade room and the next room
 *
 * ## **Requires level 2 authentication**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 *
 */
exports.getArcadeRooms = async (accessToken) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices + '/api/token/channel/officialhard',
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getClubs = async (accessToken, offset = 0, length = 90) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/club/mine?offset=' +
            offset +
            '&length=' +
            length,
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getClubMembers = async (accessToken, clubId, offset = 0, length = 27) => {
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices +
            '/api/token/club/' +
            clubId +
            '/member?offset=' +
            offset +
            '&length=' +
            length,
        method: 'GET',
        headers,
    });
    return response['data'];
};
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
exports.getPlayerRankings = async (accessToken, accountIds) => {
    const obj = accountIds.map(id => {
        return { accountId: id };
    });
    const headers = main_1.setHeaders(accessToken, 'nadeo');
    const response = await axios_1.default({
        url: main_1.urls.liveServices + '/api/token/leaderboard/trophy/player',
        method: 'POST',
        data: {
            listPlayer: obj,
        },
        headers,
    });
    return response['data'];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGl2ZS1zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvYXBpL2xpdmUtc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXlCO0FBRXpCLGtDQUEwQztBQUUxQzs7Ozs7Ozs7OztHQVVHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsS0FBSyxFQUMzQixXQUFtQixFQUNuQixTQUFpQixDQUFDLEVBQ2xCLFNBQWlCLENBQUMsRUFDRSxFQUFFO0lBQ3RCLE1BQU0sT0FBTyxHQUFHLGlCQUFVLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ2hELE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDO1FBQ3pCLEdBQUcsRUFDQyxXQUFJLENBQUMsWUFBWTtZQUNqQixzQ0FBc0M7WUFDdEMsTUFBTTtZQUNOLFVBQVU7WUFDVixNQUFNO1FBQ1YsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPO0tBQ1YsQ0FBQyxDQUFBO0lBRUYsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDM0IsQ0FBQyxDQUFBO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNVLFFBQUEsUUFBUSxHQUFHLEtBQUssRUFDekIsV0FBbUIsRUFDbkIsU0FBaUIsQ0FBQyxFQUNsQixTQUFpQixDQUFDLEVBQ0gsRUFBRTtJQUNqQixNQUFNLE9BQU8sR0FBRyxpQkFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUNoRCxNQUFNLFFBQVEsR0FBRyxNQUFNLGVBQUssQ0FBQztRQUN6QixHQUFHLEVBQ0MsV0FBSSxDQUFDLFlBQVk7WUFDakIsbUNBQW1DO1lBQ25DLE1BQU07WUFDTixVQUFVO1lBQ1YsTUFBTTtRQUNWLE1BQU0sRUFBRSxLQUFLO1FBQ2IsT0FBTztLQUNWLENBQUMsQ0FBQTtJQUVGLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzNCLENBQUMsQ0FBQTtBQUVEOzs7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