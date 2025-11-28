<template>
  <section class="projects-section relative py-16 lg:py-24 overflow-hidden" id="project">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Animated Background Decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-orb-projects-1"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-orb-projects-2"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float-orb-projects-3"></div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-20 right-20 w-40 h-40 border-4 border-primary/20 rounded-3xl rotate-45 animate-rotate-slow-projects opacity-50"></div>
      <div class="absolute bottom-32 left-20 w-32 h-32 border-4 border-primary/15 rounded-full animate-pulse-slow-projects opacity-50"></div>
      
      <!-- Floating Particles -->
      <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-particle-projects-1"></div>
      <div class="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle-projects-2"></div>
      <div class="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-particle-projects-3"></div>
      
      <!-- Code Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#2563EB08_1px,transparent_1px),linear-gradient(to_bottom,#2563EB08_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
    </div>
    
    <div class="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-20 relative z-10">
      <!-- Section Header - Left Aligned with Button -->
      <div class="text-left mb-12 lg:mb-16">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
          <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span class="text-xs font-bold text-primary uppercase tracking-wider">Portfolio</span>
        </div>
        <div class="flex items-center justify-between gap-4 mb-4">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight animate-fade-in-up">
            Mes 
            <span class="text-primary relative">
              Derniers Projets
              <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 transform scale-x-100"></span>
            </span>
          </h2>
          
          <!-- Button "Discutons de votre projet" -->
          <button
            @click="openModal"
            class="inline-flex items-center space-x-2 px-5 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group relative overflow-hidden animate-fade-in-right whitespace-nowrap"
            style="animation-delay: 0.2s"
          >
            <!-- Button Background Animation -->
            <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span class="relative z-10 flex items-center space-x-2 text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span class="hidden sm:inline">Discutons de votre projet</span>
              <span class="sm:hidden">Discuter</span>
            </span>
          </button>
        </div>
        <p class="text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
          Découvrez mes réalisations récentes, des projets web modernes et performants
        </p>
      </div>

      <!-- Projects Grid - Compact Modern Design -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          class="project-card group relative animate-zoom-in"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <!-- Main Card - Compact Design -->
          <div class="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
            <!-- Project Image Container - Reduced Height -->
            <div class="relative h-48 bg-gray-100 overflow-hidden">
              <!-- Image -->
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                @error="handleImageError"
                loading="lazy"
              />
              
              <!-- Gradient Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <!-- Project Title Badge -->
              <div class="absolute bottom-4 left-4 right-4">
                <div class="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 class="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                </div>
              </div>
              
              <!-- View Icon -->
              <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="bg-primary text-white rounded-full p-2 shadow-lg">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            <!-- Project Info Section - Compact -->
            <div class="p-5 bg-white">
              <!-- Description -->
              <p class="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>

              <!-- Technologies Tags - Compact -->
              <div v-if="project.technologies && project.technologies.length > 0" class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="px-2.5 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="project.technologies.length > 3"
                  class="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                >
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>

              <!-- Action Button - Compact -->
              <a 
                :href="project.url" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center space-x-2 w-full px-4 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 group/btn"
              >
                <span>Voir le projet</span>
                <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <!-- Decorative Corner -->
            <div class="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from '@/data/portfolio';
import { useModal } from '@/composables/useModal';

const { openModal } = useModal();

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZXQ8L3RleHQ+PC9zdmc+';
};
</script>

<style scoped>
/* Animations */
@keyframes float-orb-projects-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(50px, -50px) scale(1.3);
    opacity: 0.6;
  }
}

@keyframes float-orb-projects-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-60px, 60px) scale(1.4);
    opacity: 0.5;
  }
}

@keyframes float-orb-projects-3 {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.4;
  }
}

@keyframes rotate-slow-projects {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-slow-projects {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.15);
  }
}

@keyframes particle-projects-1 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    transform: translate(70px, -70px);
    opacity: 0;
  }
}

@keyframes particle-projects-2 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
  100% {
    transform: translate(-60px, 60px);
    opacity: 0;
  }
}

@keyframes particle-projects-3 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  15%, 85% {
    opacity: 1;
  }
  100% {
    transform: translate(80px, 50px);
    opacity: 0;
  }
}

@keyframes fade-in-projects {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.project-card {
  animation: fade-in-projects 0.8s ease-out both;
}

.tech-tag {
  animation: fade-in-projects 0.6s ease-out both;
}

.animate-float-orb-projects-1 {
  animation: float-orb-projects-1 8s ease-in-out infinite;
}

.animate-float-orb-projects-2 {
  animation: float-orb-projects-2 10s ease-in-out infinite;
}

.animate-float-orb-projects-3 {
  animation: float-orb-projects-3 12s ease-in-out infinite;
}

.animate-rotate-slow-projects {
  animation: rotate-slow-projects 25s linear infinite;
}

.animate-pulse-slow-projects {
  animation: pulse-slow-projects 5s ease-in-out infinite;
}

.animate-particle-projects-1 {
  animation: particle-projects-1 7s ease-in-out infinite;
}

.animate-particle-projects-2 {
  animation: particle-projects-2 9s ease-in-out infinite 1s;
}

.animate-particle-projects-3 {
  animation: particle-projects-3 8s ease-in-out infinite 2s;
}
</style>
