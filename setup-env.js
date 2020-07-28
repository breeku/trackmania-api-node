const {
    loginUbi,
    loginTrackmaniaUbi,
    loginTrackmaniaNadeo,
} = require('./build/main/lib/api/auth.js')
const { stringify } = require('envfile')
const { promises: fs } = require('fs')

const login = async base64 => {
    const { ticket } = await loginUbi(base64) // login to ubi, level 0
    const ubiTokens = await loginTrackmaniaUbi(ticket) // login to trackmania, level 1
    const nadeoTokens = await loginTrackmaniaNadeo(
        ubiTokens.accessToken,
        'NadeoLiveServices',
    ) // login to trackmania nadeoliveservices, level 2
    return {
        lv1accessToken: ubiTokens.accessToken,
        lv1refreshToken: ubiTokens.refreshToken,
        lv2accessToken: nadeoTokens.accessToken,
        lv2refreshToken: nadeoTokens.refreshToken,
        accountId: nadeoTokens.accountId,
    }
}

;(async () => {
    const email = process.argv[2]
    const password = process.argv[3]
    const saveCredentials = process.argv[4] === 'true' ? true : false
    try {
        if (!email) throw new Error('missing email')
        if (!password) throw new Error('missing password')
        if (!saveCredentials) throw new Error('missing boolean for saving credentials')

        const base64 = Buffer.from(email + ':' + password).toString('base64')

        const data = await login(base64)

        const vars = stringify({
            LV1_ACCESSTOKEN: data.lv1accessToken,
            LV1_REFRESHTOKEN: data.lv1refreshToken,
            LV2_ACCESSTOKEN: data.lv2accessToken,
            LV2_REFRESHTOKEN: data.lv2refreshToken,
            UBI_USER: saveCredentials ? email : 'none',
            UBI_PW: saveCredentials ? password : 'none',
            TM_ID: data.accountId,
        })

        await fs.writeFile('./.env', vars)

        console.log('saved .env')
    } catch (e) {
        console.warn(e)
        return
    }
})()
