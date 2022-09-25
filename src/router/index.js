import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import('../layout'),
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index.vue')
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/blog/article.vue')
      },
      {
        path: 'articleEditor',
        name: 'articleEditor',
        component: () => import('@/views/blog/articleEditor.vue')
      },
      {
        path: 'articleMd',
        name: 'articleMd',
        component: () => import('@/views/blog/articleMd.vue')
      },
      {
        path: 'articleHtml',
        name: 'articleHtml',
        component: () => import('@/views/blog/articleHtml.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
