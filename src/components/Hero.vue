<template>
  <section 
    class="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    id="about"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-primary/5"></div>
    <div class="absolute inset-0 bg-secondary/3"></div>
    
      <!-- Floating Particles Effect -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          v-for="i in 50" 
          :key="i"
          class="particle absolute rounded-full opacity-25"
          :style="getParticleStyle(i)"
        ></div>
      </div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#2563EB08_1px,transparent_1px),linear-gradient(to_bottom,#2563EB08_1px,transparent_1px)] bg-[size:24px_24px]"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-8 animate-fade-in-up">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border-2 border-primary/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-in-left">
            <span class="w-2.5 h-2.5 bg-primary rounded-full animate-pulse-ring"></span>
            <span class="text-sm font-semibold text-gray-800">
              Disponible pour de nouveaux projets
            </span>
          </div>

          <!-- Main Heading -->
          <div class="space-y-4">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span class="block text-gray-900 mb-2">
                Salut, Je suis
              </span>
              <span class="block relative">
                <span 
                  class="inline-block text-primary"
                  :class="{ 'typing': isTyping }"
                >
                  {{ displayedText }}
                  <span class="cursor-blink">|</span>
                </span>
              </span>
            </h1>
          </div>

          <!-- Subtitle -->
          <p class="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Je crée des expériences digitales exceptionnelles en combinant 
            <span class="font-semibold text-primary">design élégant</span> et 
            <span class="font-semibold text-primary">code performant</span>. 
            Spécialisé en développement web & mobile avec une passion pour l'innovation.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="#contact"
              class="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              @click.prevent="scrollToContact"
            >
              <span class="relative z-10 flex items-center justify-center space-x-2">
                <span>Me contacter</span>
                <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            
            <a
              href="/apk/alice.apk"
              download
              class="group px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-primary/30 hover:border-primary hover:bg-primary/5 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg class="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Télécharger l'application</span>
            </a>
          </div>

          <!-- Social Links / Stats -->
          <div class="flex items-center justify-center lg:justify-start space-x-6 pt-8 animate-fade-in-delayed">
            <a href="#" class="group flex items-center space-x-2 text-gray-600 hover:text-primary transition-all duration-300 transform hover:scale-110">
              <div class="p-2 rounded-lg bg-white border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span class="text-sm font-semibold">GitHub</span>
            </a>
            <a href="#" class="group flex items-center space-x-2 text-gray-600 hover:text-primary transition-all duration-300 transform hover:scale-110">
              <div class="p-2 rounded-lg bg-white border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span class="text-sm font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative flex justify-center lg:justify-end animate-fade-in-right">
          <div class="relative w-full max-w-sm lg:max-w-md">
            <!-- Animated Glow Effect -->
            <div class="absolute inset-0 bg-primary/40 rounded-full blur-3xl transform scale-110 animate-glow-pulse"></div>
            <div class="absolute inset-0 bg-secondary/30 rounded-full blur-3xl transform scale-125 animate-glow-pulse-delayed"></div>
            
            <!-- Image Container - Clean and Simple -->
            <div class="relative transform hover:scale-105 transition-all duration-700 animate-float-slow">
              <div class="relative">
                <img 
                  src="/images/removeMoi.png" 
                  class="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto object-contain rounded-full shadow-2xl border-4 border-white ring-4 ring-primary/20 animate-image-float" 
                  alt="Ethberg Muzola - Développeur UI/UX" 
                  loading="eager"
                  @error="handleImageError"
                />
                
                <!-- Animated Rings -->
                <div class="absolute inset-0 rounded-full border-4 border-primary/30 animate-ring-pulse"></div>
                <div class="absolute inset-0 rounded-full border-4 border-secondary/30 animate-ring-pulse-delayed"></div>
                
                <!-- Floating Badge -->
                <div class="absolute -bottom-2 -right-2 bg-primary text-white px-5 py-2.5 rounded-xl shadow-2xl transform hover:scale-110 transition-transform duration-300 z-10 animate-badge-float">
                  <div class="flex items-center space-x-2">
                    <svg class="w-4 h-4 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <span class="font-bold text-xs sm:text-sm">5+ Projets</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Decorative Floating Elements -->
            <div class="absolute -top-12 -left-12 w-20 h-20 bg-primary/40 rounded-full blur-2xl animate-float-element-1"></div>
            <div class="absolute -bottom-12 -right-12 w-28 h-28 bg-secondary/40 rounded-full blur-2xl animate-float-element-2"></div>
            <div class="absolute top-1/2 -right-16 w-16 h-16 bg-accent/30 rounded-full blur-xl animate-float-element-3"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a href="#project" class="flex flex-col items-center space-y-2 text-gray-500 hover:text-primary transition-all duration-300 transform hover:scale-110">
        <span class="text-sm font-semibold">Découvrir</span>
        <div class="p-2 rounded-full bg-white/80 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const animatedItems = ['Ethberg Muzola', 'Développeur Web', 'Développeur Mobile', 'UI/UX Designer'];
const displayedText = ref('');
const isTyping = ref(true);
let typingInterval: number | null = null;
let eraseInterval: number | null = null;
let currentItemIndex = 0;
let charIndex = 0;
let isErasing = false;

const getParticleStyle = (index: number) => {
  const size = Math.random() * 4 + 2;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const delay = Math.random() * 20;
  const duration = Math.random() * 10 + 10;
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    background: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
    animation: `float ${duration}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
  };
};

const typeText = () => {
  const currentText = animatedItems[currentItemIndex];
  if (!currentText) return;
  
  if (!isErasing && charIndex < currentText.length) {
    displayedText.value = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingInterval = window.setTimeout(typeText, 100);
  } else if (!isErasing && charIndex === currentText.length) {
    // Wait before erasing
    setTimeout(() => {
      isErasing = true;
      eraseText();
    }, 2000);
  }
};

const eraseText = () => {
  const currentText = animatedItems[currentItemIndex];
  if (!currentText) return;
  
  if (isErasing && charIndex > 0) {
    displayedText.value = currentText.substring(0, charIndex - 1);
    charIndex--;
    eraseInterval = window.setTimeout(eraseText, 50);
  } else if (isErasing && charIndex === 0) {
    isErasing = false;
    currentItemIndex = (currentItemIndex + 1) % animatedItems.length;
    typeText();
  }
};

const scrollToContact = () => {
  const target = document.querySelector('#contact');
  if (target) {
    const offsetTop = (target as HTMLElement).offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = '/images/moi.jpg'; // Fallback image
};

onMounted(() => {
  typeText();
});

onUnmounted(() => {
  if (typingInterval) clearTimeout(typingInterval);
  if (eraseInterval) clearTimeout(eraseInterval);
});
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

@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-20px) translateX(10px);
  }
  66% {
    transform: translateY(10px) translateX(-10px);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(15px) translateX(-15px);
  }
  66% {
    transform: translateY(-10px) translateX(15px);
  }
}


.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 1s ease-out;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}


.cursor-blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.particle {
  pointer-events: none;
}

@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}

@keyframes glow-pulse-delayed {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1.2);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.3);
  }
}

@keyframes image-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(1deg);
  }
  50% {
    transform: translateY(-5px) rotate(0deg);
  }
  75% {
    transform: translateY(-10px) rotate(-1deg);
  }
}

@keyframes ring-pulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

@keyframes ring-pulse-delayed {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.08);
  }
}

@keyframes badge-float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  33% {
    transform: translateY(-5px) translateX(3px);
  }
  66% {
    transform: translateY(3px) translateX(-3px);
  }
}

@keyframes float-element-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  33% {
    transform: translate(20px, -20px) scale(1.1);
    opacity: 0.6;
  }
  66% {
    transform: translate(-15px, 15px) scale(0.9);
    opacity: 0.5;
  }
}

@keyframes float-element-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  33% {
    transform: translate(-25px, 25px) scale(1.15);
    opacity: 0.6;
  }
  66% {
    transform: translate(20px, -15px) scale(0.95);
    opacity: 0.5;
  }
}

@keyframes float-element-3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-10px, -10px) scale(1.1);
    opacity: 0.5;
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 3s ease-in-out infinite;
}

.animate-glow-pulse-delayed {
  animation: glow-pulse-delayed 4s ease-in-out infinite;
}

.animate-image-float {
  animation: image-float 6s ease-in-out infinite;
}

.animate-ring-pulse {
  animation: ring-pulse 2s ease-in-out infinite;
}

.animate-ring-pulse-delayed {
  animation: ring-pulse-delayed 2.5s ease-in-out infinite;
}

.animate-badge-float {
  animation: badge-float 4s ease-in-out infinite;
}

.animate-float-element-1 {
  animation: float-element-1 8s ease-in-out infinite;
}

.animate-float-element-2 {
  animation: float-element-2 10s ease-in-out infinite;
}

.animate-float-element-3 {
  animation: float-element-3 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 5s ease-in-out infinite;
}

.animate-slide-in-left {
  animation: slide-in-left 0.8s ease-out;
}

.animate-pulse-ring {
  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

.animate-fade-in-delayed {
  animation: fade-in-up 1s ease-out 0.3s both;
}

</style>

