<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const popularPets = [
  {
    id: 1,
    name: "Рекс",
    age: "1 год",
    image: "/images/dogs/Рекс 1.jpg"
  },
  {
    id: 2,
    name: "Бобик",
    age: "4 года",
    image: "/images/dogs/Бобик 1.jpg"
  },
  {
    id: 3,
    name: "Лайка",
    age: "3 года",
    image: "/images/dogs/Лайка 1.jpg"
  },
  {
    id: 4,
    name: "Джек",
    age: "5 лет",
    image: "/images/dogs/Джек 1.jpg"
  }
]

const goToAnimal = (id) => {
  router.push(`/animal/${id}`)
}
</script>

<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Популярные животные</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="pet in popularPets" :key="pet.id" class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
          <img :src="pet.image" :alt="pet.name" class="w-full h-64 object-cover">
          <div class="p-4">
            <h3 class="text-xl font-bold text-gray-800 mb-1">{{ pet.name }}</h3>
            <p class="text-gray-600 mb-3">{{ pet.age }}</p>
            <button 
              @click="goToAnimal(pet.id)"
              class="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>