<template>
  <div class="min-h-screen bg-gray-100 p-10">

    <div class="max-w-6xl mx-auto">

      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold">
          Панель администратора
        </h1>

        <button
          @click="logout"
          class="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700"
        >
          Выйти
        </button>
      </div>


      <div class="bg-white rounded-3xl p-8 mb-10 shadow">

        <h2 class="text-2xl font-bold mb-6">
          Добавить животное
        </h2>

        <form
          @submit.prevent="addAnimal"
          class="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

          <input
            v-model="animal.name"
            type="text"
            placeholder="Кличка"
            class="border p-3 rounded-xl"
          >

          <input
            v-model="animal.age"
            type="number"
            placeholder="Возраст"
            class="border p-3 rounded-xl"
          >

          <input
            v-model="animal.size"
            type="text"
            placeholder="Размер"
            class="border p-3 rounded-xl"
          >

          <input
            v-model="animal.image"
            type="text"
            placeholder="Ссылка на фото"
            class="border p-3 rounded-xl"
          >

          <textarea
            v-model="animal.description"
            placeholder="Описание"
            class="border p-3 rounded-xl md:col-span-2 h-32"
          ></textarea>

          <button
            type="submit"
            class="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 md:col-span-2"
          >
            Добавить животное
          </button>

        </form>

      </div>


      <div class="bg-white rounded-3xl p-8 shadow">

        <h2 class="text-2xl font-bold mb-6">
          Все животные
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div
            v-for="animal in animals"
            :key="animal.id"
            class="border rounded-2xl overflow-hidden"
          >

            <img
              :src="animal.image"
              class="w-full h-60 object-cover"
            >

            <div class="p-4">

              <h3 class="text-2xl font-bold">
                {{ animal.name }}
              </h3>

              <p class="text-gray-500">
                {{ animal.age }} лет · {{ animal.size }}
              </p>

              <p class="mt-3 text-gray-700">
                {{ animal.description }}
              </p>

              <button
                @click="deleteAnimal(animal.id)"
                class="mt-4 bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800"
              >
                Удалить
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const animals = ref([])

const animal = ref({
  name: '',
  age: '',
  size: '',
  description: '',
  image: ''
})

onMounted(() => {

  const isAdmin = localStorage.getItem('isAdmin')

  if (!isAdmin) {
    router.push('/login')
  }

  loadAnimals()
})

const loadAnimals = async () => {

  const response = await fetch(
    'http://localhost/shelter-site/backend/animals.php'
  )

  animals.value = await response.json()
}

const addAnimal = async () => {

  await fetch(
    'http://localhost/shelter-site/backend/addAnimal.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(animal.value)
    }
  )

  animal.value = {
    name: '',
    age: '',
    size: '',
    description: '',
    image: ''
  }

  loadAnimals()
}

const deleteAnimal = async (id) => {

  await fetch(
    'http://localhost/shelter-site/backend/deleteAnimal.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    }
  )

  loadAnimals()
}

const logout = () => {

  localStorage.removeItem('isAdmin')
  localStorage.removeItem('isLoggedIn')

  router.push('/login')
}
</script>