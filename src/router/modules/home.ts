/*
 * @Description: 
 */
export default {
  path: 'home',
  name: 'home',
  component: () => import('@/views/home/home.vue'),
  meta: {
    requiresAuth: true,
    icon: 'icon-dashboard',
  },
}