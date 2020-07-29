import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import { refreshTokens } from './auth'
import { getSeasons, getTOTDs, getClubCampaigns, getGroupRecords } from './live-services'

const test = anyTest as TestInterface<{
    account: { accessToken: string; refreshToken: string; accountId: string }
}>

test.before(async t => {
    const accountId = process.env.TM_ID
    const { accessToken, refreshToken } = await refreshTokens(
        process.env.LV2_REFRESHTOKEN,
    ) // probably should try if the accesstoken is expired, then refresh and inform the dev

    t.context.account = { accessToken, refreshToken, accountId }
})

test('Get all seasons', async t => {
    const response = await getSeasons(t.context.account.accessToken, 0, 1)
    t.assert(response)
})

test('Get all TOTDs', async t => {
    const response = await getTOTDs(t.context.account.accessToken, 0, 1)
    t.assert(response)
})

test('List club campaigns', async t => {
    const response = await getClubCampaigns(t.context.account.accessToken, 0, 75)
    t.assert(response)
})

test('Get group records', async t => {
    const response = await getGroupRecords(
        t.context.account.accessToken,
        '3987d489-03ae-4645-9903-8f7679c3a418',
    )
    t.assert(response)
})
