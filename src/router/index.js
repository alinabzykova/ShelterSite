import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '@/views/CatalogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
       path: '/catalog',
       name: 'catalog',
       component: CatalogView
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },

    {
      path: '/animal/:id',
      name: 'animal',
      component: () => import('../views/AnimalView.vue')
    }
  ]
})

export default router