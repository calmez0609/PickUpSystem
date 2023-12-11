import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { date,currency } from './methods/filters';
import $httpMessageState from '@/methods/pushMessageState.js';

import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    const app = createApp(App)
    app.config.warnHandler = () => {};
    app.config.productionTip = false;
    app.config.globalProperties.$filters = {
    date,currency
    };
    app.config.globalProperties.$httpMessageState = $httpMessageState;
    app.component('Loading',Loading)
    app.use(VueAxios,axios)
    app.use(router)

    app.config.silent = true;
   // app.component('Loading',Loading)
    app.mount('#app')