export const getters = {
  calculateFullPrice: (state) => {
    return state.shoppingCart.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  },
  getOrder: (state) => {
    return state.shoppingCart.map((el) => `${el.dish}:${el.quantity}`);
  },
  getFavorites: (state) => {
    return state.products.filter((item) => item.favorite);
  },
};
