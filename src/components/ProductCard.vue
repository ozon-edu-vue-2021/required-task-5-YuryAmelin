<template>
  <div class="wrapper">
    <img :src="require(`../assets/images/${imageNumber}.webp`)" alt="" />
    <div class="info">
      <h2>{{ dish }}</h2>
      <p>{{ description }}</p>
      <h2>{{ price }} Рублей</h2>
      <div class="row">
        <label for="quantity">Кол-во</label>
        <input
          type="number"
          :disabled="isInCart"
          id="quantity"
          v-model="quantity"
        />
        <button
          class="cart"
          @click.prevent="toCart"
          :disabled="isInCart || quantityError"
        >
          {{ isInCart ? "Товар в корзине" : "В корзину" }}
        </button>
        <button class="favorite" @click="toFavorite">В избр.</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "AppProductCard.vue",
  props: {
    price: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      default: "",
    },
    dish: {
      type: String,
      default: "",
    },
    imageNumber: {
      type: Number,
      default: null,
    },
    id: {
      type: Number,
      default: null,
    },
  },
  data: () => ({
    toggle: false,
    quantity: "1",
  }),
  methods: {
    ...mapMutations(["addProductToCart", "toggleFavorite"]),
    toCart() {
      this.toggle = true;
      this.addProductToCart({
        id: this.id,
        price: this.price,
        dish: this.dish,
        quantity: this.quantity,
      });
    },
    toFavorite() {
      this.toggleFavorite(this.id);
    },
  },
  computed: {
    ...mapState(["shoppingCart"]),
    quantityError() {
      return this.quantity <= 0;
    },
    isInCart() {
      return this.shoppingCart.find((el) => el.id === this.id);
    },
  },
};
</script>

<style scoped>
h2,
p,
input {
  margin: 5px;
}

input {
  width: 100px;
}

button.cart {
  width: 200px;
  color: white;
  font-size: 20px;
  background-color: mediumvioletred;
  border: 3px solid rebeccapurple;
  border-radius: 20px;
}

button:disabled {
  background-color: darkgrey;
  border-color: #2c3e50;
}

p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 3.9em;
}

img {
  max-width: 400px;
  max-height: 400px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  max-width: 400px;
  height: 600px;
}

.info {
  display: flex;
  flex-direction: column;
  height: 300px;
  align-content: space-around;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.favorite {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>
