<script setup>
import { ref, computed } from 'vue'
import AnimalCard from '@/components/AnimalCard.vue'

const animals = ref([
  { id: 1, name: 'Рекс', age: 3, size: 'Большой', image: '/images/dog1.jpg' },
  { id: 2, name: 'Бобик', age: 2, size: 'Средний', image: '/images/dog2.jpg' },
  { id: 3, name: 'Лайка', age: 1, size: 'Маленький', image: '/images/dog3.jpg' },
  { id: 4, name: 'Джек', age: 4, size: 'Большой', image: '/images/dog1.jpg' },
  { id: 5, name: 'Тузик', age: 5, size: 'Средний', image: '/images/dog2.jpg' },
  { id: 6, name: 'Шарик', age: 5, size: 'Маленький', image: '/images/dog3.jpg' }
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
  <div class="bg-[#f5f5f5] min-h-screen px-10 py-10">

    <!-- ФИЛЬТР -->
    <div class="bg-white rounded-3xl p-6 mb-10 shadow-sm">

      <!-- ВЕРХ: ФИЛЬТР + МЕНЮ -->
      <div class="flex justify-between items-center mb-4">

        <h2 class="text-2xl font-bold">
          Фильтр
        </h2>

        <div class="flex gap-8 text-lg mr-10">
          <router-link to="/" class="hover:text-red-500">
            Главная
          </router-link>

          <router-link to="/profile" class="hover:text-red-500">
            Профиль
          </router-link>

          <router-link to="/login" class="hover:text-red-500">
            Войти
          </router-link>
        </div>

      </div>

      <!-- САМ ФИЛЬТР -->
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

    </div>

    <!-- КАРТОЧКИ -->
    <div class="grid grid-cols-3 gap-8">
      <AnimalCard
        v-for="animal in filteredAnimals"
        :key="animal.id"
        :animal="animal"
      />
    </div>

  </div>
</template>