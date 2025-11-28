<template>
  <section class="testimonials-section relative py-16 lg:py-24 overflow-hidden" id="testimonial">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    
    <!-- Animated Background Decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Gradient Orbs -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float-orb-testimonials-1"></div>
      <div class="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float-orb-testimonials-2"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-float-orb-testimonials-3"></div>
      
      <!-- Geometric Shapes -->
      <div class="absolute top-20 right-20 w-40 h-40 border-4 border-primary/20 rounded-3xl rotate-45 animate-rotate-slow-testimonials opacity-50"></div>
      <div class="absolute bottom-32 left-20 w-32 h-32 border-4 border-primary/15 rounded-full animate-pulse-slow-testimonials opacity-50"></div>
      
      <!-- Floating Particles -->
      <div class="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-particle-testimonials-1"></div>
      <div class="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-particle-testimonials-2"></div>
      <div class="absolute bottom-1/4 right-1/3 w-2.5 h-2.5 bg-primary rounded-full animate-particle-testimonials-3"></div>
      
      <!-- Code Grid Pattern -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#2563EB08_1px,transparent_1px),linear-gradient(to_bottom,#2563EB08_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
    </div>
    
    <div class="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-20 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 lg:mb-16">
        <div class="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
          <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span class="text-xs font-bold text-primary uppercase tracking-wider">Témoignages</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in-up">
          Ce qu'ils disent de 
          <span class="text-primary relative">
            Moi
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 transform scale-x-100"></span>
          </span>
        </h2>
        <p class="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
          Découvrez les retours de mes clients et collaborateurs
        </p>
      </div>

      <!-- Carousel Container -->
      <div class="relative max-w-5xl mx-auto">
        <!-- Carousel Wrapper -->
        <div class="relative overflow-hidden rounded-3xl">
          <!-- Testimonials Track -->
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              class="min-w-full px-4 sm:px-8 lg:px-12 py-8 lg:py-12"
            >
              <div class="testimonial-card bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden group animate-flip-in" :style="{ animationDelay: `${index * 0.2}s` }">
                <!-- Quote Icon -->
                <div class="absolute top-8 right-8 w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:bg-primary transition-all duration-300">
                  <svg class="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <!-- Content -->
                <div class="relative z-10 mb-8">
                  <p class="text-base lg:text-lg text-gray-700 leading-relaxed italic">
                    "{{ testimonial.text }}"
                  </p>
                </div>

                <!-- Author -->
                <div class="flex items-center space-x-4 pt-8 border-t-2 border-primary/10">
                  <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    {{ testimonial.author.charAt(0) }}
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-900 text-xl mb-1">{{ testimonial.author }}</h4>
                    <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
                  </div>
                </div>

                <!-- Decorative Elements -->
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          @click="previousTestimonial"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-xl border-2 border-primary/20 hover:border-primary hover:bg-primary text-primary hover:text-white transition-all duration-300 flex items-center justify-center group z-20"
          :disabled="currentIndex === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
        >
          <svg class="w-6 h-6 lg:w-8 lg:h-8 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full shadow-xl border-2 border-primary/20 hover:border-primary hover:bg-primary text-primary hover:text-white transition-all duration-300 flex items-center justify-center group z-20"
          :disabled="currentIndex === testimonials.length - 1"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === testimonials.length - 1 }"
        >
          <svg class="w-6 h-6 lg:w-8 lg:h-8 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Indicators -->
        <div class="flex justify-center space-x-3 mt-8">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.id"
            @click="goToTestimonial(index)"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'"
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

onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
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
</style>
