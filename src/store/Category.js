import { defineStore } from "pinia";
import { categoryService } from "@/services/categoryService";

const CategoryModule = defineStore("categoryModule", {
  state: () => ({
    categories: [],
    isLoading: false,
    productsByType: [],
  }),
  actions: {
    async getCategories() {
      this.isLoading = true;
      try {
        const data = await categoryService.fetchCategories();
        this.categories = data.slice(0, 8);
      } catch (error) {
        console.error("Failed fetching categories:", error);
      } finally {
        this.isLoading = false;
      }
    },

    async getCategoriesByType(type) {
      this.isLoading = true;
      try {
        const data = await categoryService.fetchCategoriesByType(type);
        this.productsByType = data.products;
      } catch (error) {
        console.error("Failed fetching categories by type:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});

export default CategoryModule;
