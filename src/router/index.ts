import NewReleaseView from '@/features/new-releases/views/NewReleaseView.vue'

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NewReleaseView,
    },
  ],
})

export default router
