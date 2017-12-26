import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Start from './components/Start.vue'


import App from './App.vue';

const routes = [{
    name:'Start',
    path:'/',
    component: Start
}];


const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');