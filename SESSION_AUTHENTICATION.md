# 🔐 Système de Session et Authentification

## 📋 Vue d'ensemble

Le système utilise une authentification basée sur des **tokens** stockés côté client et côté serveur. Voici comment cela fonctionne :

## 🔄 Flux d'authentification

### 1. **Connexion (Login)**

```
Utilisateur → LoginView → API /api/auth/login
```

**Côté Frontend (LoginView.vue)** :
```typescript
// 1. L'utilisateur entre email + mot de passe
// 2. Envoi de la requête à l'API
const response = await apiRequest('/api/auth/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
});

// 3. Si succès, le token est stocké dans localStorage
if (response.success && response.token) {
  localStorage.setItem('auth_token', response.token);
  router.push('/dashboard');
}
```

**Côté Backend (AuthController.php)** :
```php
// 1. Vérification des identifiants
if ($email === $adminEmail && Hash::check($password, $adminPasswordHash)) {
    // 2. Génération d'un token unique (64 caractères hexadécimaux)
    $token = bin2hex(random_bytes(32));
    
    // 3. Stockage du token dans le cache Laravel (valide 24h)
    cache()->put('auth_token_' . $token, [
        'email' => $email,
        'logged_in_at' => now(),
    ], now()->addHours(24));
    
    // 4. Retour du token au frontend
    return response()->json(['success' => true, 'token' => $token]);
}
```

### 2. **Stockage de la session**

**Côté Client (Frontend)** :
- **localStorage** : Le token est stocké dans `localStorage.getItem('auth_token')`
- **Persistance** : Le token reste même après fermeture du navigateur
- **Accès** : Accessible via JavaScript dans le même domaine

**Côté Serveur (Backend)** :
- **Cache Laravel** : Le token est stocké dans le cache avec la clé `auth_token_{token}`
- **Durée** : 24 heures par défaut
- **Contenu** : Email et date de connexion

### 3. **Vérification de la session**

#### A. **Lors de la navigation (Router Guard)**

```typescript
// router/index.ts
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    // 1. Récupérer le token du localStorage
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      // Pas de token = redirection vers login
      next({ name: 'login' });
      return;
    }

    // 2. Vérifier le token avec le backend
    const response = await apiRequest('/api/auth/check', {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (response.success && response.authenticated) {
      // Token valide = accès autorisé
      next();
    } else {
      // Token invalide = suppression + redirection
      localStorage.removeItem('auth_token');
      next({ name: 'login' });
    }
  }
});
```

#### B. **Lors des requêtes API**

```typescript
// config/api.ts
export async function apiRequest(endpoint, options) {
  // 1. Récupérer le token du localStorage
  const token = localStorage.getItem('auth_token');
  
  // 2. Ajouter le token dans les headers
  const headers = {
    'Authorization': `Bearer ${token}`,
    ...options.headers
  };
  
  // 3. Envoyer la requête
  const response = await fetch(url, { ...options, headers });
  
  // 4. Si 401 (non autorisé), supprimer le token et rediriger
  if (response.status === 401) {
    localStorage.removeItem('auth_token');
    window.location.href = '/login';
  }
}
```

#### C. **Côté Backend (Middleware)**

```php
// Middleware/AuthenticateApi.php
public function handle(Request $request, Closure $next) {
    // 1. Récupérer le token depuis les headers
    $token = $request->bearerToken(); // "Bearer {token}"
    $token = str_replace('Bearer ', '', $token);
    
    // 2. Vérifier si le token existe dans le cache
    $authData = cache()->get('auth_token_' . $token);
    
    if ($authData) {
        // Token valide = continuer
        return $next($request);
    }
    
    // Token invalide = erreur 401
    return response()->json(['message' => 'Non authentifié'], 401);
}
```

### 4. **Déconnexion (Logout)**

```typescript
// Dashboard.vue
const handleLogout = async () => {
  // 1. Appeler l'API pour supprimer le token du cache serveur
  await apiRequest('/api/auth/logout', { method: 'POST' });
  
  // 2. Supprimer le token du localStorage
  localStorage.removeItem('auth_token');
  
  // 3. Rediriger vers login
  router.push('/login');
};
```

```php
// AuthController.php
public function logout(Request $request) {
    $token = $request->bearerToken();
    $token = str_replace('Bearer ', '', $token);
    
    // Supprimer le token du cache
    cache()->forget('auth_token_' . $token);
    
    return response()->json(['success' => true]);
}
```

## 🔍 Points importants

### ✅ Avantages du système actuel

1. **Stateless** : Pas de session serveur persistante (utilise le cache)
2. **Sécurisé** : Token aléatoire de 64 caractères (impossible à deviner)
3. **Expiration** : Token expire après 24h
4. **Vérification** : Token vérifié à chaque requête

### ⚠️ Limitations actuelles

1. **localStorage** : Vulnérable au XSS (mais acceptable pour un dashboard admin)
2. **Cache** : Si le cache est vidé, toutes les sessions sont perdues
3. **Pas de refresh token** : Le token expire après 24h, il faut se reconnecter

## 🔒 Sécurité

### Protection contre les attaques

1. **XSS (Cross-Site Scripting)** :
   - Le token est dans localStorage (accessible via JavaScript)
   - **Solution** : Utiliser `httpOnly` cookies en production (nécessite HTTPS)

2. **CSRF (Cross-Site Request Forgery)** :
   - Les requêtes incluent le token dans les headers
   - Le token est unique et aléatoire

3. **Token expiration** :
   - Token expire après 24h
   - Vérification à chaque requête

## 🚀 Améliorations possibles

### Option 1 : Utiliser Laravel Sanctum (Recommandé pour production)

```bash
composer require laravel/sanctum
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

**Avantages** :
- Gestion automatique des tokens
- Refresh tokens
- Révocation de tokens
- Plus sécurisé

### Option 2 : Utiliser des cookies httpOnly

```php
// Backend
return response()->json(['success' => true])
    ->cookie('auth_token', $token, 60*24, null, null, true, true);
//                                                      ↑   ↑
//                                                  secure httpOnly
```

**Avantages** :
- Protection contre XSS
- Automatiquement envoyé avec les requêtes

### Option 3 : Vérification périodique de la session

Ajouter une vérification automatique toutes les 5 minutes pour s'assurer que la session est toujours valide.

## 📊 Diagramme de flux

```
┌─────────────┐
│   Login     │
│  (Frontend) │
└──────┬──────┘
       │ 1. Email + Password
       ▼
┌─────────────┐
│   API       │
│  /auth/login│
└──────┬──────┘
       │ 2. Vérification
       │ 3. Génération token
       │ 4. Stockage cache (24h)
       ▼
┌─────────────┐
│  Response   │
│  {token}    │
└──────┬──────┘
       │ 5. Stockage localStorage
       ▼
┌─────────────┐
│  Dashboard  │
└──────┬──────┘
       │
       │ 6. Chaque requête API
       ▼
┌─────────────┐
│  Header:    │
│  Authorization: Bearer {token}
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ Middleware  │
│ Vérifie cache
└──────┬──────┘
       │
       ├─ Token valide → ✅ Accès autorisé
       └─ Token invalide → ❌ 401 → Redirection login
```

## 🛠️ Configuration actuelle

### Durée de session
- **24 heures** (configurable dans `AuthController.php`)
- Modifiable : `now()->addHours(24)` → `now()->addHours(48)`

### Stockage
- **Frontend** : `localStorage.getItem('auth_token')`
- **Backend** : `cache()->get('auth_token_' . $token)`

### Vérification
- **Navigation** : À chaque changement de route protégée
- **API** : À chaque requête API protégée
- **Manuelle** : Via `/api/auth/check`

## 📝 Exemple de cycle de vie

1. **09:00** - Connexion → Token créé, valide jusqu'à 09:00 demain
2. **10:00** - Accès dashboard → Token vérifié ✅
3. **15:00** - Requête API → Token vérifié ✅
4. **09:00 (jour suivant)** - Token expiré → Redirection login
5. **Logout** - Token supprimé immédiatement

## 🔧 Dépannage

### Problème : "Session expirée" trop rapidement
- Vérifier la configuration du cache Laravel
- Vérifier que le cache n'est pas vidé

### Problème : Token non reconnu
- Vérifier que le token est bien dans localStorage
- Vérifier que le cache Laravel fonctionne
- Vérifier les logs backend

### Problème : Redirection infinie
- Vérifier que le token est bien envoyé dans les headers
- Vérifier la configuration CORS

