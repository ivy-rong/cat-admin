import { siteMetaData } from '@/constants/index'
import NProgress from 'nprogress'
import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'

//通过将其设置为 false 来关闭加载微调器。（默认true：）
NProgress.configure({ showSpinner: false })

NProgress.configure({ easing: 'ease', speed: 3000 })

import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({
    left: 0,
    top: 0
  })
})

const processTargetRoute = (to: RouteLocationNormalized) => {
  const { appName } = siteMetaData
  document.title = to.path === '/' ? appName : `${to.meta.title} | ${appName}`
}

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    console.log(0)
    NProgress.start()
    console.log(11111111)
  }
  processTargetRoute(to)
  next()
})

router.afterEach(() => {
  console.log(22222222)
  NProgress.done()
})

export default router
