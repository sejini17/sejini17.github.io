import Vue from 'vue'

import axios from 'axios' // import axios
import vueMoment from 'vue-moment'

import vuetify from './plugins/vuetify';

import router from './router'
import App from './App.vue'

Vue.prototype.$axios = axios; // prototype에 axios 추가
Vue.prototype.$eventBus = new Vue(); // 이벤트 버스

Vue.use(vueMoment)

import BtnScrollToTop from '@/components/BtnScrollToTop';
Vue.component('BtnScrollToTop', BtnScrollToTop)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
