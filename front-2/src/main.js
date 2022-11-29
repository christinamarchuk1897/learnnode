import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store/store'
import api from './api'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.config.productionTip = false

Vue.prototype.$axios = api;
Vue.prototype.$store = store;



// axios.interceptors.request.use(
//   request => {
//     if (localStorage.getItem('token')) {
//       request.headers['Authorization'] = localStorage.getItem('token');
//       request.params = { has_access : JSON.parse(localStorage.getItem('user')).default_role === 'ADMIN' ? 1 : 0};
//     } else {
//       router.push('/login');
//     }
//     return request;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

Vue.use(VueAxios, axios)

store.$axios = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
