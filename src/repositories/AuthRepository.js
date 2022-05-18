import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
const resource = process.env.VUE_APP_API

export default {
    async login(payload){
        const response = await axios.post(`${resource}login/login`,payload)
        console.log(response)
        return response
    },
    async register(payload){
        const response = await axios.post(`${resource}login/register`,payload)
        console.log(response)
        return response
    }
}