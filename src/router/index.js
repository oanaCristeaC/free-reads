import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/book-info/*",
    name: "BookInfo",
    component: () =>
      import(/* webpackChunkName: "book info" */ "../views/BookInfo.vue")
  },
  {
    path: "/my-list",
    name: "UserList",
    component: () =>
      import(/* webpackChunkName: "userList" */ "../views/UserList.vue")
  },
  {
    path: "/account",
    name: "Account",
    component: () =>
      import(/* webpackChunkName: "account" */ "../views/Account.vue")
  },
  {
    path: "/login-logout",
    name: "LoginLogout",
    component: () =>
      import(/* webpackChunkName: "login logout" */ "../views/LoginLogout.vue" ),
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
