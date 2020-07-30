import dotenv from 'dotenv'
dotenv.config()

import anyTest, { TestInterface } from 'ava'

import { getProfilesById } from './ubi-services'

import credentials from '../../config/test.json'

const test = anyTest as TestInterface<{
    account: { ticket: string }
}>

test.before(async t => {
    const ticket = (credentials.ticket as unknown) as string
    t.context.account = { ticket }
})

test.only('Get profile', async t => {
    const response = await getProfilesById(
        t.context.account.ticket,
        'efbe1a34-889d-443a-9af2-e7780cf6ffe3',
    )
    t.assert(response)
})
