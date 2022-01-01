import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
   
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta:{
      requiresAuth: true
    }
  },


  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/admin/dashboard.vue'),
    meta:{
      requiresAuth: true
    }
  },

  
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/admin/Product/ProductList.vue'),
    meta:{
      requiresAuth: true
    }
  },

    
  {
    path: '/product-create',
    name: 'Product-Create',
    component: () => import('../views/admin/Product/ProductCreate.vue'),
    meta:{
      requiresAuth: true
    }
  },


  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta:{
      visitor: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta:{
      visitor: true
    }
  },
    
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../components/Logout.vue'),
    meta:{
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'Login'
      })
    } else {
      next()
    }
  }else if (to.matched.some(record => record.meta.visitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'Dashboard'
      })
    } else {
      next()
    }
  }

   else {
    next()
  }
})

export default router
