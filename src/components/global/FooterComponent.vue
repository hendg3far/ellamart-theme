<template>
  <footer class="bg-light py-8">
    <div
      class="container mx-auto px-4 flex flex-col items-center gap-4 text-center"
    >
      <img
        width="188"
        height="36"
        :src="FooterLogo"
        alt="logo"
        loading="lazy"
      />
      <p>
        &copy; {{ new Date().getFullYear() }} My Store. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import FooterLogo from "@/assets/footer-logo.png";
</script>
