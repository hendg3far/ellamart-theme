import { apiClient } from "./api";

export const categoryService = {
  async fetchCategories() {
    return await apiClient.get("/products/categories");
  },
};
