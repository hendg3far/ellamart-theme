import { defineStore } from "pinia";

const CategoryModule = defineStore("categoryModule", {
  state: () => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        console.log(data);
        this.categories = data.slice(0, 8);
      } catch (error) {
        console.error("Failed fetching categories:", error);
      }
    },
  },
});

export default CategoryModule;
