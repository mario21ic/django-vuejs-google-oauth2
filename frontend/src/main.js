/*
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
*/

import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'

import { routes } from './routes';

import VueResource from 'vue-resource'
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'
import axios from 'axios';

var options = {
  namespace: 'vuejs__'
};

Vue.use(VueRouter);
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  providers: {
    google: {
      clientId: '',
      redirectUri: 'http://localhost:8080',
      url: 'http://localhost:8000/api/login/social/token_user/',
      tokenPath: 'token',
    }
  },
});

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})

