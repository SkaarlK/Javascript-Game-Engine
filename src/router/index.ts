import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/MouseFollow.vue'
import MilitaryTank from '@/views/MilitaryTank.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tank',
      name: 'tank',
      component: MilitaryTank
    }
  ]
})

export default router
