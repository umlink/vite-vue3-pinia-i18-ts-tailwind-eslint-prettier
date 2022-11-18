/**
 * @Author: ZhaoFuLin
 * @Date: 2022-10-11 10:44:23
 * @LastEditTime: 2022-11-03 15:21:35
 */
export const routes = [
  {
    path: '/',
    name: 'menu.home',
    meta: {
      icon: 'icon-shouye',
      keepAlive: true,
    },
    component: () => import('@/views/home/index.vue'),
  },
]

export default [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: routes,
  },
]
