<template>
  <footer class="footer-section relative py-8 lg:py-12 overflow-hidden border-t-2 border-primary/10">
    <!-- Background -->
    <div class="absolute inset-0 bg-gray-900"></div>
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
        <!-- About -->
        <div class="text-center md:text-left scroll-animate">
          <div class="flex items-center justify-center md:justify-start space-x-3 mb-4">
            <div class="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-xl">ME</span>
            </div>
            <div>
              <div class="text-white font-bold text-lg">Muzola Ethberg</div>
              <div class="text-gray-400 text-sm">Développeur Web & Mobile</div>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            Créateur de solutions digitales innovantes et performantes pour transformer vos idées en réalité.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="text-center md:text-left scroll-animate" style="animation-delay: 0.1s">
          <h3 class="text-white font-bold text-lg mb-6">Liens rapides</h3>
          <ul class="space-y-3">
            <li v-for="item in navItems" :key="item.id">
              <a 
                :href="item.href" 
                class="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center justify-center md:justify-start space-x-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
                <span>{{ item.label }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="text-center md:text-left scroll-animate" style="animation-delay: 0.2s">
          <h3 class="text-white font-bold text-lg mb-6">Contact</h3>
          <ul class="space-y-3">
            <li class="flex items-center justify-center md:justify-start space-x-3 text-gray-400">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a :href="`mailto:${contactInfo.email}`" class="hover:text-primary transition-colors">
                {{ contactInfo.email }}
              </a>
            </li>
            <li class="flex items-center justify-center md:justify-start space-x-3 text-gray-400">
              <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a :href="`tel:${contactInfo.phone}`" class="hover:text-secondary transition-colors">
                {{ contactInfo.phone }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-8 scroll-animate" style="animation-delay: 0.3s">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p class="text-gray-400 text-sm text-center md:text-left">
            Copyright &copy; {{ currentYear }} Muzola Ethberg. Tous droits réservés.
          </p>
          <div class="flex items-center space-x-2 text-gray-400">
            <span class="text-sm">Développé avec</span>
            <svg class="w-5 h-5 text-primary animate-pulse" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            <span class="text-sm">par</span>
            <span class="text-primary font-bold">Muzola Ethberg</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import { contactInfo } from '@/data/portfolio';

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

const navItems = [
  { id: 'about', href: '#about', label: 'À propos' },
  { id: 'project', href: '#project', label: 'Projets' },
  { id: 'resume', href: '#resume', label: 'Parcours' },
  { id: 'contact', href: '#contact', label: 'Contact' },
];

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
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

