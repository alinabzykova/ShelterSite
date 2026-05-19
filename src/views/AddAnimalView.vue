<template>
  <div class="min-h-screen bg-gray-100 p-10">

    <div class="max-w-xl mx-auto bg-white rounded-3xl p-8">

      <h1 class="text-3xl font-bold mb-6">
        Добавить животное
      </h1>

      <form @submit.prevent="addAnimal" class="flex flex-col gap-4">

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

        <textarea
          v-model="animal.description"
          placeholder="Описание"
          class="border p-3 rounded-xl h-32"
        ></textarea>

        <input
          v-model="animal.image"
          type="text"
          placeholder="/images/dogs/dog.jpg"
          class="border p-3 rounded-xl"
        >

        <button
          type="submit"
          class="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700"
        >
          Добавить
        </button>

      </form>

    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'

const animal = reactive({
  name: '',
  age: '',
  size: '',
  description: '',
  image: ''
})

const addAnimal = async () => {

  const newAnimal = {
    name: animal.name,
    age: animal.age,
    size: animal.size,
    description: animal.description,
    image: animal.image
  }

  console.log(newAnimal)

  await fetch('http://localhost/shelter-site/backend/addAnimal.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAnimal)
  })

  alert('Животное добавлено')

  animal.name = ''
  animal.age = ''
  animal.size = ''
  animal.description = ''
  animal.image = ''
}
</script>