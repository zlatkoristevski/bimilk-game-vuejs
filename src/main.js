import Vue from 'vue'
import App from './App.vue'
import { routes } from './routes';


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueNoty from 'vuejs-noty';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vuejs-noty/dist/vuejs-noty.css'

import { store } from './store/store';


// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueNoty, {
  timeout: 2000,
  progressBar: true,
  layout: 'bottomCenter'
})

Vue.use(VueRouter);
Vue.use(VueResource);


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
