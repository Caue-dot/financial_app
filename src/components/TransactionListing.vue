<script setup>

import TransactionCard from '@/components/TransactionCard.vue';

defineProps({
    transactions: Array
})

</script>


<template>

        <TransactionCard v-for="transaction in transactions" 
        :name="transaction.name" 
        :value="transaction.value" 
        :type="transaction.type" 
        :date="transaction.createdAt" />

</template>