import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Employs from '@/views/Employs.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'employs',
          component: Employs,
        }, {
          path: '/dart',
          name: 'dart',
          component: () => import('@/views/Dart.vue'),
        }
      ]
    },
  ],
})

export default router
