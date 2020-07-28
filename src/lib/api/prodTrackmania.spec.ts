/* tslint:disable */
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
    getMapRecords,
} from './prodTrackmania'

const credentials = Buffer.from(process.env.UBI_USER + ':' + process.env.UBI_PW).toString(
    'base64',
)

let tokens = {
    accessToken: null,
}

const accountId = process.env.TM_ID

test.before(async () => {
    if (!tokens.accessToken) {
        const { ticket } = await loginUbi(credentials)
        const getTokens = await loginTrackmaniaUbi(ticket)
        tokens = {
            accessToken: getTokens.accessToken,
        }
    }
})

test('Get client config', async t => {
    const response = await getClientConfig()
    t.assert(response)
})

test('Get zones', async t => {
    const response = await getZones(tokens.accessToken)
    t.assert(response)
})

test('Get account zone', async t => {
    const response = await getAccountZone(tokens.accessToken, accountId)
    t.assert(response)
})

test('Get trophies', async t => {
    const response = await getTrophies(tokens.accessToken)

    t.assert(response)
})

test('Get trophy count', async t => {
    const response = await getTrophyCount(tokens.accessToken, accountId)
    t.assert(response)
})

test('Get season by ID', async t => {
    const response = await getSeason(
        tokens.accessToken,
        '3987d489-03ae-4645-9903-8f7679c3a418',
    )
    t.assert(response)
})

test.skip('Get server by ID', async t => {
    const response = await getServer(tokens.accessToken, '123') // account ID?
    t.assert(response)
})

test('Get account map records', async t => {
    const response = await getMapRecords(tokens.accessToken, accountId)
    t.assert(response)
})
