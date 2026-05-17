<script setup>
import { ref, computed } from 'vue'
import AnimalCard from '@/components/AnimalCard.vue'

const animals = ref([
  { id: 1, name: 'Рекс', age: 1, size: 'Маленький', images: '/images/dogs/Рекс 1.jpg' },
  { id: 2, name: 'Бобик', age: 4, size: 'Большой', images: '/images/dogs/Бобик 1.jpg' },
  { id: 3, name: 'Лайка', age: 3, size: 'Средний', images: '/images/dogs/Лайка 1.jpg' },
  { id: 4, name: 'Джек', age: 5, size: 'Большой', images: '/images/dogs/Джек 1.jpg' },
  { id: 5, name: 'Тузик', age: 3, size: 'Средний', images: '/images/dogs/Тузик 1.jpg' },
  { id: 6, name: 'Шарик', age: 1, size: 'Маленький', images: '/images/dogs/Шарик 1.png' }
])

const selectedSize = ref('')
const selectedAge = ref('')

const filteredAnimals = computed(() => {
  return animals.value.filter(a => {
    return (
      (!selectedAge.value || a.age == selectedAge.value) &&
      (!selectedSize.value || a.size === selectedSize.value)
    )
  })
})
</script>

<template>

  <div class="bg-[#f5f5f5] min-h-screen px-4 sm:px-6 lg:px-10 py-6">

    <div class="bg-white rounded-3xl p-6 mb-10 shadow-sm">

   
      <div class="flex justify-between items-center mb-4 flex-wrap gap-4">
        <h2 class="text-2xl font-bold">
          Фильтр
        </h2>


        <div class="flex gap-6 text-lg">
          <router-link to="/" class="hover:text-red-500 transition">
            Главная
          </router-link>

          <router-link to="/profile" class="hover:text-red-500 transition">
            Профиль
          </router-link>

          <router-link to="/login" class="hover:text-red-500 transition">
            Войти
          </router-link>
        </div>
      </div>


      <div class="flex justify-between items-center flex-wrap gap-4">
        <div class="flex gap-4 flex-wrap">
          <select v-model="selectedAge" class="border rounded-xl px-4 py-2">
            <option value="">Любой возраст</option>
            <option value="1">1 год</option>
            <option value="2">2 года</option>
            <option value="3">3 года</option>
            <option value="4">4 года</option>
            <option value="5">5 лет</option>
          </select>

          <select v-model="selectedSize" class="border rounded-xl px-4 py-2">
            <option value="">Любой размер</option>
            <option>Маленький</option>
            <option>Средний</option>
            <option>Большой</option>
          </select>
        </div>


        <router-link to="/add-animal">
          <button class="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 transition whitespace-nowrap">
            Добавить животное
          </button>
        </router-link>
      </div>

    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimalCard
        v-for="animal in filteredAnimals"
        :key="animal.id"
        :animal="animal"
      />
    </div>

  </div>
</template>