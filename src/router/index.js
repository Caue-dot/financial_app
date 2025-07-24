import { createRouter, createWebHistory } from 'vue-router'
import TransactionsView from '../views/TransactionsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AuthView from '@/views/AuthView.vue'
import AddTransactionView from '@/views/AddTransactionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsView,
    },
    {
      path: '/transactions/add',
      name: 'add_transaction',
      component: AddTransactionView,
    },
    {
      path: '/user/auth',
      name: 'auth',
      component: AuthView,
    },
    
    
  ],
})

export default router
