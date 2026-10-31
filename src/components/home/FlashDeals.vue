<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <h2 class="font-bold text-5xl mb-12">Flash Deals</h2>

    <swiper v-bind="swiperOptions" :modules="modules">
      <swiper-slide v-for="product in props.products" :key="product.id">
        <div class="card flex flex-col gap-3 group">
          <img
            width="200"
            height="200"
            class="object-contain mx-auto group-hover:scale-110 transition-all duration-300"
            :src="product.thumbnail"
            :alt="product.title"
          />
          <h3 class="font-medium text-xl truncate">{{ product.title }}</h3>
          <p class="text-gray-600 line-clamp-2 text-sm">
            {{ product.description }}
          </p>
          <div class="flex text-amber-400">
            <svg
              v-for="star in 5"
              :key="star"
              :class="
                star <= Math.round(product.rating)
                  ? 'text-amber-400'
                  : 'text-gray-200'
              "
              class="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>

            <span class="text-xs text-gray-500 font-medium ml-1"
              >({{ product.rating.toFixed(1) }})</span
            >
          </div>
          <span class="flex gap-2"
            ><del class="text-gray-400 text-sm">${{ product.price }} USD</del>
            <strong class="font-medium"
              >${{
                (
                  product.price -
                  product.price * (product.discountPercentage / 100)
                ).toFixed(1)
              }}
              USD</strong
            ></span
          >
          <div class="flex gap-2 mt-2">
            <img
              v-for="(image, i) in product.images"
              :key="i"
              width="40"
              height="40"
              class="rounded-full object-cover border border-light p-1"
              :src="image"
              :alt="product.title"
              @click="product.thumbnail = image"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const modules = [Autoplay];

const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: () => [],
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
