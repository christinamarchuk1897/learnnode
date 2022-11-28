import { createStore } from 'vuex'
import user from './modules/user'
import categories from './modules/categories'
const store = createStore({
  modules: {
    user: user,
    categories: categories
  }
})

export default store;