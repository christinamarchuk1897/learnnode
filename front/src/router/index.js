import {createRouter, createWebHashHistory} from 'vue-router';
import App from '../App.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';
import Products from '../components/Products.vue';
import AdminProducts from '../components/product/Products.vue'
const routes = [
    { path: '/', component: App },
    { path: '/login', component: Login, name: "login" },
    { path: '/register', component: Register, name: "register" },
    { path: '/home', component: Home, meta: {layout: "BaseLayout"}},
    { path: '/products', component: Products, meta: { layout: "BaseLayout" } },
    { path: '/admin/products', component: AdminProducts, meta: { layout: 'BaseLayout'}}
]
const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes,
})

export default router;