import { createRouter, createWebHistory } from 'vue-router'
import TransactionsView from '../views/TransactionsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AuthView from '@/views/AuthView.vue'
import AddTransactionView from '@/views/AddTransactionView.vue'
import EditTransactionView from '@/views/EditTransactionView.vue'
import TransactionView from '@/views/TransactionView.vue'


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
      path: '/transactions/:id',
      name: 'transaction',
      component: TransactionView,
    },
    {
      path: '/transactions/add',
      name: 'add_transaction',
      component: AddTransactionView,
    },
    {
      path: '/transactions/edit/:id',
      name: 'edit_transaction',
      component: EditTransactionView,
    },
    {
      path: '/user/auth',
      name: 'auth',
      component: AuthView,
    },
    
    
  ],
})

export default router
