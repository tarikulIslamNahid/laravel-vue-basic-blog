require("./bootstrap");
import Vue from "vue";
window.Vue = require("vue");

//Vuerouter
import VueRouter from "vue-router";
Vue.use(VueRouter);

import { routes } from "./routes/backend";

//Vuex
import Vuex from "vuex";
Vue.use(Vuex);

import storeData from "./store/index";
const store = new Vuex.Store(storeData);

import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

//Vue Progressbar
import VueProgressBar from "vue-progressbar";

Vue.use(VueProgressBar, {
    color: "#04fa67",
    failedColor: "#871f0d",
    thickness: "3px",
    transition: {
        speed: "0.2s",
        opacity: "0.6s",
        termination: 500
    },
    autoRevert: true,
    location: "top",
    inverse: false
});

import VueMeta from "vue-meta";
Vue.use(VueMeta);
// Import user for store data
import User from "./Heplers/user";
window.User = User;

var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo);
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
    preLoad: 1.3,
    loading: "/loading.gif",
    attempt: 1,
    listenEvents: ["scroll"]
});

Vue.component(
    "admin_master",
    require("./components/admin/adminMaster.vue").default
);

// Vue.component('website_master', require('./components/website/master.vue').default);
// Vue.component('seller_master', require('./components/seller/sellerMaster.vue').default);
// Vue.component('user_master', require('./components/user/userMaster.vue').default);

import { Form, HasError, AlertError } from "vform";
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

// import '../../public/assets/backend/js/scripts';
//Sweetalert
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
window.Swal = require("sweetalert2");

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

window.Toast = Toast;

//Pagination
Vue.component("pagination", require("laravel-vue-pagination"));

const router = new VueRouter({
    routes,
    mode: "history",
    base: "/"
});

const app = new Vue({
    el: "#app",
    router,
    store
}).$mount("#app");
