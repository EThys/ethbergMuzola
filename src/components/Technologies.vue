<template>
  <section class="technologies-section relative py-12 lg:py-16 -mt-20 mb-8 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-white"></div>
    
    <div class="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-8 lg:mb-10">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-3">
          <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span class="text-xs font-semibold text-primary">Stack Technique</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Technologies avec lesquelles 
          <span class="text-primary">je travaille</span>
        </h2>
      </div>

      <!-- Technologies - Design Compact en Ligne -->
      <div class="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
        <div
          v-for="(tech, index) in technologies"
          :key="tech.name"
          class="tech-item group relative animate-fade-in"
          :style="{ animationDelay: `${index * 0.05}s` }"
        >
          <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-md hover:shadow-xl border-2 border-primary/10 hover:border-primary transition-all duration-300 transform hover:scale-105">
            <!-- Icon -->
            <div class="w-10 h-10 flex items-center justify-center bg-primary/5 rounded-lg group-hover:bg-primary transition-all duration-300">
              <img 
                :src="tech.image" 
                :alt="tech.name"
                class="w-8 h-8 object-contain filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                @error="handleImageError"
                loading="lazy"
              />
            </div>
            <!-- Name -->
            <span class="text-sm font-bold text-gray-800 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
              {{ tech.name }}
            </span>
          </div>
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
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out both;
}
</style>

