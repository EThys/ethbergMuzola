# Guide d'intégration API - Portfolio Vue.js

## Configuration

### 1. Variables d'environnement

Créer un fichier `.env.local` dans le projet Vue.js :

```env
VITE_API_URL=http://localhost:8000
```

### 2. Démarrer le backend Laravel

```bash
cd backendPorfolio/backendPortfolio
php artisan serve
```

Le backend sera accessible sur `http://localhost:8000`

### 3. Démarrer le frontend Vue.js

```bash
cd MuzolaEthberg-Vue
npm run dev
```

Le frontend sera accessible sur `http://localhost:5173`

## Endpoints utilisés

### Section "Travaillons Ensemble" (Contact.vue)

**Endpoint**: `POST /api/contact`

**Données envoyées**:
```json
{
  "name": "Nom complet",
  "email": "email@example.com",
  "subject": "Sujet du message",
  "message": "Contenu du message",
  "type": "contact"
}
```

**Réponse**:
```json
{
  "success": true,
  "message": "Votre message a été envoyé avec succès...",
  "data": {
    "id": 1,
    "name": "...",
    "email": "...",
    "subject": "..."
  }
}
```

### Section "Discutons de votre projet" (ProjectModal.vue)

**Endpoint**: `POST /api/project-discussions`

**Données envoyées**:
```json
{
  "name": "Nom complet",
  "email": "email@example.com",
  "project_title": "Titre du projet",
  "project_description": "Description du projet",
  "message": "Message avec budget inclus"
}
```

**Réponse**:
```json
{
  "success": true,
  "message": "Votre discussion de projet a été créée...",
  "data": {
    "discussion": {...},
    "message": {...}
  }
}
```

## Mapping des champs

### Contact.vue → /api/contact
- `name` → `name`
- `email` → `email`
- `subject` → `subject`
- `message` → `message`
- `type` → `"contact"` (fixe)

### ProjectModal.vue → /api/project-discussions
- `name` → `name`
- `email` → `email`
- `subject` → `project_title`
- `message` → `project_description` et `message` (avec budget)
- `budget` → inclus dans le message

## Gestion des erreurs

Les deux composants gèrent :
- Les erreurs de validation (422)
- Les erreurs serveur (500)
- Les erreurs de réseau
- Les états de chargement avec indicateurs visuels

## Test de l'intégration

1. **Tester le contact** :
   - Aller sur la section "Travaillons Ensemble"
   - Remplir le formulaire
   - Vérifier dans la base de données que le contact est créé

2. **Tester la discussion de projet** :
   - Cliquer sur "Discutons de votre projet"
   - Remplir le formulaire avec budget
   - Vérifier dans la base de données que la discussion est créée

## Dépannage

### Erreur CORS
- Vérifier que `FRONTEND_URL` est configuré dans `.env` du backend
- Vérifier que les origines sont autorisées dans `config/cors.php`

### Erreur 404
- Vérifier que le serveur Laravel est démarré
- Vérifier l'URL de l'API dans `.env.local`

### Erreur 422 (Validation)
- Vérifier que tous les champs requis sont remplis
- Vérifier le format des données envoyées

