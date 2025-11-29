<template>
  <section class="contact-section relative py-12 lg:py-16 overflow-hidden" id="contact">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl hidden sm:block"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-secondary/5 rounded-full blur-3xl hidden sm:block"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 relative z-10">
      <!-- Section Header -->
      <div class="text-left mb-8 sm:mb-12 lg:mb-16">
        <div class="inline-block mb-4 sm:mb-6 scroll-animate">
          <span class="text-xs font-medium text-gray-500 uppercase tracking-widest">Contact</span>
        </div>
        <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight scroll-animate" style="animation-delay: 0.1s">
          Travaillons 
          <span class="text-primary relative">
            Ensemble
            <span class="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-primary/30 transform scale-x-100"></span>
          </span>
        </h2>
        <p class="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl leading-relaxed scroll-animate" style="animation-delay: 0.2s">
          Je suis impatient de travailler avec vous pour créer des applications web et mobiles innovantes et de haute qualité
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
        <!-- Contact Info -->
        <div class="space-y-6 sm:space-y-8 scroll-animate" style="animation-delay: 0.3s">
          <div>
            <h3 class="text-lg sm:text-xl lg:text-2xl font-extrabold text-gray-900 mb-4 sm:mb-6">Informations de contact</h3>
            <p class="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              N'hésitez pas à me contacter pour discuter de votre projet. Je serai ravi de vous aider à concrétiser vos idées.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-3 sm:space-y-4">
            <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-105 group scroll-animate" style="animation-delay: 0.4s">
              <div class="flex items-center space-x-3 sm:space-x-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                  <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-xs sm:text-sm text-gray-600 mb-1">Adresse</p>
                  <p class="font-semibold text-sm sm:text-base text-gray-900 break-words">{{ contactInfo.address }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-105 group scroll-animate" style="animation-delay: 0.5s">
              <div class="flex items-center space-x-3 sm:space-x-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 bg-secondary rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                  <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-xs sm:text-sm text-gray-600 mb-1">Téléphone / WhatsApp</p>
                  <a :href="`tel:${contactInfo.phone}`" class="font-semibold text-sm sm:text-base text-gray-900 hover:text-primary transition-colors break-all">
                    {{ contactInfo.phone }}
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-105 group scroll-animate" style="animation-delay: 0.6s">
              <div class="flex items-center space-x-3 sm:space-x-4">
                <div class="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                  <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-xs sm:text-sm text-gray-600 mb-1">Email</p>
                  <a :href="`mailto:${contactInfo.email}`" class="font-semibold text-sm sm:text-base text-gray-900 hover:text-primary transition-colors break-all">
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="scroll-animate" style="animation-delay: 0.3s">
          <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl border-2 border-primary/10">
            <div class="space-y-4 sm:space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label for="name" class="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label for="email" class="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Téléphone (optionnel)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    class="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label for="message" class="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span v-if="!isSubmitting">Envoyer le message</span>
                <span v-else class="flex items-center space-x-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Envoi en cours...</span>
                </span>
                <svg v-if="!isSubmitting" class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
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

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

const isSubmitting = ref(false);
const submitError = ref<string | null>(null);

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  submitError.value = null;

  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone || null,
        subject: form.value.subject,
        message: form.value.message,
        type: 'contact',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Une erreur est survenue lors de l\'envoi du message');
    }

    // Succès
    alert(data.message || 'Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    submitError.value = error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.';
    alert(submitError.value);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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

