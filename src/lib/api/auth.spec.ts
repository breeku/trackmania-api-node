import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import { loginUbi, loginTrackmaniaUbi, loginTrackmaniaNadeo, refreshTokens } from './auth'

const test = anyTest as TestInterface<{ credentials: string }>

test.before(async t => {
    const email = process.env.EMAIL
    const password = process.env.PASSWORD

    t.context.credentials = Buffer.from(email + ':' + password).toString('base64')
})

test('login from level 0 to level 2, and refresh tokens', async t => {
    try {
        const { ticket } = await loginUbi(t.context.credentials)
        const { accessToken } = await loginTrackmaniaUbi(ticket)
        const { refreshToken } = await loginTrackmaniaNadeo(
            accessToken,
            'NadeoLiveServices',
        )
        const refreshedTokens = await refreshTokens(refreshToken)
        t.assert(refreshedTokens)
    } catch (err) {
        t.fail(JSON.stringify(err.response.data))
    }
})
