import { createRouter, createWebHistory } from 'vue-router'
import TransactionsView from '../views/TransactionsView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/transacoes',
      name: 'transactions',
      component: TransactionsView,
    },
    
  ],
})

export default router
