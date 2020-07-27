/* tslint:disable */
import dotenv from 'dotenv'
dotenv.config()

import test from 'ava'

import { loginUbi, loginTrackmaniaUbi, loginTrackmaniaNadeo, refreshTokens } from './auth'

const credentials = Buffer.from(process.env.UBI_USER + ':' + process.env.UBI_PW).toString(
    'base64',
)

let ticket = null

let tokens = {
    accessToken: null,
    refreshToken: null,
}

test.serial('login to ubi', async t => {
    const response = await loginUbi(credentials)
    console.log(response)
    ticket = response['ticket']
    t.assert(response)
})

test.serial('login to trackmania ubi', async t => {
    const response = await loginTrackmaniaUbi(ticket)
    console.log(response)
    tokens.accessToken = response['accessToken']
    tokens.refreshToken = response['refreshToken']
    t.assert(response)
})

test.serial('login to trackmania nadeo', async t => {
    const response = await loginTrackmaniaNadeo(tokens.accessToken, 'NadeoLiveServices')
    console.log(response)
    t.assert(response)
})

test.serial('refresh token', async t => {
    const response = await refreshTokens(tokens.refreshToken)
    console.log(response)
    tokens.accessToken = response['accessToken']
    tokens.refreshToken = response['refreshToken']

    t.assert(response)
})
