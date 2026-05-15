<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
      
        <div>
          <h3 class="text-xl font-bold mb-4 text-red-500">Приют "Спасённый хвост"</h3>
          <p class="text-gray-400">Помогаем бездомным животным найти любящий дом с 2019 года</p>
        </div>
  

        <div>
          <h4 class="font-bold text-lg mb-4">Контакты</h4>
          <p class="text-gray-400 mb-2">📞 +7 (996) 942-74-30</p>
          <p class="text-gray-400 mb-2">✉️ info@priut.ru</p>
          <p class="text-gray-400">📍 г. Владикавказ, ул. Ватутина, 44</p>
        </div>
        

        <div>
          <h4 class="font-bold text-lg mb-4">Навигация</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/catalog" class="hover:text-red-500 transition">
              Каталог
              </router-link>
            </li>
            <li>
              <router-link to="/login" class="hover:text-red-500 transition">
              Войти
              </router-link>
            </li>
            <li>
              <router-link to="/profile" class="hover:text-red-500 transition">
              Профиль
              </router-link>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold text-lg mb-4">Режим работы</h4>
          <p class="text-gray-400 mb-2">Пн-Пт: 10:00 - 20:00</p>
          <p class="text-gray-400 mb-2">Сб-Вс: 11:00 - 18:00</p>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2026 Приют для собак "Спасённый хвост". Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>