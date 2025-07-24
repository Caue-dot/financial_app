<script setup>

import TransactionCard from '@/components/TransactionCard.vue';
import axios from 'axios';
import { reactive } from 'vue';

const props = defineProps({
    transactions: Array
})

const emit = defineEmits(['deleted'])

const modalDeleteState = reactive({
    modalActive: false,
    transactionId: 0
});

const toggleDeleteModal = (id) =>{
    modalDeleteState.modalActive = !modalDeleteState.modalActive;
    if(id){
        modalDeleteState.transactionId = id;
    }
}


const handleDeleteTransaction =  async () => {
    try{
        axios.delete(`/api/transactions/${modalDeleteState.transactionId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })

        const transactionIndex = props.transactions.findIndex(transaction => transaction.id == modalDeleteState.transactionId) 
        props.transactions.splice(transactionIndex, 1);

        toggleDeleteModal();
        emit('deleted');
        console.log('Transaction with id: ' + modalDeleteState.transactionId + 'was successfully deleted!')
    }catch(error){
        console.log('Found an error while trying to delete transaction: ', error)
    }
}
</script>


<template>

    <div v-if="modalDeleteState.modalActive" class="modal-bg">
        <div class="modal">
            
            <div class="modal-title">Você tem certeza que deseja apagar esta transação?</div>
            <div class="modal-buttons">
                <button @click="handleDeleteTransaction" class="modal-yes-button">Apagar</button>
                <button @click="toggleDeleteModal" class="modal-no-button">Voltar</button>
            </div>
        </div>
    </div>
    <TransactionCard v-for="transaction in transactions" 
    :name="transaction.name" 
    :value="transaction.value" 
    :type="transaction.type" 
    :date="transaction.createdAt"
    :id="transaction.id" 
    @delete-transaction="toggleDeleteModal(transaction.id)"/>

</template>