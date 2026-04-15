<template>
  <header class="bg-gray-300 rounded-[40px] px-12 py-6 mb-6"
   :class="$route.path === '/' ? 'bg-gray-300' : 'bg-white'"> <!-- цирковой номер: если не главное меню то цвет хедера белый как типа на макете -->

    <div class="flex justify-between items-center">

      <!-- лапки -->
      <img src="/images/paw.png" class="w-[90px]" />

      <!-- меню -->
      <nav class="space-x-16 text-xl">
        <router-link to="/" class="hover:underline">
          Главная
        </router-link>

         <router-link to="/catalog" class="hover:underline">
          Каталог
        </router-link>

         <router-link to="profile" class="hover:underline">
          Профиль
        </router-link>

         <router-link to="/login" class="hover:underline">
          Войти
        </router-link>

      </nav>

    </div>

    <h1 class="text-center text-[90px] text-red-500 mt-4 font-logo">
      Спасённый Хвост
    </h1>

  </header>
</template>