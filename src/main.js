import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import Start from './components/Start.vue';
import kalender from './components/Kalender.vue';
import login    from './components/login.vue';
import Register from './components/Register.vue';
import Noten    from './components/Noten.vue';
import Mensa from './components/Mensa.vue';
import toDo from './components/toDo.vue';
import App from './App.vue';
import auth from './auth/authentifizierung';
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar/dist/index.js';

Vue.use(vueEventCalendar, {locale:'de'})

auth.checkAuth();
Vue.axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('id_token');



const routes = [
    {
    name:'Start',
    path:'/start',
    component: Start
},
    {
        name:'Kalender',
        path:'/Kalender',
        component: kalender,

    },
    {
        name:'login',
        path:'/',
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
    },
    {
        name:'register',
        path:'/register',
        component: Register,
    }


];

export const router = new VueRouter({  routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');