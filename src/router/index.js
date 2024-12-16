import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Employs from '@/views/Employs.vue'
import Chart from '@/views/Chart.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'employers',
          component: Employs,
        },
        {
          path: '/chart',
          name: 'chart',
          component: () => Chart
        },
      ]
    }
  ],
})

export default router
