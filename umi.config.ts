import path from 'path'

export default {
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {},
  routes: [
    {
      path: '/layout',
      component: '@/layouts/index',
      wrappers: [
        '@/wrappers/auth',
      ],
      routes: [
        {
          path: '/layout',
          component: '@/pages/Index'
        },
        {
          path: '/layout/home',
          component: '@/pages/Home',

        },
        {
          path: '/layout/user/:id',
          component: '@/pages/User/[id]'
        },
        {
          path: '/layout/404',
          component: '@/pages/NotFound'
        },
        {
          path: '*',
          redirect: '/layout/404'
        }
      ]
    },
    {
      path: '/login',
      component: '@/pages/Login'
    },
    {
      path: '/404',
      component: '@/pages/NotFound'
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  alias: {
    '@': path.resolve(__dirname, './src')
  }
}