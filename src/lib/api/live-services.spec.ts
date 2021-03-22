import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import {
    getSeasons,
    getTOTDs,
    getClubCampaigns,
    getClubCampaignById,
    getMyGroupRecords,
    getMyPositionGroup,
    getTopPlayersGroup,
    getTopPlayersMap,
    getTopGroupPlayersMap,
    getSurroundingPlayersMap,
    getClubRooms,
    getClubRoomById,
    getArcadeRooms,
    getClubSkins,
    getClubBucketById,
    getClubs,
    getClubById,
    getClubCompetitions,
    getClubActivitiesById,
    getClubMembers,
    getPlayerRankings,
    getLeaderboardsAroundScore,
} from './live-services'

import credentials from '../../config/test.json'

const test = anyTest as TestInterface<{
    account: { lv2liveAccessToken: string; accountId: string }
}>

test.before(async t => {
    const { accountId, lv2liveAccessToken } = (credentials as unknown) as {
        lv2liveAccessToken: null | string
        accountId: null | string
    }
    if (accountId && lv2liveAccessToken)
        t.context.account = { lv2liveAccessToken, accountId }
})

test('Get all seasons', async t => {
    try {
        const response = await getSeasons(t.context.account.lv2liveAccessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get all TOTDs', async t => {
    try {
        const response = await getTOTDs(t.context.account.lv2liveAccessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('List club campaigns', async t => {
    try {
        const response = await getClubCampaigns(t.context.account.lv2liveAccessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get a specific club campaign', async t => {
    try {
        const response = await getClubCampaignById(
            t.context.account.lv2liveAccessToken,
            0,
            6151
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get my group records', async t => {
    try {
        const response = await getMyGroupRecords(
            t.context.account.lv2liveAccessToken,
            '3987d489-03ae-4645-9903-8f7679c3a418',
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get my position in a group', async t => {
    try {
        const response = await getMyPositionGroup(
            t.context.account.lv2liveAccessToken,
            '3987d489-03ae-4645-9903-8f7679c3a418',
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get top players from a group', async t => {
    try {
        const response = await getTopPlayersGroup(
            t.context.account.lv2liveAccessToken,
            '3987d489-03ae-4645-9903-8f7679c3a418',
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get top players from a group and a map', async t => {
    try {
        const response = await getTopGroupPlayersMap(
            t.context.account.lv2liveAccessToken,
            '3987d489-03ae-4645-9903-8f7679c3a418',
            'XJ_JEjWGoAexDWe8qfaOjEcq5l8',
        )

        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get leaderboards around a score', async t => {
    try {
        const response = await getLeaderboardsAroundScore(
            t.context.account.lv2liveAccessToken,
            '3987d489-03ae-4645-9903-8f7679c3a418',
            'XJ_JEjWGoAexDWe8qfaOjEcq5l8',
            19598,
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get top players from a map', async t => {
    try {
        const response = await getTopPlayersMap(
            t.context.account.lv2liveAccessToken,
            'XJ_JEjWGoAexDWe8qfaOjEcq5l8',
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get surrounding players from a map', async t => {
    try {
        const response = await getSurroundingPlayersMap(
            t.context.account.lv2liveAccessToken,
            'XJ_JEjWGoAexDWe8qfaOjEcq5l8',
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get club rooms', async t => {
    try {
        const response = await getClubRooms(t.context.account.lv2liveAccessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get a specific club room', async t => {
    try {
        const response = await getClubRoomById(
            t.context.account.lv2liveAccessToken,
            41,
            766
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get arcade rooms', async t => {
    try {
        const response = await getArcadeRooms(t.context.account.lv2liveAccessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('List club skins', async t => {
    try {
        const response = await getClubSkins(t.context.account.lv2liveAccessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get a specific club bucket', async t => {
    try {
        const response = await getClubBucketById(
            t.context.account.lv2liveAccessToken,
            383,
            100982
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get clubs', async t => {
    try {
        const response = await getClubs(t.context.account.lv2liveAccessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get a specific club', async t => {
    try {
        const response = await getClubById(
            t.context.account.lv2liveAccessToken,
            383
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('List club competitions', async t => {
    try {
        const response = await getClubCompetitions(t.context.account.lv2liveAccessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get activities from a specific club', async t => {
    try {
        const response = await getClubActivitiesById(
            t.context.account.lv2liveAccessToken,
            383
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get club members', async t => {
    try {
        const response = await getClubMembers(t.context.account.lv2liveAccessToken, 1)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get player rankings', async t => {
    try {
        const response = await getPlayerRankings(t.context.account.lv2liveAccessToken, [
            'a9cbdeff-daa3-4bc2-998c-b2838183fb97',
            '531a9861-c024-4063-9b29-14601350b899',
            '2ed0997d-62bc-4a53-8c09-ffb793382ea2',
        ])
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})
