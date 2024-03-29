import { createRouter, createWebHistory } from 'vue-router'
import type { LocationQueryRaw } from 'vue-router'
import { isLogin } from '@/utils/auth'
import Login from './modules/login'
import appRoutes from './modules'
import PageLayout from '@/layout/page-layout.vue'
import { useUserStore } from '@/store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    Login,
    {
      name: 'root',
      path: '/',
      component: PageLayout,
      children: appRoutes,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/not-found/not-found.vue'),
    },
  ]
})


router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  // if (userStore) { // 已登录

  // } else { // 未登录
  //   if (to.name === 'login') {
  //     next()
  //     NProgress.done()
  //     return
  //   }
  //   // 跳转登录页
  //   next({
  //     name: 'login',
  //     query: {
  //       redirect: to.name,
  //       ...to.query,
  //     } as LocationQueryRaw,
  //   })
  //   NProgress.done()
  // }
  next()
})


export default router
