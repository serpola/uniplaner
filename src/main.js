import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);


import Start from './components/Start.vue'
import Kalender from './components/Kalender.vue'
import login    from './components/login.vue'
import Register from './components/Register.vue'
import Noten    from './components/Noten.vue'
import Mensa from './components/Mensa.vue'
import toDo from './components/toDo.vue'

import App from './App.vue';

const routes = [{
    name:'Start',
    path:'/',
    component: Start
},
    {
        name:'Kalender',
        path:'/Kalender',
        component: Kalender,
    },
    {
        name:'login',
        path:'/login',
        component: login,
    },
    {
        name:'noten',
        path:'/noten',
        component: Noten,
    },
    {
        name:'mensa',
        path:'/mensa',
        component: Mensa,
    },
    {
        name:'toDo',
        path:'/todo',
        component: toDo,
    }

];


const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');