import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { apiRequest } from '@/config/api';

// État global de l'authentification
const isAuthenticated = ref<boolean>(false);
const isLoading = ref<boolean>(false);

export function useAuth() {
  const router = useRouter();

  // Vérifier si l'utilisateur est connecté
  const checkAuth = async (): Promise<boolean> => {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      isAuthenticated.value = false;
      return false;
    }

    try {
      isLoading.value = true;
      const response = await apiRequest<{ success: boolean; authenticated: boolean }>('/api/auth/check', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      isAuthenticated.value = response.success && response.authenticated;
      return isAuthenticated.value;
    } catch (error) {
      isAuthenticated.value = false;
      localStorage.removeItem('auth_token');
      return false;
    } finally {
      isLoading.value = false;
    }
  };

  // Connexion
  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    try {
      isLoading.value = true;
      const response = await apiRequest<{ success: boolean; message: string; token?: string }>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

      if (response.success && response.token) {
        localStorage.setItem('auth_token', response.token);
        isAuthenticated.value = true;
        return { success: true, message: 'Connexion réussie' };
      }

      return { success: false, message: response.message || 'Erreur de connexion' };
    } catch (error: any) {
      return { success: false, message: error.message || 'Erreur de connexion' };
    } finally {
      isLoading.value = false;
    }
  };

  // Déconnexion
  const logout = async (): Promise<void> => {
    try {
      const token = localStorage.getItem('auth_token');
      if (token) {
        await apiRequest('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
      }
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    } finally {
      localStorage.removeItem('auth_token');
      isAuthenticated.value = false;
      router.push('/login');
    }
  };

  // Vérifier périodiquement la session (toutes les 5 minutes)
  let sessionCheckInterval: ReturnType<typeof setInterval> | null = null;

  const startSessionCheck = () => {
    // Vérifier immédiatement
    checkAuth();

    // Puis vérifier toutes les 5 minutes
    sessionCheckInterval = setInterval(() => {
      checkAuth().then((authenticated) => {
        if (!authenticated && window.location.pathname !== '/login') {
          router.push('/login');
        }
      });
    }, 5 * 60 * 1000); // 5 minutes
  };

  const stopSessionCheck = () => {
    if (sessionCheckInterval) {
      clearInterval(sessionCheckInterval);
      sessionCheckInterval = null;
    }
  };

  // Obtenir le token
  const getToken = (): string | null => {
    return localStorage.getItem('auth_token');
  };

  // Vérifier si connecté (sans appel API)
  const isLoggedIn = computed(() => {
    return !!localStorage.getItem('auth_token') && isAuthenticated.value;
  });

  return {
    isAuthenticated: computed(() => isAuthenticated.value),
    isLoading: computed(() => isLoading.value),
    isLoggedIn,
    checkAuth,
    login,
    logout,
    getToken,
    startSessionCheck,
    stopSessionCheck,
  };
}

