<script setup>
import ReportCard from '@/components/ReportCard.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';


const reportState = reactive({
    reports: null
})

const loadReports = async () =>{
    try{
        const response = await axios.get("/api/reports", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })

        reportState.reports = response.data.data;

        console.log(reportState.reports);
    }catch(error){
        console.log('Failed getting report: ' + error);
    }
}

onMounted(() => {
    loadReports();
})


</script>

<style scoped>

@import "@/assets/css/pages/reports";

</style>

<template>
    <div class="layout">

        <div class="caption">
            <div>Data </div>
            <div class="side-info">

                <div>Ganho</div>
                <div>Gasto</div>
            </div>
        </div>
        <div class="reports-container">

            <ReportCard v-for="report in reportState.reports " :report="report" />
        </div>
    </div>
</template>