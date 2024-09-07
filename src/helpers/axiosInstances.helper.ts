import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

export const publicInstance = axios.create({ baseURL })
export const privateInstance = axios.create({ baseURL })
