import Vue from 'vue'
import axios from 'axios'
import SocketIO from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
export const SocketInstance = SocketIO('http://www.inv839661.com')
Vue.use(VueSocketIO, SocketInstance, store)

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app')
