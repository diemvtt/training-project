import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueResource)

import './css/shared/base.scss';
import './css/shared/module.scss';


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
