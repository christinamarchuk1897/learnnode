import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store/store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000';

axios.interceptors.request.use(
  request => {
    if (localStorage.getItem('token')) {
      request.headers['Authorization'] = localStorage.getItem('token');
      request.params = { has_access : JSON.parse(localStorage.getItem('user')).default_role === 'ADMIN' ? 1 : 0};
    } else {
      router.push('/login');
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
