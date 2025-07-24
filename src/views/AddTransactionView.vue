
<script setup>
import router from '@/router';
import axios from 'axios';
import { reactive } from 'vue';


const addTransactionForm = reactive({
    name: "",
    description: "",
    category: "",
    value : 0,
    type: "Gasto",
    recurrent: false
});


const handleSubmit =  async () => {
    const newTransaction = {
        name: addTransactionForm.name,
        category: addTransactionForm.category,
        value : addTransactionForm.value,
        type: addTransactionForm.type == "Renda" ? "I" : "E" ,
        recurrent: addTransactionForm.recurrent
    }

    if(addTransactionForm.description){
        newTransaction.description = addTransactionForm.description
    }

    try{
        await axios.post("/api/transactions", newTransaction, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            }
        });
        console.log("Transaction successfully created")
        router.push("/transactions")
    }catch(error){
        console.error('Error creating transaction: ', error)
    }
} 

</script>

<style scoped>
@import "@/assets/css/pages/add-transaction";
</style>


<template>
    <main class="add-transaction-main">
        <div class="layout">
            <div class="transaction-add-title">Adicionar Transação</div>

            <form @submit.prevent="handleSubmit" class="add-transaction-inputs">

                <div class="first-section">
                    <div class="input-container">
                        <label for="name">Nome</label>
                        <input v-model="addTransactionForm.name" type="text" placeholder="Nome" id="name">
                    </div>
                    <div class="input-container">
                        <label for="description">Descrição</label>
                        <textarea class="description-area" v-model="addTransactionForm.description"  rows="2" cols="33" id="description"></textarea>
                    </div>

                    <div class="input-container">
                        <label for="name">Categoria</label>
                        <input v-model="addTransactionForm.category" type="text" placeholder="Categoria" id="category">
                    </div>
                </div>


                <div class="second-section">
                    <div class="input-container">
                        <label for="value">Valor</label>
                        <input v-model="addTransactionForm.value" type="number" step="0.01" id="value" placeholder="Valor">
                    </div>
                    <div class="transaction-type-container">
                        <label for="type">Tipo</label>
                        <select v-model="addTransactionForm.type" class="transaction-add-type" name="type" id="type">
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
                    <input id="recurrent" v-model="addTransactionForm.recurrent" type="checkbox" class="recurrent-checkbox">
                    <label for="recurrent">Pagamento recorrente</label>
                </div>
                <div class="create-button-container">
                    <button class="create-button">Criar</button>
                </div>
            </form>
        </div>
    </main>


</template>