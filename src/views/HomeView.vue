<template>
  <MainBanner />
  <TheFeatures />
  <TopOffers />
  <ProductSwiper :products="products" />
</template>

<script setup>
import MainBanner from "@/components/home/MainBanner.vue";
import ProductSwiper from "@/components/home/ProductSwiper.vue";
import TheFeatures from "@/components/home/TheFeatures.vue";
import TopOffers from "@/components/home/TopOffers.vue";
import ProductModule from "@/store/Product";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const productStore = ProductModule();
const { products } = storeToRefs(productStore);

onMounted(() => {
  productStore.getProducts();
});
</script>
