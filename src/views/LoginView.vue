<template>
  <div class="all-the-page rounded-[20px]">
    <!-- левый див не меняется -->

    <div class="that-left-header-dog-thing break-words flex flex-col justify-center items-center text-center p-8">
      <h4 class="text-white text-3xl font-['Montserrat'] font-black">Добро пожаловать в приют "Спасённый Хвост"</h4>
      <img src="\images\sobakus.png" alt="Собака"  />
    </div>

    <!-- справа ну неизменный хедер и переключение регистрации-авторизации -->
    <div class="flex flex-col justify-between relative  ">
       
      <nav class="absolute top-5 right-5 flex gap-10 text-black text-2xl z-10">
        <img src="/images/paw.png" class="w-[90px]" />
        <router-link to="/" class="hover:underline">Главная</router-link>
        <router-link to="/catalog" class="hover:underline">Каталог</router-link>
        <router-link to="/profile" class="hover:underline">Профиль</router-link> 
      </nav> 

      <div class="flex justify-center items-center flex-grow">
        <div class="flex flex-col items-center w-full max-w-[400px]">
          
          <!-- оно -->
          <LoginForm v-if="isLoginMode" />
          <RegisterForm v-else />
          
          <br>
          <hr class="w-full border-t-2 border-gray-200 my-4">
           
          <p class="mt-5 text-center">
            <a 
              href="#" 
              @click.prevent="isLoginMode = !isLoginMode"
              class="text-black text-sm no-underline border-b border-white/50 pb-0.5 hover:border-white font-['Montserrat']"
            >
              {{ isLoginMode ? 'Нет аккаунта?' : 'Есть аккаунт?' }} 
              <span class="text-red-700 font-['Montserrat']">
                {{ isLoginMode ? 'Зарегистрироваться' : 'Войти' }}
              </span>
            </a>
          </p>
          
        </div>
      </div> 
      
    </div>

  </div>
      <Footer />

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
  justify-self: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 90vh;
  font-family: 'Montserrat', sans-serif;
}

.that-left-header-dog-thing {
  background-image: url("/images/shelterbg.png");
  background-size: cover;
  background-position: center;
}
</style>