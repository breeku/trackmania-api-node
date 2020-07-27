/* tslint:disable */
import dotenv from 'dotenv'
dotenv.config()

import test from 'ava'

import { loginUbi, loginTrackmaniaUbi, loginTrackmaniaNadeo } from './auth'
import { getSeasons } from './liveServices'

const credentials = Buffer.from(process.env.UBI_USER + ':' + process.env.UBI_PW).toString(
    'base64',
)

let tokens = {
    accessToken: null,
}

//const accountId = process.env.TM_ID

test.before(async () => {
    if (!tokens.accessToken) {
        const { ticket } = await loginUbi(credentials)
        const { accessToken } = await loginTrackmaniaUbi(ticket)
        const nadeoTokens = await loginTrackmaniaNadeo(accessToken, 'NadeoLiveServices')
        //tokens.accessToken = nadeoTokens
        console.log(nadeoTokens)
    }
})

test('Get all seasons', async t => {
    const response = await getSeasons(tokens.accessToken, 0, 1)
    console.log(response.campaignList[0])
    t.assert(response)
})
