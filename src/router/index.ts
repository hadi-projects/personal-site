import { createRouter, createWebHashHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
      component: () => import('../views/ExperienceView.vue'),
      children: [
        {
          path: 'lead',
          name: 'lead',
          component: () => import('../views/experience/LeadDeveloperView.vue')
        },
        {
          path: 'backend',
          name: 'backend',
          component: () => import('../views/experience/BackendDeveloperView.vue')
        },
        {
          path: 'itdev',
          name: 'itdev',
          component: () => import('../views/experience/ITDevelopmentView.vue')
        },
        {
          path: 'fullstack',
          name: 'fullstack',
          component: () => import('../views/experience/FullstackDeveloperView.vue')
        },
        {
          path: 'software',
          name: 'software',
          component: () => import('../views/experience/SoftwareEngineer.vue')
        },
      ]
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
