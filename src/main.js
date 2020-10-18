import Vue from 'vue';
import App from './App.vue';
import router from './router';
import mixin from './mixins';
import { store } from './store/';

import "@/assets/css/base.css";
import "./plugins/element/index.js";

Vue.mixin(mixin)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
