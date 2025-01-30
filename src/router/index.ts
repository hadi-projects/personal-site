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
      component: () => import('../views/PortofolioView.vue'),
      children: [
        {
          path: 'palalu',
          name: 'palalu',
          component: () => import('../views/portofolio/PalaluView.vue')
        },
        {
          path: 'lapor',
          name: 'lapor',
          component: () => import('../views/portofolio/LaporView.vue')
        },
        {
          path: 'sivisat',
          name: 'sivisat',
          component: () => import('../views/portofolio/SivisatView.vue')
        },
        {
          path: 'blog-kampus',
          name: 'blog-kampus',
          component: () => import('../views/portofolio/BlogKampusView.vue')
        },
        {
          path: 'kasirku',
          name: 'kasirku',
          component: () => import('../views/portofolio/KasirkuView.vue')
        },
        {
          path: 'pemdes',
          name: 'pemdes',
          component: () => import('../views/portofolio/PemdesView.vue')
        },
        {
          path: 'vault',
          name: 'vault',
          component: () => import('../views/portofolio/VaultView.vue')
        },
        {
          path: 'vault-management',
          name: 'vault-management',
          component: () => import('../views/portofolio/VaultManagementView.vue')
        },
        {
          path: 'landing',
          name: 'landing',
          component: () => import('../views/portofolio/LandingView.vue')
        },
      ]
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
