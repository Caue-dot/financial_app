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
        const response = await axios.get("https://ef5ze5exptsm6jarkueqerqlam0xshdu.lambda-url.sa-east-1.on.aws/api/transactions", {
            headers: {
                Authorization: 'Bearer 1|T6HOSkleI28P0mMfnMFP2rvazUy9CJZuMzBVUoF6975d6eed',
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