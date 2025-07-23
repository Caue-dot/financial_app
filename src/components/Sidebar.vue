<script setup>
import { RouterLink, useRoute } from 'vue-router';


const isActiveLink = (routePath) =>{
    const route = useRoute();
    return route.path === routePath;
}

</script>

<template>
    <nav class="sidebar">
        <div class="app-name-container">
            <h1 class="app-name"> <span class="app-name-color">Fin</span>App</h1>
        </div>

        <div class="sidebar-content-container">

            <div class="nav-buttons"> 
                <RouterLink :class="isActiveLink('/') ? 'nav-button' : 'nav-button-disabled'"
                to="/">
                    <i class="pi pi-microsoft icon"> </i>
                    <div class="nav-button-text">Painel</div>
                </RouterLink>
    
                <RouterLink :class="isActiveLink('/transacoes') ? 'nav-button' : 'nav-button-disabled'"
                to="/transacoes">
                    <i class="pi pi-dollar icon"> </i>
                    <div class="nav-button-text">Transações</div>
                </RouterLink>
                <RouterLink :class="isActiveLink('/relatorios') ? 'nav-button' : 'nav-button-disabled'"
                to="/relatorios">
                    <i class="pi pi-receipt icon"> </i>
                    Relatórios
                </RouterLink>
                <RouterLink :class="isActiveLink('/categorias') ? 'nav-button' : 'nav-button-disabled'"
                to="/categorias">
                    <i class="pi pi-tags icon"> </i>
                    Categorias
                </RouterLink>
            </div>
    
            <div class="nav-buttons">
                <RouterLink :class="isActiveLink('/usuario') ? 'nav-button' : 'nav-button-disabled'"
                to="/usuario">
                    <i class="pi pi-user icon"> </i>
                    <div class="nav-button-text">Conta</div>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>