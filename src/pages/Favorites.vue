<template>
  <div class="wrapper">
    <h1>Избранные товары</h1>
    <div class="products">
      <product-card
        v-for="item in getFavorites"
        :key="item.uid"
        :id="item.id"
        :dish="item.dish"
        :price="item.price"
        :description="item.description"
        :imageNumber="item.img"
      >
      </product-card>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import { mapGetters } from "vuex";
export default {
  name: "Favorites",
  components: {
    ProductCard,
  },
  computed: {
    ...mapGetters(["getFavorites"]),
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
