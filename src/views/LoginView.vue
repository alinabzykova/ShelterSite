<template>
    <div class=" ">  
 
    <LoginForm v-if="isLoginMode" />
    <RegisterForm v-else /> 
    <div class="auth-toggle"> 
        
      </div>
      <Footer />

     </div>
     
</template>

<script setup>
import { ref } from 'vue'
import LoginForm from '../components/LoginForm.vue'
import  RegisterForm from '../components/RegisterForm.vue'
import Footer from '../components/Footer.vue'

const isLoginMode = ref(true)
</script>
