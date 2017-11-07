import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLess from 'less-loader'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import routes from './routes.js'
import './css/style.less'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)
// Vue.component(CollapseTransition.name, CollapseTransition)
// Vue.use(VueLess)

const router = new VueRouter({
    routes
})

var vm = new Vue({
  el: '#app',
  router,

})
