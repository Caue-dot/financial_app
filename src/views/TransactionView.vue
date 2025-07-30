

<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

const recurrent = ref(true);
const transactionId = route.params.id;

const modalDeleteState = reactive({
    modalActive: false,
});

const transaction = ref()
const toggleDeleteModal = () =>{
    modalDeleteState.modalActive = !modalDeleteState.modalActive;
}

const handleDeleteTransaction =  async () => {
    try{
        axios.delete(`/api/transactions/${transactionId}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })

        router.push('/transactions')
        
        console.log('Transaction with id: ' + modalDeleteState.transactionId + 'was successfully deleted!')
    }catch(error){
        console.log('Found an error while trying to delete transaction: ', error)
    }
}

const getTransaction = async () => {
    try{
        const response =  await axios.get('/api/transactions/' + transactionId, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })

        transaction.value = response.data.data;
        console.log(transaction.value.name);

    }catch(error){

    }

}

onMounted(() => {
    getTransaction();
})

</script>


<style scoped>
@import "@/assets/css/pages/transaction.css";
</style>

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


    <main class="transaction-main">
        <div class="box-1">

            <div class="layout">
                <div class="transaction-title">{{ transaction?.name}}</div>
                <div v-if="transaction?.type =='I' " class="transaction-income">Renda: R${{transaction.value }} <span v-if="transaction.recurrent" class="recurrency">&#8226; Recorrente</span></div>
                <div v-else class="transaction-expense">Gasto: R${{transaction?.value }} <span v-if="transaction?.recurrent" class="recurrency">&#8226; Recorrente</span></div>
                <div class="transaction-category-title"><span class="transaction-bold">Categoria:</span> {{transaction?.category}}</div>
                
                
                <div class="description-container">
                    <div class="transaction-description-title">Descrição: </div>
                    <p>{{ transaction?.description }}</p>
                </div>
                
            </div>
        </div>

        <div class="box-2">

            <div class="layout"> 
                <div class="transaction-title">Gerenciar Transação</div>
                <div class="manage-buttons-container">
                    <RouterLink :to="`/transactions/edit/${transaction?.id}`"  class="manage-button-edit">Editar Transação</RouterLink>
                    <button @click="toggleDeleteModal" class="manage-button-delete">Deletar Transação</button>
                </div>
            </div>
        </div>


    </main>
</template>