<template>
  <section class="skills-section relative py-20 lg:py-32 overflow-hidden" id="skill">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary/10 mb-6">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span class="text-sm font-bold text-primary">Compétences</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Mes 
          <span class="text-primary">Compétences</span>
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          En tant que développeur web et mobile, j'ai développé une expertise dans la création de sites et
          d'applications fiables et conviviales. J'ai une capacité à apprendre rapidement et à m'adapter aux nouvelles
          technologies, ainsi qu'une compréhension solide des principes de base de la programmation.
        </p>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Left Column -->
        <div class="space-y-6">
          <div 
            v-for="(skill, index) in leftSkills" 
            :key="skill.name"
            class="skill-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-left"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                {{ skill.name }}
              </h3>
              <span class="text-lg font-bold text-primary">{{ skill.percentage }}%</span>
            </div>
            <div class="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="progress-bar h-full rounded-full transition-all duration-1000 ease-out"
                :class="getProgressBarClass(index)"
                :style="{ width: `${skill.percentage}%` }"
              >
                <div class="absolute inset-0 bg-white/30 animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-6">
          <div 
            v-for="(skill, index) in rightSkills" 
            :key="skill.name"
            class="skill-card group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 transform hover:scale-105 animate-fade-in-right"
            :style="{ animationDelay: `${(index + 3) * 0.1}s` }"
          >
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300">
                {{ skill.name }}
              </h3>
              <span class="text-lg font-bold text-secondary">{{ skill.percentage }}%</span>
            </div>
            <div class="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                class="progress-bar h-full rounded-full transition-all duration-1000 ease-out"
                :class="getProgressBarClass(index + 3)"
                :style="{ width: `${skill.percentage}%` }"
              >
                <div class="absolute inset-0 bg-white/30 animate-shimmer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { skills } from '@/data/portfolio';

const leftSkills = computed(() => skills.slice(0, 3));
const rightSkills = computed(() => skills.slice(3));

const getProgressBarClass = (index: number) => {
  // Alterner entre bleu et jaune
  return index % 2 === 0 ? 'bg-primary' : 'bg-secondary';
};
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out both;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out both;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.progress-bar {
  position: relative;
  overflow: hidden;
}
</style>

