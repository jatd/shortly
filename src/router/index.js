import Vue from "vue";
import Router from "vue-router";

import Register from "@/components/Register";
import Login from "@/components/Login";
import Boxes from "@/components/Boxes";
import Box from "@/components/Box";

import store from "../store/store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Boxes,
      meta: { requiresAuth: true }
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/boxes",
      name: "boxes",
      component: Boxes,
      meta: { requiresAuth: true }
    },

    {
      path: "/box/:boxId",
      name: "box",
      component: Box
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.isUserLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
