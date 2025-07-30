<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()
const headerTitle = computed(() => route.meta.title || "Painel Financeiro")

onMounted( ()=>{
    console.log("mounted");
})
</script>


<template>

<header>
    <header class="header">
        <div class="main-title-container">
                <h1 class="title">
                    {{headerTitle }}
                </h1>
        </div>
        <RouterLink
        :to="token ? '/user' : '/user/auth'">
        <div class="user-info-container">
                <img class="user-pfp" src="@/assets/img/placeholder/image-placeholder.jpg">
                <div>
                    <div class="user-name">Nome Nome</div>
                    <div class="user-description">Test Test</div>
                </div>
            </div>
        </RouterLink>
    </header>

</header>

</template>