<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <router-link
              to="/"
              class="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </router-link>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p class="text-sm text-gray-600">Gestion des contacts et discussions</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="refreshData"
              class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
              :disabled="isLoading"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Actualiser</span>
            </button>
            <button
              @click="handleLogout"
              class="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center space-x-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Stats Cards -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Contacts -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Total Contacts</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.total_contacts }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center text-sm">
            <span class="text-red-600 font-semibold">{{ stats.unread_contacts }}</span>
            <span class="text-gray-600 ml-1">non lus</span>
          </div>
        </div>

        <!-- Total Discussions -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Total Discussions</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.total_discussions }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
          <div class="mt-4 flex items-center space-x-4 text-sm">
            <span class="text-green-600 font-semibold">{{ stats.open_discussions }}</span>
            <span class="text-gray-600">ouvertes</span>
          </div>
        </div>

        <!-- In Progress -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">En cours</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.in_progress_discussions }}</p>
            </div>
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- Closed -->
        <div class="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-600">Fermées</p>
              <p class="text-3xl font-bold text-gray-900 mt-2">{{ stats.closed_discussions }}</p>
            </div>
            <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="bg-white rounded-xl shadow-sm border border-gray-200">
        <div class="border-b border-gray-200">
          <nav class="flex -mb-px">
            <button
              @click="activeTab = 'contacts'"
              :class="[
                'px-6 py-4 text-sm font-medium border-b-2 transition-colors',
                activeTab === 'contacts'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              ]"
            >
              Contacts
              <span v-if="stats.unread_contacts > 0" class="ml-2 px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs">
                {{ stats.unread_contacts }}
              </span>
            </button>
            <button
              @click="activeTab = 'discussions'"
              :class="[
                'px-6 py-4 text-sm font-medium border-b-2 transition-colors',
                activeTab === 'discussions'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              ]"
            >
              Discussions
              <span v-if="stats.open_discussions > 0" class="ml-2 px-2 py-0.5 bg-green-100 text-green-600 rounded-full text-xs">
                {{ stats.open_discussions }}
              </span>
            </button>
          </nav>
        </div>

        <!-- Contacts Tab -->
        <div v-show="activeTab === 'contacts'" class="p-6">
          <!-- Filters -->
          <div class="mb-6 flex flex-col sm:flex-row gap-4">
            <div class="flex-1">
              <input
                v-model="contactFilters.search"
                type="text"
                placeholder="Rechercher par nom, email, sujet..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                @input="debounceSearch('contacts')"
              />
            </div>
            <select
              v-model="contactFilters.status"
              @change="loadContacts(1)"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">Tous les statuts</option>
              <option value="unread">Non lus</option>
              <option value="read">Lus</option>
            </select>
          </div>

          <!-- Contacts Table -->
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sujet</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-if="isLoading" class="text-center">
                  <td colspan="6" class="px-6 py-12">
                    <div class="flex justify-center">
                      <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr v-else-if="contacts.length === 0">
                  <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                    Aucun contact trouvé
                  </td>
                </tr>
                <tr
                  v-else
                  v-for="contact in contacts"
                  :key="contact.id"
                  :class="{'bg-blue-50': !contact.is_read}"
                  class="hover:bg-gray-50 transition-colors"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {{ contact.name.charAt(0).toUpperCase() }}
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{ contact.name }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{ contact.email }}</div>
                    <div v-if="contact.phone" class="text-xs text-gray-500">{{ contact.phone }}</div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm text-gray-900 max-w-xs truncate">{{ contact.subject }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">{{ formatDate(contact.created_at) }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      :class="[
                        'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                        contact.is_read ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      ]"
                    >
                      {{ contact.is_read ? 'Lu' : 'Non lu' }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      @click="viewContact(contact.id)"
                      class="text-primary hover:text-primary/80 mr-4"
                    >
                      Voir
                    </button>
                    <button
                      @click="toggleContactStatus(contact)"
                      class="text-gray-600 hover:text-gray-900 mr-4"
                    >
                      {{ contact.is_read ? 'Marquer non lu' : 'Marquer lu' }}
                    </button>
                    <button
                      @click="deleteContact(contact.id)"
                      class="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div v-if="contactsPagination" class="mt-6 flex items-center justify-between">
            <div class="text-sm text-gray-700">
              Affichage de {{ contactsPagination.from }} à {{ contactsPagination.to }} sur {{ contactsPagination.total }}
            </div>
            <div class="flex space-x-2">
              <button
                v-if="contactsPagination.prev_page_url"
                @click="loadContacts(contactsPagination.current_page - 1)"
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Précédent
              </button>
              <button
                v-if="contactsPagination.next_page_url"
                @click="loadContacts(contactsPagination.current_page + 1)"
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Suivant
              </button>
            </div>
          </div>
        </div>

        <!-- Discussions Tab -->
        <div v-show="activeTab === 'discussions'" class="p-6">
          <!-- Filters -->
          <div class="mb-6 flex flex-col sm:flex-row gap-4">
            <div class="flex-1">
              <input
                v-model="discussionFilters.search"
                type="text"
                placeholder="Rechercher par nom, email, projet..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                @input="debounceSearch('discussions')"
              />
            </div>
            <select
              v-model="discussionFilters.status"
              @change="loadDiscussions(1)"
              class="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="all">Tous les statuts</option>
              <option value="open">Ouvertes</option>
              <option value="in_progress">En cours</option>
              <option value="closed">Fermées</option>
            </select>
          </div>

          <!-- Discussions Table -->
          <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projet</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Messages</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                  <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-if="isLoading" class="text-center">
                  <td colspan="6" class="px-6 py-12">
                    <div class="flex justify-center">
                      <svg class="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                  </td>
                </tr>
                <tr v-else-if="discussions.length === 0">
                  <td colspan="6" class="px-6 py-12 text-center text-gray-500">
                    Aucune discussion trouvée
                  </td>
                </tr>
                <tr
                  v-else
                  v-for="discussion in discussions"
                  :key="discussion.id"
                  class="hover:bg-gray-50 transition-colors"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                        {{ discussion.name.charAt(0).toUpperCase() }}
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{ discussion.name }}</div>
                        <div class="text-sm text-gray-500">{{ discussion.email }}</div>
                        <div v-if="discussion.phone" class="text-xs text-gray-400">{{ discussion.phone }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="text-sm font-medium text-gray-900">{{ discussion.project_title }}</div>
                    <div class="text-sm text-gray-500 max-w-xs truncate">{{ discussion.project_description }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold">
                      {{ discussion.messages?.length || 0 }} message(s)
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-500">{{ formatDate(discussion.created_at) }}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <select
                      :value="discussion.status"
                      @change="updateDiscussionStatus(discussion.id, ($event.target as HTMLSelectElement).value)"
                      :class="[
                        'px-2 py-1 text-xs leading-5 font-semibold rounded-full border-0 focus:ring-2 focus:ring-primary',
                        getStatusClass(discussion.status)
                      ]"
                    >
                      <option value="open">Ouverte</option>
                      <option value="in_progress">En cours</option>
                      <option value="closed">Fermée</option>
                    </select>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      @click="viewDiscussion(discussion.id)"
                      class="text-primary hover:text-primary/80 mr-4"
                    >
                      Voir
                    </button>
                    <button
                      @click="deleteDiscussion(discussion.id)"
                      class="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div v-if="discussionsPagination" class="mt-6 flex items-center justify-between">
            <div class="text-sm text-gray-700">
              Affichage de {{ discussionsPagination.from }} à {{ discussionsPagination.to }} sur {{ discussionsPagination.total }}
            </div>
            <div class="flex space-x-2">
              <button
                v-if="discussionsPagination.prev_page_url"
                @click="loadDiscussions(discussionsPagination.current_page - 1)"
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Précédent
              </button>
              <button
                v-if="discussionsPagination.next_page_url"
                @click="loadDiscussions(discussionsPagination.current_page + 1)"
                class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Suivant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Detail Modal -->
    <ContactDetailModal
      v-if="selectedContact"
      :contact="selectedContact"
      @close="selectedContact = null"
      @update-status="handleContactStatusUpdate"
    />

    <!-- Discussion Detail Modal -->
    <DiscussionDetailModal
      v-if="selectedDiscussion"
      :discussion="selectedDiscussion"
      @close="selectedDiscussion = null"
      @update-status="handleDiscussionStatusUpdate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '@/composables/useAuth';
import ContactDetailModal from './ContactDetailModal.vue';
import DiscussionDetailModal from './DiscussionDetailModal.vue';

const router = useRouter();
const { startSessionCheck, stopSessionCheck, logout: authLogout } = useAuth();

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Get auth token from localStorage
const getAuthToken = () => {
  return localStorage.getItem('auth_token');
};

// Add auth token to fetch requests
const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return fetch(url, {
    ...options,
    headers,
  });
};

// State
const activeTab = ref<'contacts' | 'discussions'>('contacts');
const isLoading = ref(false);
const isLoadingContacts = ref(false);
const isLoadingDiscussions = ref(false);
const stats = ref({
  total_contacts: 0,
  unread_contacts: 0,
  total_discussions: 0,
  open_discussions: 0,
  in_progress_discussions: 0,
  closed_discussions: 0,
});

// Debug: watch stats changes
watch(() => stats.value, (newStats: typeof stats.value) => {
  console.log('Stats mises à jour:', newStats);
}, { deep: true });

const contacts = ref<any[]>([]);
const discussions = ref<any[]>([]);
const contactsPagination = ref<any>(null);
const discussionsPagination = ref<any>(null);

const contactFilters = ref({
  search: '',
  status: 'all',
});

const discussionFilters = ref({
  search: '',
  status: 'all',
});

const selectedContact = ref<any>(null);
const selectedDiscussion = ref<any>(null);

let searchTimeout: ReturnType<typeof setTimeout> | null = null;

// Methods
const loadStats = async () => {
  try {
    // Récupérer toutes les données (sans pagination pour les stats)
    const [contactsRes, discussionsRes] = await Promise.all([
      fetchWithAuth(`${apiUrl}/api/contact?per_page=1000`),
      fetchWithAuth(`${apiUrl}/api/project-discussions?per_page=1000`),
    ]);

    const contactsData = await contactsRes.json();
    const discussionsData = await discussionsRes.json();

    console.log('Contacts Data:', contactsData);
    console.log('Discussions Data:', discussionsData);

    // Vérifier la structure de la réponse
    const contactsList = contactsData.success 
      ? (contactsData.data?.data || contactsData.data || [])
      : [];
    const discussionsList = discussionsData.success 
      ? (discussionsData.data?.data || discussionsData.data || [])
      : [];

    // Calculer les statistiques
    const totalContacts = contactsData.success 
      ? (contactsData.data?.total || contactsList.length || 0)
      : 0;
    const unreadContacts = contactsList.filter((c: any) => !c.is_read).length;
    
    const totalDiscussions = discussionsData.success 
      ? (discussionsData.data?.total || discussionsList.length || 0)
      : 0;
    const openDiscussions = discussionsList.filter((d: any) => d.status === 'open').length;
    const inProgressDiscussions = discussionsList.filter((d: any) => d.status === 'in_progress').length;
    const closedDiscussions = discussionsList.filter((d: any) => d.status === 'closed').length;

    stats.value = {
      total_contacts: totalContacts,
      unread_contacts: unreadContacts,
      total_discussions: totalDiscussions,
      open_discussions: openDiscussions,
      in_progress_discussions: inProgressDiscussions,
      closed_discussions: closedDiscussions,
    };

    console.log('Stats calculées:', stats.value);
  } catch (error) {
    console.error('Erreur lors du chargement des statistiques:', error);
    // Réinitialiser les stats en cas d'erreur
    stats.value = {
      total_contacts: 0,
      unread_contacts: 0,
      total_discussions: 0,
      open_discussions: 0,
      in_progress_discussions: 0,
      closed_discussions: 0,
    };
  }
};

const loadContacts = async (page = 1) => {
  isLoadingContacts.value = true;
  try {
    let url = `${apiUrl}/api/contact?page=${page}`;
    
    if (contactFilters.value.status !== 'all') {
      url += `&is_read=${contactFilters.value.status === 'read' ? '1' : '0'}`;
    }
    
    if (contactFilters.value.search) {
      url += `&search=${encodeURIComponent(contactFilters.value.search)}`;
    }

    const response = await fetchWithAuth(url);
    
    if (!response.ok) {
      if (response.status === 401) {
        // Non authentifié, rediriger vers login
        localStorage.removeItem('auth_token');
        router.push('/login');
        return;
      }
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    
    console.log('Contacts Data:', data);

    if (data.success) {
      // Gérer différentes structures de réponse
      const contactsList = data.data?.data || data.data || [];
      contacts.value = Array.isArray(contactsList) ? contactsList : [];
      
      // Gérer la pagination
      if (data.data && typeof data.data === 'object') {
        contactsPagination.value = {
          current_page: data.data.current_page || page,
          last_page: data.data.last_page || 1,
          from: data.data.from || 0,
          to: data.data.to || 0,
          total: data.data.total || contacts.value.length,
          prev_page_url: data.data.prev_page_url || null,
          next_page_url: data.data.next_page_url || null,
        };
      }
      
      console.log('Contacts chargés:', contacts.value.length);
    } else {
      console.error('Erreur API:', data.message);
      contacts.value = [];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des contacts:', error);
    alert('Erreur lors du chargement des contacts. Vérifiez votre connexion.');
    contacts.value = [];
  } finally {
    isLoadingContacts.value = false;
  }
};

const loadDiscussions = async (page = 1) => {
  isLoadingDiscussions.value = true;
  try {
    let url = `${apiUrl}/api/project-discussions?page=${page}`;
    
    if (discussionFilters.value.status !== 'all') {
      url += `&status=${discussionFilters.value.status}`;
    }
    
    if (discussionFilters.value.search) {
      url += `&search=${encodeURIComponent(discussionFilters.value.search)}`;
    }

    const response = await fetchWithAuth(url);
    
    if (!response.ok) {
      if (response.status === 401) {
        // Non authentifié, rediriger vers login
        localStorage.removeItem('auth_token');
        router.push('/login');
        return;
      }
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();
    
    console.log('Discussions Data:', data);

    if (data.success) {
      // Gérer différentes structures de réponse
      const discussionsList = data.data?.data || data.data || [];
      discussions.value = Array.isArray(discussionsList) ? discussionsList : [];
      
      // Gérer la pagination
      if (data.data && typeof data.data === 'object') {
        discussionsPagination.value = {
          current_page: data.data.current_page || page,
          last_page: data.data.last_page || 1,
          from: data.data.from || 0,
          to: data.data.to || 0,
          total: data.data.total || discussions.value.length,
          prev_page_url: data.data.prev_page_url || null,
          next_page_url: data.data.next_page_url || null,
        };
      }
      
      console.log('Discussions chargées:', discussions.value.length);
    } else {
      console.error('Erreur API:', data.message);
      discussions.value = [];
    }
  } catch (error) {
    console.error('Erreur lors du chargement des discussions:', error);
    alert('Erreur lors du chargement des discussions. Vérifiez votre connexion.');
    discussions.value = [];
  } finally {
    isLoadingContacts.value = false;
  }
};

const debounceSearch = (type: 'contacts' | 'discussions') => {
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }
  searchTimeout = setTimeout(() => {
    if (type === 'contacts') {
      loadContacts(1);
    } else {
      loadDiscussions(1);
    }
  }, 500);
};

const viewContact = async (id: number) => {
  try {
    const response = await fetchWithAuth(`${apiUrl}/api/contact/${id}`, {
      method: 'GET',
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Erreur HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    if (data.success) {
      selectedContact.value = data.data;
      // Marquer comme lu
      if (!data.data.is_read) {
        await toggleContactStatus(data.data);
      }
    } else {
      throw new Error(data.message || 'Erreur lors du chargement du contact');
    }
  } catch (error: any) {
    console.error('Erreur:', error);
    alert(`Erreur lors du chargement du contact: ${error.message || 'Erreur inconnue'}`);
  }
};

const viewDiscussion = async (id: number) => {
  try {
    const response = await fetchWithAuth(`${apiUrl}/api/project-discussions/${id}`);
    const data = await response.json();
    if (data.success) {
      selectedDiscussion.value = data.data;
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors du chargement de la discussion');
  }
};

const toggleContactStatus = async (contact: any) => {
  try {
    const response = await fetchWithAuth(`${apiUrl}/api/contact/${contact.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        is_read: !contact.is_read,
      }),
    });

    const data = await response.json();
    if (data.success) {
      await loadContacts(contactsPagination.value?.current_page || 1);
      await loadStats();
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors de la mise à jour du statut');
  }
};

const updateDiscussionStatus = async (id: number, status: string) => {
  try {
    const response = await fetchWithAuth(`${apiUrl}/api/project-discussions/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });

    const data = await response.json();
    if (data.success) {
      await loadDiscussions(discussionsPagination.value?.current_page || 1);
      await loadStats();
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors de la mise à jour du statut');
  }
};

const deleteContact = async (id: number) => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
    return;
  }

  try {
    const response = await fetchWithAuth(`${apiUrl}/api/contact/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      await loadContacts(contactsPagination.value?.current_page || 1);
      await loadStats();
      alert('Contact supprimé avec succès');
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors de la suppression');
  }
};

const deleteDiscussion = async (id: number) => {
  if (!confirm('Êtes-vous sûr de vouloir supprimer cette discussion ?')) {
    return;
  }

  try {
    const response = await fetchWithAuth(`${apiUrl}/api/project-discussions/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      await loadDiscussions(discussionsPagination.value?.current_page || 1);
      await loadStats();
      alert('Discussion supprimée avec succès');
    }
  } catch (error) {
    console.error('Erreur:', error);
    alert('Erreur lors de la suppression');
  }
};

const refreshData = async () => {
  await Promise.all([loadStats(), loadContacts(), loadDiscussions()]);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'short',
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

const handleContactStatusUpdate = () => {
  loadContacts(contactsPagination.value?.current_page || 1);
  loadStats();
};

const handleDiscussionStatusUpdate = () => {
  loadDiscussions(discussionsPagination.value?.current_page || 1);
  loadStats();
};

// Lifecycle
const handleLogout = async () => {
  if (!confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
    return;
  }

  stopSessionCheck();
  await authLogout();
};

onMounted(() => {
  // Démarrer la vérification périodique de la session
  startSessionCheck();
  
  // Charger les données
  loadStats();
  loadContacts();
  loadDiscussions();
});

onUnmounted(() => {
  // Arrêter la vérification de session quand on quitte le dashboard
  stopSessionCheck();
});
</script>

<style scoped>
/* Styles spécifiques au dashboard */
</style>

