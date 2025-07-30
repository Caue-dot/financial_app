
<script setup>

defineProps({
    report : Object
})
</script>

<style scoped>

@import "@/assets/css/pages/reports";

</style>

<template>

    <div class="card">
        <RouterLink
        class="report-link"
        :to="`/reports/${report.id}`"> 
            {{ report.month }}
        </RouterLink>

        <div class="side-info">
        
            <div>R$ {{ report.totalIncome }}</div>
            <div>R$ {{ report.totalExpense }}</div>
        </div>
    </div>
</template>