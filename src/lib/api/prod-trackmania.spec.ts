import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import { refreshTokens } from './auth'
import {
    getClientConfig,
    getZones,
    getAccountZone,
    getTrophies,
    getTrophyCount,
    getSeason,
    getServer,
    getMapRecords,
} from './prod-trackmania'

const test = anyTest as TestInterface<{
    account: { accessToken: string; refreshToken: string; accountId: string }
}>

test.before(async t => {
    const accountId = process.env.TM_ID
    const { accessToken, refreshToken } = await refreshTokens(
        process.env.LV1_REFRESHTOKEN,
    ) // probably should try if the accesstoken is expired, then refresh and inform the dev

    t.context.account = { accessToken, refreshToken, accountId }
})

test('Get client config', async t => {
    const response = await getClientConfig()
    t.assert(response)
})

test('Get zones', async t => {
    const response = await getZones(t.context.account.accessToken)
    t.assert(response)
})

test('Get account zone', async t => {
    const response = await getAccountZone(
        t.context.account.accessToken,
        t.context.account.accountId,
    )
    t.assert(response)
})

test('Get trophies', async t => {
    const response = await getTrophies(t.context.account.accessToken)
    t.assert(response)
})

test('Get trophy count', async t => {
    const response = await getTrophyCount(
        t.context.account.accessToken,
        t.context.account.accountId,
    )
    t.assert(response)
})

test('Get season by ID', async t => {
    const response = await getSeason(
        t.context.account.accessToken,
        '3987d489-03ae-4645-9903-8f7679c3a418',
    )
    t.assert(response)
})

test.skip('Get server by ID', async t => {
    const response = await getServer(t.context.account.accessToken, '123') // account ID?
    t.assert(response)
})

test('Get account map records', async t => {
    const response = await getMapRecords(
        t.context.account.accessToken,
        t.context.account.accountId,
    )
    t.assert(response)
})
