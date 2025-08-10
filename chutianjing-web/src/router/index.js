import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const Login = () => import('../views/Login.vue')
const Asset = () => import('../pages/asset/Index.vue')
const Corp = () => import('../pages/asset/corp/Index.vue')
const Large = () => import('../pages/asset/corp/large/Index.vue')
const LargeOrg = () => import('../pages/asset/corp/large/org/Index.vue')
const LargeProduct = () => import('../pages/asset/corp/large/product/Index.vue')
const LargeIndustry = () => import('../pages/asset/corp/large/industry/Index.vue')
const LargePersonnel = () => import('../pages/asset/corp/large/personnel/Index.vue')
const Sme = () => import('../pages/asset/corp/sme/Index.vue')
const SmeOrg = () => import('../pages/asset/corp/sme/org/Index.vue')
const SmeProduct = () => import('../pages/asset/corp/sme/product/Index.vue')
const SmePersonnel = () => import('../pages/asset/corp/sme/personnel/Index.vue')
const Retail = () => import('../pages/asset/retail/Index.vue')
const Cards = () => import('../pages/asset/cards/Index.vue')

const Region = () => import('../pages/region/Index.vue')
const Industry = () => import('../pages/industry/Index.vue')
const Group = () => import('../pages/group/Index.vue')
const Market = () => import('../pages/market/Index.vue')
const Portfolio = () => import('../pages/portfolio/Index.vue')
const AIReport = () => import('../pages/ai/Index.vue')
const Suggestion = () => import('../pages/suggestion/Index.vue')
const Settings = () => import('../pages/settings/Index.vue')
const Users = () => import('../pages/users/Index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login },
    { path: '/', redirect: '/asset' },
    {
      path: '/asset', component: Asset, meta: { requiresAuth: true },
      children: [
        {
          path: 'corp', component: Corp,
          children: [
            {
              path: 'large', component: Large,
              children: [
                { path: 'org', component: LargeOrg },
                { path: 'product', component: LargeProduct },
                { path: 'industry', component: LargeIndustry },
                { path: 'personnel', component: LargePersonnel },
              ]
            },
            {
              path: 'sme', component: Sme,
              children: [
                { path: 'org', component: SmeOrg },
                { path: 'product', component: SmeProduct },
                { path: 'personnel', component: SmePersonnel },
              ]
            }
          ]
        },
        { path: 'retail', component: Retail },
        { path: 'cards', component: Cards },
      ]
    },
    { path: '/region', component: Region, meta: { requiresAuth: true } },
    { path: '/industry', component: Industry, meta: { requiresAuth: true } },
    { path: '/group', component: Group, meta: { requiresAuth: true } },
    { path: '/market', component: Market, meta: { requiresAuth: true } },
    { path: '/portfolio', component: Portfolio, meta: { requiresAuth: true } },
    { path: '/ai-report', component: AIReport, meta: { requiresAuth: true } },
    { path: '/suggestion', component: Suggestion, meta: { requiresAuth: true } },
    { path: '/settings', component: Settings, meta: { requiresAuth: true } },
    { path: '/users', component: Users, meta: { requiresAuth: true } },
  ]
})

router.beforeEach((to, _from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router