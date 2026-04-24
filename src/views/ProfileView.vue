<!-- src/views/ProfileView.vue -->
<template>
  <div class="min-h-screen bg-[url('/images/shelterbg.png')] bg-cover bg-center p-10">
    <Header />

    <div class="profile-itself w-475 h-250 rounded-[40px]">
      
      <div class="avatar bg-red-900 rounded-full justify-self-center self-center">
        <img src="/images/paw.png" class="justify-self-center self-center">
      </div>

      <div class="name rounded-[40px] p-2 flex flex-col justify-between h-screen">
        <div class="imya">
          <h1 class="named text-9xl">ИМЯ</h1>
        </div>
        <div class="izbrannoe">
          <h1 class="named text-4xl">ИЗБРАННОЕ</h1>
        </div>
      </div>

      <div class="info rounded-[40px]">
        
        <div class="description bg-white rounded-[40px] justify-self-center self-center p-5 break-words">
          Здесь будет описание вашего профиля. Оно может быть длинным и занимать несколько строк.
        </div>

        <div class="featured rounded-[40px]">
          
          <div v-if="favoriteAnimals.length === 0" class="bg-white rounded-[40px] p-5 text-center text-gray-400">
            Нет избранных животных 😢
            <router-link to="/catalog" class="block text-red-500 mt-2">Перейти в каталог →</router-link>
          </div>

          <!-- ✨ ИЗМЕНЕНО: теперь отображается ИМЯ животного вместо ссылки -->
          <div 
            v-for="animal in favoriteAnimals" 
            :key="animal.id"
            class="f-item bg-white rounded-[40px] p-5 hover:bg-gray-50 transition cursor-pointer"
            @click="goToAnimal(animal.id)"
          >
            <div class="flex items-center gap-4">
              <img 
                :src="animal.images" 
                :alt="animal.name"
                class="w-12 h-12 rounded-full object-cover"
              >
              <div>
                <h3 class="font-bold text-lg">{{ animal.name }}</h3>
                <p class="text-gray-500 text-sm">{{ animal.age }} год · {{ animal.size }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.profile-itself {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 10px;
}

.info {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-column: span 2;
}

.featured {
  display: grid;
  grid-gap: 10px;
}

.avatar {
  width: 50%;
  height: 100%;
  align-content: center;
}

.description {
  width: 50%;
  height: 100%;
}

.name {
  height: 100%;
}

.named {
  color: white;
  font-weight: 900;
  font-family: 'Montserrat', bold;
}

.urls {
  font-weight: 900;
  font-family: 'Montserrat', bold;
}
</style>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import { useFavorites } from '@/stores/useFavorites'

const router = useRouter()

const animals = ref([
  { id: 1, name: 'Рекс', age: 1, size: 'Маленький', images: '/images/dogs/Рекс 1.jpg' },
  { id: 2, name: 'Бобик', age: 4, size: 'Большой', images: '/images/dogs/Бобик 1.jpg' },
  { id: 3, name: 'Лайка', age: 3, size: 'Средний', images: '/images/dogs/Лайка 1.jpg' },
  { id: 4, name: 'Джек', age: 5, size: 'Большой', images: '/images/dogs/Джек 1.jpg' },
  { id: 5, name: 'Тузик', age: 3, size: 'Средний', images: '/images/dogs/Тузик 1.jpg' },
  { id: 6, name: 'Шарик', age: 1, size: 'Маленький', images: '/images/dogs/Шарик 1.png' }
])

const { getFavoriteAnimals } = useFavorites()

const favoriteAnimals = computed(() => getFavoriteAnimals(animals.value))

const goToAnimal = (animalId) => {
  router.push(`/animal/${animalId}`)
}
</script>