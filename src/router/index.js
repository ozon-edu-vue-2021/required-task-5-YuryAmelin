import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home";
import ShoppingCart from "@/pages/ShoppingCart";
import Favorites from "@/pages/Favorites";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/shoppingCart",
      component: ShoppingCart,
    },
    {
      path: "/favorites",
      component: Favorites,
    },
  ],
});
