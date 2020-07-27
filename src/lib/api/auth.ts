import axios from 'axios'

import jwt_decode from 'jwt-decode'

import { urls, setHeaders } from '../main'

/**
 * Login to Ubisoft (level 0)
 *
 * @param value Base64 encoded email:password
 *
 */
export const loginUbi = async (base64: string): Promise<IloginUbi> => {
    const headers = setHeaders(base64, 'basic')

    const response = await axios({
        url: urls.auth.ubisoft,
        method: 'post',
        headers,
    })

    return response['data'] as IloginUbi
}

/**
 * Login to Trackmania Ubisoft (level 1)
 *
 * @param value Ticket from loginUbi
 *
 */
export const loginTrackmaniaUbi = async (ticket: string): Promise<IloginTrackmania> => {
    const headers = setHeaders(ticket, 'ubi')

    const response = await axios({
        url: urls.auth.trackmaniaUbi,
        method: 'POST',
        headers,
    })
    const { data } = response
    const decoded = jwt_decode(data['accessToken'])
    const result = { ...data, accountId: decoded.sub, username: decoded.aun }

    return result as IloginTrackmania
}

/**
 * Login to Trackmania Nadeo (level 2)
 *
 * @param value Access token from loginTrackmaniaUbi
 *
 */
export const loginTrackmaniaNadeo = async (
    accessToken: string,
    targetAPI: string,
): Promise<IloginTrackmania> => {
    const headers = setHeaders(accessToken, 'nadeo')

    const response = await axios({
        url: urls.auth.trackmaniaNadeo,
        method: 'POST',
        data: JSON.stringify({ audience: targetAPI }),
        headers,
    })
    const { data } = response
    const decoded = jwt_decode(data['accessToken'])
    const result = { ...data, accountId: decoded.sub, username: decoded.aun }

    return result as IloginTrackmania
}

/**
 * Refresh tokens
 *
 * @param value Refresh token from loginTrackmaniaUbi
 *
 */
export const refreshTokens = async (refreshToken: string): Promise<Itokens> => {
    const headers = setHeaders(refreshToken, 'nadeo')

    const response = await axios({
        url: urls.auth.refreshToken,
        method: 'POST',
        headers,
    })

    return response['data'] as Itokens
}

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
