<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<script setup>
import MainLayout from "./layouts/MainLayout.vue";
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
