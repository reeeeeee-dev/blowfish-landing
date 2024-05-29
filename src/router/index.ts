import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'info',
      component: () => import('../views/InfoView.vue')
    },
    {
      path: '/join',
      name: 'join',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JoinView.vue')
    }
    // {
    //   path: '/event',
    //   name: 'event',
    //   component: () => import('../views/EventView.vue')
    // },
  ]
})

export default router
