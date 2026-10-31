<template>
  <MainBanner />
  <TheFeatures />
  <TopOffers />
  <FlashDeals :products="products" />
</template>

<script setup>
import FlashDeals from "@/components/home/FlashDeals.vue";
import MainBanner from "@/components/home/MainBanner.vue";
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
