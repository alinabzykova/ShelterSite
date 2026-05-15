<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">О нашем приюте</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <p class="text-gray-600 text-lg leading-relaxed mb-4">
            Наш приют существует с 2015 года. За это время мы спасли более 2000 собак, 
            которые оказались в трудной жизненной ситуации.
          </p>
          <p class="text-gray-600 text-lg leading-relaxed">
            Мы не просто даем животным временный кров - мы лечим их, социализируем 
            и ищем самых лучших хозяев. Каждая собака для нас - личность со своим 
            характером и историей.
          </p>
        </div>
        <div>
          <img 
            src="/public/images/doggies.jpg" 
            alt="Собаки в приюте"
            class="rounded-xl shadow-lg w-full h-auto"
          >
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        <div class="text-center p-6 bg-red-50 rounded-xl">
          <div class="text-4xl font-bold text-red-600 mb-2">2,500+</div>
          <div class="text-gray-700 font-semibold">Животных спасено</div>
        </div>
        <div class="text-center p-6 bg-red-50 rounded-xl">
          <div class="text-4xl font-bold text-red-600 mb-2">150+</div>
          <div class="text-gray-700 font-semibold">Активных волонтеров</div>
        </div>
        <div class="text-center p-6 bg-red-50 rounded-xl">
          <div class="text-4xl font-bold text-red-600 mb-2">1,800+</div>
          <div class="text-gray-700 font-semibold">Нашли новый дом</div>
        </div>
      </div>
    </div>
  </section>
</template>