import { defineStore } from "pinia";

const ProductModule = defineStore("productModule", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        this.products = data.products.slice(0, 10);
      } catch (error) {
        console.error("Failed fetching products:", error);
      }
    },
  },
});

export default ProductModule;
