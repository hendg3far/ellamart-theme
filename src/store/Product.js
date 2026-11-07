import { defineStore } from "pinia";
import { productService } from "@/services/productService";

const ProductModule = defineStore("productModule", {
  state: () => ({
    products: [],
    newProducts: [],
    furnitureProducts: [],
    isLoading: false,
    product: {},
  }),
  actions: {
    async getProducts() {
      this.isLoading = true;
      try {
        const data = await productService.fetchProducts();
        this.products = data.products.slice(0, 10);
      } catch (error) {
        console.error("Failed fetching products:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async getProductsByLaptopCategory() {
      this.isLoading = true;
      try {
        const data = await productService.fetchProducts();
        this.newProducts = data.products.filter(
          // eslint-disable-next-line prettier/prettier
          (el) => el.category === "groceries",
        );
      } catch (error) {
        console.error("Failed fetching products:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async getProductsByFurnitureCategory() {
      this.isLoading = true;
      try {
        const data = await productService.fetchProducts();
        this.furnitureProducts = data.products.filter(
          // eslint-disable-next-line prettier/prettier
          (el) => el.category === "furniture",
        );
      } catch (error) {
        console.error("Failed fetching products:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async getProductById(id) {
      this.isLoading = true;
      try {
        const data = await productService.fetchProductById(id);
        this.product = data;
      } catch (error) {
        console.error("Failed fetching product by ID:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});

export default ProductModule;
