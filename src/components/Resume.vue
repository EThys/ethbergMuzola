<template>
  <section class="resume-section relative py-20 lg:py-32 overflow-hidden" id="resume">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary/10 mb-6">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="text-sm font-bold text-primary">Parcours</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Expérience & 
          <span class="text-primary">Formation</span>
        </h2>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Experiences Section -->
        <div class="animate-fade-in-left">
          <div class="flex items-center mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Expériences</h2>
            </div>
          </div>

          <div class="timeline relative pl-8 border-l-4 border-primary">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="timeline-item mb-10 relative group animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <div class="timeline-year absolute -left-14 w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-sm">{{ exp.year }}</span>
              </div>
              <div class="timeline-content ml-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform group-hover:scale-105">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <h3 class="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors duration-300 mb-1">
                      {{ exp.title }}
                    </h3>
                    <p class="text-primary font-semibold text-sm">{{ exp.company }}</p>
                  </div>
                  <div class="w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p class="text-gray-700 leading-relaxed">{{ exp.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="animate-fade-in-right">
          <div class="flex items-center mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v9M4 9v9a2 2 0 002 2h12a2 2 0 002-2V9" />
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Formation</h2>
            </div>
          </div>

          <div class="timeline relative pl-8 border-l-4 border-secondary">
            <div
              v-for="(edu, index) in education"
              :key="index"
              class="timeline-item mb-10 relative group animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <div class="timeline-year absolute -left-14 w-20 h-20 bg-secondary text-white rounded-2xl flex items-center justify-center font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                <span class="text-sm">{{ edu.year }}</span>
              </div>
              <div class="timeline-content ml-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 transform group-hover:scale-105">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <h3 class="font-bold text-xl text-gray-900 group-hover:text-secondary transition-colors duration-300 mb-1">
                      {{ edu.degree }}
                    </h3>
                    <p class="text-secondary font-semibold text-sm">{{ edu.institution }}</p>
                  </div>
                  <div class="w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <p class="text-gray-700 leading-relaxed">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { experiences, education } from '@/data/portfolio';
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -10px;
  top: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  border: 4px solid;
  z-index: 10;
}

.timeline-item:nth-child(odd)::before {
  border-color: var(--primary);
}

.timeline-item:nth-child(even)::before {
  border-color: var(--secondary);
}
</style>

