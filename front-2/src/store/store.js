import Vuex from 'vuex';
import Vue from 'vue'
import user from './modules/user'
import categories from './modules/categories'

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user: user,
    categories: categories
  }
})

