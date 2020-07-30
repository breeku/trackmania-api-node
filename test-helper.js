const {
    loginUbi,
    loginTrackmaniaUbi,
    loginTrackmaniaNadeo,
} = require('./build/main/lib/api/auth.js')
require('dotenv').config()
const { promises: fs } = require('fs')

const login = async base64 => {
    const { ticket } = await loginUbi(base64) // login to ubi, level 0
    const ubiTokens = await loginTrackmaniaUbi(ticket) // login to trackmania, level 1
    const nadeoTokens = await loginTrackmaniaNadeo(
        ubiTokens.accessToken,
        'NadeoLiveServices',
    ) // login to trackmania nadeoliveservices, level 2
    console.log('logged in')
    return {
        ticket,
        lv1accessToken: ubiTokens.accessToken,
        lv2accessToken: nadeoTokens.accessToken,
        accountId: nadeoTokens.accountId,
    }
}

;(async () => {
    const mode = process.argv[2]
    console.log(mode)
    if (mode === 'CREATE') {
        const email = process.env.EMAIL
        const password = process.env.PASSWORD
        const base64 = Buffer.from(email + ':' + password).toString('base64')

        const credentials = JSON.stringify(await login(base64))

        await fs.writeFile('./src/config/test.json', credentials)
        console.log('writed file')
    } else if (mode === 'RESET') {
        await fs.writeFile(
            './src/config/test.json',
            JSON.stringify({
                ticket: null,
                lv1accessToken: null,
                lv2accessToken: null,
                accountId: null,
            }),
        )
        console.log('reset file')
    } else if (mode === 'CHECK') {
        // TODO: check also build
        const data = JSON.parse(await fs.readFile('./src/config/test.json', 'utf8'))
        if (
            data.ticket ||
            data.lv1accessToken ||
            data.lv2refreshToken ||
            data.accountId
        ) {
            console.error('Config was not reset. do npm run config:reset')
            process.exit(1)
        } else {
            console.log('File is reset')
        }
    } else {
        console.error('Unknown command')
    }
})()
