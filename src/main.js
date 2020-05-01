import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import All from './components/All'
import Featured from './components/Featured'
import {VueMasonryPlugin} from 'vue-masonry';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueMasonryPlugin)

const router = new VueRouter({
  routes: [
    { path: '/home', component: All},
    { path: '/featured', component: Featured}
  ],
  // mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'