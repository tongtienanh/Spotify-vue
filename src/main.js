import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import mitt from 'mitt'
const emitter = mitt()
import './style/index.css'
import './style/global.css'
import { registerGlobalComponent } from './ultis/import';
const app = createApp(App)
registerGlobalComponent(app);
app.use(router)
app.use(store)
app.config.globalProperties.emitter = emitter
app.mount('#app')