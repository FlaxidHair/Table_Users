import Vue from "vue";
import VueRouter from "vue-router";
import AllUsers from "../pages/AllUsers.vue";
import Checked from "../pages/Checked-Users.vue";
import noChecked from "../pages/No-Checked-Users.vue";
import PageUnknown from '../pages/404Page.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: AllUsers,
    name: "main",
  },
  {
    path: "/Checked",
    component: Checked,
    name: "checked",
  },
  {
    path: "/NoChecked",
    component: noChecked,
    name: "noChecked",
  },
  {
    path:'/unknown',
    component:PageUnknown,
    name: 'unknown'
  }
];

export default new VueRouter({
  mode: "hash",
  routes,
});
