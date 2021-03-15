import Layout from '../components/Layout/Layout'

/**
 * 需要授权访问的路由
 */
const asyncRoutesChildren = [
  {
    path: '/',
    name: 'Home',
    meta: {
      roles: ['admin', 'editor', 'test'],
      title: '主页',
      icon: 'home',
      keepAlive: true
    },
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/menu-1',
    name: 'menu-1',
    meta: {
      roles: ['admin', 'editor'],
      title: '模块 - 1',
      itemLabel: 'SOME LABEL',
      icon: 'library_music',
      isOpen: true
    },
    component: Layout,
    children: [
      {
        path: 'menu-1-1',
        name: 'menu-1-1',
        meta: {
          roles: ['admin', 'editor'],
          title: '模块 1 - 1',
          icon: 'filter_1'
        },
        component: Layout,
        children: [
          {
            path: 'menu-1-1-1',
            name: 'Menu-1-1-1',
            meta: {
              roles: ['admin', 'editor'],
              title: '模块 1 - 1 - 1',
              icon: 'flaky',
              keepAlive: true
            },
            component: () => import('../views/menu1/Menu1')
          }
        ]
      },
      {
        path: 'menu-1-2',
        name: 'Menu-1-2',
        meta: {
          roles: ['admin', 'editor'],
          title: '模块 1 - 2',
          icon: 'filter_2',
          keepAlive: true
        },
        component: () => import('../views/menu1/Menu1-2')
      }
    ]
  },
  {
    path: '/menu-2',
    name: 'Menu-2',
    meta: {
      roles: ['admin', 'editor'],
      title: '模块 2',
      icon: 'extension'
    },
    component: () => import('../views/menu2/Menu-2-1')
  },
  {
    path: '/menu-3',
    name: 'menu-3',
    meta: {
      roles: ['admin', 'editor'],
      title: '模块 - 3',
      icon: 'filter_3',
      isOpen: true
    },
    component: Layout,
    children: [
      {
        path: 'menu3-1',
        name: 'getting-started',
        meta: {
          roles: ['admin', 'editor'],
          title: '模块 3 - 1',
          icon: 'filter_2',
          isOpen: true
        },
        component: Layout,
        children: [
          {
            path: 'menu3-1-1',
            name: 'Menu3-1-1',
            meta: {
              roles: ['admin', 'editor'],
              title: '模块 3 - 1 - 1',
              icon: 'filter_1',
              keepAlive: true
            },
            component: () => import('../views/menu3/Menu3')
          }
        ]
      }
    ]
  },
  {
    path: 'http://www.quasarchs.com/vue-components/button',
    name: 'external-link',
    meta: {
      roles: ['admin', 'editor'],
      title: '外部链接/更多组件',
      icon: 'send'
    }
  },
  {
    path: '/tableDetail',
    name: 'TableDetail',
    meta: {
      roles: ['admin', 'editor'],
      title: 'Treats 详情',
      icon: 'blur_linear',
      isHidden: true
    },
    component: () => import('../views/home/TableDetail')
  },
  {
    path: '*', // 此处需置于最底部
    redirect: '/NoFound404',
    meta: {
      roles: ['admin', 'test'],
      isHidden: true
    }
  }
]

const asyncRoutes = [
  {
    path: '/',
    name: 'index',
    redirect: '/',
    component: () => import('../views/Index'),
    meta: {
      // index 路由不参与权限过滤，因此不用设置权限
      // roles: ['admin', 'editor', 'test']
    },
    children: asyncRoutesChildren
  }
]

export default asyncRoutes
