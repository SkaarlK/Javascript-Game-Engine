import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/MouseFollow.vue'
import MilitaryTank from '@/views/MilitaryTank.vue'
import EdgeScrolling from '@/views/EdgeScrolling.vue'

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
    },
    {
      path: '/edge',
      name: 'edge',
      component: EdgeScrolling
    }
  ]
})

export default router
