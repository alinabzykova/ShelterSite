<!-- src/views/AnimalView.vue -->
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFavorites } from '@/stores/useFavorites'
import Header from '../components/Header.vue'

const route = useRoute()
const { toggleFavorite, isFavorite } = useFavorites()

// Данные о животном (в реальном проекте ты будешь получать их из API или массива)
const animal = ref({
  id: null,
  name: '',
  age: '',
  size: '',
  description: '',
  images: ''
})

// Массив всех животных (должен совпадать с CatalogView)
const allAnimals = [
  { id: 1, name: 'Рекс', age: 1, size: 'Маленький', images: '/images/dogs/Рекс 1.jpg', description: 'Очень дружелюбный и общительный пёс' },
  { id: 2, name: 'Бобик', age: 4, size: 'Большой', images: '/images/dogs/Бобик 1.jpg', description: 'Ласковый, дружелюбный, активный, умный, внимательный' },
  { id: 3, name: 'Лайка', age: 3, size: 'Средний', images: '/images/dogs/Лайка 1.jpg', description: 'Энергичная и игривая' },
  { id: 4, name: 'Джек', age: 5, size: 'Большой', images: '/images/dogs/Джек 1.jpg', description: 'Спокойный и верный' },
  { id: 5, name: 'Тузик', age: 3, size: 'Средний', images: '/images/dogs/Тузик 1.jpg', description: 'Весёлый и активный' },
  { id: 6, name: 'Шарик', age: 1, size: 'Маленький', images: '/images/dogs/Шарик 1.png', description: 'Маленький и игривый щенок' }
]

onMounted(() => {
  const id = Number(route.params.id)
  const found = allAnimals.find(a => a.id === id)
  if (found) {
    animal.value = found
  }
})

function getAgeText(age) {
  if (age === 1) return `${age} год`
  if (age >= 2 && age <= 4) return `${age} года`
  return `${age} лет`
}

function handleFavoriteClick() {
  if (animal.value.id) {
    toggleFavorite(animal.value.id)
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#f5f5f5]">
    <Header />
    
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-3xl overflow-hidden shadow-md max-w-4xl mx-auto">
        
        <!-- Кнопка "Назад в каталог" -->
        <div class="p-4 border-b">
          <router-link to="/catalog" class="text-red-500 hover:text-red-600">
            ← Назад в каталог
          </router-link>
        </div>

        <div class="flex flex-col md:flex-row">
          <!-- Фото -->
          <div class="md:w-1/2 p-6">
            <img 
              :src="animal.images" 
              :alt="animal.name"
              class="w-full aspect-square object-cover rounded-2xl"
            />
          </div>

          <!-- Информация -->
          <div class="md:w-1/2 p-6">
            <h1 class="text-4xl font-bold">{{ animal.name }}</h1>
            <p class="text-gray-500 text-lg mt-2">
              {{ getAgeText(animal.age) }} · {{ animal.size }}
            </p>
            <p class="text-gray-700 mt-4 leading-relaxed">
              {{ animal.description }}
            </p>

            <!-- Кнопка "В избранное" -->
            <button 
              @click="handleFavoriteClick"
              class="mt-6 px-6 py-3 rounded-xl font-medium transition-colors"
              :class="isFavorite(animal.id) 
                ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                : 'bg-red-500 text-white hover:bg-red-600'"
            >
              {{ isFavorite(animal.id) ? '★ В избранном' : '☆ В избранное' }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>