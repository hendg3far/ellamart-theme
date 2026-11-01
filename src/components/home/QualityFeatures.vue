<template>
  <div class="max-w-[1600px] mx-auto px-4 py-8">
    <div class="flex gap-4 justify-between items-center">
      <div
        class="flex flex-col gap-3 text-center"
        v-for="(item, i) in data"
        :key="i"
      >
        <img
          width="45"
          height="45"
          class="object-contain mx-auto"
          :src="item.img"
          :alt="item.title"
          loading="lazy"
        />
        <h4 class="text-lg">{{ item.title }}</h4>
        <p class="text-gray-400 text-sm">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import Image1 from "@/assets/media/features/home5-multicolumn-16.png";
import Image2 from "@/assets/media/features/home5-multicolumn-17.png";
import Image3 from "@/assets/media/features/home5-multicolumn-18.png";
import Image4 from "@/assets/media/features/home5-multicolumn-19.png";
import Image5 from "@/assets/media/features/home5-multicolumn-20.png";

const data = [
  {
    img: Image1,
    title: "Quality and Saving",
    text: "Comprehensive quality control and affordable prices",
  },
  {
    img: Image2,
    title: "Global Warehouse",
    text: "37 overseas warehouses",
  },
  {
    img: Image3,
    title: "Fast Shipping",
    text: "Fast and convenient door to door delivery",
  },
  {
    img: Image4,
    title: "Payment Security",
    text: "More than 10 different secure payment methods",
  },
  {
    img: Image5,
    title: "Have Questions?",
    text: "24/7 Customer Service - We’re here and happy to help!",
  },
];
</script>
