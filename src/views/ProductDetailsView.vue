<template>
  <div class="max-w-screen-xl mx-auto p-8">
    <div v-if="isLoading" class="h-screen flex justify-center items-center">
      <div
        class="flex items-center justify-center bg-neutral-secondary-soft h-56 w-56 border border-default text-fg-brand-strong text-xs font-medium rounded-base"
      >
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-neutral-quaternary animate-spin fill-brand"
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
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>

    <div v-else-if="product">
      <div class="grid grid-cols-12">
        <div class="lg:col-span-5 col-span-12">
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-full h-auto mb-4"
          />
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
                />
                <button
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
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-12">
      <p>Product not found.</p>
    </div>
  </div>
</template>

<script setup>
import { watch, computed } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import ProductModule from "@/store/Product";

const route = useRoute();
const productId = computed(() => route.params.id);

const productStore = ProductModule();
const { product, isLoading } = storeToRefs(productStore);

watch(
  () => productId.value,
  (newId) => {
    if (newId) {
      productStore.getProductById(newId);
    }
  },
  // eslint-disable-next-line prettier/prettier
  { immediate: true },
);
</script>
