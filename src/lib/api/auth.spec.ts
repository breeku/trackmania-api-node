import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import { loginUbi, loginTrackmaniaUbi, loginTrackmaniaNadeo, refreshTokens } from './auth'

const test = anyTest as TestInterface<{ credentials: string }>

test.before(async t => {
    const email = process.env.UBI_USER
    const password = process.env.UBI_PW
    if (email !== 'none' && password !== 'none') {
        t.context.credentials = Buffer.from(email + ':' + password).toString('base64')
    }
})

test('login from level 0 to level 2, and refresh tokens', async t => {
    if (t.context.credentials) {
        const { ticket } = await loginUbi(t.context.credentials)
        const { accessToken } = await loginTrackmaniaUbi(ticket)
        const { refreshToken } = await loginTrackmaniaNadeo(
            accessToken,
            'NadeoLiveServices',
        )
        const refreshedTokens = await refreshTokens(refreshToken)
        t.assert(refreshedTokens)
    } else {
        t.fail()
    }
})
