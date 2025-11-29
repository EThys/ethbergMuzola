<template>
  <div id="app" class="min-h-screen bg-white">
    <Loader v-if="showLoader" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import Loader from './components/Loader.vue';

const route = useRoute();
const showLoader = computed(() => route.path === '/');
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
