# Système d'Authentification

## 🔐 Informations de connexion

- **Email** : `ethbergmuzola500@gmail.com`
- **Mot de passe** : `PATRICHA2022`

## 🛡️ Sécurité

Le mot de passe est **hashé avec bcrypt** dans le backend. Il n'apparaît jamais en clair dans le code.

Le hash stocké est : `$2y$12$1jg80QwFu73DA3LTF0aqNeCrI7d1WcW/EzlCTmOdLZ.UuO0XUgmXq`

## 📍 Accès

### Page de login
- URL : `http://localhost:5173/login`
- Redirection automatique si non authentifié

### Dashboard
- URL : `http://localhost:5173/dashboard`
- Protégé par authentification
- Redirection vers `/login` si non authentifié

## 🔄 Fonctionnement

1. **Login** : L'utilisateur se connecte avec email/mot de passe
2. **Token** : Un token d'authentification est généré et stocké dans `localStorage`
3. **Vérification** : Chaque requête API inclut le token dans les headers
4. **Protection** : Les routes protégées vérifient le token avant d'autoriser l'accès
5. **Logout** : Le token est supprimé et l'utilisateur est redirigé vers `/login`

## 🔧 Configuration Backend

Le mot de passe est configuré dans `config/auth.php` :

```php
'admin_email' => env('ADMIN_EMAIL', 'ethbergmuzola500@gmail.com'),
'admin_password_hash' => env('ADMIN_PASSWORD_HASH', '$2y$12$1jg80QwFu73DA3LTF0aqNeCrI7d1WcW/EzlCTmOdLZ.UuO0XUgmXq'),
```

Vous pouvez aussi le configurer dans `.env` :

```env
ADMIN_EMAIL=ethbergmuzola500@gmail.com
ADMIN_PASSWORD_HASH=$2y$12$1jg80QwFu73DA3LTF0aqNeCrI7d1WcW/EzlCTmOdLZ.UuO0XUgmXq
```

## 🔑 Générer un nouveau hash de mot de passe

Si vous voulez changer le mot de passe, générez un nouveau hash :

```bash
cd /Applications/myProject/portfolio/backendPorfolio/backendPortfolio
php artisan tinker --execute="echo Hash::make('VOTRE_NOUVEAU_MOT_DE_PASSE');"
```

Puis mettez à jour `config/auth.php` ou `.env` avec le nouveau hash.

## 📝 Routes API protégées

Les routes suivantes nécessitent une authentification :

- `GET /api/contact` - Liste des contacts
- `GET /api/contact/{id}` - Détails d'un contact
- `PATCH /api/contact/{id}` - Mettre à jour un contact
- `POST /api/contact/{id}/messages` - Ajouter un message
- `DELETE /api/contact/{id}` - Supprimer un contact
- `GET /api/project-discussions` - Liste des discussions
- `GET /api/project-discussions/{id}` - Détails d'une discussion
- `POST /api/project-discussions/{id}/messages` - Ajouter un message
- `PATCH /api/project-discussions/{id}/status` - Mettre à jour le statut
- `DELETE /api/project-discussions/{id}` - Supprimer une discussion

## 🔓 Routes API publiques

Ces routes sont accessibles sans authentification :

- `POST /api/contact` - Créer un nouveau contact
- `POST /api/project-discussions` - Créer une nouvelle discussion
- `GET /api/project-discussions/find` - Trouver une discussion
- `GET /api/project-discussions/{id}` - Voir une discussion (pour les clients)

## 🚀 Utilisation

1. Accédez à `/login`
2. Entrez vos identifiants
3. Vous serez redirigé vers `/dashboard`
4. Utilisez le bouton "Déconnexion" pour vous déconnecter

## ⚠️ Notes importantes

- Le token expire après 24 heures
- Le token est stocké dans `localStorage` (visible dans les DevTools)
- Pour une sécurité renforcée en production, considérez l'utilisation de Laravel Sanctum ou JWT

