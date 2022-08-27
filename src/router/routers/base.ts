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
      title: 'NotFound',
      showHeader: false
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: '个人主页',
      showHeader: true
    }
  },
  {
    path: '/skill',
    name: 'Skill',
    component: () => import('@/pages/skill/index'),
    meta: {
      title: '技术文档',
      showHeader: true
    }
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@/pages/article/index'),
    meta: {
      title: '文章合集',
      showHeader: true
    }
  }
]
