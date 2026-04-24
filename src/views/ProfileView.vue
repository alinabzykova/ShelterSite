<script setup>
import Header from '../components/Header.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-[url('/images/shelterbg.png')] bg-cover bg-center p-6">

    <Header />

    <!-- ОСНОВНОЙ КОНТЕЙНЕР -->
    <div class="max-w-6xl mx-auto mt-10 flex-1">

      <!-- ВЕРХ -->
      <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mb-10">

        <!-- АВАТАР -->
        <div class="flex justify-center">
          <div class="w-40 h-40 lg:w-72 lg:h-72 bg-red-900 rounded-full flex items-center justify-center">
            <img src="/images/paw.png" class="w-20 lg:w-36">
          </div>
        </div>

        <!-- ИМЯ -->
        <div class="text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-bold text-white">
            ИМЯ
          </h1>

          <!-- СМЕЩАЕМ НИЖЕ -->
          <h2 class="text-xl lg:text-2xl text-white mt-10 font-semibold">
            ИЗБРАННОЕ
          </h2>
        </div>

      </div>

      <!-- НИЖНЯЯ ЧАСТЬ -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- КВАДРАТНЫЙ БЛОК -->
        <div class="bg-white rounded-3xl p-6 aspect-square flex flex-col justify-center">
          <h2 class="text-2xl font-bold mb-4 text-center">
            Информация о пользователе
          </h2>

          <p class="text-center">
            Здесь будет описание вашего профиля. Оно может быть длинным и занимать несколько строк.
          </p>
        </div>

        <!-- ИЗБРАННОЕ -->
        <div class="flex flex-col gap-4">

          <div class="bg-white rounded-3xl p-4 font-bold text-center">
            ССЫЛКИ НА ПРИЮЧЕННЫХ ЖИВОТНЫХ
          </div>

          <div class="bg-white rounded-3xl p-4">
            /animal/1 — Рекс
          </div>

          <div class="bg-white rounded-3xl p-4">
            /animal/2 — Бобик
          </div>

          <div class="bg-white rounded-3xl p-4">
            /animal/3 — Лайка
          </div>

          <div class="bg-white rounded-3xl p-4">
            /animal/4 — Джек
          </div>

        </div>

      </div>

    </div>

    <!-- FOOTER -->
   <footer class="bg-[#7a0000] text-white mt-6 px-10 py-4 flex justify-end gap-x-8 rounded-[20px]">
    <div>+7 (999) 999-99-99</div>
    <div>г. Владикавказ</div>
    <div>© 2026</div>
  </footer>

  </div>
</template>