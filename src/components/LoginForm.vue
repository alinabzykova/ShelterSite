<template>
  <form class="auth-form flex flex-col items-center w-full">
    <h3 class="text-black font-['Montserrat'] text-2xl mb-10 font-black">Вход</h3>
    
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
</template>