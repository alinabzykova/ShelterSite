<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const selectedImage = ref('')

const route = useRoute()
const animalId = Number(route.params.id)

const animals = [
  { id: 1, name: 'Рекс', age: 3, size: 'Большой', images: [ '/images/dog1.jpg', '/images/dog2.jpg', '/images/dog3.jpg'], description: 'Очень дружелюбный пёс' },
  { id: 2, name: 'Бобик', age: 2, size: 'Средний', image: '/images/dog2.jpg', description: 'Активный и умный' },
  { id: 3, name: 'Лайка', age: 1, size: 'Маленький', image: '/images/dog3.jpg', description: 'Ласковая и спокойная' },
  { id: 4, name: 'Джек', age: 4, size: 'Большой', image: '/images/dog1.jpg', description: 'Очень преданный' },
  { id: 5, name: 'Тузик', age: 5, size: 'Средний', image: '/images/dog2.jng', description: 'Любит гулять' },
  { id: 6, name: 'Снежок', age: 2, size: 'Маленький', image: '/images/dog3.jng', description: 'Очень ласковый' }
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

      <div class="grid grid-cols-2 gap-10 items-center">

        <div>

    <!-- БОЛЬШОЕ ФОТО -->
    <img
        :src="selectedImage"
        class="w-full h-[400px] object-cover rounded-2xl"
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

          <h1 class="text-4xl font-bold mb-4">
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