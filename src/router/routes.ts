import { SYSTEM_TOOLS_PREFIX, ERROR_PAGES_PREFIX } from './prefix'

export const routes = [
  {
    path: '/',
    name: 'base-layout',
    component: () => import('@/layout/BaseLayout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: 'home'
        }
      },
      // 系统工具
      {
        path: `${SYSTEM_TOOLS_PREFIX}/websocket`,
        name: 'websocket',
        component: () => import('@/views/SystemTools/websocket/index.vue'),
        meta: {
          title: 'websocket'
        }
      },
      // 错误页面
      {
        path: `${ERROR_PAGES_PREFIX}/404`,
        name: '404',
        component: () => import('@/views/ErrorPages/404/index.vue'),
        meta: {
          title: '404'
        }
      },
      {
        path: `${ERROR_PAGES_PREFIX}/403`,
        name: '403',
        component: () => import('@/views/ErrorPages/403/index.vue'),
        meta: {
          title: '403'
        }
      },
      {
        path: `${ERROR_PAGES_PREFIX}/500`,
        name: '500',
        component: () => import('@/views/ErrorPages/500/index.vue'),
        meta: {
          title: '500'
        }
      }
    ]
  },
  // 认证页面
  {
    path: '/',
    name: 'auth-layout',
    component: () => import('@/layout/AuthLayout/index.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Auth/Login/index.vue'),
        meta: {
          title: '登录'
        }
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/Auth/Signup/index.vue'),
        meta: {
          title: '注册'
        }
      }
    ]
  }
]
