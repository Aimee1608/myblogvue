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



/** 验证用户是否登录 **/
// router.beforeEach((to,from,next) => {
//     let token = sessionStorage.getItem('accessToken');  //获取token
//     console.log(888);
//     // next();
//     if(to.matched.some( m => m.meta.auth )) {
//       Vue.http.get('http://www.vuebook.com/port/login/isUserLogin', {params:{access_token: token}})
//       .then(response => response.json()).then(num => {
//           console.log(num,66);
//           if(num.code==1001){
//               next()
//           }else{
//               sessionStorage.removeItem('userInfo'); // 删除sessionStorage中的token值
//               next()
//           }
//       })
//     } else {
//       next();
//     }
// })





var vm = new Vue({
  el: '#app',
  router,

})
