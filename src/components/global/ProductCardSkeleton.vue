<template>
  <div
    class="card flex flex-col gap-3 bg-white p-4 rounded-xl shadow-sm animate-pulse"
  >
    <div class="bg-gray-200 rounded-lg h-48 w-full"></div>
    <div class="h-6 bg-gray-200 rounded w-3/4"></div>

    <div class="space-y-2">
      <div class="h-4 bg-gray-200 rounded w-full"></div>
      <div class="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>

    <div class="flex items-center gap-1">
      <div
        v-for="star in 5"
        :key="star"
        class="w-5 h-5 bg-gray-200 rounded-sm"
      ></div>
      <div class="h-3 bg-gray-200 rounded w-8 ml-1"></div>
    </div>

    <div class="flex gap-2 items-center">
      <div class="h-4 bg-gray-200 rounded w-16"></div>
      <div class="h-5 bg-gray-200 rounded w-20"></div>
    </div>

    <div class="flex gap-2 mt-2 overflow-x-auto pb-1">
      <div
        v-for="thumb in 3"
        :key="thumb"
        class="w-10 h-10 bg-gray-200 rounded-full border border-gray-100 flex-shrink-0"
      ></div>
    </div>
  </div>
</template>
