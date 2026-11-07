import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/categories/:type",
    name: "categories",
    component: () => import("../views/CategoryView.vue"),
  },
  {
    path: "/product/:id",
    name: "product-details",
    component: () => import("../views/ProductDetailsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
