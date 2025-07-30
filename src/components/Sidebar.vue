<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isActiveLink = (routePath) =>{


    if(routePath != "/"){
        return route.path.includes(routePath);
    }
    return route.path == routePath;  

}

const token = ref(localStorage.token);

const handleLogout = () =>{
    try{
        axios.post('user/logout');
        localStorage.removeItem('token')
        token.value = null;
        router.push('/user/auth')
    }catch(error){
        console.log('Error trying to logout: ', error)
    }
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
                :to=" token !=  '' ? '/user' : '/user/auth'">
                    <i class="pi pi-user icon"> </i>
                    <div class="nav-button-text">Conta</div>
                </RouterLink>
                <button v-if="token" @click="handleLogout" class="nav-button-disabled"
                :to=" token !=  null ? '/user' : '/user/auth'">
                    <i class="pi pi-sign-out icon"> </i>
                    <div class="nav-button-text">Sign out</div>
                </button>
            </div>
        </div>
    </nav>
</template>