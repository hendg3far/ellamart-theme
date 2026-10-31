<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <h2 class="font-bold text-red-600 text-5xl mb-12">Flash Deals</h2>

    <div
      class="flex justify-center items-center h-[400px]"
      v-if="!props.products || props.products.length === 0"
    >
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-8 h-8 text-primary animate-spin fill-brand"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="#10ffda"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>

    <swiper v-else v-bind="swiperOptions" :modules="modules">
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
            <strong class="font-medium text-red-600"
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

const modules = [Autoplay, Navigation];

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
