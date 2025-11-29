<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-md'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-20">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo - Minimalist -->
        <a 
          href="#" 
          class="flex items-center space-x-2 group transition-all duration-300"
          @click.prevent="scrollToTop"
        >
          <div class="relative">
            <div class="absolute inset-0 bg-primary/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              class="h-10 w-10 lg:h-12 lg:w-12 relative z-10 transition-transform duration-300 group-hover:scale-110" 
              :src="logoImage" 
              alt="Muzola Ethberg" 
            />
          </div>
          <div class="hidden sm:block">
            <div class="text-base lg:text-lg font-bold text-gray-900">Muzola Ethberg</div>
            <div class="text-[10px] lg:text-xs text-gray-500 font-medium">Développeur Web & Mobile</div>
          </div>
        </a>

        <!-- Desktop Navigation - Clean Horizontal -->
        <div class="hidden lg:flex items-center space-x-1">
          <a 
            v-for="item in navItems" 
            :key="item.id"
            :href="item.href" 
            :class="[
              'nav-item relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300',
              activeSection === item.id
                ? 'text-primary'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            ]"
            @click.prevent="handleNavClick(item.href)"
          >
            {{ item.label }}
            <span 
              v-if="activeSection === item.id"
              class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
            ></span>
          </a>
        </div>

        <!-- Right Actions -->
        <div class="flex items-center space-x-3">
          <!-- Dashboard Link -->
          <router-link
            to="/dashboard"
            class="hidden lg:flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Dashboard</span>
          </router-link>
          
          <!-- CTA Button -->
          <a
            href="#contact"
            class="hidden lg:flex items-center space-x-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow-md"
            @click.prevent="handleNavClick('#contact')"
          >
            <span>Contact</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300"
            type="button"
            @click="toggleMenu"
            aria-label="Toggle navigation"
            :aria-expanded="menuOpen"
          >
            <svg 
              v-if="!menuOpen" 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              v-else 
              class="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation - Slide Down -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-show="menuOpen" 
          class="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl py-4"
        >
          <div class="flex flex-col space-y-1">
            <a 
              v-for="item in navItems" 
              :key="item.id"
              :href="item.href" 
              :class="[
                'nav-item-mobile px-4 py-3 text-base font-medium rounded-lg transition-all duration-300',
                activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-700 hover:text-primary hover:bg-gray-50'
              ]"
              @click.prevent="handleNavClick(item.href)"
            >
              {{ item.label }}
            </a>
            <router-link
              to="/dashboard"
              class="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 text-center text-base font-medium rounded-lg transition-all duration-300"
            >
              Dashboard
            </router-link>
            <a 
              href="#contact"
              class="mt-2 px-4 py-3 bg-primary text-white text-center text-base font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300"
              @click.prevent="handleNavClick('#contact')"
            >
              Me contacter
            </a>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
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
  window.addEventListener('scroll', handleScroll);
  handleScroll();

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
.nav-item {
  position: relative;
}

.nav-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

.nav-item:hover::before,
.nav-item.active::before {
  width: 60%;
}

@media (max-width: 1023px) {
  .nav-item::before {
    display: none;
  }
}
</style>
