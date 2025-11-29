<template>
  <section class="services-section relative py-12 lg:py-16 overflow-hidden" id="service">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Floating Orbs -->
    <div class="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/5 rounded-full blur-3xl animate-float-orb hidden sm:block"></div>
    <div class="absolute bottom-10 right-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-blue-500/5 rounded-full blur-3xl animate-float-orb hidden sm:block" style="animation-delay: 1s"></div>
    <div class="absolute top-1/2 left-1/4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-primary/3 rounded-full blur-2xl animate-pulse-slow hidden sm:block"></div>
    
    <!-- Geometric Shapes -->
    <div class="absolute top-20 right-20 w-24 h-24 lg:w-32 lg:h-32 border-2 border-primary/10 rounded-3xl transform rotate-45 animate-rotate-slow hidden lg:block"></div>
    <div class="absolute bottom-32 left-32 w-16 h-16 lg:w-24 lg:h-24 bg-primary/5 rounded-full animate-pulse-slow hidden lg:block"></div>
    
    <!-- Particles -->
    <div class="absolute top-40 right-1/4 w-2 h-2 bg-primary/20 rounded-full animate-particle-float hidden sm:block"></div>
    <div class="absolute bottom-60 left-1/3 w-3 h-3 bg-blue-500/20 rounded-full animate-particle-float hidden sm:block" style="animation-delay: 0.5s"></div>
    <div class="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/15 rounded-full animate-particle-float hidden sm:block" style="animation-delay: 1.5s"></div>
    
    <!-- Glow Effects -->
    <div class="absolute top-0 left-0 w-full h-full pointer-events-none hidden sm:block">
      <div class="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-primary/3 rounded-full blur-3xl animate-glow-pulse"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
      <!-- Section Header -->
      <div class="text-left mb-8 sm:mb-12 lg:mb-16">
        <div class="inline-block mb-4 sm:mb-6 scroll-animate">
          <span class="text-xs font-medium text-gray-500 uppercase tracking-widest">Services</span>
        </div>
        <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight scroll-animate" style="animation-delay: 0.1s">
          Mes 
          <span class="text-primary relative">
            Services
            <span class="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-primary/30 transform scale-x-100"></span>
          </span>
        </h2>
        <p class="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed scroll-animate" style="animation-delay: 0.2s">
          Des solutions sur mesure pour répondre à tous vos besoins numériques
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-card group relative scroll-animate"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Main Card -->
          <div class="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl border border-gray-200 hover:border-primary/30 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 sm:hover:-translate-y-2 h-full flex flex-col overflow-hidden">
            <!-- Animated Background Gradient -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/3 group-hover:to-primary/5 transition-all duration-700 rounded-2xl"></div>
            
            <!-- Animated Border Glow -->
            <div class="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500"></div>
            
            <!-- Content Container -->
            <div class="relative z-10 flex flex-col h-full">
              <!-- Icon Container with Advanced Effects -->
              <div class="mb-4 sm:mb-6 relative">
                <!-- Icon Background with Multiple Layers -->
                <div class="relative inline-block">
                  <!-- Outer Glow -->
                  <div class="absolute inset-0 bg-primary/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl group-hover:bg-primary/30 transition-all duration-500 scale-110"></div>
                  
                  <!-- Icon Container -->
                  <div class="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 border border-primary/10 group-hover:border-primary/30 shadow-lg group-hover:shadow-xl">
                    <!-- Icon -->
                    <i :class="['fa', service.icon, 'text-xl sm:text-2xl lg:text-3xl text-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110']"></i>
                    
                    <!-- Inner Glow on Hover -->
                    <div class="absolute inset-0 bg-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                  
                  <!-- Floating Badge -->
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-500 to-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100 animate-badge-float shadow-lg flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
                
                <!-- Decorative Lines -->
                <div class="absolute top-1/2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-transparent group-hover:w-12 transition-all duration-700 -translate-y-1/2"></div>
                <div class="absolute top-1/2 right-0 w-0 h-0.5 bg-gradient-to-l from-primary to-transparent group-hover:w-12 transition-all duration-700 -translate-y-1/2" style="transition-delay: 0.1s"></div>
              </div>

              <!-- Content -->
              <div class="flex-1 mb-4 sm:mb-6">
                <h3 class="text-base sm:text-lg lg:text-xl font-extrabold text-gray-900 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {{ service.title }}
                </h3>
                <p class="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed line-clamp-3">
                  {{ service.description }}
                </p>
              </div>

              <!-- Action Button -->
              <div class="mt-auto">
                <div class="inline-flex items-center space-x-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500">
                  <span>En savoir plus</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Shimmer Effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            <!-- Corner Accent -->
            <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { services } from '@/data/portfolio';

// Scroll animations
const setupScrollAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};

onMounted(() => {
  const cleanup = setupScrollAnimations();
  onUnmounted(() => {
    cleanup();
  });
});
</script>

<style scoped>
/* Floating Orb Animation */
@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-float-orb {
  animation: float-orb 20s ease-in-out infinite;
}

/* Rotate Slow Animation */
@keyframes rotate-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-rotate-slow {
  animation: rotate-slow 30s linear infinite;
}

/* Pulse Slow Animation */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

/* Particle Float Animation */
@keyframes particle-float {
  0%, 100% {
    transform: translateY(0) translateX(0);
    opacity: 0.2;
  }
  25% {
    transform: translateY(-20px) translateX(10px);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-40px) translateX(-10px);
    opacity: 0.3;
  }
  75% {
    transform: translateY(-20px) translateX(5px);
    opacity: 0.4;
  }
}

.animate-particle-float {
  animation: particle-float 8s ease-in-out infinite;
}

/* Glow Pulse Animation */
@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 6s ease-in-out infinite;
}

/* Badge Float Animation */
@keyframes badge-float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.05);
  }
}

.animate-badge-float {
  animation: badge-float 2s ease-in-out infinite;
}

/* Scroll Animation */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Line Clamp Utility */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
