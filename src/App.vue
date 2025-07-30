<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
import { computed } from 'vue';

const router = useRouter();



</script>

<template>
  <Header/>
  <Sidebar/>
  <RouterView />
</template>

