<template>
  <section class="contact-section relative py-12 lg:py-16 overflow-hidden" id="contact">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-white"></div>
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 animate-fade-in-up">
        <div class="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary/10 mb-6">
          <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="text-sm font-bold text-primary">Contact</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
          Travaillons 
          <span class="text-primary">Ensemble</span>
        </h2>
        <p class="text-base lg:text-lg text-gray-700 max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
          Je suis impatient de travailler avec vous pour créer des applications web et mobiles innovantes et de haute qualité
        </p>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Contact Info -->
        <div class="space-y-8 animate-fade-in-left" style="animation-delay: 0.3s">
          <div>
            <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
            <p class="text-base lg:text-lg text-gray-700 mb-8">
              N'hésitez pas à me contacter pour discuter de votre projet. Je serai ravi de vous aider à concrétiser vos idées.
            </p>
          </div>

          <!-- Contact Cards -->
          <div class="space-y-4">
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-105 group animate-scale-in" style="animation-delay: 0.4s">
              <div class="flex items-center space-x-4">
                <div class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Adresse</p>
                  <p class="font-semibold text-gray-900">{{ contactInfo.address }}</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-secondary/10 hover:border-secondary/30 transition-all duration-300 transform hover:scale-105 group animate-scale-in" style="animation-delay: 0.5s">
              <div class="flex items-center space-x-4">
                <div class="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Téléphone / WhatsApp</p>
                  <a :href="`tel:${contactInfo.phone}`" class="font-semibold text-gray-900 hover:text-primary transition-colors">
                    {{ contactInfo.phone }}
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:scale-105 group animate-scale-in" style="animation-delay: 0.6s">
              <div class="flex items-center space-x-4">
                <div class="w-14 h-14 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-sm text-gray-600 mb-1">Email</p>
                  <a :href="`mailto:${contactInfo.email}`" class="font-semibold text-gray-900 hover:text-primary transition-colors">
                    {{ contactInfo.email }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="animate-fade-in-right" style="animation-delay: 0.3s">
          <form @submit.prevent="handleSubmit" class="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary/10">
            <div class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Envoyer le message</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
import { ref } from 'vue';
import { contactInfo } from '@/data/portfolio';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value);
  // You can add API call here
  alert('Message envoyé avec succès!');
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
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
</style>

