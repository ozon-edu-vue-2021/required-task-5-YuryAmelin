<template>
  <div class="wrapper">
    <h1>Избранные товары</h1>
    <div class="products">
      <app-product-card
        v-for="item in favoriteProducts"
        :key="item.uid"
        :id="item.id"
        :dish="item.dish"
        :price="item.price"
        :description="item.description"
        :imageNumber="item.img"
      >
      </app-product-card>
    </div>
  </div>
</template>

<script>
import AppProductCard from "@/components/AppProductCard";
export default {
  name: "Favorites",
  components: {
    AppProductCard,
  },
  computed: {
    favoriteProducts() {
      return this.$store.getters.getFavorites;
    },
  },
};
</script>

<style scoped>
.products {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
