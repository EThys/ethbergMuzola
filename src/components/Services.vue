<template>
  <section class="services-section relative py-20 lg:py-32 overflow-hidden" id="service">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary/10 mb-6">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-sm font-bold text-primary">Services</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Mes 
          <span class="text-primary">Services</span>
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          Des solutions sur mesure pour répondre à tous vos besoins numériques
        </p>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card group relative animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 h-full flex flex-col">
            <!-- Icon Container -->
            <div class="mb-6 relative">
              <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:bg-primary transition-all duration-300">
                <i :class="['fa', service.icon, 'text-3xl text-primary group-hover:text-white transition-colors duration-300']"></i>
              </div>
              <!-- Decorative Element -->
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <!-- Content -->
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                {{ service.title }}
              </h3>
              <p class="text-gray-700 leading-relaxed">
                {{ service.description }}
              </p>
            </div>

            <!-- Arrow Icon -->
            <div class="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
              <span class="text-sm mr-2">En savoir plus</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>

            <!-- Hover Effect -->
            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-3xl transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { services } from '@/data/portfolio';
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}
</style>

