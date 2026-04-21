<template> 
<div class="all-the-page  rounded[20-px]">
<div class="that-left-header-dog-thing break-words flex flex-col justify-center items-center text-center p-8   ">
  <h4 class="text-white justify-self-center self-center text-3xl font-['Montserrat']">Добро пожаловать в приют "Спасённый Хвост"</h4>
<img src="C:\Users\user\ShelterSite\public\images\sobakus.png" >
</div>

  <div class="  flex justify-center items-center relative">  

 <nav class="absolute top-5 right-5 flex gap-10 text-black text-2xl ">
      <img src="/images/paw.png" class="w-[90px] relative" />

        <router-link to="/" class="hover:underline">Главная</router-link>
        <router-link to="/catalog" class="hover:underline">Каталог</router-link>
        <router-link to="/profile" class="hover:underline">Профиль</router-link> 
      </nav>

      <div class="flex flex-col items-center w-full max-w-[400px]"> 
        <form class="auth-form flex flex-col items-center w-full">
          <h3 class=" text-black font-['Montserrat'] text-2xl mb-10 font-w[222-px] ">Вход</h3>
          
          <input 
            type="email" 
            placeholder="Введите email" 
            class="w-full p-4 mb-5 bg-gray-300 rounded-[20px] text-base font-['Montserrat'] border-none" 
          />
          
          <input 
            type="password" 
            placeholder="Введите пароль" 
            class="w-full p-4 mb-5 bg-gray-300 rounded-[20px] text-base font-['Montserrat'] border-none" 
          />
          
          <button 
            type="submit" 
            class="w-full p-4 bg-red-700 text-white rounded-[20px] text-base font-bold cursor-pointer font-['Montserrat']"
          >
            Войти
          </button>
        </form> 
        <br>
       <hr class="w-full border-t-2 border-gray-200 my-4 ">
        <p class="mt-5 text-center">
          <a 
            href="#" 
            class="text-black text-sm no-underline border-b border-white/50 pb-0.5 hover:border-white"
          >
            Нет аккаунта? Зарегистрироваться
          </a>
        </p>
        
      </div>
  
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue' 

const isLoginMode = ref(true)
</script>

<style scoped>
.all-the-page{
justify-self: center;

  display: grid;
  grid-template-columns: 1fr 2fr;
   height: 90vh;
    font-family: 'Montserrat', sans-serif; 
}
.that-left-header-dog-thing
{
  background: url("C:\Users\user\ShelterSite\public\images\shelterbg.png");
}

 h3,h4{  
font-weight: 900;
} 

input, button{
  border-radius: 20px;
    font-family: 'Montserrat', sans-serif; 

}
</style>