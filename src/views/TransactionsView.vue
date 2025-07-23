<script setup>

import TransactionListing from '@/components/TransactionListing.vue';

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
            <TransactionListing />
          </div>
        </div>
      </span>

      <div class="transaction-side-boxes">
        <span class="transactions-box-3">
          <div class="layout">
              <div class="transaction-total-title">Resumo</div>
              <div>Renda total: <span class="transaction-value-income">100</span></div>
              <div>Gasto total: <span class="transaction-value-expense">100</span></div>
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
