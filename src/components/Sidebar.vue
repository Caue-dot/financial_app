<script>
import { RouterLink } from 'vue-router';

</script>

<template>
    <nav class="sidebar">

        <div class="nav-buttons"> 
            <RouterLink class="nav-button">
                <i class="pi pi-microsoft icon"> </i>
                <div class="nav-button-text">Overview</div>
            </RouterLink>

            <RouterLink class="nav-button-disabled">
                <i class="pi pi-dollar icon"> </i>
                <div class="nav-button-text">Transações</div>
            </RouterLink>
            <RouterLink class="nav-button-disabled">
                <i class="pi pi-receipt icon"> </i>
                Relatórios
            </RouterLink>
            <RouterLink class="nav-button-disabled">
                <i class="pi pi-tags icon"> </i>
                Categorias
            </RouterLink>
        </div>
    </nav>
</template>