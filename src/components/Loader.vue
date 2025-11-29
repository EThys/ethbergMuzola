<template>
  <Transition name="loader" appear>
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Gradient Orbs -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 0.5s"></div>
        
        <!-- Geometric Shapes -->
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-primary/20 rounded-full animate-rotate-slow opacity-30"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-primary/10 rounded-3xl rotate-45 animate-rotate-slow-reverse opacity-20"></div>
      </div>

      <!-- Main Content -->
      <div class="relative z-10 flex flex-col items-center justify-center">
        <!-- Logo Container with Multiple Animations -->
        <div class="relative mb-8">
          <!-- Outer Glow Ring -->
          <div class="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl animate-pulse-glow"></div>
          
          <!-- Logo with Scale and Rotate Animation -->
          <div class="relative animate-logo-float">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-xl animate-pulse-glow"></div>
            <img 
              :src="logoImage" 
              alt="Muzola Ethberg" 
              class="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain animate-logo-spin"
            />
          </div>
          
          <!-- Orbiting Dots -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div 
              v-for="(dot, index) in 8" 
              :key="index"
              class="absolute w-2 h-2 bg-primary rounded-full animate-orbital-dot"
              :style="{
                '--dot-index': index,
                '--total-dots': 8,
                transform: `rotate(${index * 45}deg) translateY(-80px)`,
              }"
            ></div>
          </div>
        </div>

        <!-- Loading Text -->
        <div class="text-center">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2 animate-fade-in-up">
            Muzola Ethberg
          </h2>
          <p class="text-sm sm:text-base text-gray-600 mb-6 animate-fade-in-up" style="animation-delay: 0.2s">
            Développeur Web & Mobile
          </p>
          
          <!-- Loading Bar -->
          <div class="w-48 sm:w-64 lg:w-80 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-primary via-primary/80 to-primary rounded-full animate-loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isLoading = ref(true);
const logoImage = '/images/logoa.png';

onMounted(() => {
  // Prevent scrolling while loading
  document.body.style.overflow = 'hidden';

  // Simulate loading time: exactly 7 seconds
  const loadTime = 7000;
  const startTime = Date.now();

  const hideLoader = () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, loadTime - elapsed);
    
    setTimeout(() => {
      isLoading.value = false;
      // Remove loader from DOM after transition
      setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);
    }, remaining);
  };

  // Always wait for the full 7 seconds
  hideLoader();
});
</script>

<style scoped>
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
  animation: pulse-slow 3s ease-in-out infinite;
}

/* Rotate Slow Animation */
@keyframes rotate-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.animate-rotate-slow {
  animation: rotate-slow 20s linear infinite;
}

@keyframes rotate-slow-reverse {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

.animate-rotate-slow-reverse {
  animation: rotate-slow-reverse 15s linear infinite;
}

/* Pulse Glow Animation */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Logo Float Animation */
@keyframes logo-float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.05);
  }
}

.animate-logo-float {
  animation: logo-float 3s ease-in-out infinite;
}

/* Logo Spin Animation (subtle) */
@keyframes logo-spin {
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
}

.animate-logo-spin {
  animation: logo-spin 4s ease-in-out infinite;
}

/* Orbital Dot Animation */
@keyframes orbital-dot {
  0%, 100% {
    opacity: 0.3;
    transform: rotate(calc(var(--dot-index) * 45deg)) translateY(-80px) scale(1);
  }
  50% {
    opacity: 1;
    transform: rotate(calc(var(--dot-index) * 45deg + 180deg)) translateY(-80px) scale(1.2);
  }
}

.animate-orbital-dot {
  animation: orbital-dot 2s ease-in-out infinite;
  animation-delay: calc(var(--dot-index) * 0.1s);
}

/* Loading Bar Animation */
@keyframes loading-bar {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-loading-bar {
  animation: loading-bar 1.5s ease-in-out infinite;
}

/* Fade In Up Animation */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}

/* Loader Transition */
.loader-enter-active {
  transition: opacity 0.5s ease-out;
}

.loader-leave-active {
  transition: opacity 0.5s ease-in;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}
</style>

