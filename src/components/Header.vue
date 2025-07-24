<script setup>
import { RouterLink } from 'vue-router';

</script>


<template>

<header>
    <header class="header">
        <div class="main-title-container">
                <h1 class="title">
                   Painel <span class="title-color">Transações</span>
                </h1>
        </div>
        <RouterLink
        to="/user">
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