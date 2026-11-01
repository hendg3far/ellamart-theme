<template>
  <MainBanner />
  <TheFeatures />
  <TopOffers />
  <ProductSwiper :products="products" :is-loading="productsLoading" />
  <TopCategories :categories="categories" :is-loading="categoryLoading" />
  <NewProducts :products="newProducts" :is-loading="productsLoading" />
  <QualityFeatures />
</template>

<script setup>
import MainBanner from "@/components/home/MainBanner.vue";
import NewProducts from "@/components/home/NewProducts.vue";
import ProductSwiper from "@/components/home/ProductSwiper.vue";
import QualityFeatures from "@/components/home/QualityFeatures.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopCategories from "@/components/home/TopCategories.vue";
import TopOffers from "@/components/home/TopOffers.vue";
import CategoryModule from "@/store/Category";
import ProductModule from "@/store/Product";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const productStore = ProductModule();
const {
  products,
  newProducts,
  isLoading: productsLoading,
} = storeToRefs(productStore);

const categoryStore = CategoryModule();
const { categories, isLoading: categoryLoading } = storeToRefs(categoryStore);

onMounted(() => {
  productStore.getProducts();
  productStore.getProductsByLaptopCategory();
  categoryStore.getCategories();
});
</script>
