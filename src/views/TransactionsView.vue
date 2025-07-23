<script setup>

import TransactionListing from '@/components/TransactionListing.vue';

</script>

<style>
@import "@/assets/css/pages/transactions.css";
</style>

<template>
  <main>
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
  </main>
</template>
