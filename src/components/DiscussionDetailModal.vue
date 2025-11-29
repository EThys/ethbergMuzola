<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="discussion"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="$emit('close')"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="$emit('close')"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <!-- Header -->
          <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Discussion de projet</h2>
              <p class="text-sm text-gray-600">{{ formatDate(discussion.created_at) }}</p>
            </div>
            <button
              @click="$emit('close')"
              class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="p-6 space-y-6">
            <!-- Project Info -->
            <div class="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ discussion.project_title }}</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Client</label>
                  <p class="text-gray-900 font-semibold">{{ discussion.name }}</p>
                  <a :href="`mailto:${discussion.email}`" class="text-primary hover:underline text-sm">{{ discussion.email }}</a>
                  <a v-if="discussion.phone" :href="`tel:${discussion.phone}`" class="block text-primary hover:underline text-sm mt-1">{{ discussion.phone }}</a>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Statut</label>
                  <select
                    :value="discussion.status"
                    @change="updateStatus(($event.target as HTMLSelectElement).value)"
                    :class="[
                      'px-3 py-1 text-sm font-semibold rounded-full border-0 focus:ring-2 focus:ring-primary',
                      getStatusClass(discussion.status)
                    ]"
                  >
                    <option value="open">Ouverte</option>
                    <option value="in_progress">En cours</option>
                    <option value="closed">Fermée</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Description du projet</label>
                <p class="text-gray-900 whitespace-pre-wrap">{{ discussion.project_description }}</p>
              </div>
            </div>

            <!-- Messages -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                Messages ({{ discussion.messages?.length || 0 }})
              </h3>
              <div class="space-y-4">
                <div
                  v-for="message in discussion.messages"
                  :key="message.id"
                  :class="[
                    'rounded-lg p-4 border',
                    message.sender_type === 'client' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
                  ]"
                >
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center space-x-2">
                      <div :class="[
                        'w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm',
                        message.sender_type === 'client' ? 'bg-primary' : 'bg-gray-600'
                      ]">
                        {{ message.sender_name.charAt(0).toUpperCase() }}
                      </div>
                      <div>
                        <p class="font-semibold text-gray-900">{{ message.sender_name }}</p>
                        <p class="text-xs text-gray-500">{{ message.sender_email }}</p>
                      </div>
                    </div>
                    <span class="text-xs text-gray-500">{{ formatDate(message.created_at) }}</span>
                  </div>
                  <p class="text-gray-900 whitespace-pre-wrap">{{ message.message }}</p>
                </div>
              </div>
            </div>

            <!-- Reply Form -->
            <div class="border-t border-gray-200 pt-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Répondre</label>
              <form @submit.prevent="sendReply" class="space-y-4">
                <textarea
                  v-model="replyMessage"
                  rows="4"
                  required
                  class="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Écrivez votre réponse ici..."
                ></textarea>
                
                <!-- Send Options -->
                <div class="space-y-3">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Modes d'envoi</label>
                  <div class="flex flex-col space-y-2">
                    <label class="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-lg hover:border-primary/30 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        v-model="sendOptions.email"
                        class="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <div class="flex items-center space-x-2 flex-1">
                        <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <div>
                          <span class="font-semibold text-gray-900">Email</span>
                          <p class="text-xs text-gray-500">Envoyer un email avec un template élégant</p>
                        </div>
                      </div>
                    </label>
                    
                    <label class="flex items-center space-x-3 p-3 border-2 border-gray-200 rounded-lg hover:border-green-500/30 cursor-pointer transition-all">
                      <input
                        type="checkbox"
                        v-model="sendOptions.whatsapp"
                        :disabled="!discussion.phone"
                        class="w-5 h-5 text-green-500 border-gray-300 rounded focus:ring-green-500 disabled:opacity-50"
                      />
                      <div class="flex items-center space-x-2 flex-1">
                        <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        <div>
                          <span class="font-semibold text-gray-900">WhatsApp</span>
                          <p class="text-xs text-gray-500" v-if="discussion.phone">Envoyer un message WhatsApp</p>
                          <p class="text-xs text-red-500" v-else>Aucun numéro de téléphone disponible</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                
                <div class="flex items-center justify-between">
                  <button
                    type="submit"
                    :disabled="isSending || (!sendOptions.email && !sendOptions.whatsapp)"
                    class="px-4 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <svg v-if="isSending" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{{ isSending ? 'Envoi...' : 'Envoyer la réponse' }}</span>
                  </button>
                  <button
                    type="button"
                    @click="deleteDiscussion"
                    class="px-4 py-2 bg-red-100 text-red-700 rounded-lg font-semibold hover:bg-red-200 transition-colors"
                  >
                    Supprimer la discussion
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  discussion: any;
}>();

const emit = defineEmits<{
  close: [];
  updateStatus: [];
  messageSent: [];
}>();

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const replyMessage = ref('');
const isSending = ref(false);
const sendOptions = ref({
  email: true,
  whatsapp: false,
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const getStatusClass = (status: string) => {
  const classes = {
    open: 'bg-green-100 text-green-800',
    in_progress: 'bg-yellow-100 text-yellow-800',
    closed: 'bg-gray-100 text-gray-800',
  };
  return classes[status as keyof typeof classes] || 'bg-gray-100 text-gray-800';
};

const updateStatus = async (status: string) => {
  try {
    const response = await fetch(`${apiUrl}/api/project-discussions/${props.discussion.id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ status }),
    });

    const data = await response.json();
    if (data.success) {
      props.discussion.status = status;
      emit('updateStatus');
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors de la mise à jour du statut');
  }
};

const sendReply = async () => {
  if (!replyMessage.value.trim()) return;

  isSending.value = true;
  try {
    const response = await fetch(`${apiUrl}/api/project-discussions/${props.discussion.id}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender_name: 'Admin',
        sender_email: 'ethbergmuzola500@gmail.com',
        message: replyMessage.value.trim(),
        sender_type: 'admin',
        send_email: sendOptions.value.email,
        send_whatsapp: sendOptions.value.whatsapp,
        recipient_email: props.discussion.email,
        recipient_phone: props.discussion.phone,
        recipient_name: props.discussion.name,
      }),
    });

    const data = await response.json();
    if (data.success) {
      // Add the new message to the discussion's messages array
      if (!props.discussion.messages) {
        props.discussion.messages = [];
      }
      if (data.data && data.data.message) {
        props.discussion.messages.push(data.data.message);
      }
      
      // Show send results
      const sendResults = data.data?.send_results || {};
      let resultMessage = 'Réponse envoyée avec succès !\n\n';
      
      if (sendResults.email) {
        resultMessage += `📧 Email: ${sendResults.email.success ? '✅ ' + sendResults.email.message : '❌ ' + sendResults.email.message}\n`;
      }
      if (sendResults.whatsapp) {
        resultMessage += `💬 WhatsApp: ${sendResults.whatsapp.success ? '✅ ' + sendResults.whatsapp.message : '❌ ' + sendResults.whatsapp.message}\n`;
      }
      
      replyMessage.value = '';
      emit('messageSent');
      alert(resultMessage);
    } else {
      alert('Erreur lors de l\'envoi de la réponse');
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors de l\'envoi de la réponse');
  } finally {
    isSending.value = false;
  }
};

const deleteDiscussion = async () => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer cette discussion ?')) {
    return;
  }

  try {
    const response = await fetch(`${apiUrl}/api/project-discussions/${props.discussion.id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      emit('close');
      emit('updateStatus');
      alert('Discussion supprimée avec succès');
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors de la suppression');
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-white,
.modal-leave-active .bg-white {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from .bg-white,
.modal-leave-to .bg-white {
  transform: scale(0.9) translateY(20px);
  opacity: 0;
}
</style>

