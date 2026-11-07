import { apiClient } from "./api";

export const productService = {
  async fetchProducts() {
    return await apiClient.get("/products");
  },
  async fetchProductById(id) {
    return await apiClient.get(`/products/${id}`);
  },
};
