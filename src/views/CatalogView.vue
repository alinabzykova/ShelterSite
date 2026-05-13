<script setup>
import { ref, computed, onMounted } from 'vue'
import AnimalCard from '@/components/AnimalCard.vue'

const animals = ref([])
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

onMounted(async () => {
  const response = await fetch('http://localhost/backend/animals.php')

  animals.value = await response.json()

  console.log(animals.value)
})
</script>

<template>
  <div class="bg-[#f5f5f5] min-h-screen px-4 sm:px-6 lg:px-10 py-6">

    <!-- ФИЛЬТР -->
    <div class="bg-white rounded-3xl p-6 mb-10 shadow-sm">

      <!-- ВЕРХ: ФИЛЬТР + МЕНЮ -->
      <div class="flex justify-between items-center mb-4">

        <h2 class="text-2xl font-bold">
          Фильтр
        </h2>

        <div class="flex gap-8 text-lg mr-0 lg:mr-10">
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
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimalCard
        v-for="animal in filteredAnimals"
        :key="animal.id"
        :animal="animal"
      />
    </div>

  </div>
</template>