<template>
  <div class="px-4 py-8">
    <h2 class="font-bold text-red-600 text-5xl mb-12">Flash Deals</h2>

    <template v-if="isLoading">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <ProductCardSkeleton v-for="i in 4" :key="i" />
      </div>
    </template>

    <swiper v-else v-bind="swiperOptions" :modules="modules">
      <swiper-slide v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </swiper-slide>
      <div
        class="swiper-button-prev border border-gray-600 text-gray-600 rounded-full p-3 z-20 w-10 h-10"
      ></div>
      <div
        class="swiper-button-next border border-gray-600 text-gray-600 rounded-full p-3 z-20 w-10 h-10"
      ></div>
    </swiper>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../global/ProductCard.vue";
import ProductCardSkeleton from "../global/ProductCardSkeleton.vue";

const modules = [Autoplay, Navigation];

defineProps({
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const swiperOptions = {
  slidesPerView: 5,
  spaceBetween: 50,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1330: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
};
</script>
