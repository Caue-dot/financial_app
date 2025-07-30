<script setup lang="ts">
import CategoryCard from '@/components/CategoryCard.vue';
import TransactionCard from '@/components/TransactionCard.vue';
import TransactionListing from '@/components/TransactionListing.vue';
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const reportId = route.params.id;


const reportState = reactive({
    report: null
})

const loadReport = async () =>{
    try{
        const response = await axios.get(`/api/reports/${reportId}?includeCategories=true`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })

        reportState.report = response.data.data;

        console.log(reportState.report);
    }catch(error){
        console.log('Failed getting report: ' + error);
    }
}

onMounted(() => {
    loadReport();
})

</script>


<style scoped> 
@import "@/assets/css/pages/reports.css";
@import "@/assets/css/pages/transaction.css";
@import "@/assets/css/pages/category.css";
</style>

<template>
    <main class="reports-main">

        <div class="first-section">
            <div class="box-1">
                <div class="layout">
                    <div class="gray-title">Transações</div>
                    <div class="transaction-container">
                        <TransactionListing 
                        :transactions="reportState.report?.transactions"
                        @deleted="loadReport()"
                        />
                    </div>
                </div>
            </div>

            <div class="box-2">
                
                <div class="layout">
                    <div class="gray-title">Categorias</div>
                    <div class="categories-caption">
                        <div>Lucro</div>
                        <div>Ganho</div>
                        <div>Gasto</div>
                    </div>
                    <div class="category-container">
                        <CategoryCard v-for="category in reportState.report?.categories"
                        :name="category.name"
                        :profit="category.profit"
                        :total-income="category.totalIncome"
                        :total-expense="category.totalExpense"
                        /> 
                    </div>
                </div>

            </div>
        </div>

        <div class="second-section">

            <div class="box-3">
                
                <div class="layout">
                    <div class="gray-title">Resumo</div>
                    <div>Renda total: <span class="report-value-income">R$ {{ reportState.report?.totalIncome }} </span> </div>
                    <div>Gasto total: <span class="report-value-expense"> R${{ reportState.report?.totalExpense  }}</span></div>
                </div>
    
            </div>
        </div>










    </main>
</template>