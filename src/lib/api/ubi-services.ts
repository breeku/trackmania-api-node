import axios from 'axios'

import { setHeaders } from '../main'

/**
 * Get more info about the users
 *
 * ## **Requires level 0 authentication**
 *
 * @category level 1
 * @param string Ticket
 * @param string Profile id
 *
 */
export const getProfilesById = async (
    accessToken: string,
    profileId: string,
): Promise<Iprofiles> => {
    const headers = setHeaders(accessToken, 'ubi')
    const response = await axios({
        url: 'https://public-ubiservices.ubi.com/v3/profiles?profileId=' + profileId,
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
