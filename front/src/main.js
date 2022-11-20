import { createApp } from 'vue/dist/vue.esm-bundler'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/index'


axios.defaults.baseURL = 'http://localhost:8000';

axios.interceptors.request.use(
  request => {
    if (localStorage.getItem('token')) {
      request.headers['Authorization'] = localStorage.getItem('token');
    } else {
      router.push('/login');
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);


const app = createApp({});
app.use(router);
app.use(VueAxios, axios)
app.mount('#app')
