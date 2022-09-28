export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/not-found/index'),
    meta: {
      title: 'notFound'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: '个人主页'
    }
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('@/pages/skill/index'),
    meta: {
      title: '轮子收录'
    }
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/pages/article/index'),
    meta: {
      title: '文章合集'
    }
  }
]
