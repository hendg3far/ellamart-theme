import { defineStore } from "pinia";
import { categoryService } from "@/services/categoryService";

const CategoryModule = defineStore("categoryModule", {
  state: () => ({
    categories: [],
    isLoading: false,
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
  },
});

export default CategoryModule;
