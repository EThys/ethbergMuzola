<template>
  <section class="about-section relative py-12 sm:py-16 lg:py-24 overflow-hidden" id="about">
    <!-- Background with Decorations -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating Orbs - Responsive -->
      <div class="absolute top-10 right-10 sm:top-20 sm:right-20 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-primary/10 rounded-full blur-3xl animate-float-orb-1"></div>
      <div class="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl animate-float-orb-2"></div>
      
      <!-- Geometric Shapes - Hidden on mobile -->
      <div class="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 sm:border-3 lg:border-4 border-primary/20 rounded-2xl rotate-45 animate-rotate-slow opacity-50 hidden sm:block"></div>
      <div class="absolute bottom-1/3 left-1/4 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 border-2 sm:border-3 lg:border-4 border-primary/15 rounded-full animate-pulse-slow opacity-50 hidden sm:block"></div>
      
      <!-- Floating Particles - Smaller on mobile -->
      <div class="absolute top-1/3 right-1/3 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-particle-float-1"></div>
      <div class="absolute top-2/3 left-1/3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-particle-float-2"></div>
      <div class="absolute bottom-1/4 right-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full animate-particle-float-3"></div>
    </div>
    
    <div class="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-20 relative z-10">
      <!-- Section Header -->
      <div class="mb-12 sm:mb-16 lg:mb-20">
        <div class="inline-block mb-6 scroll-animate">
          <span class="text-xs font-medium text-gray-500 uppercase tracking-widest">À Propos</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight scroll-animate" style="animation-delay: 0.1s">
          Qui suis-je ?
        </h2>
        <p class="text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed scroll-animate" style="animation-delay: 0.2s">
          Découvrez mon parcours et ma passion pour le développement
        </p>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
        <!-- Left Content - Text -->
        <div class="lg:col-span-7 space-y-6 sm:space-y-8">
          <!-- Paragraphs -->
          <div class="space-y-5 sm:space-y-6">
            <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed relative group scroll-animate px-2 sm:px-0" style="animation-delay: 0.3s">
              <span class="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Avec une <span class="font-semibold text-gray-900">passion précoce pour la technologie</span>, j'ai commencé à m'intéresser à l'informatique dès mon plus jeune âge. J'ai appris les bases de l'algorithmique avant même d'entrer à l'université.
            </p>
            <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed relative group scroll-animate px-2 sm:px-0" style="animation-delay: 0.45s">
              <span class="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Je suis un <span class="font-semibold text-gray-900">développeur web et mobile minutieux</span>, qui accorde une grande importance aux détails et à la qualité. Chaque ligne de code que j'écris est pensée pour offrir la meilleure expérience utilisateur possible.
            </p>
            <p class="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed relative group scroll-animate px-2 sm:px-0" style="animation-delay: 0.6s">
              <span class="absolute -left-2 sm:-left-4 top-0 w-0.5 sm:w-1 h-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Je suis convaincu que la <span class="font-semibold text-gray-900">collaboration étroite</span> avec les clients et l'équipe de développement est essentielle pour la réussite d'un projet. Au fil du temps, j'ai développé mes compétences et je suis impatient de travailler avec vous pour créer des applications innovantes et de haute qualité.
            </p>
          </div>

          <!-- Stats - With Animations -->
          <div class="pt-6 sm:pt-8 border-t border-primary/20 relative scroll-animate" style="animation-delay: 0.7s">
            <!-- Decorative Line -->
            <div class="absolute top-0 left-0 w-16 sm:w-24 h-0.5 bg-primary animate-line-expand"></div>
            
            <div class="grid grid-cols-2 gap-6 sm:gap-8">
              <div class="group relative">
                <div class="absolute -inset-1 sm:-inset-2 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="relative">
                  <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-1 sm:mb-2 transform group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div class="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide group-hover:text-primary transition-colors duration-300">Projets</div>
                </div>
              </div>
              <div class="group relative">
                <div class="absolute -inset-1 sm:-inset-2 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="relative">
                  <div class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-1 sm:mb-2 transform group-hover:scale-110 transition-transform duration-300">4+</div>
                  <div class="text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide group-hover:text-primary transition-colors duration-300">Années</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Image - With Decorations -->
        <div class="lg:col-span-5 relative scroll-animate mt-8 lg:mt-0" style="animation-delay: 0.4s">
          <!-- Decorative Elements Around Image - Hidden on mobile -->
          <div class="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-2 sm:border-3 lg:border-4 border-primary/20 rounded-xl sm:rounded-2xl rotate-12 animate-rotate-slow opacity-50 hidden sm:block"></div>
          <div class="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 sm:border-3 lg:border-4 border-primary/15 rounded-full animate-pulse-slow opacity-50 hidden sm:block"></div>
          
          <div class="relative">
            <!-- Glow Effect - Responsive -->
            <div class="absolute -inset-3 sm:-inset-4 lg:-inset-6 bg-primary/10 rounded-2xl sm:rounded-3xl blur-2xl animate-glow-pulse"></div>
            
            <!-- Image Container -->
            <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-50 h-56 sm:h-64 lg:h-80 border-2 sm:border-3 lg:border-4 border-white shadow-xl sm:shadow-2xl transform hover:scale-105 transition-all duration-700">
              <img 
                class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                src="/images/moi.jpg" 
                alt="Muzola Ethberg" 
              />
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Animated Border -->
              <div class="absolute inset-0 border-2 border-primary/20 rounded-2xl sm:rounded-3xl animate-border-pulse"></div>
            </div>
            
            <!-- Floating Badge with Animation - Responsive -->
            <div class="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 lg:-bottom-6 lg:-right-6 bg-white px-3 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-primary/20 backdrop-blur-xl transform hover:scale-110 transition-transform duration-300 animate-badge-float">
              <div class="flex items-center space-x-2 sm:space-x-3">
                <div class="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs sm:text-sm font-medium text-gray-900">Développeur</div>
                  <div class="text-[10px] sm:text-xs text-primary font-medium">Web & Mobile</div>
                </div>
              </div>
            </div>
            
            <!-- Floating Code Lines - Hidden on mobile/tablet -->
            <div class="absolute top-1/2 -left-8 sm:-left-10 lg:-left-12 hidden xl:block">
              <div class="space-y-1.5 sm:space-y-2 animate-code-lines">
                <div class="w-12 sm:w-16 h-0.5 bg-primary/30 rounded transform rotate-12"></div>
                <div class="w-10 sm:w-12 h-0.5 bg-primary/20 rounded transform -rotate-12"></div>
                <div class="w-14 sm:w-20 h-0.5 bg-primary/30 rounded transform rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

// Intersection Observer pour les animations au scroll
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Créer l'observer avec des options
  observer = new IntersectionObserver(
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

  // Observer tous les éléments avec la classe scroll-animate
  const elements = document.querySelectorAll('.scroll-animate');
  elements.forEach((el) => observer?.observe(el));
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* Animations */
@keyframes float-orb-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(30px, -30px) scale(1.2);
    opacity: 0.5;
  }
}

@keyframes float-orb-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(-40px, 40px) scale(1.3);
    opacity: 0.4;
  }
}

@keyframes rotate-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

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

@keyframes particle-float-1 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10%, 90% {
    opacity: 1;
  }
  100% {
    transform: translate(50px, -50px);
    opacity: 0;
  }
}

@keyframes particle-float-2 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  20%, 80% {
    opacity: 1;
  }
  100% {
    transform: translate(-40px, 40px);
    opacity: 0;
  }
}

@keyframes particle-float-3 {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  15%, 85% {
    opacity: 1;
  }
  100% {
    transform: translate(60px, 30px);
    opacity: 0;
  }
}

@keyframes glow-pulse {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

@keyframes border-pulse {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes badge-float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  33% {
    transform: translateY(-6px) rotate(2deg);
  }
  66% {
    transform: translateY(4px) rotate(-2deg);
  }
}

@keyframes line-expand {
  from {
    width: 0;
  }
  to {
    width: 96px;
  }
}

@keyframes code-lines {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-float-orb-1 {
  animation: float-orb-1 8s ease-in-out infinite;
}

.animate-float-orb-2 {
  animation: float-orb-2 10s ease-in-out infinite;
}

.animate-rotate-slow {
  animation: rotate-slow 20s linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-particle-float-1 {
  animation: particle-float-1 6s ease-in-out infinite;
}

.animate-particle-float-2 {
  animation: particle-float-2 8s ease-in-out infinite 1s;
}

.animate-particle-float-3 {
  animation: particle-float-3 7s ease-in-out infinite 2s;
}

.animate-glow-pulse {
  animation: glow-pulse 3s ease-in-out infinite;
}

.animate-border-pulse {
  animation: border-pulse 2s ease-in-out infinite;
}

.animate-badge-float {
  animation: badge-float 4s ease-in-out infinite;
}

.animate-line-expand {
  animation: line-expand 1s ease-out forwards;
}

.animate-code-lines {
  animation: code-lines 3s ease-in-out infinite;
}

/* Scroll Animations */
.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-animate.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger animation delays */
.scroll-animate[style*="animation-delay: 0.3s"] {
  transition-delay: 0.1s;
}

.scroll-animate[style*="animation-delay: 0.45s"] {
  transition-delay: 0.2s;
}

.scroll-animate[style*="animation-delay: 0.6s"] {
  transition-delay: 0.3s;
}

.scroll-animate[style*="animation-delay: 0.4s"] {
  transition-delay: 0.4s;
}

.scroll-animate[style*="animation-delay: 0.1s"] {
  transition-delay: 0.1s;
}

.scroll-animate[style*="animation-delay: 0.2s"] {
  transition-delay: 0.2s;
}

.scroll-animate[style*="animation-delay: 0.7s"] {
  transition-delay: 0.5s;
}
</style>
