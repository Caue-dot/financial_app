<script setup>
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import TransactionCard from '@/components/TransactionCard.vue';

const state = reactive({
    transactions: [],
    isLoading: true
});

onMounted(async () =>{
    try{
        const response = await axios.get("http://localhost/api/transactions", {
            headers: {
                Authorization: 'Bearer 5|d11lJh4Gb62jAEmWyRZf3lbMqGimCuzCddj52m56c7a1c255',
            }
        });
        state.transactions = response.data.data;
        console.log(response.data.data);
    }catch (error){
        console.error('Error fetching transactions: ', error);
    }finally{
        state.isLoading = false;
    }
})
</script>


<template>

        <TransactionCard v-for="transaction in state.transactions" 
        :name="transaction.name" 
        :value="transaction.value" 
        :type="transaction.type" 
        :date="transaction.createdAt" />

</template>