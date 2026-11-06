import { apiClient } from "./api";

export const categoryService = {
  async fetchCategories() {
    return await apiClient.get("/products/categories");
  },

  async fetchCategoriesByType(type) {
    return await apiClient.get(`/products/category/${type}`);
  },
};
