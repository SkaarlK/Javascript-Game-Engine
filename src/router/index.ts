import { createRouter, createWebHistory } from 'vue-router'
import MouseFollow from '../views/MouseFollow.vue'
import MilitaryTank from '@/views/MilitaryTank.vue'
import EdgeScrolling from '@/views/EdgeScrolling.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EdgeScrolling
    },
    {
      path: '/tank',
      name: 'tank',
      component: MilitaryTank
    },
    {
      path: '/mouse-follow',
      name: 'mouse-follow',
      component: MouseFollow
    }
  ]
})

export default router
