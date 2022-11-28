import { createApp } from 'vue/dist/vue.esm-bundler'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router/index'
import store from './store/store'
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

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


const app = createApp(App);


app.use(router);

app.use(VueAxios, axios)
app.use(store);
// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.mount('#app');
