export interface IloginUbi {
    platformType: string
    ticket: string
    twoFactorAuthenticationTicket: boolean
    profileId: string
    userId: string
    nameOnPlatform: string
    environment: string
    expiration: string
    spaceId: string
    clientIp: string
    clientIpCountry: string
    serverTime: string
    sessionId: string
    sessionKey: string
    rememberMeTicket: null | string
}

export interface IloginTrackmania {
    accessToken: string
    refreshToken: string
    accountId: string
    username: string
}

export interface Itokens {
    accessToken: string
    refreshToken: string
}
