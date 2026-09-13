import { createRouter, createWebHashHistory } from 'vue-router'

/* ================================================================
   Xishuashua (洗刷刷全铝家具) — Corporate Website
   ================================================================ */
import XssLayout from '../layouts/XssLayout.vue'
import XssHomeView from '../views/XssHomeView.vue'
import XssLaundryView from '../views/XssLaundryView.vue'
import XssFurnitureView from '../views/XssFurnitureView.vue'
import XssBathroomView from '../views/XssBathroomView.vue'
import XssNewsView from '../views/XssNewsView.vue'

const routes = [
  {
    path: '/',
    redirect: '/xishuashua'
  },
  {
    path: '/xishuashua',
    component: XssLayout,
    children: [
      {
        path: '',
        name: 'xss-home',
        component: XssHomeView,
        meta: { title: '洗刷刷全铝家具 - 昆明全铝家具定制' }
      },
      {
        path: 'products/laundry',
        name: 'xss-laundry',
        component: XssLaundryView,
        meta: { title: '全铝洗衣柜 - 洗刷刷全铝家具' }
      },
      {
        path: 'products/furniture',
        name: 'xss-furniture',
        component: XssFurnitureView,
        meta: { title: '全铝家具 - 洗刷刷全铝家具' }
      },
      {
        path: 'products/bathroom',
        name: 'xss-bathroom',
        component: XssBathroomView,
        meta: { title: '全铝浴室柜 - 洗刷刷全铝家具' }
      },
      {
        path: 'news',
        name: 'xss-news',
        component: XssNewsView,
        meta: { title: '近期资讯 - 洗刷刷全铝家具' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
