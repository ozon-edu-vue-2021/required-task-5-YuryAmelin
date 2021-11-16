export const actions = {
  async loadProducts({ commit }) {
    let response = await fetch(
      "https://random-data-api.com/api/food/random_food?size=30"
    );
    if (response.ok) {
      response = await response.json();
      commit("setProducts", response);
    }
  },
};
