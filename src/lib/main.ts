import { Headers } from 'node-fetch'

export const urls = {
    auth: {
        ubisoft: 'https://public-ubiservices.ubi.com/v3/profiles/sessions',
        trackmaniaUbi:
            'https://prod.trackmania.core.nadeo.online/v2/authentication/token/ubiservices',
        trackmaniaNadeo:
            'https://prod.trackmania.core.nadeo.online/v2/authentication/token/nadeoservices',
        refreshToken:
            'https://prod.trackmania.core.nadeo.online/v2/authentication/token/refresh',
    },
    prodTrackmania: 'https://prod.trackmania.core.nadeo.online',
}

const defaultHeaders = [
    ['Content-Type', 'application/json'],
    ['Ubi-AppId', '86263886-327a-4328-ac69-527f0d20a237'],
    ['Ubi-RequestedPlatformType', 'uplay'],
]

export const setHeaders = (auth: string, type: string) => {
    if (type === 'basic') {
        return new Headers([...defaultHeaders, ['Authorization', 'Basic ' + auth]])
    } else if (type === 'ubi') {
        return new Headers([...defaultHeaders, ['Authorization', 'ubi_v1 t=' + auth]])
    } else if (type === 'nadeo') {
        return new Headers([...defaultHeaders, ['Authorization', 'nadeo_v1 t=' + auth]])
    }
}
