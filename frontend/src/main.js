import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex)

import './css/shared/base.scss';
import './css/shared/module.scss';


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
