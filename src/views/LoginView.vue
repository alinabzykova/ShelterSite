<template>
  <div class="flex flex-col min-h-screen">

    <!-- ОСНОВНОЙ КОНТЕНТ -->
    <div class="all-the-page flex-1 rounded-[20px]">

      <!-- ЛЕВАЯ ЧАСТЬ -->
      <div class="that-left-header-dog-thing relative flex flex-col justify-between items-center text-center p-8">

        <h4 class="font-rubik font-extrabold text-[32px] text-center text-[#fff7f3]">
          Добро пожаловать в приют "Спасённый хвост"
        </h4>

        <img 
          src="/images/sobakus.png"
          class="absolute bottom-0 left-1/2 -translate-x-1/2 w-96"
        />

      </div>

      <!-- ПРАВАЯ ЧАСТЬ -->
      <div class="flex flex-col justify-between relative">

        <nav class="absolute top-5 right-5 flex gap-10 text-black text-xl z-10">
          <router-link to="/">Главная</router-link>
          <router-link to="/catalog">Каталог</router-link>
          <router-link to="/profile">Профиль</router-link> 
        </nav> 

        <div class="flex justify-center items-center flex-grow">
          <div class="flex flex-col items-center w-full max-w-[400px]">

            <LoginForm v-if="isLoginMode" />
            <RegisterForm v-else />

            <hr class="w-full border-t-2 border-gray-200 my-4">

            <p class="mt-5 text-center">
              <a @click.prevent="isLoginMode = !isLoginMode" class="text-black text-sm">
                {{ isLoginMode ? 'Нет аккаунта?' : 'Есть аккаунт?' }} 
                <span class="text-red-700">
                  {{ isLoginMode ? 'Зарегистрироваться' : 'Войти' }}
                </span>
              </a>
            </p>

          </div>
        </div>

      </div>

    </div>

    <!-- FOOTER -->
    <Footer />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'
import Footer from '../components/Footer.vue'

const isLoginMode = ref(true)
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