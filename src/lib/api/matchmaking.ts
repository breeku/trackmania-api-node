import axios from 'axios'

import { urls, setHeaders } from '../main'

/**
 * Get matchmaking rank of player(s)
 *
 * ## **Requires level 2 authentication with audience: NadeoClubServices**
 *
 * @category level 2
 * @param {string} accessToken - Access token
 * @param {string[]} profileIds - Profile ids
 *
 */
export const getMatchmakingRanks = async (
    accessToken: string,
    profileIds: string[],
): Promise<IMatchmakingRanks> => {
    const str = profileIds
        .map((x, i) => {
            if (i !== profileIds.length - 1) {
                return x + '&players%5b%5d='
            } else {
                return x
            }
        })
        .join('')

    const headers = setHeaders(accessToken, 'nadeo')
    const response = await axios({
        url: urls.matchmaking + 'leaderboard/players?players%5b%5d=' + str,
        method: 'GET',
        headers,
    })

    return response['data']
}

type result = {
    player: string
    rank: number
    score: number
}

export interface IMatchmakingRanks {
    matchmaking_id: number
    cardinal: number
    results: result[]
}
