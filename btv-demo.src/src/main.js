import Vue from 'vue'
import axios from 'axios' // import axios

import vuetify from './plugins/vuetify';

import router from './router'
import App from './App.vue'

Vue.prototype.$axios = axios; // prototype에 axios 추가

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
