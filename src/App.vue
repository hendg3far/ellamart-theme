<template>
  <MainLayout>
    <RouterView />
    <CartComponent />
    <QuickView />
  </MainLayout>
</template>

<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import QuickView from "./components/global/QuickView.vue";
import CartComponent from "./components/global/CartComponent.vue";
// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
