<template>
  <div class="min-h-screen bg-[url('/images/shelterbg.png')] bg-cover bg-center p-10">
    <Header />

    <div class="profile-itself max-w-[1200px] mx-auto rounded-[40px]">
      
      <!-- аватарка -->
      <div class="avatar bg-red-900 rounded-full justify-self-center self-center">
        <img src="/images/paw.png">
      </div>

      <!-- имя и заголовок -->
      <div class="name rounded-[40px] p-2 flex flex-col justify-center">
        <div class="text-center lg:text-left">
          <h1 class="text-4xl lg:text-8xl font-bold text-white">
            ИМЯ
          </h1>

          <h2 class="text-xl lg:text-2xl text-white mt-6 font-semibold">
            ИЗБРАННОЕ
          </h2>
        </div>
      </div>

      <!-- нижняя часть -->
      <div class="info rounded-[40px]">
        
        <!-- описание -->
        <div class="description bg-white rounded-[40px] p-5 min-h-[300px]">
          Здесь будет описание вашего профиля. Оно может быть длинным и занимать несколько строк.
        </div>

        <!-- избранное -->
        <div class="flex flex-col gap-4">

          <div v-if="favoriteAnimals.length === 0" class="bg-white rounded-[40px] p-5 text-center text-gray-400">
            Нет избранных животных 😢
            <router-link to="/catalog" class="block text-red-500 mt-2">
              Перейти в каталог →
            </router-link>
          </div>

          <div 
            v-for="animal in favoriteAnimals" 
            :key="animal.id"
            class="bg-white rounded-[40px] p-5 hover:bg-gray-50 transition cursor-pointer"
            @click="goToAnimal(animal.id)"
          >
            <div class="flex items-center gap-4">
              <img 
                :src="animal.image" 
                class="w-12 h-12 rounded-full object-cover"
              >
              <div>
                <h3 class="font-bold text-lg">{{ animal.name }}</h3>
                <p class="text-gray-500 text-sm">
                  {{ getAgeText(animal.age) }} · {{ animal.size }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- футер -->
    <footer class="bg-[#7a0000] text-white  px-10 py-4 flex justify-end gap-x-8 rounded-[20px]">
      <div>+7 (999) 999-99-99</div>
      <div>г. Владикавказ</div>
      <div>© 2026</div>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import { useFavorites } from '@/stores/useFavorites'

const router = useRouter()

const animals = ref([
  { id: 1, name: 'Рекс', age: 1, size: 'Маленький', image: '/images/dogs/Рекс 1.jpg' },
  { id: 2, name: 'Бобик', age: 4, size: 'Большой', image: '/images/dogs/Бобик 1.jpg' },
  { id: 3, name: 'Лайка', age: 3, size: 'Средний', image: '/images/dogs/Лайка 1.jpg' },
  { id: 4, name: 'Джек', age: 5, size: 'Большой', image: '/images/dogs/Джек 1.jpg' },
  { id: 5, name: 'Тузик', age: 3, size: 'Средний', image: '/images/dogs/Тузик 1.jpg' },
  { id: 6, name: 'Шарик', age: 1, size: 'Маленький', image: '/images/dogs/Шарик 1.png' }
])

const { getFavoriteAnimals } = useFavorites()

const favoriteAnimals = computed(() => getFavoriteAnimals(animals.value))

const goToAnimal = (animalId) => {
  router.push(`/animal/${animalId}`)
}

function getAgeText(age) {
  if (age === 1) return age + ' год'
  if (age >= 2 && age <= 4) return age + ' года'
  return age + ' лет'
}
</script>

<style scoped>
.profile-itself {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 10px;
}

.info {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-column: span 2;
}

.featured {
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.description {
  width: 100%;
}

</style>