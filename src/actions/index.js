import axios from 'axios'

export const FETCH_URL = 'FETCH_URL'
const ROOT_URL = `https://rebelion.com.es/api/`

export function fetchUrl(type) {
    const url = `${ROOT_URL}+${item}`
    return {
        type: FETCH_URL,
        payload: request
    }
}