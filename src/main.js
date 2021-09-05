import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import mitt from 'mitt'
const emitter = mitt()
import './style/index.css'
import './style/global.css'
const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.emitter = emitter
app.mount('#app')