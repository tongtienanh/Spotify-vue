import _ from 'lodash'
import Cookies from 'js-cookie'
const TOKEN_KEY = 'access_token'

const TokenService = {
    getToken() {
        return Cookies.get(TOKEN_KEY)
    },
    setToken (accessToken) {
        Cookies.set(TOKEN_KEY, accessToken, { expires: 60 })
    },
    removeToken () {
        Cookies.remove(TOKEN_KEY)
    },
    getHeader () {
        return {
            Authorization: `Bearer ${this.getToken()}`,
            'Accept-Language': this.getLang() || 'ja',
        }
    },
}
export default TokenService
