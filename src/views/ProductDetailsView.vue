<template>
  <div class="max-w-screen-xl mx-auto p-8">
    <h2 class="font-bold text-5xl mb-12 uppercase">{{ product.title }}</h2>
  </div>
</template>

<script setup>
import { watch, computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import ProductModule from "@/store/Product";

const route = useRoute();
const productId = computed(() => route.params.id);

const productStore = ProductModule();

const { product } = storeToRefs(productStore);

watch(
  () => productId.value,
  (newId) => {
    productStore.getProductById(newId);
  },
  // eslint-disable-next-line prettier/prettier
  { immediate: true },
);
</script>
