import { createRouter, createWebHistory } from 'vue-router'
import routerHomepage from './routerHomepage/routerHomepage'
import routerNotFound from './routerNotFound/routerNotFound'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      redirect: '/homepage',
      name: 'Trang chủ',
      component: () => import('@/layouts/MainLayout/MainLayout.vue'),
      meta : {
      },
      children: [...routerHomepage,...routerNotFound]
    }
  ]
})

export default router
