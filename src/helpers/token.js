import _ from 'lodash'
import Cookies from 'js-cookie'

const TOKEN_KEY = 'access_token'
const USER_KEY = 'user'
const LANG_KEY = 'lang'


const TokenService = {
    getToken () {
      return Cookies.get(TOKEN_KEY)
    },
  
    setToken (accessToken) {
      Cookies.set(TOKEN_KEY, accessToken, { expires: 60 })
    },
    getLang () {
        return Cookies.get(LANG_KEY)
      },
    
      setLang (lang) {
        Cookies.set(LANG_KEY, lang)
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
