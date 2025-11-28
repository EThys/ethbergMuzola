<template>
  <section class="projects-section relative py-20 lg:py-32 overflow-hidden" id="project">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary/10 mb-6">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span class="text-sm font-bold text-primary">Portfolio</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Mes 
          <span class="text-primary">Derniers Projets</span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez mes réalisations récentes, des projets web modernes et performants
        </p>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="project-card group relative animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <!-- Card Container -->
          <div class="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-primary/10 hover:border-primary/30">
            <!-- Glow Effect -->
            <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500"></div>
            
            <!-- Project Image/Preview -->
            <div class="relative h-80 bg-gray-100 overflow-hidden group/image">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-110"
                @error="handleImageError"
                loading="lazy"
              />
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                  <div class="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-xl">
                    <span class="text-primary font-bold text-lg">Voir le site</span>
                  </div>
                </div>
              </div>
              <!-- Badge -->
              <div class="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg font-semibold text-sm">
                {{ project.title }}
              </div>
            </div>

            <!-- Project Info -->
            <div class="p-8 relative z-10">
              <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                {{ project.title }}
              </h3>
              
              <p class="text-gray-600 mb-6 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div v-if="project.technologies && project.technologies.length > 0" class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-semibold border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Action Button -->
              <a 
                :href="project.url" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn"
              >
                <span>Voir le projet</span>
                <svg class="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            <div class="absolute bottom-4 left-4 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300" style="animation-delay: 0.2s"></div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16 animate-fade-in-up" style="animation-delay: 0.6s">
        <p class="text-gray-600 mb-6">Vous avez un projet en tête ?</p>
        <a 
          href="#contact" 
          class="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <span>Discutons de votre projet</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/data/portfolio';

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  // Fallback vers une image placeholder en cas d'erreur
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZXQ8L3RleHQ+PC9zdmc+';
};
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

.project-card {
  perspective: 1000px;
}

.project-card:hover {
  transform-style: preserve-3d;
}
</style>

