import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import VueLess from 'less-loader'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import 'element-ui/lib/theme-chalk/index.css'

import routes from './routes.js'
import './css/style.css'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)



const router = new VueRouter({
    routes
})


const strobj = {
    loading: false,
    UserList: [], //用户列表
    isLogin: 0,  //登录状态 0未登录  1001登录
    ClassList:[],
    UserInfo:[],
}
const vuexObj = new Vuex.Store({
    state: {
    strobj
  },

})


/** 验证用户是否登录 **/
router.beforeEach((to,from,next) => {
    console.log(888);
    console.log(Vue.store);
    next();
})


var vm = new Vue({
  el: '#app',
  router,
  vuexObj
})
