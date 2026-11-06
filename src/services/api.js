/* eslint-disable prettier/prettier */
import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Global Error:", error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  },
);

// Add this export line:
export const apiClient = instance;
