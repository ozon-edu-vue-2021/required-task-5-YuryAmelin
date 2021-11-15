<template>
  <div class="wrapper">
    <div class="products">
      <app-product-card
        v-for="item in products"
        :key="item.id"
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
  name: "Home",
  components: {
    AppProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
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
