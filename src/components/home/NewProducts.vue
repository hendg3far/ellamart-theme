<template>
  <div class="px-4 py-8">
    <h2 class="font-bold text-5xl mb-12">New Products</h2>
    <div class="grid grid-cols-12 items-center">
      <div class="md:col-span-8 col-span-12">
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
        </swiper>
      </div>
      <div class="col-span-4 md:block hidden">
        <img
          src="@/assets/media/offers/home5-customsection-1.png"
          alt="offers"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../global/ProductCard.vue";
import ProductCardSkeleton from "../global/ProductCardSkeleton.vue";

const modules = [Autoplay];

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
  slidesPerView: 3,
  spaceBetween: 50,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1330: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
};
</script>
