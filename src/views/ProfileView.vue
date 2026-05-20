<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import AppFooter from '../components/AppFooter.vue'
import { useFavorites } from '@/stores/useFavorites'

const router = useRouter()
const favoritesStore = useFavorites()
const currentUser = localStorage.getItem('userEmail')

onMounted(async () => {

  const isLoggedIn = localStorage.getItem('isLoggedIn')

  if (!isLoggedIn) {
    router.push('/login')
  }

  const response = await fetch(
    'http://localhost/shelter-site/backend/animals.php'
  )

  allAnimals.value = await response.json()

})

const userName = ref(
  localStorage.getItem('userName') || 'Пользователь'
)

const userEmail = ref(
  localStorage.getItem('userEmail') || ''
)

const aboutText = ref(
  localStorage.getItem(`aboutText_${currentUser}`) ||
  'Люблю животных и помогаю приюту 🐕'
)

const userPhone = ref(
  localStorage.getItem(`userPhone_${currentUser}`) || ''
)

const userCity = ref(
  localStorage.getItem(`userCity_${currentUser}`) || ''
)

const avatarUrl = ref(
  localStorage.getItem('avatarUrl') || ''
)

const allAnimals = ref([])

const isEditingAbout = ref(false)
const isEditingContacts = ref(false)

const favoriteAnimalsList = computed(() => {
  return favoritesStore.getFavoriteAnimals(allAnimals.value)
})

const favoriteCount = computed(() => {
  return favoritesStore.favoritesIds.value.length
})

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

const logout = () => {

  localStorage.removeItem('isLoggedIn')
  localStorage.removeItem('userName')
  localStorage.removeItem('userEmail')
  localStorage.removeItem('isAdmin')

  router.push('/login')
}

const toggleAboutEdit = () => {

  if (isEditingAbout.value) {
    localStorage.setItem(
      `aboutText_${currentUser}`,
      aboutText.value
    )
  }

  isEditingAbout.value = !isEditingAbout.value
}

const toggleContactsEdit = () => {

  if (isEditingContacts.value) {

    localStorage.setItem(
      `userPhone_${currentUser}`,
      userPhone.value
    )

    localStorage.setItem(
      `userCity_${currentUser}`,
      userCity.value
    )

  }

  isEditingContacts.value = !isEditingContacts.value
}
</script>

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

              <div class="mt-6 pt-4 border-t border-red-400/30">

                <div>
                  <div class="text-2xl font-bold text-white">
                    {{ favoriteCount }}
                  </div>

                  <div class="text-sm text-red-200">
                    В избранном
                  </div>
                </div>

              </div>

              <button
                @click="logout"
                class="mt-6 bg-white text-red-700 px-6 py-2 rounded-xl hover:bg-gray-100 transition"
              >
                Выйти
              </button>

            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div class="space-y-6">

            <div class="bg-white rounded-2xl shadow-md p-6">

              <div class="flex items-center justify-between mb-4">

                <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span>📝</span> О себе
                </h2>

                <button
                  @click="toggleAboutEdit"
                  class="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
                >
                  {{ isEditingAbout ? 'Сохранить' : 'Редактировать' }}
                </button>

              </div>

              <textarea
                v-if="isEditingAbout"
                v-model="aboutText"
                class="w-full border rounded-xl p-3"
              ></textarea>

              <p
                v-else
                class="text-gray-600 leading-relaxed"
              >
                {{ aboutText }}
              </p>

            </div>

            <div class="bg-white rounded-2xl shadow-md p-6">

              <div class="flex items-center justify-between mb-4">

                <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <span>📞</span> Контакты
                </h2>

                <button
                  @click="toggleContactsEdit"
                  class="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition"
                >
                  {{ isEditingContacts ? 'Сохранить' : 'Редактировать' }}
                </button>

              </div>

              <div class="space-y-3">

                <div class="flex items-center gap-3 text-gray-600">
                  <span class="text-lg">📧</span>
                  <span>{{ userEmail }}</span>
                </div>

                <div class="flex items-center gap-3 text-gray-600">

                  <span class="text-lg">📱</span>

                  <input
                    v-if="isEditingContacts"
                    v-model="userPhone"
                    placeholder="Введите номер телефона"
                    class="border rounded-lg px-2 py-1"
                  />

                  <span v-else>
                    {{ userPhone || 'Не указан' }}
                  </span>

                </div>

                <div class="flex items-center gap-3 text-gray-600">

                  <span class="text-lg">📍</span>

                  <input
                    v-if="isEditingContacts"
                    v-model="userCity"
                    placeholder="Введите город"
                    class="border rounded-lg px-2 py-1"
                  />

                  <span v-else>
                    {{ userCity || 'Не указан' }}
                  </span>

                </div>

              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow-md p-6">

            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>❤️</span> Избранное
              <span class="text-sm text-gray-400 ml-2">
                ({{ favoriteCount }})
              </span>
            </h2>

            <div
              v-if="favoriteAnimalsList.length === 0"
              class="text-center py-12"
            >

              <div class="text-6xl mb-4">
                🐕
              </div>

              <p class="text-gray-400 mb-4">
                У вас пока нет избранных животных
              </p>

              <router-link 
                to="/catalog" 
                class="inline-block bg-[#DE2E2E] text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition"
              >
                Перейти в каталог →
              </router-link>

            </div>

            <div
              v-else
              class="space-y-3 max-h-[500px] overflow-y-auto pr-2"
            >

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

<style scoped>
</style>