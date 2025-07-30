<script setup>
import CategoryCard from '@/components/CategoryCard.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const categories = ref();


const loadCategories =  async () =>{
    try{

        const response =  await axios.get("/api/transactions/categories", {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })

        categories.value = response.data;
    }catch(error){
        console.log('Error while trying to get categories: ', error);
    }
}


onMounted(() => {
    loadCategories();
})
</script>

<style scoped>
@import "@/assets/css/pages/category.css";
</style>

<template>
    <main>
        <div class="layout">
            <div class="gray-title">Categorias</div>
            <div class="categories-caption">
                <div>Lucro</div>
                <div>Ganho</div>
                <div>Gasto</div>
            </div>
            <div class="category-container">
                <CategoryCard v-for="category in categories"
                :name="category.name"
                :profit="category.profit"
                :total-income="category.totalIncome"
                :total-expense="category.totalExpense"
                />
            </div>
        </div>
    </main>
</template>