import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Tabs',
    redirect:'Home',
    component:() => import('../views/Tabs.vue'),
    children:[
      {
        path:'/home',
        name:'Home',
        component: () => import('../views/home/Home.vue'),
        
      },
      {
        path: '/classify',
        name: 'Classify',
        component: () => import('../views/classify/Classify.vue'),
        
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/mine/Mine.vue'),
        
      }
    ]
  },
  {
    path: '/shoppingcart',
    name: 'ShoppingCart',
    component: () => import('../views/shoppingcart/ShoppingCart.vue'),
  
  },
  {
    path:'/search',
    name:'Search',
    component: () => import('../views/search/Search.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/login/Login.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
