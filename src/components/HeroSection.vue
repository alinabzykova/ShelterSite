<template>
  <section class="relative bg-gradient-to-br from-[#DE2E2E] to-[#ff6b6b] text-white">
    <div class="container mx-auto px-4 pt-16 md:pt-24 pb-0 relative z-10">
      <div class="flex flex-col lg:flex-row items-end justify-between gap-12">
        

        <div class="lg:w-1/2 text-center lg:text-left animate-fade-in-up pb-16">
          <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
            <span class="text-sm">🐕 С 2015 года помогаем животным</span>
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Дом для каждого
            <span class="block text-yellow-300">хвостика</span>
          </h1>
          
          <p class="text-lg md:text-xl mb-8 text-white/90 max-w-lg mx-auto lg:mx-0">
            Мы помогаем бездомным собакам найти любящих хозяев. 
            Более 2500 собак уже обрели свой дом с нашей помощью.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <router-link to="/catalog">
              <button class="group bg-white text-[#DE2E2E] px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Посмотреть животных
                <span class="group-hover:translate-x-1 transition">→</span>
              </button>
            </router-link>
            <router-link to="/profile">
              <button class="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Помочь приюту
              </button>
            </router-link>
          </div>
          
          <div class="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/20">
            <div>
              <div class="text-2xl md:text-3xl font-bold">2500+</div>
              <div class="text-sm text-white/80">Спасено</div>
            </div>
            <div>
              <div class="text-2xl md:text-3xl font-bold">150+</div>
              <div class="text-sm text-white/80">Волонтеров</div>
            </div>
            <div>
              <div class="text-2xl md:text-3xl font-bold">1800+</div>
              <div class="text-sm text-white/80">Нашли дом</div>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2 animate-fade-in-up animation-delay-200 mt-8 md:mt-12 lg:mt-16">
          <img 
            src="/public/images/dog.png" 
            alt="Счастливая собака"
            class="w-full h-auto object-contain"
          >
        </div>
        
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-1 bg-white z-20"></div>
    
    <div class="relative z-20 w-full -mt-24 md:-mt-32 lg:-mt-16">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" class="w-full">
        <path fill="#ffffff" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
      </svg>
    </div>
  </section>
</template>