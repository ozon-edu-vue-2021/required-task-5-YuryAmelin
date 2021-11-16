import Vue from "vue";
import Router from "vue-router";
import { routes } from "@/router/routes";

import Home from "@/pages/Home";
import ShoppingCart from "@/pages/ShoppingCart";
import Favorites from "@/pages/Favorites";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: routes.root.path,
      component: Home,
    },
    {
      path: routes.shoppingCart.path,
      component: ShoppingCart,
    },
    {
      path: routes.favorites.path,
      component: Favorites,
    },
  ],
});
