<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
</script>

<template>
  <Header/>
  <Sidebar/>
  <RouterView />
</template>

