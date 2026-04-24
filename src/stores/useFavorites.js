// src/stores/useFavorites.js
import { ref, computed } from 'vue'

const STORAGE_KEY = 'favorites_ids'

// Глобальное состояние (хранит ID избранных животных)
const favoritesIds = ref([])

// Загружаем сохранённые ID из localStorage при запуске
const saved = localStorage.getItem(STORAGE_KEY)
if (saved) {
  try {
    favoritesIds.value = JSON.parse(saved)
  } catch (e) {
    console.error('Ошибка загрузки избранного', e)
  }
}

export function useFavorites() {
  // Сохраняем в localStorage
  const saveFavorites = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesIds.value))
  }

  // Добавить в избранное
  const addFavorite = (id) => {
    if (!favoritesIds.value.includes(id)) {
      favoritesIds.value.push(id)
      saveFavorites()
    }
  }

  // Удалить из избранного
  const removeFavorite = (id) => {
    favoritesIds.value = favoritesIds.value.filter(favId => favId !== id)
    saveFavorites()
  }

  // Переключить (добавить/удалить)
  const toggleFavorite = (id) => {
    if (favoritesIds.value.includes(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

  // Проверить, в избранном ли животное с таким id
  const isFavorite = (id) => {
    return favoritesIds.value.includes(id)
  }

  // Получить полные объекты избранных животных
  const getFavoriteAnimals = (allAnimals) => {
    return allAnimals.filter(animal => isFavorite(animal.id))
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