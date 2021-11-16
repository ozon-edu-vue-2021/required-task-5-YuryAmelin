<template>
  <div class="wrapper" v-if="this.$store.state.shoppingCart.length">
    <cart-item
      v-for="item in cartItems"
      :key="item.id"
      :id="item.id"
      :price="item.price"
      :dish="item.dish"
      :quantity="item.quantity"
    >
    </cart-item>
    <h2>Общая стоимость покупок: {{ fullPrice }} Руб.</h2>
    <button @click="makeOrder">Оформить</button>
  </div>
  <div v-else>
    <h1>В корзине пока ничего нет.</h1>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import { mapState, mapGetters } from "vuex";
export default {
  name: "ShoppingCart.vue",
  components: {
    CartItem,
  },
  methods: {
    makeOrder() {
      alert(this.order);
    },
  },
  computed: {
    ...mapState(["shoppingCart"]),
    ...mapGetters(["calculateFullPrice", "getOrder"]),
    cartItems() {
      return this.shoppingCart;
    },
    fullPrice() {
      return this.calculateFullPrice;
    },
    order() {
      return this.getOrder;
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
