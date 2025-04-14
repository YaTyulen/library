import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add-book',
      name: 'add',
      component: () => import('../views/AddBookView.vue'),
    },
    {
      path: '/info-book/:id',
      name: 'info',
      component: () => import('../views/InfoBookView.vue'),
    },
  ],
})

export default router
