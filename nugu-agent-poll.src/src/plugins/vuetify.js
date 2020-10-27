import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'typeface-roboto/index.css'

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
});
