
<script setup>
import router from '@/router';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const transactionId = route.params.id;

const editTransactionForm = reactive({
    name: "",
    description: "",
    category: "",
    value : 0,
    type: "Gasto",
    recurrent: false
});


const handleSubmit =  async () => {
    const editedTransaction = {
        name: editTransactionForm.name,
        category: editTransactionForm.category,
        value : editTransactionForm.value,
        type: editTransactionForm.type == "Renda" ? "I" : "E" ,
        recurrent: editTransactionForm.recurrent
    }

    if(editTransactionForm.description){
        editedTransaction.description = editTransactionForm.description
    }

    try{
        await axios.patch("/api/transactions/" + transactionId, editedTransaction, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            }
        });
        console.log("Transaction successfully edited")
        router.push("/transactions")
    }catch(error){
        console.error('Error editing transaction: ', error)
    }
} 

const transaction = ref();

const getTransaction = async () => {
    try{
        const response =  await axios.get('/api/transactions/' + transactionId, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })

        transaction.value = response.data.data;

        console.log(transaction.value.type);
        editTransactionForm.name = transaction.value.name;
        editTransactionForm.description = transaction.value.description;
        editTransactionForm.category = transaction.value.category;
        editTransactionForm.type = transaction.value.type == "I" ? "Renda" : "Gasto";
        editTransactionForm.value = transaction.value.value;
        editTransactionForm.recurrent = transaction.value.recurrent;

    }catch(error){

    }

}

onMounted(() => {
    getTransaction();
}); 

</script>

<style scoped>
@import "@/assets/css/pages/add-edit-transaction";
</style>


<template>
    <main class="add-transaction-main">
        <div class="layout">
            <div class="transaction-add-title">Editar Transação</div>

            <form @submit.prevent="handleSubmit" class="add-transaction-inputs">

                <div class="first-section">
                    <div class="input-container">
                        <label for="name">Nome</label>
                        <input v-model="editTransactionForm.name" type="text" placeholder="Nome" id="name">
                    </div>
                    <div class="input-container">
                        <label for="description">Descrição</label>
                        <textarea class="description-area" v-model="editTransactionForm.description"  rows="2" cols="33" id="description"></textarea>
                    </div>

                    <div class="input-container">
                        <label for="name">Categoria</label>
                        <input v-model="editTransactionForm.category" type="text" placeholder="Categoria" id="category">
                    </div>
                </div>


                <div class="second-section">
                    <div class="input-container">
                        <label for="value">Valor</label>
                        <input v-model="editTransactionForm.value" type="number" step="0.01" id="value" placeholder="Valor">
                    </div>
                    <div class="transaction-type-container">
                        <label for="type">Tipo</label>
                        <select v-model="editTransactionForm.type" class="transaction-add-type" name="type" id="type">
                            <option>
                                Gasto
                            </option>
                             <option>
                                Renda
                            </option>
                        </select>
                    </div>
                </div>
                <div>
                    <input id="recurrent" v-model="editTransactionForm.recurrent" type="checkbox" class="recurrent-checkbox">
                    <label for="recurrent">Pagamento recorrente</label>
                </div>
                <div class="create-button-container">
                    <button class="create-button">Editar</button>
                </div>
            </form>
        </div>
    </main>


</template>