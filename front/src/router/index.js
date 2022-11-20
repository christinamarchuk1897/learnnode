import {createRouter, createWebHashHistory} from 'vue-router';
import App from '../App.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';

const routes = [
    { path: '/', component: App },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home },
]
const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes,
})

export default router;