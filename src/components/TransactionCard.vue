<script setup>

import {useRoute, useRouter} from 'vue-router';

import { defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';



const emit = defineEmits(['deleteTransaction'])

const props = defineProps({
name: String,
value: String,
date: String,
type: String,
id: Number,
});


const handleDelete = () =>{
    toggleManageWindow();
    emit('deleteTransaction');
}

const showWindow = ref(false);

const toggleManageWindow = () => {
    showWindow.value = !showWindow.value;
}

</script>

<template>

<div class="transaction">
    <div class="transaction-name">{{ name }}</div>
        <div class="transaction-info">
            <div class="transaction-type">{{ type == "E" ? "Gasto" : "Renda" }}</div>
            <div v-if="type=='E' "class="transaction-value-expense">-{{value}}</div>
            <div v-else-if="type=='I'" class="transaction-value-income">+{{ value }} </div>
            <div class="transaction-date">{{ date }}</div>
            <div class="dots">
                <button @click="toggleManageWindow" class="dots-button">
                    <i class="pi pi-ellipsis-h"></i>
                </button>
            </div>
        </div>


        <div v-show="showWindow" class="transaction-manage">
            <RouterLink :to="'transactions/edit/'+id" class="transaction-manage-element">
                <i class="pi pi-pencil transaction-manage-icon"></i>Editar Transação 
            </RouterLink>
            <button @click="handleDelete" class="transaction-manage-element">
                <i class="pi pi-trash transaction-manage-icon"></i> Deletar Transação
            </button>

        </div>
</div>


</template>