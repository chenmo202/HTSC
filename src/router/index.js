import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Tabs',
    redirect:'Home',
    meta:{
      keepAlive: true
    },
    component:() => import('../views/Tabs.vue'),
    children:[
      {
        path:'/home',
        name:'Home',
        meta:{shows:true},
        component: () => import('../views/home/Home.vue'),
        
      },
      {
        path: '/classify',
        name: 'Classify',
        meta:{shows:true},
        component: () => import('../views/classify/Classify.vue'),
      },
      {
        path: '/Shoppingcart',
        name: 'ShoppingCart',
        meta:{shows:false},
        component: () => import('../views/shoppingcart/ShoppingCart.vue')
      },
      {
        path: '/mine',
        name: 'Mine',
        meta:{shows:true},
        component: () => import('../views/mine/Mine.vue'), 
      }
    ]
  }, 
  {
    path:'/search-sahuanjie',
    name:'Search-sahuanjie',
    meta:{
      title: '搜索'
      // keepAlive: false
    },
    component: () => import('../views/search/Search-sahuanjie.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: () => import('../views/login/Login.vue')
  },

  {
    path:'/detail/:id',
    name:'Detail',
    component: () => import('../views/detail/Detail.vue')
  },

  
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior(to,from,savedPosition){//进入新的页面初始化在顶部显示
    return {x:0,y:0}
  }
})

export default router
