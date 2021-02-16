import axios from 'axios'

import { setHeaders } from '../main'

/**
 * Get more info about profiles
 *
 * ## **Requires level 1 authentication**
 *
 * @category level 1
 * @param string Ticket
 * @param Array Profile ids
 *
 */
export const getProfilesById = async (
    accessToken: string,
    profileIds: string[],
): Promise<Iprofiles> => {
    const headers = setHeaders(accessToken, 'ubi')
    const response = await axios({
        url:
            'https://public-ubiservices.ubi.com/v3/profiles?profileId=' +
            profileIds.join(),
        method: 'GET',
        headers,
    })

    return response['data']
}

export interface Iprofiles {
    profiles: profile[]
}

type profile = {
    profileId: string
    userId: string
    platformType: string
    idOnPlatform: string
    nameOnPlatform: string
}
