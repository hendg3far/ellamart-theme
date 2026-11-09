<template>
  <div class="card flex flex-col gap-3 group bg-white p-4 rounded-xl">
    <div class="relative">
      <RouterLink :to="`/product/${product.id}`">
        <img
          width="200"
          height="192"
          class="object-contain mx-auto group-hover:scale-110 transition-all duration-300 h-48"
          loading="lazy"
          :src="currentThumbnail"
          :alt="product.title"
        />
      </RouterLink>

      <button
        @click="openQuickView"
        class="bg-dark text-white rounded-full py-2 px-4 text-sm absolute top-[50%] inset-x-0 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-fit"
      >
        Quick View
      </button>
    </div>

    <h3 class="font-medium text-xl truncate">
      <RouterLink :to="`/product/${product.id}`">{{
        product.title
      }}</RouterLink>
    </h3>
    <p class="text-gray-600 line-clamp-2 text-sm">{{ product.description }}</p>

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

    <span class="flex gap-2 items-center">
      <del class="text-gray-400 text-sm">${{ product.price }} USD</del>
      <strong class="font-medium text-red-600"
        >${{ discountedPrice }} USD</strong
      >
    </span>

    <div class="flex gap-2 mt-2 overflow-x-auto pb-1">
      <img
        v-for="(image, i) in product.images"
        :key="i"
        width="40"
        height="40"
        loading="lazy"
        :class="[
          'rounded-full object-cover border p-1 cursor-pointer transition-all',
          currentThumbnail === image
            ? 'border-red-500 scale-105'
            : 'border-gray-200',
        ]"
        :src="image"
        :alt="product.title"
        @click="changeThumbnail(image)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, defineProps, inject } from "vue";

const emitter = inject("emitter");

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const selectedImage = ref(null);

const currentThumbnail = computed(() => {
  return selectedImage.value || props.product.thumbnail;
});

const changeThumbnail = (image) => {
  selectedImage.value = image;
};

const discountedPrice = computed(() => {
  const price = props.product.price;
  const discount = props.product.discountPercentage || 0;
  return (price - price * (discount / 100)).toFixed(1);
});

const openQuickView = () => {
  emitter.emit("open-quick-view", props.product);
};
</script>
