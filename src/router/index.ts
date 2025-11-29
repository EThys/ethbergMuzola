import { createRouter, createWebHistory } from 'vue-router';
import PortfolioView from '@/views/PortfolioView.vue';
import DashboardView from '@/views/DashboardView.vue';
import LoginView from '@/views/LoginView.vue';
import { useAuth } from '@/composables/useAuth';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
  ],
});

// Navigation guard to protect dashboard route
router.beforeEach(async (to, _from, next) => {
  if (to.meta.requiresAuth) {
    const { checkAuth } = useAuth();
    const isAuthenticated = await checkAuth();
    
    if (isAuthenticated) {
      next();
    } else {
      next({ name: 'login' });
    }
  } else if (to.name === 'login') {
    // Si on va sur login, vérifier si déjà connecté
    const { checkAuth } = useAuth();
    const isAuthenticated = await checkAuth();
    
    if (isAuthenticated) {
      next({ name: 'dashboard' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

