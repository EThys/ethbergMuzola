<template>
  <section class="testimonials-section relative py-20 lg:py-32 overflow-hidden" id="testimonial">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary/10 mb-6">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span class="text-sm font-bold text-primary">Témoignages</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Ce qu'ils disent de 
          <span class="text-primary">Moi</span>
        </h2>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          Découvrez les retours de mes clients et collaborateurs
        </p>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="testimonial-card group relative animate-fade-in-up"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-500 transform hover:scale-105 h-full flex flex-col relative overflow-hidden">
            <!-- Quote Icon -->
            <div class="absolute top-6 right-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 group-hover:bg-primary transition-all duration-300">
              <svg class="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Content -->
            <div class="flex-1 mb-6 relative z-10">
              <p class="text-gray-700 leading-relaxed text-lg mb-6 italic">
                "{{ testimonial.text }}"
              </p>
            </div>

            <!-- Author -->
            <div class="flex items-center space-x-4 pt-6 border-t-2 border-primary/10">
              <div class="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {{ testimonial.author.charAt(0) }}
              </div>
              <div>
                <h4 class="font-bold text-gray-900 text-lg">{{ testimonial.author }}</h4>
                <p class="text-gray-600 text-sm">{{ testimonial.role }}</p>
              </div>
            </div>

            <!-- Decorative Elements -->
            <div class="absolute bottom-0 left-0 w-20 h-20 bg-secondary/10 rounded-tl-3xl rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { testimonials } from '@/data/portfolio';
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out both;
}
</style>

