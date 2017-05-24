import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/Home';
import Entry from '../components/blog/Entry';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home',component: Home },
    { path: '/blog/:blog', name: 'entry',component: Entry}
  ]
});
