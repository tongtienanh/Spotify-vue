import axios from 'axios'
import _ from 'lodash'

import TokenService from '../helpers/token'
const baseUrl = process.env.VUE_APP_API

const options = {
    baseURL: baseUrl,
}
if (TokenService.getToken() !== null) {
    options.headers = {
        Authorization: `Bearer ${TokenService.getToken()}`,
        Language: _.get(TokenService.getLang(), '', 'en'),
    }
}
const logout = () => {
    TokenService.removeToken()
    TokenService.removeRefreshToken()
    TokenService.removeUser()
    window.location.href = '/login'
  }

export default axiosInstance
