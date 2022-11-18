import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

const routerBeforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  next()
}

export default routerBeforeEach
