<template>
  <section 
    class="hero-section px-2 sm:px-4 lg:px-6 xl:px-20 relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
    id="about"
  >
    <!-- Minimal Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white"></div>
    
    <!-- Subtle Grid Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

    <div class="container mx-auto px-2 sm:px-3 lg:px-4 relative z-10 py-4 lg:py-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        
        <!-- Left Content -->
        <div class="text-center lg:text-left space-y-4 sm:space-y-6">
          <!-- Greeting -->
          <div class="inline-block">
            <span class="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Bonjour, je suis</span>
          </div>

          <!-- Main Heading -->
          <div class="space-y-3 sm:space-y-4 animate-fade-in-up">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span class="block text-gray-900 mb-1 sm:mb-2 animate-fade-in-right" style="animation-delay: 0.2s">
                Muzola
              </span>
              <div class="relative inline-block min-h-[1.2em] animate-fade-in-left" style="animation-delay: 0.4s">
                <span class="relative inline-block">
                  <span 
                    class="inline-block text-primary font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap"
                    :class="{ 'typing': isTyping }"
                  >
                    {{ displayedText }}
                  </span>
                  <span class="typing-cursor inline-block w-0.5 h-[1.2em] bg-primary ml-1 align-middle animate-cursor-pulse"></span>
                </span>
              </div>
            </h1>
          </div>

          <!-- Description -->
          <p class="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0 animate-fade-in-up" style="animation-delay: 0.6s">
            Je conçois et développe des 
            <span class="font-semibold text-gray-900">expériences digitales</span> 
            exceptionnelles. Spécialisé en développement web & mobile avec une passion pour 
            <span class="font-semibold text-gray-900">l'innovation</span> et 
            <span class="font-semibold text-gray-900">l'excellence</span>.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 px-4 sm:px-0 animate-bounce-in" style="animation-delay: 0.8s">
            <a
              href="#contact"
              class="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white rounded-lg font-semibold text-sm sm:text-base shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300"
              @click.prevent="scrollToContact"
            >
              <span>Me contacter</span>
              <svg class="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
              <a
                href="/apk/alice.apk"
                download
              class="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-gray-900 rounded-lg font-semibold text-sm sm:text-base border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span class="hidden sm:inline">Télécharger l'app</span>
              <span class="sm:hidden">Télécharger</span>
              </a>
            </div>

          <!-- Social Links -->
          <div class="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 pt-3 sm:pt-4 px-4 sm:px-0 animate-fade-in-up" style="animation-delay: 1s">
            <a href="https://github.com/EThys" class="group p-2.5 rounded-lg bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300">
              <svg class="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" class="group p-2.5 rounded-lg bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300">
              <svg class="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Image - Google Style with Amazing Decorations -->
        <div class="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div class="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <!-- Animated Background Elements -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
              <!-- Gradient Orbs - Responsive -->
              <div class="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/15 rounded-full blur-3xl animate-float-orb-hero-1"></div>
              <div class="absolute bottom-0 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-3xl animate-float-orb-hero-2"></div>
              <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-float-orb-hero-3"></div>
              
              <!-- Geometric Shapes - Hidden on mobile -->
              <div class="absolute top-10 -right-10 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-4 border-primary/20 rounded-3xl rotate-45 animate-rotate-slow-hero opacity-60 hidden sm:block"></div>
              <div class="absolute bottom-20 -left-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-4 border-primary/15 rounded-full animate-pulse-slow-hero opacity-60 hidden sm:block"></div>
              <div class="absolute top-1/3 right-1/4 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-4 border-primary/10 rounded-2xl rotate-12 animate-rotate-slow-hero opacity-50 hidden md:block"></div>
              
              <!-- Floating Particles - Smaller on mobile -->
              <div class="absolute top-1/4 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-particle-hero-1"></div>
              <div class="absolute top-1/2 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-particle-hero-2"></div>
              <div class="absolute bottom-1/4 right-1/3 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full animate-particle-hero-3"></div>
              <div class="absolute top-3/4 left-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-particle-hero-4"></div>
              
              <!-- Code Lines Decoration -->
              <div class="absolute top-1/4 -left-12 sm:-left-16 hidden lg:block">
                <div class="space-y-2 sm:space-y-3 animate-code-lines-hero">
                  <div class="w-16 sm:w-24 h-0.5 sm:h-1 bg-primary/30 rounded-full transform rotate-12"></div>
                  <div class="w-12 sm:w-20 h-0.5 sm:h-1 bg-primary/20 rounded-full transform -rotate-12"></div>
                  <div class="w-20 sm:w-28 h-0.5 sm:h-1 bg-primary/30 rounded-full transform rotate-12"></div>
                </div>
              </div>
            </div>
            
            <!-- Main Image Container -->
            <div class="relative z-10">
              <!-- Multi-layer Glow Effects - Responsive -->
              <div class="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-br from-primary/25 via-primary/15 to-primary/5 rounded-full blur-3xl animate-glow-pulse-hero"></div>
              <div class="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-tr from-primary/20 to-primary/10 rounded-full blur-2xl animate-glow-pulse-hero-delayed"></div>
              
              <!-- Image Frame with Multiple Rings -->
              <div class="relative">
                <!-- Animated Rings -->
                <div class="absolute inset-0 rounded-full border-2 sm:border-3 lg:border-4 border-primary/30 animate-ring-pulse-hero-1"></div>
                <div class="absolute inset-0 rounded-full border-2 sm:border-3 lg:border-4 border-primary/20 animate-ring-pulse-hero-2"></div>
                <div class="absolute inset-0 rounded-full border-2 sm:border-3 lg:border-4 border-primary/10 animate-ring-pulse-hero-3"></div>
                
                <!-- Main Image Container -->
                <div class="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-full p-2 sm:p-2.5 lg:p-3 shadow-2xl transform hover:scale-105 transition-all duration-700">
                  <!-- Inner Circle with Image -->
                  <div class="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-white border-2 sm:border-3 lg:border-4 border-white ring-4 sm:ring-6 lg:ring-8 ring-primary/10">
                    <img 
                      src="/images/removeMoi.png" 
                      class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                      alt="Muzola Ethberg - Développeur Web & Mobile" 
                      loading="eager"
                      @error="handleImageError"
                    />
                    <!-- Animated Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 animate-overlay-shimmer"></div>
                    
                    <!-- Shine Effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <!-- Floating Stats Badge - Enhanced & Responsive -->
                  <div class="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl transform hover:scale-110 transition-transform duration-300 z-20 backdrop-blur-sm animate-badge-float-hero">
                    <div class="absolute -inset-0.5 sm:-inset-1 bg-primary/30 rounded-xl sm:rounded-2xl blur-xl opacity-50"></div>
                    <div class="relative flex items-center space-x-2 sm:space-x-3">
                      <div class="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/25 rounded-lg sm:rounded-xl flex items-center justify-center backdrop-blur-sm transform group-hover:rotate-12 transition-transform duration-300">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <div>
                        <div class="text-[10px] sm:text-xs font-medium opacity-90">Projets</div>
                        <div class="text-base sm:text-lg lg:text-xl font-bold">5+</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Experience Badge - Enhanced & Responsive -->
                  <div class="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 bg-white px-3 py-2 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border-2 border-primary/20 transform hover:scale-110 transition-transform duration-300 z-20 backdrop-blur-sm animate-badge-float-hero-delayed">
                    <div class="absolute -inset-0.5 sm:-inset-1 bg-primary/10 rounded-xl sm:rounded-2xl blur-lg opacity-50"></div>
                    <div class="relative flex items-center space-x-2 sm:space-x-3">
                      <div class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-primary/15 rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                        <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <div class="text-[10px] sm:text-xs font-medium text-gray-500">Expérience</div>
                        <div class="text-sm sm:text-base font-bold text-primary">4+ ans</div>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Floating Technology Logos Around Image - Responsive -->
                  <div 
                    v-for="(tech, index) in floatingTechs" 
                    :key="tech.name"
                    class="absolute tech-orbital hidden sm:block"
                    :class="`tech-orbit-${index + 1}`"
                    :style="{ left: '50%', top: '50%' }"
                  >
                    <div class="tech-logo-container group">
                      <div class="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-lg sm:rounded-xl p-1.5 sm:p-2 shadow-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 flex items-center justify-center backdrop-blur-sm">
                        <img 
                          :src="tech.image" 
                          :alt="tech.name"
                          class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          @error="handleTechImageError"
                          loading="lazy"
                        />
                      </div>
                      <!-- Tooltip -->
                      <div class="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                        <div class="bg-gray-900 text-white text-[10px] sm:text-xs px-2 py-1 rounded whitespace-nowrap">
                          {{ tech.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
      <a href="#project" class="flex flex-col items-center space-y-1 sm:space-y-2 text-gray-400 hover:text-primary transition-colors duration-300">
        <span class="text-[10px] sm:text-xs font-medium">Découvrir</span>
        <div class="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1.5 sm:p-2">
          <div class="w-0.5 sm:w-1 h-2 sm:h-3 bg-gray-400 rounded-full animate-scroll-bounce"></div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Technologies principales pour flotter autour de l'image
const floatingTechs = computed(() => [
  { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Laravel', image: '/images/laravel.png' },
  { name: 'PHP', image: '/images/php.png' },
  { name: 'JavaScript', image: '/images/javasccc.png' },
  { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
]);


const animatedItems = ['Ethberg', 'Développeur Web', 'Développeur Mobile', 'UI/UX Designer'];
const displayedText = ref('');
const isTyping = ref(true);
let typingInterval: number | null = null;
let eraseInterval: number | null = null;
let currentItemIndex = 0;
let charIndex = 0;
let isErasing = false;

const typeText = () => {
  const currentText = animatedItems[currentItemIndex];
  if (!currentText) return;
  
  if (!isErasing && charIndex < currentText.length) {
    displayedText.value = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingInterval = window.setTimeout(typeText, 100);
  } else if (!isErasing && charIndex === currentText.length) {
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
  img.src = '/images/moi.jpg';
};

const handleTechImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iI0YzRjRGNiIvPgo8cGF0aCBkPSJNMzIgMjJMMzIgNDJNMjIgMzJINDEiIHN0cm9rZT0iIzI1NjNlYiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+';
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
@keyframes cursor-pulse {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0.3;
  }
}

@keyframes scroll-bounce {
  0%, 100% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(8px);
    opacity: 0.5;
  }
}

.animate-cursor-pulse {
  animation: cursor-pulse 1s ease-in-out infinite;
}

.animate-scroll-bounce {
  animation: scroll-bounce 2s ease-in-out infinite;
}

@keyframes float-gentle {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(20px, -20px) scale(1.1);
    opacity: 0.6;
  }
}

@keyframes float-gentle-delayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-15px, 15px) scale(1.15);
    opacity: 0.5;
  }
}

.animate-float-gentle {
  animation: float-gentle 6s ease-in-out infinite;
}

.animate-float-gentle-delayed {
  animation: float-gentle-delayed 8s ease-in-out infinite;
}

/* Hero Image Animations */
@keyframes float-orb-hero-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(40px, -40px) scale(1.3);
    opacity: 0.6;
  }
}

@keyframes float-orb-hero-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-50px, 50px) scale(1.4);
    opacity: 0.5;
  }
}

@keyframes float-orb-hero-3 {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.4;
  }
}

@keyframes rotate-slow-hero {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-slow-hero {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.15);
  }
}

@keyframes particle-hero-1 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    transform: translate(60px, -60px);
    opacity: 0;
  }
}

@keyframes particle-hero-2 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
  100% {
    transform: translate(-50px, 50px);
    opacity: 0;
  }
}

@keyframes particle-hero-3 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  15%, 85% {
    opacity: 1;
  }
  100% {
    transform: translate(70px, 40px);
    opacity: 0;
  }
}

@keyframes particle-hero-4 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  25%, 75% {
    opacity: 1;
  }
  100% {
    transform: translate(-40px, -40px);
    opacity: 0;
  }
}

@keyframes glow-pulse-hero {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

@keyframes glow-pulse-hero-delayed {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.15);
  }
}

@keyframes ring-pulse-hero-1 {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

@keyframes ring-pulse-hero-2 {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.08);
  }
}

@keyframes ring-pulse-hero-3 {
  0%, 100% {
    opacity: 0.1;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.12);
  }
}

@keyframes badge-float-hero {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-8px) rotate(3deg);
  }
  66% {
    transform: translateY(5px) rotate(-3deg);
  }
}

@keyframes badge-float-hero-delayed {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-6px) rotate(-2deg);
  }
  66% {
    transform: translateY(6px) rotate(2deg);
  }
}

@keyframes overlay-shimmer {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

@keyframes code-lines-hero {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes tech-icon-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

/* Responsive orbit animations */
@keyframes tech-orbit-1 {
  0% { transform: translate(calc(-50% + 120px), calc(-50% + 0px)) rotate(0deg); }
  100% { transform: translate(calc(-50% + 120px), calc(-50% + 0px)) rotate(360deg); }
}
@keyframes tech-orbit-2 {
  0% { transform: translate(calc(-50% + 85px), calc(-50% + 85px)) rotate(0deg); }
  100% { transform: translate(calc(-50% + 85px), calc(-50% + 85px)) rotate(360deg); }
}
@keyframes tech-orbit-3 {
  0% { transform: translate(calc(-50% + 0px), calc(-50% + 120px)) rotate(0deg); }
  100% { transform: translate(calc(-50% + 0px), calc(-50% + 120px)) rotate(360deg); }
}
@keyframes tech-orbit-4 {
  0% { transform: translate(calc(-50% + -85px), calc(-50% + 85px)) rotate(0deg); }
  100% { transform: translate(calc(-50% + -85px), calc(-50% + 85px)) rotate(360deg); }
}
@keyframes tech-orbit-5 {
  0% { transform: translate(calc(-50% + -120px), calc(-50% + 0px)) rotate(0deg); }
  100% { transform: translate(calc(-50% + -120px), calc(-50% + 0px)) rotate(360deg); }
}
@keyframes tech-orbit-6 {
  0% { transform: translate(calc(-50% + -85px), calc(-50% + -85px)) rotate(0deg); }
  100% { transform: translate(calc(-50% + -85px), calc(-50% + -85px)) rotate(360deg); }
}
@keyframes tech-orbit-7 {
  0% { transform: translate(calc(-50% + 0px), calc(-50% + -120px)) rotate(0deg); }
  100% { transform: translate(calc(-50% + 0px), calc(-50% + -120px)) rotate(360deg); }
}
@keyframes tech-orbit-8 {
  0% { transform: translate(calc(-50% + 85px), calc(-50% + -85px)) rotate(0deg); }
  100% { transform: translate(calc(-50% + 85px), calc(-50% + -85px)) rotate(360deg); }
}

@media (min-width: 640px) {
  @keyframes tech-orbit-1 {
    0% { transform: translate(calc(-50% + 150px), calc(-50% + 0px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 150px), calc(-50% + 0px)) rotate(360deg); }
  }
  @keyframes tech-orbit-2 {
    0% { transform: translate(calc(-50% + 106px), calc(-50% + 106px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 106px), calc(-50% + 106px)) rotate(360deg); }
  }
  @keyframes tech-orbit-3 {
    0% { transform: translate(calc(-50% + 0px), calc(-50% + 150px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 0px), calc(-50% + 150px)) rotate(360deg); }
  }
  @keyframes tech-orbit-4 {
    0% { transform: translate(calc(-50% + -106px), calc(-50% + 106px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + -106px), calc(-50% + 106px)) rotate(360deg); }
  }
  @keyframes tech-orbit-5 {
    0% { transform: translate(calc(-50% + -150px), calc(-50% + 0px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + -150px), calc(-50% + 0px)) rotate(360deg); }
  }
  @keyframes tech-orbit-6 {
    0% { transform: translate(calc(-50% + -106px), calc(-50% + -106px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + -106px), calc(-50% + -106px)) rotate(360deg); }
  }
  @keyframes tech-orbit-7 {
    0% { transform: translate(calc(-50% + 0px), calc(-50% + -150px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 0px), calc(-50% + -150px)) rotate(360deg); }
  }
  @keyframes tech-orbit-8 {
    0% { transform: translate(calc(-50% + 106px), calc(-50% + -106px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 106px), calc(-50% + -106px)) rotate(360deg); }
  }
}

@media (min-width: 1024px) {
  @keyframes tech-orbit-1 {
    0% { transform: translate(calc(-50% + 180px), calc(-50% + 0px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 180px), calc(-50% + 0px)) rotate(360deg); }
  }
  @keyframes tech-orbit-2 {
    0% { transform: translate(calc(-50% + 127px), calc(-50% + 127px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 127px), calc(-50% + 127px)) rotate(360deg); }
  }
  @keyframes tech-orbit-3 {
    0% { transform: translate(calc(-50% + 0px), calc(-50% + 180px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 0px), calc(-50% + 180px)) rotate(360deg); }
  }
  @keyframes tech-orbit-4 {
    0% { transform: translate(calc(-50% + -127px), calc(-50% + 127px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + -127px), calc(-50% + 127px)) rotate(360deg); }
  }
  @keyframes tech-orbit-5 {
    0% { transform: translate(calc(-50% + -180px), calc(-50% + 0px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + -180px), calc(-50% + 0px)) rotate(360deg); }
  }
  @keyframes tech-orbit-6 {
    0% { transform: translate(calc(-50% + -127px), calc(-50% + -127px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + -127px), calc(-50% + -127px)) rotate(360deg); }
  }
  @keyframes tech-orbit-7 {
    0% { transform: translate(calc(-50% + 0px), calc(-50% + -180px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 0px), calc(-50% + -180px)) rotate(360deg); }
  }
  @keyframes tech-orbit-8 {
    0% { transform: translate(calc(-50% + 127px), calc(-50% + -127px)) rotate(0deg); }
    100% { transform: translate(calc(-50% + 127px), calc(-50% + -127px)) rotate(360deg); }
  }
}

@keyframes tech-float {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-15px) scale(1.1);
  }
}

.animate-float-orb-hero-1 {
  animation: float-orb-hero-1 8s ease-in-out infinite;
}

.animate-float-orb-hero-2 {
  animation: float-orb-hero-2 10s ease-in-out infinite;
}

.animate-float-orb-hero-3 {
  animation: float-orb-hero-3 12s ease-in-out infinite;
}

.animate-rotate-slow-hero {
  animation: rotate-slow-hero 25s linear infinite;
}

.animate-pulse-slow-hero {
  animation: pulse-slow-hero 5s ease-in-out infinite;
}

.animate-particle-hero-1 {
  animation: particle-hero-1 7s ease-in-out infinite;
}

.animate-particle-hero-2 {
  animation: particle-hero-2 9s ease-in-out infinite 1s;
}

.animate-particle-hero-3 {
  animation: particle-hero-3 8s ease-in-out infinite 2s;
}

.animate-particle-hero-4 {
  animation: particle-hero-4 6s ease-in-out infinite 1.5s;
}

.animate-glow-pulse-hero {
  animation: glow-pulse-hero 4s ease-in-out infinite;
}

.animate-glow-pulse-hero-delayed {
  animation: glow-pulse-hero-delayed 5s ease-in-out infinite 1s;
}

.animate-ring-pulse-hero-1 {
  animation: ring-pulse-hero-1 3s ease-in-out infinite;
}

.animate-ring-pulse-hero-2 {
  animation: ring-pulse-hero-2 3.5s ease-in-out infinite 0.5s;
}

.animate-ring-pulse-hero-3 {
  animation: ring-pulse-hero-3 4s ease-in-out infinite 1s;
}

.animate-badge-float-hero {
  animation: badge-float-hero 5s ease-in-out infinite;
}

.animate-badge-float-hero-delayed {
  animation: badge-float-hero-delayed 6s ease-in-out infinite;
}

.animate-overlay-shimmer {
  animation: overlay-shimmer 3s ease-in-out infinite;
}

.animate-code-lines-hero {
  animation: code-lines-hero 4s ease-in-out infinite;
}

.animate-tech-icon-float {
  animation: tech-icon-float 4s ease-in-out infinite;
}

.tech-orbital {
  z-index: 20;
}

.tech-orbit-1 { animation: tech-orbit-1 20s linear infinite; }
.tech-orbit-2 { animation: tech-orbit-2 20s linear infinite 0.5s; }
.tech-orbit-3 { animation: tech-orbit-3 20s linear infinite 1s; }
.tech-orbit-4 { animation: tech-orbit-4 20s linear infinite 1.5s; }
.tech-orbit-5 { animation: tech-orbit-5 20s linear infinite 2s; }
.tech-orbit-6 { animation: tech-orbit-6 20s linear infinite 2.5s; }
.tech-orbit-7 { animation: tech-orbit-7 20s linear infinite 3s; }
.tech-orbit-8 { animation: tech-orbit-8 20s linear infinite 3.5s; }

.tech-logo-container {
  animation: tech-float 3s ease-in-out infinite;
  position: relative;
}

.tech-logo-container:nth-child(1) { animation-delay: 0s; }
.tech-logo-container:nth-child(2) { animation-delay: 0.4s; }
.tech-logo-container:nth-child(3) { animation-delay: 0.8s; }
.tech-logo-container:nth-child(4) { animation-delay: 1.2s; }
.tech-logo-container:nth-child(5) { animation-delay: 1.6s; }
.tech-logo-container:nth-child(6) { animation-delay: 2s; }
.tech-logo-container:nth-child(7) { animation-delay: 2.4s; }
.tech-logo-container:nth-child(8) { animation-delay: 2.8s; }
</style>
