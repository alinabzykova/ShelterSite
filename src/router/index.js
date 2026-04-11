import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: () => import('../views/CatalogView.vue')
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
  ]
})

export default router