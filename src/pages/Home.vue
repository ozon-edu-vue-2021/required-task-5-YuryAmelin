<template>
  <div class="wrapper">
    <div class="products">
      <product-card
        v-for="item in products"
        :key="item.id"
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
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ProductCard,
  },
  computed: mapState(["products"]),
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
