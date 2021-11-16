<template>
  <div id="app">
    <nav>
      <router-link v-for="route in menu" :key="route.name" :to="route.path">
        <button class="navButton">{{ route.name }}</button>
      </router-link>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { routes } from "@/router/routes";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  methods: {
    ...mapActions(["loadProducts"]),
  },
  created() {
    this.loadProducts();
  },
  computed: {
    menu() {
      return routes;
    },
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
