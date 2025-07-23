<script setup>

import { defineProps } from 'vue';

defineProps({
name: String,
value: String,
date: String,
type: String,
})
</script>

<template>

<div class="transaction">
    <div class="transaction-name">{{ name }}</div>
        <div class="transaction-info">
            <div class="transaction-type">{{ type == "E" ? "Gasto" : "Renda" }}</div>
            <div v-if="type=='E' "class="transaction-value-expense">-{{value}}</div>
            <div v-else-if="type=='I'" class="transaction-value-income">+{{ value }} </div>
            <div class="transaction-date">{{ date }}</div>
        </div>
</div>


</template>