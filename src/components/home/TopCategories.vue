<template>
  <div class="bg-light">
    <div class="max-w-screen-xl mx-auto px-4 py-8">
      <h2 class="font-bold text-5xl mb-12">Top Categories</h2>
      <div class="grid grid-cols-12 gap-8">
        <div
          class="lg:col-span-3 sm:col-span-6 col-span-12"
          v-for="cat in props.categories"
          :key="cat.slug"
        >
          <div
            class="bg-white flex justify-center items-center w-30 h-30 rounded-full"
          >
            <h5 class="text-lg font-sans uppercase font-semibold">
              {{ cat.name }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
