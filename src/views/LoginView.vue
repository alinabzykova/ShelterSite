<template>
    <div class="p-10 text-3x1"> 
        <h2>Вход</h2>
 
    <LoginForm v-if="isLoginMode" />
    <RegisterForm v-else /> 
    <div class="auth-toggle"> 
        <a 
          class="toggle-link" 
          href="#" 
          @click.prevent="isLoginMode = !isLoginMode"
        >
          {{ isLoginMode ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти' }}
        </a>
      </div>
     </div>
     
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '../components/LoginForm.vue'
import  RegisterForm from '../components/RegisterForm.vue'

const isLoginMode = ref(true)
</script>
