<template>
  <section class="technologies-section relative py-16 lg:py-24 -mt-20 mb-12 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-tech-float-1"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-tech-float-2"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span class="text-sm font-semibold text-primary">Stack Technique</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Technologies avec lesquelles 
          <span class="text-primary">je travaille</span>
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          Une sélection des technologies modernes que j'utilise pour créer des solutions innovantes
        </p>
      </div>

      <!-- Technologies Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 lg:gap-8">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.name"
          class="group relative"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Card Container -->
          <div class="tech-card relative bg-white rounded-2xl p-6 lg:p-8 shadow-xl hover:shadow-2xl border-2 border-primary/10 hover:border-primary/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-3 group">
            <!-- Animated Glow Effect -->
            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 rounded-2xl transition-all duration-500 blur-xl"></div>
            
            <!-- Icon Container -->
            <div class="relative z-10 flex flex-col items-center justify-center space-y-4">
              <div class="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded-2xl group-hover:rounded-3xl transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:bg-primary/5 transform group-hover:rotate-6">
                <img 
                  :src="tech.image" 
                  :alt="tech.name"
                  class="w-14 h-14 lg:w-18 lg:h-18 object-contain filter group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-500"
                  @error="handleImageError"
                  loading="lazy"
                />
              </div>
              
              <!-- Technology Name -->
              <span class="text-sm lg:text-base font-bold text-gray-800 group-hover:text-primary transition-all duration-300 text-center transform group-hover:scale-110">
                {{ tech.name }}
              </span>
            </div>

            <!-- Animated Decorative Corners -->
            <div class="absolute top-0 right-0 w-12 h-12 bg-primary/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150"></div>
            <div class="absolute bottom-0 left-0 w-12 h-12 bg-secondary/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-150"></div>
            
            <!-- Floating Particles on Hover -->
            <div class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-tech-particle-1 transition-opacity duration-300"></div>
            <div class="absolute bottom-2 left-2 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-tech-particle-2 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      <!-- Bottom Decoration -->
      <div class="mt-16 flex justify-center">
        <div class="flex space-x-2">
          <div class="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div class="w-2 h-2 bg-secondary rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
          <div class="w-2 h-2 bg-accent rounded-full animate-pulse" style="animation-delay: 0.4s"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { technologies } from '@/data/portfolio';

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  // Fallback to a placeholder or default tech icon
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iI0YzRjRGNiIvPgo8cGF0aCBkPSJNMzIgMjJMMzIgNDJNMjIgMzJINDEiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+';
};
</script>

<style scoped>
.tech-card {
  animation: fadeInUp 0.8s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes tech-float-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(50px, -50px) scale(1.2);
    opacity: 0.5;
  }
}

@keyframes tech-float-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-60px, 60px) scale(1.3);
    opacity: 0.5;
  }
}

@keyframes tech-particle-1 {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(10px, -10px) scale(0);
    opacity: 0;
  }
}

@keyframes tech-particle-2 {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-10px, 10px) scale(0);
    opacity: 0;
  }
}

.animate-tech-float-1 {
  animation: tech-float-1 15s ease-in-out infinite;
}

.animate-tech-float-2 {
  animation: tech-float-2 18s ease-in-out infinite;
}

.animate-tech-particle-1 {
  animation: tech-particle-1 2s ease-out infinite;
}

.animate-tech-particle-2 {
  animation: tech-particle-2 2s ease-out 0.5s infinite;
}
</style>

