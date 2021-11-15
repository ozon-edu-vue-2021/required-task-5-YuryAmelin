import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    products: [],
    shoppingCart: [],
  }),
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload;
    },
    setInfo: (state) => {
      state.products.forEach((el) => {
        el.price = Math.floor(Math.random() * 1000 + 200);
        el.img = Math.round(Math.random() * 11);
        el.favorite = false;
      });
    },
    addProductToCart: (state, payload) => {
      state.shoppingCart.push(payload);
    },
    removeProductFromCart: (state, id) => {
      state.shoppingCart = state.shoppingCart.filter((el) => el.id !== id);
    },
    updateQuantity: (state, payload) => {
      state.shoppingCart.forEach((el) => {
        if (el.id === payload.id) {
          el.quantity = payload.quantity;
        }
      });
    },
    toggleFavorite: (state, id) => {
      state.products.forEach((el) => {
        if (el.id === id) {
          el.favorite = !el.favorite;
        }
      });
    },
  },
  actions: {
    async loadProducts(context) {
      let response = await fetch(
        "https://random-data-api.com/api/food/random_food?size=30"
      );
      if (response.ok) {
        response = await response.json();
      }
      context.commit("setProducts", response);
      context.commit("setInfo");
    },
  },
  getters: {
    calculateFullPrice: (state) => {
      return state.shoppingCart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    },
    getOrder: (state) => {
      let order = [];
      state.shoppingCart.forEach((el) => {
        let str = `${el.dish}:${el.quantity}`;
        order.push(str);
      });
      return order;
    },
    getFavorites: (state) => {
      return state.products.filter((item) => item.favorite);
    },
  },
});
