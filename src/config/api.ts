// Configuration de l'API
export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  endpoints: {
    contact: '/api/contact',
    projectDiscussions: '/api/project-discussions',
  },
  timeout: 10000, // 10 secondes
};

// Fonction utilitaire pour les appels API
export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_CONFIG.baseURL}${endpoint}`;

  // Get auth token from localStorage
  const token = localStorage.getItem('auth_token');
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);

    if (!response.ok) {
      // If unauthorized, redirect to login
      if (response.status === 401) {
        localStorage.removeItem('auth_token');
        if (window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
      
      const errorData = await response.json().catch(() => ({
        message: 'Une erreur est survenue',
      }));
      throw new Error(errorData.message || `Erreur HTTP: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Erreur de connexion au serveur');
  }
}

