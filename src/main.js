import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import VueLess from 'less-loader'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import 'element-ui/lib/theme-chalk/index.css'

import routes from './routes.js'
import './css/style.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)


const router = new VueRouter({
    routes
})

var vm = new Vue({
  el: '#app',
  router,

})
