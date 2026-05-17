<template>
  <header class="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
        
       
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="bg-[#DE2E2E] rounded-full p-2 transition-transform group-hover:scale-110">
            <img src="/images/paw.png" alt="Лапа" class="w-6 h-6 filter brightness-0 invert">
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-800">Приют <span class="text-[#DE2E2E]">"Спасённый хвост"</span></h1>
            <p class="text-xs text-gray-500 hidden sm:block">Дом для каждого хвостика</p>
          </div>
        </router-link>
        
        
        <nav>
          <ul class="flex gap-2 md:gap-4 items-center">
            <li>
              <router-link 
                to="/" 
                class="relative px-3 py-2 text-gray-600 hover:text-[#DE2E2E] transition font-medium group"
                active-class="text-[#DE2E2E]"
              >
                Главная
                <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#DE2E2E] transition-all group-hover:w-full group-hover:left-0"></span>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/catalog" 
                class="relative px-3 py-2 text-gray-600 hover:text-[#DE2E2E] transition font-medium group"
                active-class="text-[#DE2E2E]"
              >
                Каталог
                <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#DE2E2E] transition-all group-hover:w-full group-hover:left-0"></span>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/login" 
                class="relative px-3 py-2 text-gray-600 hover:text-[#DE2E2E] transition font-medium group"
                active-class="text-[#DE2E2E]"
              >
                Войти
                <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#DE2E2E] transition-all group-hover:w-full group-hover:left-0"></span>
              </router-link>
            </li>
            <li>
              <router-link 
                to="/profile" 
                class="ml-2 bg-gradient-to-r from-[#DE2E2E] to-[#ff4a4a] text-white px-5 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Профиль
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>