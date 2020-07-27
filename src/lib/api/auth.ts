import axios from 'axios'

import jwt_decode from 'jwt-decode'

import { urls, setHeaders } from '../main'

/**
 * Login to Ubisoft (level 0)
 *
 * @param value Base64 encoded email:password
 * @returns Ticket to be used in the next authentication stage, amongst other things
 *
 */
export const loginUbi = async (base64: string) => {
    const headers = setHeaders(base64, 'basic')

    const response = await axios({
        url: urls.auth.ubisoft,
        method: 'post',
        headers,
    })

    return response['data']
}

/**
 * Login to Trackmania Ubisoft (level 1)
 *
 * @param value Ticket from loginUbi
 * @returns Access and refresh tokens, and accountId.
 *
 */
export const loginTrackmaniaUbi = async (ticket: string) => {
    const headers = setHeaders(ticket, 'ubi')

    const response = await axios({
        url: urls.auth.trackmaniaUbi,
        method: 'POST',
        headers,
    })
    const { data } = response
    const decoded = jwt_decode(data['accessToken'])
    const result = { ...data, accountId: decoded.sub, username: decoded.aun }

    return result
}

/**
 * Login to Trackmania Nadeo (level 2)
 *
 * @param value Access token from loginTrackmaniaUbi
 * @returns Access and refresh tokens, and accountId.
 *
 */
export const loginTrackmaniaNadeo = async (accessToken: string, targetAPI: string) => {
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

    return result
}

/**
 * Refresh tokens
 *
 * @param value Refresh token from loginTrackmaniaUbi
 * @returns Refreshed tokens
 *
 */
export const refreshTokens = async (refreshToken: string) => {
    const headers = setHeaders(refreshToken, 'nadeo')

    const response = await axios({
        url: urls.auth.refreshToken,
        method: 'POST',
        headers,
    })

    return response['data']
}
