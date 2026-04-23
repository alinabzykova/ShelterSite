<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const selectedImage = ref('')

const route = useRoute()
const animalId = Number(route.params.id)

const animals = [
  { id: 1, name: 'Рекс', age: 1, size: 'Маленький', images: ['/images/dogs/Рекс 1.jpg','/images/dogs/Рекс 2.jpg','/images/dogs/Рекс 3.jpg'], description: 'Очень дружелюбный и общительный пёс' },
  { id: 2, name: 'Бобик', age: 4, size: 'Большой', images: ['/images/dogs/Бобик 1.jpg','/images/dogs/Бобик 2.jpg','/images/dogs/Бобик 3.jpg'], description: 'Ласковый, дружелюбный, активный, умный, внимательный' },
  { id: 3, name: 'Лайка', age: 3, size: 'Средний', images: ['/images/dogs/Лайка 1.jpg','/images/dogs/Лайка 2.jpg','/images/dogs/Лайка 3.jpg'], description: 'Ласковая и спокойная' },
  { id: 4, name: 'Джек', age: 5, size: 'Большой', images: ['/images/dogs/Джек 1.jpg','/images/dogs/Джек 2.jpg','/images/dogs/Джек 3.jpeg'], description: 'Преданный, ласковый, активный.' },
  { id: 5, name: 'Тузик', age: 3, size: 'Средний', images: ['/images/dogs/Тузик 1.jpg','/images/dogs/Тузик 2.jpg','/images/dogs/Тузик 3.jpg'], description: 'Любит гулять' },
  { id: 6, name: 'Шарик', age: 1, size: 'Маленький', images: ['/images/dogs/Шарик 1.png','/images/dogs/Шарик 2.png','/images/dogs/Шарик 3.png'], description: 'Очень ласковый и нежный' }
]

let animal = null

for (let i = 0; i < animals.length; i++) {
  if (animals[i].id === animalId) {
    animal = animals[i]
  }
}

if (animal) {
  selectedImage.value = animal.images[0]
}

function getAgeText(age) {
  if (age === 1) return age + ' год'
  if (age >= 2 && age <= 4) return age + ' года'
  return age + ' лет'
}
</script>

<template>
  <div class="bg-[#f5f5f5] min-h-screen p-10">

    <!-- КНОПКА НАЗАД -->
    <router-link to="/catalog" class="text-red-500 mb-6 inline-block">
      ← Назад в каталог
    </router-link>

    <div v-if="animal" class="bg-white rounded-3xl p-8 max-w-5xl mx-auto shadow-sm">

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div>

    <!-- БОЛЬШОЕ ФОТО -->
    <img
        :src="selectedImage"
        class="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-2xl"
    />

    <!-- МАЛЕНЬКИЕ ФОТО -->
    <div class="flex gap-3 mt-4">
        <img
        v-for="img in animal.images"
        :key="img"
        :src="img"
        @click="selectedImage = img"
        class="w-20 h-20 object-cover rounded-xl cursor-pointer"
        />
    </div>
    </div>

        <!-- ИНФОРМАЦИЯ -->
        <div>

          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {{ animal.name }}
          </h1>

          <p class="text-gray-600 text-lg">
            {{ getAgeText(animal.age) }} • {{ animal.size }}
          </p>

          <div class="mt-6 bg-[#f9f9f9] p-4 rounded-xl">
            <p>
              {{ animal.description }}
            </p>
          </div>

          <div class="mt-8">
            <button class="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl">
                В избранное
            </button>
          </div>

        </div>

      </div>

    </div>

    <div v-else>
      <p>Собака не найдена</p>
    </div>

  </div>
</template>