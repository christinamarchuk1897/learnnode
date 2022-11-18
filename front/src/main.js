import { createApp } from 'vue/dist/vue.esm-bundler'
import {createRouter, createWebHashHistory} from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';

const routes = [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    mode: 'history',
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp({});
app.use(router);
app.use(VueAxios, axios)
app.mount('#app')
