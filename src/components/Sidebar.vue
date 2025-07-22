<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="sidebar">
        <div class="app-name-container">
            <h1 class="app-name"> <span class="app-name-color">Fin</span>App</h1>
        </div>
        <div class="nav-buttons"> 
            <RouterLink class="nav-button"
            to="/">
                <i class="pi pi-microsoft icon"> </i>
                <div class="nav-button-text">Painel</div>
            </RouterLink>

            <RouterLink class="nav-button-disabled"
            to="/">
                <i class="pi pi-dollar icon"> </i>
                <div class="nav-button-text">Transações</div>
            </RouterLink>
            <RouterLink class="nav-button-disabled"
            to="/">
                <i class="pi pi-receipt icon"> </i>
                Relatórios
            </RouterLink>
            <RouterLink class="nav-button-disabled"
            to="/">
                <i class="pi pi-tags icon"> </i>
                Categorias
            </RouterLink>
        </div>
    </nav>
</template>