import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import { getMatchmakingRanks } from './matchmaking'

import credentials from '../../config/test.json'

const test = anyTest as TestInterface<{
    account: { lv2clubAccessToken: string; accountId: string }
}>

test.before(async t => {
    const { accountId, lv2clubAccessToken } = (credentials as unknown) as {
        lv2clubAccessToken: null | string
        accountId: null | string
    }

    if (lv2clubAccessToken && accountId)
        t.context.account = { lv2clubAccessToken, accountId }
})

test('Get matchmaking rank', async t => {
    try {
        const response = await getMatchmakingRanks(t.context.account.lv2clubAccessToken, [
            'a9cbdeff-daa3-4bc2-998c-b2838183fb97',
            '2ed0997d-62bc-4a53-8c09-ffb793382ea2',
        ])
        t.assert(response)
    } catch (err) {
        console.error(err)
        t.fail(JSON.stringify(err.response.data))
    }
})
