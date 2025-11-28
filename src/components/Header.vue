<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
      isScrolled 
        ? 'bg-white/98 backdrop-blur-2xl shadow-2xl border-b border-primary/10' 
        : 'bg-white/95 backdrop-blur-lg shadow-md'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20 lg:h-24">
        <!-- Logo -->
        <a 
          href="#" 
          class="navbar-brand flex items-center transition-all duration-500 hover:scale-105 group relative"
          @click.prevent="scrollToTop"
        >
          <div class="absolute -inset-2 bg-primary/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative z-10 flex items-center space-x-3">
            <img 
              class="h-12 w-auto transition-all duration-500 group-hover:drop-shadow-lg" 
              :src="logoImage" 
              alt="Muzola Ethberg Logo" 
            />
            <div class="hidden sm:block">
              <div class="text-lg font-bold text-gray-900">Muzola Ethberg</div>
              <div class="text-xs text-gray-500">Développeur Web & Mobile</div>
            </div>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-2">
          <ul class="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-primary/10 shadow-lg">
            <li v-for="item in navItems" :key="item.id">
              <a 
                :href="item.href" 
                :class="[
                  'nav-link relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group',
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                ]"
                @click.prevent="handleNavClick(item.href)"
              >
                <span class="relative z-10 flex items-center space-x-2">
                  <span>{{ item.label }}</span>
                  <span 
                    v-if="activeSection === item.id"
                    class="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse"
                  ></span>
                </span>
                <span 
                  v-if="activeSection === item.id"
                  class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                ></span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-3">
          <!-- CTA Button -->
          <a 
            href="#contact"
            class="hidden lg:flex items-center space-x-2 px-6 py-2.5 bg-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            @click.prevent="handleNavClick('#contact')"
          >
            <span>Me contacter</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2.5 rounded-xl text-gray-700 hover:bg-primary/10 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Toggle theme"
          >
            <svg 
              v-if="!isDarkMode" 
              class="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <svg 
              v-else 
              class="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2.5 rounded-xl text-gray-700 hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            type="button"
            @click="toggleMenu"
            aria-label="Toggle navigation"
            :aria-expanded="menuOpen"
          >
            <svg 
              v-if="!menuOpen" 
              class="w-6 h-6 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else 
              class="w-6 h-6 transition-transform duration-300 rotate-90" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 max-h-0"
        enter-to-class="opacity-100 max-h-96"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 max-h-96"
        leave-to-class="opacity-0 max-h-0"
      >
        <div 
          v-show="menuOpen" 
          class="lg:hidden overflow-hidden border-t border-primary/20 bg-white/98 backdrop-blur-xl mt-2 pt-6 pb-6"
        >
          <ul class="flex flex-col space-y-3 px-4">
            <li v-for="item in navItems" :key="item.id">
              <a 
                :href="item.href" 
                :class="[
                  'nav-link block px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform',
                  activeSection === item.id
                    ? 'text-white bg-primary shadow-lg border-l-4 border-secondary'
                    : 'text-gray-700 hover:text-primary hover:bg-primary/10 hover:translate-x-2'
                ]"
                @click.prevent="handleNavClick(item.href)"
              >
                <span class="flex items-center justify-between">
                  <span>{{ item.label }}</span>
                  <span 
                    v-if="activeSection === item.id"
                    class="w-2 h-2 bg-secondary rounded-full animate-pulse"
                  ></span>
                  <svg v-else class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </li>
            <li class="pt-4">
              <a 
                href="#contact"
                class="block w-full px-6 py-4 bg-primary text-white rounded-xl text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                @click.prevent="handleNavClick('#contact')"
              >
                Me contacter
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const isDarkMode = ref(false);
const isScrolled = ref(false);
const activeSection = ref('');

const logoImage = '/images/logoa.png';

const navItems = [
  { id: 'about', href: '#about', label: 'À propos' },
  { id: 'project', href: '#project', label: 'Projets' },
  { id: 'resume', href: '#resume', label: 'Parcours' },
  { id: 'contact', href: '#contact', label: 'Contact' },
];

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  menuOpen.value = false;
  document.body.style.overflow = '';
};

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
  updateActiveSection();
};

const updateActiveSection = () => {
  const sections = navItems.map(item => ({
    id: item.id,
    element: document.querySelector(item.href),
  }));

  const scrollPosition = window.scrollY + 100;

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section && section.element) {
      const offsetTop = (section.element as HTMLElement).offsetTop;
      if (scrollPosition >= offsetTop) {
        activeSection.value = section.id;
        return;
      }
    }
  }
  activeSection.value = '';
};

const handleNavClick = (href: string) => {
  closeMenu();
  const target = document.querySelector(href);
  if (target) {
    const offsetTop = (target as HTMLElement).offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  closeMenu();
};

onMounted(() => {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }

  // Handle scroll
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // Close menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 80%;
}

@media (max-width: 1023px) {
  .nav-link::after {
    display: none;
  }
}
</style>
