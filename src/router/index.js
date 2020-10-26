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
        path:'/Home',
        name:'Home',
        component: () => import('../views/home/Home.vue'),
        
      },
      {
        path: '/Classify',
        name: 'Classify',
        component: () => import('../views/classify/Classify.vue'),
        
      },
      {
        path: '/Shoppingcart',
        name: 'ShoppingCart',
        component: () => import('../views/shoppingcart/ShoppingCart.vue'),
      
      },
      {
        path: '/Mine',
        name: 'Mine',
        component: () => import('../views/mine/Mine.vue'),
        
      }
    ]
  },
  {
    path:'/Search',
    name:'Search',
    components: () => import('../views/Search.vue')
  },
  {
    path:'/Login',
    name:'Login',
    components: () => import('../views/login/Login.vue')
  },
  {
    path:'/iiii',
    name:'iiii',
    components: () => import('../views/iiii.vue')
    
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
