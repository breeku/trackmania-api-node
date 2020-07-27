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
    liveServices: 'https://live-services.trackmania.nadeo.live',
}

const defaultHeaders = {
    'Content-Type': 'application/json',
    'Ubi-AppId': '86263886-327a-4328-ac69-527f0d20a237',
    'Ubi-RequestedPlatformType': 'uplay',
}

export const setHeaders = (auth: string, type: string) =>
    type === 'basic'
        ? { ...defaultHeaders, Authorization: 'Basic ' + auth }
        : type === 'ubi'
        ? { ...defaultHeaders, Authorization: 'ubi_v1 t=' + auth }
        : type === 'nadeo'
        ? { ...defaultHeaders, Authorization: 'nadeo_v1 t=' + auth }
        : new Error('Unknown authorization type')
