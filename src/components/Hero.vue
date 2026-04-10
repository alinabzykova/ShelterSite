<template>
  <section class="bg-red-500 rounded-[40px] px-12 py-10 flex items-center justify-between">

    <!-- ЛЕВО -->
    <div class="text-white max-w-[600px]">

      <h2 class="text-[40px] leading-tight mb-8">
        Найди своего друга <br>
        Помоги животным из приюта <br>
        найти любящую семью
      </h2>

      <!-- кнопка -->
      <router-link to="/catalog" class="bg-[#ECECEC] text-black px-15 py-4 text-2xl rounded-full font-bold inline-block mb-9">
          Смотреть каталог
      </router-link>

      <!-- о приюте -->
      <div class="bg-[#7a0000] rounded-[25px] p-6 mb-8">
        <h3 class="text-2xl font-bold mb-2">О приюте</h3>
        <p>
          Наш приют помогает бездомным собакам найти любящих хозяев.
          Мы заботимся о животных и ищем для них новый дом.
        </p>
      </div>

      <!-- почему -->
      <div class="flex items-center gap-6">
        
        <p class="text-lg max-w-[250px] px-2">
          Почему нужно взять животное из приюта?
        </p>

        <div class="space-y-3">
          <div class="bg-[#ececec] text-black px-4 py-1 rounded-full text-sm font-medium">
            спасаете жизнь животного
          </div>

          <div class="bg-[#ececec] text-black px-4 py-1 rounded-full text-sm font-medium">
            получаете верного друга
          </div>

          <div class="bg-[#ececec] text-black px-4 py-1 rounded-full text-sm font-medium">
            помогаете приюту
          </div>
        </div>

      </div>

    </div>

    <!-- СОБАКА -->
    <img src="/images/dog.png" class="w-[550px] -mr-10" />

  </section>
</template>