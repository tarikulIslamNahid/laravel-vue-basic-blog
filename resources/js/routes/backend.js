 let dashboard = require('../components/admin/dashboard.vue').default;
let categories = require('../components/admin/categories.vue').default;
// staff managment
let roles = require('../components/admin/staffs/roles.vue').default;
let BackendMaster = require('../components/BackendMaster').default;
import Vue from "vue";
window.Vue = require("vue");

import Vuex from "vuex";
Vue.use(Vuex);

import storeData from "../store/index";
const store = new Vuex.Store(storeData);

export const routes = [


    {
        path: '/admin',
        name:'BackendMaster',
         component:BackendMaster,
         meta: { requiresAuth: true },
beforeEnter: (to, from, next) => {
    if( User.loggedIn(store.getters.getUser.access_token)){
        if(store.getters.getUser.user.user_type==1){
            next();
        }
    }else{
        // this.loggedInAdmin=false;
         window.location.href = "/";

    }
},
         children: [
            {
                path: '/admin/dashboard',
                component:dashboard,
                name: 'dashboard',
            },
            {
                path: '/admin/categories',
                component:categories,
                name: 'categories',
            },
            {
                path: '/admin/roles',
                component:roles,
                name: 'roles',
            },
        ]

    },



]
