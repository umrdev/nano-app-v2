import axios from 'axios'
import baseUrl from './baseUrl'

const instance = axios.create({
    baseURL: baseUrl,
    headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
    timeout: 5000
})

export default instance
