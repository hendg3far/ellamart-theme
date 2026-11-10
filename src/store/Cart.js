import { defineStore } from "pinia";

const CartModule = defineStore("cartModule", {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product, quantity) {
      if (!product) {
        console.error("Product is undefined or null.");
        return;
      }
      const existingItem = this.cartItems.find(
        // eslint-disable-next-line prettier/prettier
        (item) => item.id === product.id,
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.cartItems.push({ ...product, quantity });
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      console.log("Product added to cart:", this.cartItems);
    },
    getCartItems() {
      const storedItems = localStorage.getItem("cartItems");
      if (storedItems) {
        this.cartItems = JSON.parse(storedItems);
      }
      console.log("Cart items retrieved:", this.cartItems);
    },
    removeFromCart(productId) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
  },
});

export default CartModule;
