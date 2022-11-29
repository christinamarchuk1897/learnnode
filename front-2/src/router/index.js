import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';
import Products from '../components/Products.vue';
import AdminProducts from '../components/admin/product/Products.vue'
import CreateProduct from '../components/admin/product/Create.vue'
import AdminCategories from '../components/admin/categories/Categories.vue'
import CreateCategory from '../components/admin/categories/Create.vue'

Vue.use(VueRouter)

const routes = [
  // { path: '/', component: App },
  { path: '/login', component: Login, name: "login" },
  { path: '/register', component: Register, name: "register" },
  { path: '/home', component: Home, meta: {layout: "BaseLayout"}, name: 'home'},
  { path: '/products', component: Products, meta: { layout: "BaseLayout" } },
  { path: '/admin/products', component: AdminProducts, meta: { layout: 'BaseLayout', admin: true}},
  { path: '/admin/products/create', component: CreateProduct, meta: { layout: 'BaseLayout', admin: true}},
  { path: '/admin/categories', component: AdminCategories, meta: { layout: 'BaseLayout', admin: true}},
  { path: '/admin/categories/create', component: CreateCategory, meta: { layout: 'BaseLayout', admin: true}}
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta['admin'] && JSON.parse(localStorage.getItem('user')).default_role !== "ADMIN") {
      next({
          name: 'home'
      })
  } else {
      next()
  }
})

export default router
