<template>
  <div
    class="bg-white overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 z-50 max-w-[800px] w-[90%] h-fit max-h-[85vh] p-8 rounded-xl shadow-2xl transition-all duration-300 ease-in-out"
    :class="
      isOpen
        ? '-translate-x-1/2 -translate-y-1/2 opacity-100 scale-100'
        : '-translate-x-1/2 -translate-y-[100vh] opacity-0 scale-95'
    "
  >
    <div class="flex items-center">
      <button
        @click="isOpen = false"
        type="button"
        aria-controls="drawer-example"
        class="text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
    </div>

    <div v-if="product" class="grid grid-cols-12">
      <div class="lg:col-span-5 col-span-12">
        <div class="flex flex-col gap-3">
          <img
            :src="currentThumbnail"
            :alt="product.title"
            class="w-full h-auto mb-4"
          />
          <div class="relative">
            <swiper v-bind="swiperOptions" :modules="modules">
              <swiper-slide v-for="(img, i) in product.images" :key="i">
                <img
                  width="100"
                  @click="changeThumbnail(img)"
                  :src="img"
                  class="object-cover cursor-pointer"
                />
              </swiper-slide>
              <div
                class="swiper-button-prev border border-gray-600 text-gray-600 rounded-full p-3 z-20 w-10 h-10"
              ></div>
              <div
                class="swiper-button-next border border-gray-600 text-gray-600 rounded-full p-3 z-20 w-10 h-10"
              ></div>
            </swiper>
          </div>
        </div>
      </div>
      <div class="lg:col-span-7 col-span-12">
        <h1 class="font-bold text-2xl mb-3 capitalize">
          {{ product.title }}
        </h1>
        <div class="flex justify-between items-center mb-12">
          <div class="flex items-center text-amber-400">
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

          <span
            :class="product.stock > 0 ? 'bg-teal-500' : 'bg-red-500'"
            class="text-white px-2 py-1 rounded text-xs w-fit"
          >
            Stock: {{ product.stock }}
          </span>
        </div>

        <div class="flex flex-col gap-3">
          <p>{{ product.description }}</p>
          <span class="flex gap-2 items-center">
            <del class="text-gray-400 text-sm">${{ product.price }} USD</del>
            <strong class="font-medium text-red-600">
              ${{ ((product.price || 0) * 0.9).toFixed(2) }} USD</strong
            >
          </span>

          <p>
            <strong class="font-semibold">Availability: </strong>
            <span class="text-sm">{{ product.availabilityStatus }}</span>
          </p>

          <p>
            <strong class="font-semibold">Brand: </strong>
            <span class="text-sm">{{ product.brand }}</span>
          </p>

          <form class="max-w-xs">
            <label
              for="quantity-input"
              class="block mb-2.5 text-sm font-semibold"
              >Choose quantity:</label
            >
            <div
              class="relative flex items-center max-w-[8rem] bg-light rounded-full"
            >
              <button
                @click="quantity > 1 ? quantity-- : false"
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                class="text-body font-medium leading-5 rounded-s-full text-sm px-3 focus:outline-none h-10"
              >
                <svg
                  class="w-4 h-4 text-heading"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                data-input-counter-min="1"
                data-input-counter-max="50"
                aria-describedby="helper-text-explanation"
                class="border-x-0 h-10 placeholder:text-heading text-heading text-center w-full bg-light py-2.5 placeholder:text-body"
                placeholder="999"
                value="5"
                required
                v-model="quantity"
              />
              <button
                @click="quantity++"
                type="button"
                id="increment-button"
                data-input-counter-increment="quantity-input"
                class="text-body font-medium leading-5 rounded-e-full text-sm px-3 focus:outline-none h-10"
              >
                <svg
                  class="w-4 h-4 text-heading"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </button>
            </div>
          </form>
          <p class="text-sm">
            <strong class="font-semibold">Subtotal: </strong>
            <span class="text-gray-500">${{ subtotal.toFixed(2) }} USD</span>
          </p>
          <div class="mt-6">
            <button
              class="px-10 py-3 bg-dark text-white rounded-full hover:bg-primary duration-300 transition-colors"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, onUnmounted, ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Autoplay, Navigation];

const emitter = inject("emitter");
const isOpen = ref(false);

const product = ref(null);

const quantity = ref(1);

const subtotal = computed(() => {
  return (product.value?.price || 0) * 0.9 * quantity.value;
});

const selectedImage = ref(null);

const currentThumbnail = computed(() => {
  return selectedImage.value || product.value?.thumbnail;
});

const changeThumbnail = (image) => {
  selectedImage.value = image;
};

const openQuickView = (data) => {
  selectedImage.value = null;
  quantity.value = 1;
  product.value = data;
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  emitter.on("open-quick-view", openQuickView);
});

onUnmounted(() => {
  emitter.off("open-quick-view", openQuickView);
});

const swiperOptions = {
  slidesPerView: 3,
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
    },
    576: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
  },
};
</script>
