<script setup>

defineProps({
    name: String,
    profit: String,
    totalIncome: String,
    totalExpense: String
})

</script>

<style scoped>
@import "@/assets/css/pages/category.css";

</style>

<template>
    <div class="card">
        <div>
            {{ name }}
        </div>

        <div class="side-info">
            <div :class=" parseFloat(profit) < 0 ? 'red-text' : 'green-text'">
                R$ {{ profit }}
            </div>
            <div class="green-text">
               R$ {{ totalIncome }}
           </div>
            <div class="red-text">
                R$ {{ totalExpense }}
            </div>

        </div>

    </div>
</template>