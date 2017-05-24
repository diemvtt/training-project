import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let API = 'http://jsonplaceholder.typicode.com';

const store = new Vuex.Store({
  state: {
    blogs: []
  },
  actions: {
    LOAD_BLOG_LIST: function({ commit }) {
      axios.get(`${API}/posts`).then((response) => {
        commit('SET_BLOG_LIST', { list: response.data})
      }, (err) => {
        console.log(err);
      })
    }
  },
  mutations: {
    SET_BLOG_LIST: (state, { list }) => {
      state.blogs = list
    }
  },
  getters: {}
});

export default store;
