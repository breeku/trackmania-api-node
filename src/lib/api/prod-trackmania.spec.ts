import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import {
    getClientConfig,
    getZones,
    getAccountZone,
    getTrophies,
    getTrophyCount,
    getTrophyHistory,
    getSeason,
    getServer,
    getMapRecords,
    getProfiles,
    getMaps,
} from './prod-trackmania'

import credentials from '../../config/test.json'

const test = anyTest as TestInterface<{
    account: { lv1accessToken: string; accountId: string }
}>

test.before(async t => {
    const { accountId, lv1accessToken } = (credentials as unknown) as {
        lv1accessToken: null | string
        accountId: null | string
    }

    if (lv1accessToken && accountId) t.context.account = { lv1accessToken, accountId }
})

test('Get client config', async t => {
    try {
        const response = await getClientConfig()
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get zones', async t => {
    try {
        const response = await getZones(t.context.account.lv1accessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get account zone', async t => {
    try {
        const response = await getAccountZone(
            t.context.account.lv1accessToken,
            t.context.account.accountId,
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get trophies', async t => {
    try {
        const response = await getTrophies(t.context.account.lv1accessToken)
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get trophy count', async t => {
    try {
        const response = await getTrophyCount(
            t.context.account.lv1accessToken,
            t.context.account.accountId,
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get trophy history', async t => {
    try {
        const response = await getTrophyHistory(
            t.context.account.lv1accessToken,
            '7dc8d3e3-ccf0-4eb7-bbaa-e8752116ac33',
            1,
            0,
            35,
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get season by ID', async t => {
    try {
        const response = await getSeason(
            t.context.account.lv1accessToken,
            '3987d489-03ae-4645-9903-8f7679c3a418',
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test.skip('Get server by UID', async t => {
    // TODO: get servers then get server by uid
    try {
        const response = await getServer(
            t.context.account.lv1accessToken,
            'bc251924-d267-4702-b526-9ed4b950d729',
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get account map records', async t => {
    try {
        const response = await getMapRecords(
            t.context.account.lv1accessToken,
            '7dc8d3e3-ccf0-4eb7-bbaa-e8752116ac33',
            '27cb67e3-f8bc-4971-ab22-f74055ca6b37',
        )
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get profile ids', async t => {
    try {
        const response = await getProfiles(t.context.account.lv1accessToken, [
            'a9cbdeff-daa3-4bc2-998c-b2838183fb97',
            '531a9861-c024-4063-9b29-14601350b899',
            '2ed0997d-62bc-4a53-8c09-ffb793382ea2',
            '58278714-fbe5-4bb1-960c-3ad278bb7ecc',
            'aa4e375f-d23e-4915-8d53-8b3307e06764',
            'b67bedd1-7d2f-4861-86c4-dae8c1583ace',
            'f6a1ceb1-1928-4043-9df8-2c5465e65eaa',
            '95abee92-1174-45e3-8967-bc46d2e6afe3',
        ])
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})

test('Get maps', async t => {
    try {
        const response = await getMaps(t.context.account.lv1accessToken, [
            'rHonuj4sZKXkq3dbtafrs25ENPg',
            '8bTOMNceJrsZdDD2UvJhGsRwnQg',
        ])
        t.assert(response)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})
