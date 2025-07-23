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
        <span class="transactions-box-2">
          <div class="layout">
            <div class="transaction-add-title">Adicionar Transação</div>
            <RouterLink class="transaction-add-link">Adicionar</RouterLink>
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
