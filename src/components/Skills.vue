<template>
  <section class="skills-section relative py-16 lg:py-24 overflow-hidden" id="skill">
    <!-- Background with Animated Elements -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Animated Background Decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-orb-skills-1"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-orb-skills-2"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float-orb-skills-3"></div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-20 right-20 w-40 h-40 border-4 border-primary/20 rounded-3xl rotate-45 animate-rotate-slow-skills opacity-50"></div>
      <div class="absolute bottom-32 left-20 w-32 h-32 border-4 border-primary/15 rounded-full animate-pulse-slow-skills opacity-50"></div>
      <div class="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-primary/10 rounded-2xl rotate-12 animate-rotate-slow-skills opacity-40"></div>
      
      <!-- Floating Particles -->
      <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-particle-skills-1"></div>
      <div class="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle-skills-2"></div>
      <div class="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-particle-skills-3"></div>
      <div class="absolute top-3/4 left-1/2 w-2 h-2 bg-primary rounded-full animate-particle-skills-4"></div>
      
      <!-- Code Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#2563EB08_1px,transparent_1px),linear-gradient(to_bottom,#2563EB08_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
    </div>
    
    <div class="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-20 relative z-10">
      <!-- Section Header - Left Aligned -->
      <div class="text-left mb-12 lg:mb-16">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
          <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span class="text-xs font-bold text-primary uppercase tracking-wider">Technologies</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in-up">
          Mes 
          <span class="text-primary relative">
            Technologies
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 transform scale-x-100"></span>
          </span>
        </h2>
        <p class="text-base lg:text-lg text-gray-600 max-w-2xl animate-fade-in-up" style="animation-delay: 0.2s">
          Stack technique complet pour le développement web et mobile
        </p>
      </div>

      <!-- Technologies by Category - Simple Layout -->
      <div class="space-y-8 lg:space-y-12">
        <div 
          v-for="(category, categoryIndex) in techCategories" 
          :key="category.name"
          class="category-section"
          :style="{ animationDelay: `${categoryIndex * 0.1}s` }"
        >
          <!-- Category Header -->
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500"
                 :class="category.colorClass">
              <component :is="category.icon" class="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 class="text-xl lg:text-2xl font-bold text-gray-900 animate-fade-in-left" :style="{ animationDelay: `${categoryIndex * 0.1 + 0.1}s` }">
                {{ category.name }}
              </h3>
            </div>
            <div class="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent ml-4"></div>
          </div>
          
          <!-- Technologies List - Horizontal -->
          <div class="flex flex-wrap items-center gap-4 lg:gap-6">
            <div 
              v-for="(tech, techIndex) in category.techs"
              :key="tech.name"
              class="tech-item group flex items-center space-x-3 px-4 py-3 rounded-xl bg-white border-2 border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
              :style="{ animationDelay: `${(categoryIndex * 0.1) + (techIndex * 0.05)}s` }"
            >
              <!-- Tech Icon -->
              <div class="w-10 h-10 rounded-lg bg-white border border-gray-200 group-hover:border-primary/30 flex items-center justify-center transition-all duration-300">
                <img 
                  v-if="tech.image"
                  :src="tech.image" 
                  :alt="tech.name"
                  class="w-7 h-7 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  @error="handleImageError"
                  loading="lazy"
                />
                <div v-else class="w-7 h-7 bg-primary/10 rounded flex items-center justify-center">
                  <span class="text-xs font-bold text-primary">{{ tech.name.charAt(0) }}</span>
                </div>
              </div>
              
              <!-- Tech Name -->
              <span class="text-sm lg:text-base font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, h } from 'vue';

// Define technology categories
const techCategories = computed(() => [
  {
    name: 'Frontend',
    icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
    ]),
    colorClass: 'bg-primary',
    techs: [
      { name: 'HTML5', image: '/images/html5.png' },
      { name: 'CSS3', image: '/images/css3.png' },
      { name: 'JavaScript', image: '/images/javasccc.png' },
      { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ]
  },
  {
    name: 'Backend',
    icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' })
    ]),
    colorClass: 'bg-primary/90',
    techs: [
      { name: 'PHP', image: '/images/php.png' },
      { name: 'Laravel', image: '/images/laravel.png' },
      { name: 'ASP.NET', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    ]
  },
  {
    name: 'Mobile',
    icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' })
    ]),
    colorClass: 'bg-primary/80',
    techs: [
      { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'Kotlin', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
      { name: 'Swift', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
    ]
  },
  {
    name: 'CMS',
    icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' })
    ]),
    colorClass: 'bg-primary/70',
    techs: [
      { name: 'WordPress', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
    ]
  },
  {
    name: 'Base de Données',
    icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' })
    ]),
    colorClass: 'bg-primary/65',
    techs: [
      { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQLite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
      { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ]
  },
  {
    name: 'Outils & DevOps',
    icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
    ]),
    colorClass: 'bg-primary/60',
    techs: [
      { name: 'Git', image: '/images/git.png' },
      { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    ]
  },
]);

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iI0YzRjRGNiIvPgo8cGF0aCBkPSJNMzIgMjJMMzIgNDJNMjIgMzJINDEiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+';
};
</script>

<style scoped>
/* Animations */
@keyframes float-orb-skills-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(50px, -50px) scale(1.3);
    opacity: 0.6;
  }
}

@keyframes float-orb-skills-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-60px, 60px) scale(1.4);
    opacity: 0.5;
  }
}

@keyframes float-orb-skills-3 {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.4;
  }
}

@keyframes rotate-slow-skills {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-slow-skills {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.15);
  }
}

@keyframes particle-skills-1 {
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

@keyframes particle-skills-2 {
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

@keyframes particle-skills-3 {
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

@keyframes particle-skills-4 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
  100% {
    transform: translate(-50px, -50px);
    opacity: 0;
  }
}

@keyframes particle-float-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(15px, -15px) scale(0);
    opacity: 0;
  }
}

@keyframes particle-float-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-15px, 15px) scale(0);
    opacity: 0;
  }
}

@keyframes fade-in-skills {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.category-section {
  animation: fade-in-skills 0.8s ease-out both;
}

.tech-item {
  animation: fade-in-skills 0.6s ease-out both;
}

.animate-float-orb-skills-1 {
  animation: float-orb-skills-1 8s ease-in-out infinite;
}

.animate-float-orb-skills-2 {
  animation: float-orb-skills-2 10s ease-in-out infinite;
}

.animate-float-orb-skills-3 {
  animation: float-orb-skills-3 12s ease-in-out infinite;
}

.animate-rotate-slow-skills {
  animation: rotate-slow-skills 25s linear infinite;
}

.animate-pulse-slow-skills {
  animation: pulse-slow-skills 5s ease-in-out infinite;
}

.animate-particle-skills-1 {
  animation: particle-skills-1 7s ease-in-out infinite;
}

.animate-particle-skills-2 {
  animation: particle-skills-2 9s ease-in-out infinite 1s;
}

.animate-particle-skills-3 {
  animation: particle-skills-3 8s ease-in-out infinite 2s;
}

.animate-particle-skills-4 {
  animation: particle-skills-4 6s ease-in-out infinite 1.5s;
}

.animate-particle-float-1 {
  animation: particle-float-1 2s ease-out infinite;
}

.animate-particle-float-2 {
  animation: particle-float-2 2s ease-out infinite 0.5s;
}
</style>
