/*
 * @Description: 登录模块
 */
export default {
  path: '/login',
  name: 'login',
  component: () => import('@/views/login/login.vue'),
  meta: {
    title: '',
    requiresAuth: false,
  },
}
