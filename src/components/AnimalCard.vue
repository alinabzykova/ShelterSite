<script setup>
defineProps({
  animal: Object
})

function getAgeText(age){
  if (age === 1) return `${age} год`
  if (age >= 2 && age <= 4) return `${age} года`
  return `${age} лет`
}
</script>

<template>
    <router-link :to="`/animal/${animal.id}`">
      <div class="bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition cursor-pointer">

        <img
          :src="animal.images"
          alt=""
          class="w-full aspect-square object-cover rounded-2xl"
        />

        <h2 class="text-xl font-bold mt-4">
          {{ animal.name }}
        </h2>

        <p class="text-gray-500">
          {{ getAgeText(animal.age) }} • {{ animal.size }}
        </p>

        <button class="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl">
          Подробнее
        </button>

       </div>
    </router-link>
  </template>