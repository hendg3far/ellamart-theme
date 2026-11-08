<template>
  <div
    class="bg-white overflow-y-auto overflow-x-hidden fixed top-0 inset-0 m-auto z-50 justify-center items-center max-w-[800px]"
    :class="isOpen ? 'translate-y-0' : '-translate-y-full'"
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
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";

const emiiter = inject("emitter");
const isOpen = ref(false);

const openQuickView = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  emiiter.on("open-quick-view", openQuickView);
});
</script>
