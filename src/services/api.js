import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Global Error:", error.response?.data || error.message);
    return Promise.reject(error);
    // eslint-disable-next-line prettier/prettier
  },
);
