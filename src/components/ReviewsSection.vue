<script setup>
const reviews = [
  {
    id: 1,
    name: "Анна Смирнова",
    petName: "Взяла собаку Рекса",
    rating: 5,
    text: "Огромное спасибо приюту! Рекс стал настоящим членом нашей семьи. Очень добрые и ответственные сотрудники, помогли с выбором питомца и дали ценные советы по уходу."
  },
  {
    id: 2,
    name: "Михаил Петров",
    petName: "Усыновил Джека",
    rating: 5,
    text: "Отличный приют! Все животные ухоженные, привитые. Сотрудники очень внимательно относятся к каждому желающему взять питомца. Спасибо за нашего Джека!"
  },
  {
    id: 3,
    name: "Елена Волкова",
    petName: "Волонтер приюта",
    rating: 5,
    text: "Стала волонтером год назад и ни разу не пожалела! Здесь удивительная атмосфера, замечательная команда. Каждый день видишь, как твоя помощь меняет жизнь животных к лучшему."
  }
]
</script>

<template>
  <section class="py-16 md:py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Что говорят наши хозяева</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="review in reviews" :key="review.id" class="bg-white rounded-xl p-6 shadow-lg">
          <div class="flex items-center mb-4">
            <div class="text-4xl mr-3">⭐</div>
            <div class="text-yellow-500 text-lg">{{ review.rating }} / 5</div>
          </div>
          <p class="text-gray-600 mb-4 italic">"{{ review.text }}"</p>
          <div class="border-t pt-3">
            <p class="font-bold text-gray-800">{{ review.name }}</p>
            <p class="text-gray-500 text-sm">{{ review.petName }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>