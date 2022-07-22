import axios from "axios"
const customInstance = axios.create ({
    baseURL : 'http://localhost:9233/api/v2/',
    headers: {'Accept': 'application/json'}
})

export default customInstance