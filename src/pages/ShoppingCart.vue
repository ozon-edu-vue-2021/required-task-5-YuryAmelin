<template>
  <div class="wrapper" v-if="this.$store.state.shoppingCart.length">
    <app-cart-item
      v-for="item in cartItems"
      :key="item.id"
      :id="item.id"
      :price="item.price"
      :dish="item.dish"
      :quantity="item.quantity"
    >
    </app-cart-item>
    <h2>Общая стоимость покупок: {{ fullPrice }} Руб.</h2>
    <button @click="makeOrder">Оформить</button>
  </div>
  <div v-else>
    <h1>В корзине пока ничего нет.</h1>
  </div>
</template>

<script>
import AppCartItem from "@/components/AppCartItem";
export default {
  name: "ShoppingCart.vue",
  components: {
    AppCartItem,
  },
  methods: {
    makeOrder() {
      alert(this.order);
    },
  },
  computed: {
    cartItems() {
      return this.$store.state.shoppingCart;
    },
    fullPrice() {
      return this.$store.getters.calculateFullPrice;
    },
    order() {
      return this.$store.getters.getOrder;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
