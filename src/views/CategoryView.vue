<template>
  <div class="max-w-screen-xl mx-auto p-8">
    <h2 class="font-bold text-5xl mb-12 uppercase">{{ CategoryName }}</h2>
    <div class="grid grid-cols-12 gap-4">
      <template v-if="isLoading">
        <div class="grid grid-cols-12 gap-4">
          <div
            v-for="i in 4"
            :key="i"
            class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
          >
            <ProductCardSkeleton />
          </div>
        </div>
      </template>
      <template v-else>
        <div
          class="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12"
          v-for="product in category"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { storeToRefs } from "pinia";

import ProductCard from "@/components/global/ProductCard.vue";
import ProductCardSkeleton from "@/components/global/ProductCardSkeleton.vue";
import CategoryModule from "@/store/Category";

import { useRoute } from "vue-router";
const route = useRoute();

const categoryStore = CategoryModule();
const { category, isLoading } = storeToRefs(categoryStore);

const CategoryName = computed(() => route.params.type);

watch(
  () => route.params.type,
  (newType) => {
    categoryStore.getCategoriesByType(newType);
    window.scrollTo(0, 0);
  },
  // eslint-disable-next-line prettier/prettier
  { immediate: true },
);
</script>
