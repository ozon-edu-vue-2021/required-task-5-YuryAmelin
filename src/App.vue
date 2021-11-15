<template>
  <div id="app">
    <nav>
      <router-link to="/"
        ><button class="navButton">Товары</button></router-link
      >
      <router-link to="/favorites"
        ><button class="navButton">Избранное</button></router-link
      >
      <router-link to="/shoppingCart"
        ><button class="navButton">Корзина</button></router-link
      >
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},

  created() {
    this.$store.dispatch("loadProducts");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
