import { createRouter, createWebHistory } from 'vue-router'
import routerBeforeEach from './before-each'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(routerBeforeEach)

export default router
