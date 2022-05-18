import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import mitt from 'mitt'
import _ from 'lodash'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
const emitter = mitt()
import './style/index.css'
import './style/global.css'
import { registerGlobalComponent } from './ultis/import';
const app = createApp(App)
registerGlobalComponent(app);
app.use(_)
app.use(Loading)
app.use(VueSweetalert2, {
    confirmButtonColor: '#4caf50',
    cancelButtonColor: '#e91e63',
})
app.use(router)
app.use(store)
app.config.globalProperties.emitter = emitter
app.mount('#app')