<template>
  <nav
    class="bg-primary border-0"
    :class="isFixed ? 'fixed z-10 top-0 start-0 w-full fade-down' : 'relative'"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 gap-y-3"
    >
      <RouterLink
        :to="{ name: 'home' }"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          class="w-[165px]"
          src="@/assets/logo.avif"
          alt="logo"
          loading="lazy"
        />
      </RouterLink>

      <form class="flex-1 max-w-[500px] relative">
        <input
          type="text"
          class="py-2 px-5 rounded-full bg-white w-full border-0 outline-none focus-visible:outline-0 text-sm"
          placeholder="Search the store"
        />
        <button
          class="absolute top-0 end-0 h-full px-5 text-[#fdc224] hover:text-dark transition-all duration-300"
        >
          <Search :size="20" />
        </button>
      </form>

      <div class="flex items-center gap-8">
        <div class="flex flex-col gap-1 text-white">
          <span>Need Help?</span>
          <strong>(012) 345-6789</strong>
        </div>
        <div class="flex flex-col items-center gap-1 text-white">
          <User :size="24" />
          <strong>Log In</strong>
        </div>
        <div class="flex flex-col items-center gap-1 text-white">
          <Heart :size="24" />
          <strong>Wishlist</strong>
        </div>
        <div
          class="flex flex-col items-center gap-1 text-white cursor-pointer"
          @click="triggerDrawer"
        >
          <ShoppingBag :size="24" />
          <strong>Cart</strong>
        </div>
      </div>
    </div>
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
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
            stroke-width="2"
            d="M5 7h14M5 12h14M5 17h14"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 rounded text-white md:p-0"
              aria-current="page"
              >Theme Demo</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 px-3 rounded text-white md:p-0"
              >About</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 px-3 rounded text-white md:p-0"
              >Services</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 px-3 rounded text-white md:p-0"
              >Pricing</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 px-3 rounded text-white md:p-0"
              >Contact</a
            >
          </li>
        </ul>
      </div>

      <button
        id="dropdownHoverButton"
        data-dropdown-toggle="dropdownHover"
        data-dropdown-trigger="hover"
        class="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        type="button"
      >
        <img width="30" :src="selectedLang.imgSrc" :alt="selectedLang.title" />
        &nbsp; &nbsp; {{ selectedLang.title }} -
        {{ selectedLang.currency }}
        <svg
          class="w-4 h-4 ms-1.5 -me-0.5"
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
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      <div
        id="dropdownHover"
        class="z-10 hidden bg-white border border-default-medium rounded-base shadow-lg w-44"
      >
        <ul
          class="p-2 text-sm text-body font-medium"
          aria-labelledby="dropdownHoverButton"
        >
          <li v-for="(lang, i) in languages" :key="i">
            <a
              @click="selectedLang = lang"
              class="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded cursor-pointer"
              ><img width="30" :src="lang.imgSrc" :alt="lang.title" /> &nbsp;
              &nbsp; {{ lang.title }} - {{ lang.currency }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <CartComponent />
</template>

<script setup>
import { Heart, Search, ShoppingBag, User } from "@primeicons/vue";
import CartComponent from "./CartComponent.vue";
import { inject, onMounted, onUnmounted, ref } from "vue";
import usaFlag from "@/assets/media/flags/usa-flag.webp";
import egyptFlag from "@/assets/media/flags/egypt-flag.webp";

const emitter = inject("emitter");

const selectedLang = ref({
  imgSrc: usaFlag,
  title: "EG",
  currency: "USD",
});

const languages = [
  {
    imgSrc: usaFlag,
    title: "EG",
    currency: "USD",
  },
  {
    imgSrc: egyptFlag,
    title: "AR",
    currency: "EGP",
  },
];

const triggerDrawer = () => {
  emitter.emit("open-drawer");
};

const isFixed = ref(false);
const handleScroll = () => {
  isFixed.value = window.scrollY > 150;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
.fade-down {
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeDown 0.6s ease-out forwards;
}
@keyframes fadeDown {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
