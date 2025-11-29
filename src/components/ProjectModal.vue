<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto modal-content">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 z-10 group"
          >
            <svg class="w-6 h-6 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Form Header -->
          <div class="p-8 lg:p-10">
            <div class="text-center mb-8">
              <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Discutons de votre 
                <span class="text-primary">projet</span>
              </h3>
              <p class="text-lg text-gray-600">
                Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais
              </p>
            </div>

            <!-- Contact Form -->
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div>
                  <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    id="name"
                    v-model="formData.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                <!-- Email -->
                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  id="subject"
                  v-model="formData.subject"
                  type="text"
                  required
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Sujet de votre message"
                />
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Décrivez votre projet en détail..."
                ></textarea>
              </div>

              <!-- Budget (Optional) -->
              <div>
                <label for="budget" class="block text-sm font-semibold text-gray-700 mb-2">
                  Budget estimé (optionnel)
                </label>
                <select
                  id="budget"
                  v-model="formData.budget"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                >
                  <option value="">Sélectionnez une fourchette de budget</option>
                  <option value="2000-5000">1 000$ - 5 000$</option>
                  <option value="5000-10000">5 000$ - 10 000$</option>
                  <option value="10000-20000">10 000$ - 20 000$</option>
                  <option value="20000-50000">20 000$ - 50 000$</option>
                  <option value="> 50000">Plus de 50 000$</option>
                  <option value="a-discuter">À discuter selon le projet</option>
                </select>
                <p class="mt-2 text-xs text-gray-500">
                  💡 Le budget varie selon la complexité et les fonctionnalités du projet. N'hésitez pas à choisir "À discuter" pour un devis personnalisé.
                </p>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full group px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <!-- Button Background Animation -->
                <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span class="relative z-10 flex items-center justify-center space-x-2">
                  <span v-if="!isSubmitting">Envoyer le message</span>
                  <span v-else class="flex items-center space-x-2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Envoi en cours...</span>
                  </span>
                  <svg v-if="!isSubmitting" class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useModal } from '@/composables/useModal';

const { isModalOpen, closeModal } = useModal();

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  budget: ''
});

const isSubmitting = ref(false);
const submitError = ref<string | null>(null);

const handleSubmit = async () => {
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  submitError.value = null;

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8000'}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message,
        budget: formData.value.budget,
        type: 'project',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Une erreur est survenue lors de l\'envoi du message');
    }

    // Succès
    alert(data.message || 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
    
    // Reset form and close modal
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
      budget: ''
    };
    closeModal();
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    submitError.value = error instanceof Error ? error.message : 'Une erreur est survenue. Veuillez réessayer.';
    alert(submitError.value);
  } finally {
    isSubmitting.value = false;
  }
};

// Handle ESC key to close modal
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isModalOpen.value) {
    closeModal();
  }
};

// Watch modal state to manage body overflow
watch(isModalOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
  } else {
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEscape);
  }
});

onMounted(() => {
  if (isModalOpen.value) {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
  }
});

onUnmounted(() => {
  document.body.style.overflow = '';
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}
</style>


