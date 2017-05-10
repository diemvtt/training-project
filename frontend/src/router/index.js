import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import Login from '../components/Login';
import Entry from '../components/Entry';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'home',component: Home },
    { path: '/login', name: 'login',component: Login},
    { path: '/id/:id', name: 'entry',component: Entry}
  ]
});
