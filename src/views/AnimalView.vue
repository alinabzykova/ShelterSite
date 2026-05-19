<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFavorites } from '@/stores/useFavorites'
import Header from '../components/Header.vue'

const route = useRoute()
const { toggleFavorite, isFavorite } = useFavorites()

// Данные о животном (будем получать их из API или массива)
const animal = ref({
  id: null,
  name: '',
  age: '',
  size: '',
  description: '',
  images: ''
})

const allAnimals = [
  { 
    id: 1, 
    name: 'Рекс', 
    age: 1, 
    size: 'Маленький', 
    images: '/images/dogs/Рекс 1.jpg', 
    description: 'Рекс — молодой и активный пёс, который обожает играть с игрушками и гулять на свежем воздухе. Он очень дружелюбный и быстро находит общий язык с людьми. Рекс хорошо ладит с детьми и другими собаками. Он уже знает основные команды и очень хочет порадовать своего будущего хозяина. Этот малыш станет верным другом и принесёт много радости в ваш дом!' 
  },
  { 
    id: 2, 
    name: 'Бобик', 
    age: 4, 
    size: 'Большой', 
    images: '/images/dogs/Бобик 1.jpg', 
    description: 'Бобик — большой и добрый пёс с золотым сердцем. Он очень ласковый и обожает внимание. Бобик прекрасно воспитан, ходит на поводке и не создаёт проблем в быту. Он станет отличным охранником и защитником для вашей семьи. Несмотря на свой крупный размер, Бобик очень нежный и любит, когда его гладят. Он ищет дом с любящими хозяевами, которые оценят его преданность и доброту.' 
  },
  { 
    id: 3, 
    name: 'Лайка', 
    age: 3, 
    size: 'Средний', 
    images: '/images/dogs/Лайка 1.jpg', 
    description: 'Лайка — настоящий энерджайзер! Она обожает бегать, прыгать и играть с мячиком. Эта активная девочка идеально подойдёт для спортивных людей или семьи, которая любит долгие прогулки и путешествия. Лайка очень умная и быстро учится новым трюкам. Она обожает детей и всегда рада поиграть с ними. Если вы ищете активного и жизнерадостного друга — Лайка ждёт именно вас!' 
  },
  { 
    id: 4, 
    name: 'Джек', 
    age: 5, 
    size: 'Большой', 
    images: '/images/dogs/Джек 1.jpg', 
    description: 'Джек — взрослый и мудрый пёс с спокойным характером. Он прекрасно воспитан, не лает без причины и очень послушный. Джек идеально подойдёт для семьи с детьми или для пожилых людей, которые ценят уют и спокойствие. Он любит размеренные прогулки и уютные вечера дома рядом с хозяином. Джек очень преданный и благодарный пёс, который ждёт своего человека, чтобы дарить ему свою любовь и заботу.' 
  },
  { 
    id: 5, 
    name: 'Тузик', 
    age: 3, 
    size: 'Средний', 
    images: '/images/dogs/Тузик 1.jpg', 
    description: 'Тузик — настоящий весельчак и душа компании! Он обожает играть, дурачиться и поднимать настроение всем вокруг. Тузик очень общительный и быстро находит общий язык с новыми людьми. Он хорошо ладит с другими животными и детьми. Тузик станет отличным другом для активной семьи, которая любит весёлые игры и прогулки. С ним вы точно не заскучаете!' 
  },
  { 
    id: 6, 
    name: 'Шарик', 
    age: 1, 
    size: 'Маленький', 
    images: '/images/dogs/Шарик 1.png', 
    description: 'Шарик — очаровательный маленький щенок, который ищет свой дом. Он очень игривый, любопытный и невероятно милый. Шарик обожает исследовать всё вокруг и играть с игрушками. Он быстро привыкает к новым людям и очень привязан к своим хозяевам. Шарик станет идеальным другом для ребёнка или молодой пары. Он подарит вам много радости, смеха и позитивных эмоций!' 
  }
]

onMounted(async () => {

  const response = await fetch(
    'http://localhost/shelter-site/backend/animals.php'
  )

  const animals = await response.json()

  const id = Number(route.params.id)

  const found = animals.find(
    a => a.id == id
  )

  if (found) {
    animal.value = found
  }

})

function getAgeText(age) {
  if (age === 1) return `${age} год`
  if (age >= 2 && age <= 4) return `${age} года`
  return `${age} лет`
}

function handleFavoriteClick() {
  if (animal.value.id) {
    toggleFavorite(animal.value.id)
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#f5f5f5]">
    <Header />
    
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-3xl overflow-hidden shadow-md max-w-4xl mx-auto">
        
        <div class="p-4 border-b">
          <router-link to="/catalog" class="text-red-500 hover:text-red-600">
            ← Назад в каталог
          </router-link>
        </div>

        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 p-6">
            <img 
              :src="animal.images || animal.image" 
              :alt="animal.name"
              class="w-full aspect-square object-cover rounded-2xl"
            />
          </div>

          <div class="md:w-1/2 p-6">
            <h1 class="text-4xl font-bold">{{ animal.name }}</h1>
            <p class="text-gray-500 text-lg mt-2">
              {{ getAgeText(animal.age) }} · {{ animal.size }}
            </p>
            <p class="text-gray-700 mt-4 leading-relaxed">
              {{ animal.description }}
            </p>


            <button 
              @click="handleFavoriteClick"
              class="mt-6 px-6 py-3 rounded-xl font-medium transition-colors"
              :class="isFavorite(animal.id) 
                ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
                : 'bg-red-500 text-white hover:bg-red-600'"
            >
              {{ isFavorite(animal.id) ? '★ В избранном' : '☆ В избранное' }}
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>