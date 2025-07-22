<script setup>
import TransactionCard from '@/components/TransactionCard.vue';

</script>

<style>
@import "@/assets/css/pages/transactions.css";
</style>

<template>
  <main>
    <div class="layout">
      <div class="transaction-container"> 
          <TransactionCard 
          name="Mercado"
          value="100.21"
          type="Gasto"
          date="2025-06-21"
          />
          <TransactionCard
          name="Bolsa família"
          value="600"
          type="Renda"
          date="2025-06-22"
          />
          <TransactionCard
          name="Chuveiro"
          value="100.54"
          type="Gasto"
          date="2025-06-23"
          />

      </div>
    </div>
  </main>
</template>
