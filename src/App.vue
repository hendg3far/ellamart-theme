<template>
  <MainLayout>
    <RouterView />
    <QuickView />
  </MainLayout>
</template>

<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import QuickView from "./components/global/QuickView.vue";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
