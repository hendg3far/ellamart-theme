<template>
  <div
    class="main-banner py-28 bg-cover"
    :style="{ backgroundImage: `url(${bgImage})` }"
  >
    <div class="max-w-screen-xl mx-auto px-4 flex flex-col gap-8">
      <h1 class="text-5xl text-white leading-relaxed font-bold">
        <span class="text-secondary">Huge Saving</span> on <br />
        UHD Televisions
      </h1>

      <p class="text-white text-lg">Sale up to 70% off on selected items*</p>

      <div>
        <button
          class="py-3 px-6 text-white font-medium border border-white rounded-full w-auto hover:bg-white hover:text-dark transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import bgImage from "@/assets/media/banner_17.webp";
</script>
