export const mutations = {
  setProducts: (state, payload) => {
    state.products = payload;
    state.products.map((el) => {
      el.price = Math.floor(Math.random() * 1000 + 200);
      el.img = Math.round(Math.random() * 11);
      el.favorite = false;
    });
  },
  addProductToCart: (state, payload) => {
    state.shoppingCart = [...state.shoppingCart, payload];
  },
  removeProductFromCart: (state, id) => {
    state.shoppingCart = state.shoppingCart.filter((el) => el.id !== id);
  },
  updateSum: (state, payload) => {
    return state.shoppingCart.map((el) => {
      if (el.id === payload.id) {
        el.quantity = payload.quantity;
      }
    });
  },
  toggleFavorite: (state, id) => {
    state.products = state.products.map((item) => {
      if (item.id === id) {
        item.favorite = !item.favorite;
      }
      return item;
    });
  },
};
