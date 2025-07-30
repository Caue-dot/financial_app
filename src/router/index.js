import { createRouter, createWebHistory } from 'vue-router'
import TransactionsView from '../views/TransactionsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import AuthView from '@/views/AuthView.vue'
import AddTransactionView from '@/views/AddTransactionView.vue'
import EditTransactionView from '@/views/EditTransactionView.vue'
import TransactionView from '@/views/TransactionView.vue'
import ReportsView from '@/views/ReportsView.vue'
import CategoriesView from '@/views/CategoriesView.vue'
import ReportView from '@/views/ReportView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashboardView,
      meta: {title: "Painel Financeiro", requiresAuth: true}
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: TransactionsView,
      meta: {title: "Transações", requiresAuth: true}
    },
    {
      path: '/transactions/:id',
      name: 'transaction',
      component: TransactionView,
      meta: {title: "Transações", requiresAuth: true}
    },
    {
      path: '/transactions/add',
      name: 'add_transaction',
      component: AddTransactionView,
      meta: {title: "Transações", requiresAuth: true}
    },
    {
      path: '/transactions/edit/:id',
      name: 'edit_transaction',
      component: EditTransactionView,
      meta: {title: "Transações", requiresAuth: true}
    },
    {
      path: '/reports',
      name: 'Reports',
      component: ReportsView,
      meta: {title: "Relatorios", requiresAuth: true}
    },
    {
      path: '/reports/:id',
      name: 'Report',
      component: ReportView,
      meta: {title: "Relatorio", requiresAuth: true}
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoriesView,
      meta: {title: "Categorias", requiresAuth: true}
    },
    {
      path: '/user/auth',
      name: 'auth',
      component: AuthView,
      meta: {title: "Conta"}
    },
    
    
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorage.token

  if(to.meta.requiresAuth && !token){
    return next({name: 'auth'})
  }

  next()
})

export default router
