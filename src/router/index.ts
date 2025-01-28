import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/profile'
    },
    {
      path: '/profile',
      component: ProfileView
    },
    {
      path: '/experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/portofolio',
      component: () => import('../views/PortofolioView.vue')
    },
    {
      path: '/certification',
      component: () => import('../views/CertificationView.vue')
    },
    {
      path: '/tools',
      component: () => import('../views/ToolsView.vue')
    },
    {
      path: '/about',
      component: () => import('../views/AboutView.vue')
    },
  ],
})

export default router
