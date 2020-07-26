# Trackmania 2020 api node

[![codecov](https://codecov.io/gh/breeku/trackmania2020-api-node/branch/master/graph/badge.svg)](https://codecov.io/gh/breeku/trackmania2020-api-node)

### [Converting this repo to a npm module](https://github.com/The-Firexx/trackmania2020apidocumentation)

**In early development!**

> This API is not intended to be used outside of the game!!
>
> Be aware that Nadeo can change the API without even warning us, since the API is intended only to be used in game, so don't except any support for them, and don't try to make anything serious out of this
>
> Also, don't abuse of this API, has they have the right to lock your account since, for them, it's someone that is trying to hack or just trying to give bad performance to the servers

# Usage

## **[Docs](https://trackmania-api-node.netlify.app)**

### Nodejs

`npm i trackmania-api-node`

```javascript
const { loginUbi, loginTrackmaniaUbi, getTrophyCount } = require('trackmania-api-node')

const login = async credentials => {
    const { ticket } = await loginUbi(credentials) // login to ubi, level 0
    return await loginTrackmaniaUbi(ticket) // login to trackmania, level 1
}

const getTrophies = async loggedIn => {
    const { accessToken, accountId, username } = loggedIn
    const trophyCount = await getTrophyCount(accessToken, accountId)
    console.log(username + ' trophies:')
    console.log(trophyCount)
}

;(async () => {
    const credentials = Buffer.from('email' + ':' + 'password').toString('base64')
    const loggedIn = await login(credentials)
    await getTrophies(loggedIn)
})()
```

```javascript
user trophies:
{
  accountId: 'censored',
  points: 12345,
  t1Count: 70,
  t2Count: 200,
  t3Count: 80,
  t4Count: 2,
  t5Count: 5,
  t6Count: 1,
  t7Count: 0,
  t8Count: 0,
  t9Count: 0,
  timestamp: '2020-07-25T15:50:50+00:00'
}
```
