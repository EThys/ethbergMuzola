<template>
  <section class="testimonials-section relative py-16 lg:py-24 overflow-hidden" id="testimonial">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Animated Background Decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 bg-primary/15 rounded-full blur-3xl animate-float-orb-testimonials-1 hidden sm:block"></div>
      <div class="absolute bottom-0 left-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-primary/10 rounded-full blur-3xl animate-float-orb-testimonials-2 hidden sm:block"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-primary/5 rounded-full blur-3xl animate-float-orb-testimonials-3 hidden lg:block"></div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-20 right-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-4 border-primary/20 rounded-3xl rotate-45 animate-rotate-slow-testimonials opacity-50 hidden lg:block"></div>
      <div class="absolute bottom-32 left-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-4 border-primary/15 rounded-full animate-pulse-slow-testimonials opacity-50 hidden lg:block"></div>
      
      <!-- Floating Particles -->
      <div class="absolute top-1/4 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-particle-testimonials-1 hidden sm:block"></div>
      <div class="absolute top-1/2 left-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-particle-testimonials-2 hidden sm:block"></div>
      <div class="absolute bottom-1/4 right-1/3 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-primary rounded-full animate-particle-testimonials-3 hidden sm:block"></div>
      
      <!-- Code Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#2563EB08_1px,transparent_1px),linear-gradient(to_bottom,#2563EB08_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] lg:bg-[size:40px_40px] opacity-20 sm:opacity-30 hidden sm:block"></div>
    </div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
      <!-- Section Header -->
      <div class="text-left mb-8 sm:mb-12 lg:mb-16">
        <div class="inline-block mb-4 sm:mb-6 scroll-animate">
          <span class="text-xs font-medium text-gray-500 uppercase tracking-widest">Témoignages</span>
        </div>
        <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight scroll-animate" style="animation-delay: 0.1s">
          Ce qu'ils disent de 
          <span class="text-primary relative">
            Moi
            <span class="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-primary/30 transform scale-x-100"></span>
          </span>
        </h2>
        <p class="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed scroll-animate" style="animation-delay: 0.2s">
          Découvrez les retours de mes clients et collaborateurs
        </p>
      </div>

      <!-- Carousel Container -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Carousel Wrapper -->
        <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          <!-- Testimonials Track -->
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              class="min-w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-6 sm:py-8 lg:py-12"
            >
              <div class="testimonial-card bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 xl:p-12 shadow-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group scroll-animate" :style="{ animationDelay: `${index * 0.1}s` }">
                <!-- Quote Icon -->
                <div class="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:bg-primary transition-all duration-300">
                  <svg class="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <!-- Content -->
                <div class="relative z-10 mb-6 sm:mb-8 pr-12 sm:pr-16 lg:pr-20">
                  <p class="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed italic">
                    "{{ testimonial.text }}"
                  </p>
                </div>

                <!-- Author -->
                <div class="flex items-center space-x-3 sm:space-x-4 pt-6 sm:pt-8 border-t-2 border-primary/10">
                  <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {{ testimonial.author.charAt(0) }}
                  </div>
                  <div class="min-w-0 flex-1">
                    <h4 class="font-extrabold text-gray-900 text-base sm:text-lg lg:text-xl mb-1 truncate">{{ testimonial.author }}</h4>
                    <p class="text-gray-600 text-xs sm:text-sm">{{ testimonial.role }}</p>
                  </div>
                </div>

                <!-- Decorative Elements -->
                <div class="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-secondary/10 rounded-tr-2xl sm:rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"></div>
                <div class="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-primary/5 rounded-bl-2xl sm:rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          @click="previousTestimonial"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 lg:-translate-x-8 xl:-translate-x-12 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white rounded-full shadow-xl border-2 border-primary/20 hover:border-primary hover:bg-primary text-primary hover:text-white transition-all duration-300 flex items-center justify-center group z-20"
          :disabled="currentIndex === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 lg:translate-x-8 xl:translate-x-12 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white rounded-full shadow-xl border-2 border-primary/20 hover:border-primary hover:bg-primary text-primary hover:text-white transition-all duration-300 flex items-center justify-center group z-20"
          :disabled="currentIndex === testimonials.length - 1"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === testimonials.length - 1 }"
        >
          <svg class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Indicators -->
        <div class="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            @click="goToTestimonial(index)"
            class="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'bg-primary w-6 sm:w-8' : 'bg-primary/30 hover:bg-primary/50'"
            :aria-label="`Aller au témoignage ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { testimonials } from '@/data/portfolio';

const currentIndex = ref(0);

const nextTestimonial = () => {
  if (currentIndex.value < testimonials.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Loop back to first
  }
};

const previousTestimonial = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = testimonials.length - 1; // Loop to last
  }
};

const goToTestimonial = (index: number) => {
  currentIndex.value = index;
};

// Auto-play carousel
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextTestimonial();
  }, 5000); // Change testimonial every 5 seconds
};

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
    autoPlayInterval = null;
  }
};

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
  startAutoPlay();
  const cleanup = setupScrollAnimations();
  onUnmounted(() => {
    stopAutoPlay();
    cleanup();
  });
});
</script>

<style scoped>
/* Animations */
@keyframes float-orb-testimonials-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translate(50px, -50px) scale(1.3);
    opacity: 0.6;
  }
}

@keyframes float-orb-testimonials-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: translate(-60px, 60px) scale(1.4);
    opacity: 0.5;
  }
}

@keyframes float-orb-testimonials-3 {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.2;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.4;
  }
}

@keyframes rotate-slow-testimonials {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse-slow-testimonials {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.15);
  }
}

@keyframes particle-testimonials-1 {
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

@keyframes particle-testimonials-2 {
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

@keyframes particle-testimonials-3 {
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

.animate-float-orb-testimonials-1 {
  animation: float-orb-testimonials-1 8s ease-in-out infinite;
}

.animate-float-orb-testimonials-2 {
  animation: float-orb-testimonials-2 10s ease-in-out infinite;
}

.animate-float-orb-testimonials-3 {
  animation: float-orb-testimonials-3 12s ease-in-out infinite;
}

.animate-rotate-slow-testimonials {
  animation: rotate-slow-testimonials 25s linear infinite;
}

.animate-pulse-slow-testimonials {
  animation: pulse-slow-testimonials 5s ease-in-out infinite;
}

.animate-particle-testimonials-1 {
  animation: particle-testimonials-1 7s ease-in-out infinite;
}

.animate-particle-testimonials-2 {
  animation: particle-testimonials-2 9s ease-in-out infinite 1s;
}

.animate-particle-testimonials-3 {
  animation: particle-testimonials-3 8s ease-in-out infinite 2s;
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
</style>
