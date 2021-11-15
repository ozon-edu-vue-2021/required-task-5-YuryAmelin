<template>
  <div class="row">
    <h2>{{ dish }}</h2>
    <label for="quantity">Кол-во</label>
    <input
      type="number"
      id="quantity"
      v-model="amount"
      min="0"
      @blur="updateQuantity"
    />
    <h2>Всего на: {{ getSum }} рублей.</h2>
    <button @click="remove">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "AppCartItem.vue",
  props: {
    id: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    dish: {
      type: String,
      default: null,
    },
    quantity: {
      type: String,
      default: "0",
    },
  },
  data: () => ({
    amount: null,
  }),
  mounted() {
    this.amount = this.quantity;
  },
  methods: {
    updateQuantity() {
      this.$store.commit("updateQuantity", {
        id: this.id,
        quantity: this.amount,
      });
    },
    remove() {
      this.$store.commit("removeProductFromCart", this.id);
    },
  },
  computed: {
    getSum() {
      return this.amount * this.price;
    },
  },
};
</script>

<style scoped>
h2,
input {
  margin: 15px;
}
input {
  width: 100px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
</style>
