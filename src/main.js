import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { routes } from './routes';

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue);

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
