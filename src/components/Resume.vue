<template>
  <section class="resume-section relative py-16 lg:py-24 overflow-hidden" id="resume">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Animated Background Decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-orb-resume-1"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-orb-resume-2"></div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-20 right-20 w-40 h-40 border-4 border-primary/20 rounded-3xl rotate-45 animate-rotate-slow-resume opacity-50"></div>
      <div class="absolute bottom-32 left-20 w-32 h-32 border-4 border-primary/15 rounded-full animate-pulse-slow-resume opacity-50"></div>
      
      <!-- Floating Particles -->
      <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-particle-resume-1"></div>
      <div class="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle-resume-2"></div>
      <div class="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-particle-resume-3"></div>
      
      <!-- Code Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#2563EB08_1px,transparent_1px),linear-gradient(to_bottom,#2563EB08_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
    </div>
    
    <div class="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-20 relative z-10">
      <!-- Section Header - Left Aligned -->
      <div class="text-left mb-12 lg:mb-16">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
          <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span class="text-xs font-bold text-primary uppercase tracking-wider">Parcours</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in-up">
          Expérience & 
          <span class="text-primary relative">
            Formation
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 transform scale-x-100"></span>
          </span>
        </h2>
        <p class="text-base lg:text-lg text-gray-600 max-w-2xl animate-fade-in-up" style="animation-delay: 0.2s">
          Mon parcours professionnel et académique
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Experiences Section -->
        <div class="relative">
          <!-- Section Header -->
          <div class="flex items-center mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 class="text-xl lg:text-2xl font-bold text-gray-900 animate-fade-in-left">Expériences</h2>
            </div>
          </div>

          <!-- Timeline -->
          <div class="timeline relative pl-8 border-l-4 border-primary">
            <div
              v-for="(exp, index) in experiences"
              :key="index"
              class="timeline-item mb-10 relative group animate-fade-in-right"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <!-- Year Badge -->
              <div class="timeline-year absolute -left-14 w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center font-bold shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10">
                <span class="text-sm">{{ exp.year }}</span>
              </div>
              
              <!-- Content Card -->
              <div class="timeline-content ml-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 transform group-hover:scale-105 group-hover:translate-x-2 relative">
                <!-- Glow Effect -->
                <div class="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative z-10">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                      <h3 class="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors duration-300 mb-1">
                        {{ exp.title }}
                      </h3>
                      <p class="text-primary font-semibold text-sm">{{ exp.company }}</p>
                    </div>
                    <div class="w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>
                  <p class="text-gray-700 leading-relaxed">{{ exp.description }}</p>
                </div>
                
                <!-- Decorative Corner -->
                <div class="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Section -->
        <div class="relative">
          <!-- Section Header -->
          <div class="flex items-center mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-primary/80 rounded-xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v9M4 9v9a2 2 0 002 2h12a2 2 0 002-2V9" />
                </svg>
              </div>
              <h2 class="text-xl lg:text-2xl font-bold text-gray-900 animate-fade-in-left">Formation</h2>
            </div>
          </div>

          <!-- Timeline -->
          <div class="timeline relative pl-8 border-l-4 border-primary/80">
            <div
              v-for="(edu, index) in education"
              :key="index"
              class="timeline-item mb-10 relative group animate-fade-in-right"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <!-- Year Badge -->
              <div class="timeline-year absolute -left-14 w-20 h-20 bg-primary/80 text-white rounded-2xl flex items-center justify-center font-bold shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 z-10">
                <span class="text-sm">{{ edu.year }}</span>
              </div>
              
              <!-- Content Card -->
              <div class="timeline-content ml-6 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 transform group-hover:scale-105 group-hover:translate-x-2 relative">
                <!-- Glow Effect -->
                <div class="absolute -inset-1 bg-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div class="relative z-10">
                  <div class="flex items-start justify-between mb-3">
                    <div class="flex-1">
                      <h3 class="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors duration-300 mb-1">
                        {{ edu.degree }}
                      </h3>
                      <p class="text-primary font-semibold text-sm">{{ edu.institution }}</p>
                    </div>
                    <div class="w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>
                  <p class="text-gray-700 leading-relaxed">{{ edu.description }}</p>
                </div>
                
                <!-- Decorative Corner -->
                <div class="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
/* Animations */
@keyframes float-orb-resume-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(50px, -50px) scale(1.3);
    opacity: 0.6;
  }
}

@keyframes float-orb-resume-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-60px, 60px) scale(1.4);
    opacity: 0.5;
  }
}

@keyframes rotate-slow-resume {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-slow-resume {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.15);
  }
}

@keyframes particle-resume-1 {
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

@keyframes particle-resume-2 {
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

@keyframes particle-resume-3 {
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

@keyframes fade-in-resume {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-item {
  animation: fade-in-resume 0.8s ease-out both;
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
  border: 4px solid var(--primary);
  z-index: 10;
  transform: scale(0);
  animation: scale-in 0.5s ease-out both;
}

.timeline-item:nth-child(1)::before {
  animation-delay: 0.2s;
}

.timeline-item:nth-child(2)::before {
  animation-delay: 0.4s;
}

.timeline-item:nth-child(3)::before {
  animation-delay: 0.6s;
}

@keyframes scale-in {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.animate-float-orb-resume-1 {
  animation: float-orb-resume-1 8s ease-in-out infinite;
}

.animate-float-orb-resume-2 {
  animation: float-orb-resume-2 10s ease-in-out infinite;
}

.animate-rotate-slow-resume {
  animation: rotate-slow-resume 25s linear infinite;
}

.animate-pulse-slow-resume {
  animation: pulse-slow-resume 5s ease-in-out infinite;
}

.animate-particle-resume-1 {
  animation: particle-resume-1 7s ease-in-out infinite;
}

.animate-particle-resume-2 {
  animation: particle-resume-2 9s ease-in-out infinite 1s;
}

.animate-particle-resume-3 {
  animation: particle-resume-3 8s ease-in-out infinite 2s;
}
</style>
