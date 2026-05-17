<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Header />
    
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-6xl mx-auto">
        
        <div class="bg-gradient-to-r from-[#5C0000] to-[#8B0000] rounded-3xl shadow-md mb-6">
          <div class="flex flex-col md:flex-row items-center gap-8 p-8">
            
            <div class="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <img 
                v-if="avatarUrl" 
                :src="avatarUrl" 
                class="w-full h-full object-cover"
              >
              <img 
                v-else 
                src="/images/avatar.jpg"
              >
            </div>
            

            <div class="flex-1 text-center md:text-left">
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">
                {{ userName }}
              </h1>
              <p class="text-red-200">На сайте с {{ joinDate }}</p>
              

              <div class="mt-6 pt-4 border-t border-red-400/30">
                <div>
                  <div class="text-2xl font-bold text-white">{{ favoriteCount }}</div>
                  <div class="text-sm text-red-200">В избранном</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <div class="space-y-6">
            
  
            <div class="bg-white rounded-2xl shadow-md p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>📝</span> О себе
              </h2>
              <p class="text-gray-600 leading-relaxed">
                {{ aboutText }}
              </p>
            </div>
            
            <div class="bg-white rounded-2xl shadow-md p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span>📞</span> Контакты
              </h2>
              <div class="space-y-3">
                <div class="flex items-center gap-3 text-gray-600">
                  <span class="text-lg">📧</span>
                  <span>{{ userEmail }}</span>
                </div>
                <div class="flex items-center gap-3 text-gray-600">
                  <span class="text-lg">📱</span>
                  <span>{{ userPhone }}</span>
                </div>
                <div class="flex items-center gap-3 text-gray-600">
                  <span class="text-lg">📍</span>
                  <span>{{ userCity }}</span>
                </div>
              </div>
            </div>
            
          </div>
          

          <div class="bg-white rounded-2xl shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>❤️</span> Избранное
              <span class="text-sm text-gray-400 ml-2">({{ favoriteCount }})</span>
            </h2>
            
            <div v-if="favoriteAnimalsList.length === 0" class="text-center py-12">
              <div class="text-6xl mb-4">🐕</div>
              <p class="text-gray-400 mb-4">У вас пока нет избранных животных</p>
              <router-link 
                to="/catalog" 
                class="inline-block bg-[#DE2E2E] text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition"
              >
                Перейти в каталог →
              </router-link>
            </div>
            
            <div v-else class="space-y-3 max-h-[500px] overflow-y-auto pr-2">
              <div 
                v-for="animal in favoriteAnimalsList" 
                :key="animal.id"
                class="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition cursor-pointer group"
                @click="goToAnimal(animal.id)"
              >
                <img 
                  :src="animal.image || '/images/paw.png'" 
                  :alt="animal.name"
                  class="w-16 h-16 rounded-xl object-cover"
                  @error="handleImageError"
                >
                <div class="flex-1">
                  <h3 class="font-bold text-gray-800 transition">
                    {{ animal.name }}
                  </h3>
                  <p class="text-gray-500 text-sm">
                    {{ getAgeText(animal.age) }} · {{ animal.size }}
                  </p>
                </div>
                <button 
                  @click.stop="removeFromFavorites(animal.id)"
                  class="text-gray-400 hover:text-red-500 transition p-2"
                  title="Удалить из избранного"
                >
                  ❌
                </button>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import AppFooter from '../components/AppFooter.vue'
import { useFavorites } from '@/stores/useFavorites'

const router = useRouter()
const favoritesStore = useFavorites()

const userName = ref('Алана Бирагова')
const avatarUrl = ref('')
const joinDate = ref('15 марта 2024')
const aboutText = ref('Люблю животных и помогаю приюту. Мечтаю забрать домой собаку! 🐕')
const userEmail = ref('alana@gmail.com')
const userPhone = ref('+7 (999) 123-45-67')
const userCity = ref('Владикавказ')


const allAnimals = ref([
  { id: 1, name: 'Рекс', age: 1, size: 'Маленький', image: '/images/dogs/Рекс 1.jpg' },
  { id: 2, name: 'Бобик', age: 4, size: 'Большой', image: '/images/dogs/Бобик 1.jpg' },
  { id: 3, name: 'Лайка', age: 3, size: 'Средний', image: '/images/dogs/Лайка 1.jpg' },
  { id: 4, name: 'Джек', age: 5, size: 'Большой', image: '/images/dogs/Джек 1.jpg' },
  { id: 5, name: 'Тузик', age: 3, size: 'Средний', image: '/images/dogs/Тузик 1.jpg' },
  { id: 6, name: 'Шарик', age: 1, size: 'Маленький', image: '/images/dogs/Шарик 1.png' }
])

const favoriteAnimalsList = computed(() => {
  return favoritesStore.getFavoriteAnimals(allAnimals.value)
})

const favoriteCount = computed(() => favoritesStore.favoritesIds.value.length)


const removeFromFavorites = (animalId) => {
  favoritesStore.removeFavorite(animalId)
}

const goToAnimal = (animalId) => {
  router.push(`/animal/${animalId}`)
}

const getAgeText = (age) => {
  if (age === 1) return age + ' год'
  if (age >= 2 && age <= 4) return age + ' года'
  return age + ' лет'
}

const handleImageError = (e) => {
  e.target.src = '/images/paw.png'
}
</script>

<style scoped>
</style>