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
            <div class="transaction-type">{{ type }}</div>
            <div v-if="type=='Gasto' "class="transaction-value-expense">-{{value}}</div>
            <div v-else-if="type=='Renda'" class="transaction-value-income">+{{ value }} </div>
            <div class="transaction-date">{{ date }}</div>
        </div>
</div>


</template>