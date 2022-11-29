import Vuex from 'vuex';
import user from './modules/user'
import categories from './modules/categories'
const store = new Vuex.Store({
  modules: {
    user: user,
    categories: categories
  }
})

export default store;