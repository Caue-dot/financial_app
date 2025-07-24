<script setup>
import { RouterLink, useRoute } from 'vue-router';


const isActiveLink = (routePath) =>{
    const route = useRoute();
    
    if(routePath != "/"){
        return route.path.includes(routePath);
    }
    return route.path == routePath;  

}

</script>

<template>
    <nav class="sidebar">
        <div class="app-name-container">
            <RouterLink
            to="/">
                <h1 class="app-name"> <span class="app-name-color">Fin</span>App</h1>
            </RouterLink>
        </div>

        <div class="sidebar-content-container">

            <div class="nav-buttons"> 
                <RouterLink :class="isActiveLink('/') ? 'nav-button' : 'nav-button-disabled'"
                to="/">
                    <i class="pi pi-microsoft icon"> </i>
                    <div class="nav-button-text">Painel</div>
                </RouterLink>
    
                <RouterLink :class="isActiveLink('/transactions') ? 'nav-button' : 'nav-button-disabled'"
                to="/transactions">
                    <i class="pi pi-dollar icon"> </i>
                    <div class="nav-button-text">Transações</div>
                </RouterLink>
                <RouterLink :class="isActiveLink('/reports') ? 'nav-button' : 'nav-button-disabled'"
                to="/reports">
                    <i class="pi pi-receipt icon"> </i>
                    Relatórios
                </RouterLink>
                <RouterLink :class="isActiveLink('/categories') ? 'nav-button' : 'nav-button-disabled'"
                to="/categories">
                    <i class="pi pi-tags icon"> </i>
                    Categorias
                </RouterLink>
            </div>
    
            <div class="nav-buttons">
                <RouterLink :class="isActiveLink('/user') ? 'nav-button' : 'nav-button-disabled'"
                to="/user">
                    <i class="pi pi-user icon"> </i>
                    <div class="nav-button-text">Conta</div>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>