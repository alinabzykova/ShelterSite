<template>
  <section class="py-16 md:py-20 bg-[#DE2E2E] text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Как ты можешь помочь</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <router-link to="/login">
          <div class="bg-red-700/50 rounded-xl p-6 text-center hover:bg-red-700 transition-all duration-300 cursor-pointer">
            <div class="text-5xl mb-4">👋</div>
            <h3 class="text-xl font-bold mb-2">Стать волонтером</h3>
            <p class="text-red-100">Помогай животным и находи новых друзей</p>
          </div>
        </router-link>
        
        <router-link to="/login">
          <div class="bg-red-700/50 rounded-xl p-6 text-center hover:bg-red-700 transition-all duration-300 cursor-pointer">
            <div class="text-5xl mb-4">💰</div>
            <h3 class="text-xl font-bold mb-2">Сделать пожертвование</h3>
            <p class="text-red-100">Любая сумма важна для наших подопечных</p>
          </div>
        </router-link>
        
        <router-link to="/catalog">
          <div class="bg-red-700/50 rounded-xl p-6 text-center hover:bg-red-700 transition-all duration-300 cursor-pointer">
            <div class="text-5xl mb-4">🐕</div>
            <h3 class="text-xl font-bold mb-2">Забрать питомца</h3>
            <p class="text-red-100">Подари дому нового верного друга</p>
          </div>
        </router-link>
        
        <div @click="shareToFriends" class="bg-red-700/50 rounded-xl p-6 text-center hover:bg-red-700 transition-all duration-300 cursor-pointer">
          <div class="text-5xl mb-4">💬</div>
          <h3 class="text-xl font-bold mb-2">Рассказать друзьям</h3>
          <p class="text-red-100">Помоги нам найти больше помощников</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const shareToFriends = () => {
  alert('Отправьте ссылку на сайт друзьям!')
}
</script>