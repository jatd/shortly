import Vue from "vue";
import Router from "vue-router";

import Register from "@/components/Register";
import Login from "@/components/Login";
import Lists from "@/components/Lists";
import ListItem from "@/components/ListItem";

import store from "../store/store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Lists,
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
      path: "/lists",
      name: "lists",
      component: Lists,
      meta: { requiresAuth: true }
    },

    {
      path: "/list/:listId",
      name: "list",
      component: ListItem
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
