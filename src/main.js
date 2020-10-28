import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Vant from 'vant' 
import { Swipe, SwipeItem } from 'vant'
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import './assets/styles/iconfont.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

Vue.use(Vant)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  mode: 'history',
  router,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
