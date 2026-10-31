<script setup>
import FooterComponent from "@/components/global/FooterComponent.vue";
import NavbarComponent from "@/components/global/NavbarComponent.vue";
</script>

<template>
  <NavbarComponent />
  <main><slot></slot></main>
  <FooterComponent />
</template>
