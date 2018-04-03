import Vue from 'vue';
import Router from 'vue-router';

import store from './store';

import App from './App.vue';

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
