<template>
  <div class="flex flex-col min-h-screen bg-gray-50">

    <div class="all-the-page flex-1 rounded-[20px]">

      <div class="that-left-header-dog-thing relative flex flex-col justify-between items-center text-center p-8">

        <h4 class="font-rubik font-extrabold text-[32px] text-center text-[#fff7f3]">
          Добро пожаловать в приют "Спасённый хвост"
        </h4>

        <img 
          src="/images/sobakus.png"
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-96"
        />

      </div>

      <div class="flex flex-col justify-between relative bg-white">

        <nav class="absolute top-5 right-5 flex gap-10 text-black text-xl z-10">
          <router-link to="/" class="hover:text-red-600 transition">Главная</router-link>
          <router-link to="/catalog" class="hover:text-red-600 transition">Каталог</router-link>
          <router-link to="/profile" class="hover:text-red-600 transition">Профиль</router-link> 
        </nav> 

        <div class="flex justify-center items-center flex-grow min-h-[500px]">
          <div class="flex flex-col items-center w-full max-w-[400px] px-4">

 
            <div v-if="isLoginMode" class="w-full">
              <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Вход в аккаунт</h2>
              
              <form @submit.prevent="handleLogin" class="space-y-4">
                <div>
                  <label class="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    v-model="loginForm.email"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                    required
                  >
                </div>
                
                <div>
                  <label class="block text-gray-700 mb-2">Пароль</label>
                  <input 
                    type="password" 
                    v-model="loginForm.password"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                    required
                  >
                </div>
                
                <button 
                  type="submit"
                  class="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Войти
                </button>
              </form>
            </div>

            <div v-else class="w-full">
              <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Регистрация</h2>
              
              <form @submit.prevent="handleRegister" class="space-y-4">
                <div>
                  <label class="block text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    v-model="registerForm.name"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                    required
                  >
                </div>
                
                <div>
                  <label class="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    v-model="registerForm.email"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                    required
                  >
                </div>
                
                <div>
                  <label class="block text-gray-700 mb-2">Пароль</label>
                  <input 
                    type="password" 
                    v-model="registerForm.password"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                    required
                  >
                </div>
                
                <div>
                  <label class="block text-gray-700 mb-2">Подтвердите пароль</label>
                  <input 
                    type="password" 
                    v-model="registerForm.confirmPassword"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                    required
                  >
                </div>
                
                <button 
                  type="submit"
                  class="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                >
                  Зарегистрироваться
                </button>
              </form>
            </div>

            <hr class="w-full border-t-2 border-gray-200 my-6">

            <p class="mt-5 text-center">
              <button @click="isLoginMode = !isLoginMode" class="text-black text-sm cursor-pointer">
                {{ isLoginMode ? 'Нет аккаунта?' : 'Есть аккаунт?' }} 
                <span class="text-red-700 hover:underline">
                  {{ isLoginMode ? 'Зарегистрироваться' : 'Войти' }}
                </span>
              </button>
            </p>

          </div>
        </div>

      </div>

    </div>

    <footer class="bg-red-900 text-white py-4">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
          <p>© 2026 Приют "Спасённый хвост"</p>
          <div class="flex gap-6">
            <a href="#">info@priut.ru</a>
            <a href="#">г. Владикавказ,  ул. Ватутина, 44</a>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoginMode = ref(true)

const loginForm = ref({
  email: '',
  password: ''
})

const registerForm = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleLogin = async () => {

  const response = await fetch(
    'http://localhost/shelter-site/backend/login.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginForm.value.email,
        password: loginForm.value.password
      })
    }
  )

  const data = await response.json()

  if (data.success) {

    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userName', data.name)
    localStorage.setItem('userEmail', loginForm.value.email)

    alert('Вход выполнен')

    router.push('/profile')

  } else {

    alert(data.message)
  }

}

const handleRegister = async () => {

  if (registerForm.value.password !== registerForm.value.confirmPassword) {

    alert('Пароли не совпадают')
    return
  }

  const response = await fetch(
    'http://localhost/shelter-site/backend/register.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: registerForm.value.name,
        email: registerForm.value.email,
        password: registerForm.value.password
      })
    }
  )

  const data = await response.json()

  if (data.success) {

    alert('Регистрация успешна')

    localStorage.setItem('isLoggedIn', 'true')
    localStorage.setItem('userName', registerForm.value.name)
    localStorage.setItem('userEmail', registerForm.value.email)

    router.push('/profile')

  } else {

    alert(data.message)
  }

}
</script>

<style scoped>
.all-the-page {
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex: 1; 
}

.that-left-header-dog-thing {
  background-image: url("/images/shelterbg.png");
  background-size: cover;
  background-position: center;
}
</style>