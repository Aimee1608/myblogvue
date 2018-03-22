import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from "./store/index.js"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './routes.js'
import './css/style.css'


Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)


const router = new VueRouter({
    routes
})

var vm = new Vue({
  el: '#app',
  router,
  store
})
