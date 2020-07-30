import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import { getProfilesById } from './ubi-services'

import credentials from '../../config/test.json'

const test = anyTest as TestInterface<{
    account: { ticket: string }
}>

test.before(async t => {
    const { ticket } = credentials as { ticket: null | string }
    if (ticket) t.context.account = { ticket }
})

test.only('Get profiles', async t => {
    const response = await getProfilesById(t.context.account.ticket, [
        '0a2daffa-b588-4d99-bc65-9873b2c9ae6b',
        '2ebf7150-5c14-4bb7-b5b2-7631ea68f889',
        '4497b71f-3bcc-4d44-87c8-a61dcb1cd1ab',
    ])
    t.assert(response)
})
