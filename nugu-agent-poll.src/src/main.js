import Vue from 'vue'
import App from './App.vue'

import axios from 'axios' // import axios
import vueMoment from 'vue-moment'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.prototype.$isDev = process.env.NODE_ENV !== 'production'

Vue.prototype.$axios = axios.create({
  // baseURL: '/api/v1'
}) // prototype에 axios 추가

Vue.prototype.$eventBus = new Vue() // 이벤트 버스

Vue.use(vueMoment)

import BtnScrollToTop from '@/components/global/BtnScrollToTop'
Vue.component('BtnScrollToTop', BtnScrollToTop)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
