<template>
  <div class="max-w-[1600px] mx-auto px-4 py-8">
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
          v-for="product in productsByType"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, watch, defineProps } from "vue";
import { storeToRefs } from "pinia";

import ProductCard from "@/components/global/ProductCard.vue";
import ProductCardSkeleton from "@/components/global/ProductCardSkeleton.vue";
import CategoryModule from "@/store/Category";

import { useRoute } from "vue-router";
const route = useRoute();

const categoryStore = CategoryModule();
const { productsByType } = storeToRefs(categoryStore);

const CategoryName = computed(() => route.params.type);

defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});

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
