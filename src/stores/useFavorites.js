import { ref, computed } from 'vue'

export function useFavorites() {

  const currentUser = localStorage.getItem('userEmail')

  const STORAGE_KEY = `favorites_${currentUser}`

  const favoritesIds = ref([])

  const saved = localStorage.getItem(STORAGE_KEY)

  if (saved) {

    try {

      favoritesIds.value = JSON.parse(saved)

    } catch (e) {

      console.error('Ошибка загрузки избранного', e)

    }

  }

  const saveFavorites = () => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(favoritesIds.value)
    )

  }

  const addFavorite = (id) => {

    if (!favoritesIds.value.includes(id)) {

      favoritesIds.value.push(id)
      saveFavorites()

    }

  }

  const removeFavorite = (id) => {

    favoritesIds.value = favoritesIds.value.filter(
      favId => favId !== id
    )

    saveFavorites()

  }

  const toggleFavorite = (id) => {

    if (favoritesIds.value.includes(id)) {

      removeFavorite(id)

    } else {

      addFavorite(id)

    }

  }

  const isFavorite = (id) => {

    return favoritesIds.value.includes(id)

  }

  const getFavoriteAnimals = (allAnimals) => {

    return allAnimals.filter(
      animal => favoritesIds.value.includes(animal.id)
    )

  }

  return {

    favoritesIds: computed(() => favoritesIds.value),

    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    getFavoriteAnimals

  }

}