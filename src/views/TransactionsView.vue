<script setup>

import { onMounted, reactive } from 'vue';
import axios from 'axios';
import TransactionListing from '@/components/TransactionListing.vue';


const state = reactive({
    transactions: [],
    totalExpense: 0,
    totalIncome: 0,
    isLoading: true
});


onMounted(async () =>{
    try{
        const response = await axios.get("/api/transactions", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            }
        });
        state.transactions = response.data.transactions;
        state.totalExpense = response.data.totalExpense;
        state.totalIncome = response.data.totalIncome;
        console.log(response.data);
    }catch (error){
        console.error('Error fetching transactions: ', error);
    }finally{
        state.isLoading = false;
    }
})

</script>

<style>
@import "@/assets/css/pages/transactions.css";
</style>

<template>
  <main class="transactions-main">
    <div class="layout-container">

      <span class="transactions-box-1">
        <div class="layout">
          <div class="caption">

            <div>Nome</div>
            <div>Tipo</div>
            <div>Valor</div>
            <div>Data</div>


          </div>
          <div class="transaction-container">
            <TransactionListing 
            :transactions="state.transactions"
            />
          </div>
        </div>
      </span>

      <div class="transaction-side-boxes">
        <span class="transactions-box-3">
          <div class="layout">
              <div class="transaction-total-title">Resumo</div>
              <div>Renda total: <span class="transaction-value-income">R$ {{ state.totalIncome }}</span></div>
              <div>Gasto total: <span class="transaction-value-expense">R$ {{ state.totalExpense }}</span></div>
          </div>
        </span>
        <span class="transactions-box-2">
          <div class="layout">
            <div class="transaction-add-title">Adicionar Transação</div>
            <RouterLink class="transaction-add-link">Adicionar</RouterLink>
          </div>
        </span>
      </div>

    </div>


  </main>
</template>
