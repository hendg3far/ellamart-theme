import { apiClient } from "./api";

export const productService = {
  async fetchProducts() {
    return await apiClient.get("/products");
  },
};
