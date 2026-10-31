<template>
  <MainBanner />
  <TheFeatures />
  <TopOffers />
  <ProductSwiper :products="products" />
  <TopCategories :categories="categories" />
</template>

<script setup>
import MainBanner from "@/components/home/MainBanner.vue";
import ProductSwiper from "@/components/home/ProductSwiper.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopCategories from "@/components/home/TopCategories.vue";
import TopOffers from "@/components/home/TopOffers.vue";
import CategoryModule from "@/store/Category";
import ProductModule from "@/store/Product";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const productStore = ProductModule();
const { products } = storeToRefs(productStore);

const categoryStore = CategoryModule();
const { categories } = storeToRefs(categoryStore);

onMounted(() => {
  productStore.getProducts();
  categoryStore.getCategories();
});
</script>
