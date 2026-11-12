<template>
  <div
    class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-96 border-e border-default flex flex-col"
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    tabindex="-1"
    aria-labelledby="drawer-label"
  >
    <div class="border-b border-default pb-4 mb-5 flex items-center">
      <h5
        id="drawer-label"
        class="inline-flex items-center text-lg font-medium text-body"
      >
        Shopping Cart
      </h5>
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
    <div class="flex-1">
      <p class="mb-5 text-sm text-body" v-if="!cartItems.length">
        Your cart is empty
      </p>

      <template v-if="cartItems">
        <div v-for="item in cartItems" class="flex gap-3" :key="item.id">
          <img
            width="100"
            height="100"
            :src="item.thumbnail"
            :alt="item.title"
          />
          <div class="flex flex-col">
            <h5 class="text-sm">{{ item.title }}</h5>
          </div>
        </div>
      </template>
    </div>
    <div class="flex items-center gap-4 mt-auto">
      <button
        type="button"
        class="px-5 py-3 bg-dark text-white rounded hover:bg-primary duration-300 transition-colors"
      >
        Continue Shopping
      </button>
      <button
        type="button"
        class="px-5 py-3 bg-primary text-white rounded hover:bg-dark duration-300 transition-colors"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup>
import CartModule from "@/store/Cart";
import { storeToRefs } from "pinia";
// import { storeToRefs } from "pinia";
import { inject, onMounted, ref } from "vue";

const emitter = inject("emitter");
const isOpen = ref(false);

const openDrawer = () => {
  isOpen.value = !isOpen.value;
};

const cartStore = CartModule();
const { cartItems } = storeToRefs(cartStore);
const { getCartItems } = cartStore;

onMounted(() => {
  emitter.on("open-drawer", openDrawer);
  getCartItems();
});
</script>
