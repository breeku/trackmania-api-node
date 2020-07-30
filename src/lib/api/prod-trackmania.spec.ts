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
    getProfileIds,
} from './prod-trackmania'

import credentials from '../../config/test.json'

const test = anyTest as TestInterface<{
    account: { accessToken: string; refreshToken: string; accountId: string }
}>

test.before(async t => {
    const accountId = (credentials.accountId as unknown) as string
    const { accessToken, refreshToken } = await refreshTokens(
        (credentials.lv1refreshToken as unknown) as string,
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

test.skip('Get server by UID', async t => {
    // TODO: get servers then get server by uid
    const response = await getServer(
        t.context.account.accessToken,
        'bc251924-d267-4702-b526-9ed4b950d729',
    )
    t.assert(response)
})

test('Get account map records', async t => {
    const response = await getMapRecords(
        t.context.account.accessToken,
        t.context.account.accountId,
    )
    t.assert(response)
})

test('Get profile ids', async t => {
    const response = await getProfileIds(t.context.account.accessToken, [
        '7d7fe36f-fbec-4246-923a-67d847c4a429',
        '2cc926568e-167d-4eca-a271-f013cadefc7f',
        '2c19597098-7c7a-49bc-8311-a6f10d5fa7a2',
    ])
    t.assert(response)
})
