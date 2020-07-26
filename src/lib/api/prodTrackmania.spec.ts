import dotenv from 'dotenv'
dotenv.config()

import test from 'ava'

import { loginUbi, loginTrackmaniaUbi } from './auth'
import {
    getClientConfig,
    getZones,
    getAccountZone,
    getTrophies,
    getTrophyCount,
    getSeason,
    getServer,
} from './prodTrackmania'

const credentials = Buffer.from(process.env.UBI_USER + ':' + process.env.UBI_PW).toString(
    'base64',
)

let ticket = null

let tokens = {
    accessToken: null,
    refreshToken: null,
}

const accountId = process.env.TM_ID

test.before(async () => {
    const getTicket = await loginUbi(credentials)
    ticket = getTicket.ticket
    const getTokens = await loginTrackmaniaUbi(ticket)
    tokens = {
        accessToken: getTokens.accessToken,
        refreshToken: getTokens.refreshToken,
    }
})

test('Get client config', async t => {
    const response = await getClientConfig()
    console.log(response)
    t.assert(response)
})

test('Get zones', async t => {
    const response = await getZones(tokens.accessToken)
    console.log(response)
    t.assert(response)
})

test('Get account zone', async t => {
    const response = await getAccountZone(tokens.accessToken, accountId)
    console.log(response)
    t.assert(response)
})

test('Get trophies', async t => {
    const response = await getTrophies(tokens.accessToken)
    console.log(response)
    t.assert(response)
})

test('Get account stats', async t => {
    const response = await getTrophyCount(tokens.accessToken, accountId)
    console.log(response)
    t.assert(response)
})

test('Get season by ID', async t => {
    const response = await getSeason(
        tokens.accessToken,
        '3987d489-03ae-4645-9903-8f7679c3a418',
    )
    console.log(response)
    t.assert(response)
})

test.skip('Get server by ID', async t => {
    const response = await getServer(tokens.accessToken, '123') // account ID?
    console.log(response)
    t.assert(response)
})
