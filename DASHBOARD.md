# Dashboard - Gestion des Contacts et Discussions

## Accès au Dashboard

Le dashboard est accessible à l'adresse : `http://localhost:5173/dashboard`

Un lien "Dashboard" est également disponible dans le header du portfolio.

## Fonctionnalités

### Vue d'ensemble

Le dashboard affiche des statistiques en temps réel :
- **Total Contacts** : Nombre total de messages reçus
- **Contacts non lus** : Messages non encore consultés
- **Total Discussions** : Nombre total de discussions de projets
- **Discussions ouvertes** : Discussions en attente
- **En cours** : Discussions en cours de traitement
- **Fermées** : Discussions terminées

### Onglet Contacts

Gestion des messages de contact de la section "Travaillons Ensemble" :

**Fonctionnalités** :
- ✅ Liste paginée de tous les contacts
- ✅ Recherche par nom, email, sujet ou message
- ✅ Filtrage par statut (Tous / Non lus / Lus)
- ✅ Affichage des détails d'un contact
- ✅ Marquer comme lu/non lu
- ✅ Supprimer un contact

**Actions disponibles** :
- **Voir** : Affiche les détails complets du contact
- **Marquer lu/non lu** : Change le statut de lecture
- **Supprimer** : Supprime définitivement le contact

### Onglet Discussions

Gestion des discussions de projets de la section "Discutons de votre projet" :

**Fonctionnalités** :
- ✅ Liste paginée de toutes les discussions
- ✅ Recherche par nom, email, titre ou description du projet
- ✅ Filtrage par statut (Tous / Ouvertes / En cours / Fermées)
- ✅ Affichage des détails avec tous les messages
- ✅ Changement de statut (Ouverte / En cours / Fermée)
- ✅ Supprimer une discussion

**Statuts disponibles** :
- **Ouverte** : Discussion nouvellement créée
- **En cours** : Discussion en cours de traitement
- **Fermée** : Discussion terminée

**Actions disponibles** :
- **Voir** : Affiche la discussion complète avec tous les messages
- **Changer statut** : Modifie le statut directement depuis le tableau
- **Supprimer** : Supprime la discussion et tous ses messages

## Interface

### Design Moderne

- Interface épurée et professionnelle
- Cartes de statistiques avec icônes
- Tableaux responsives avec hover effects
- Modaux pour les détails
- Animations fluides

### Responsive

Le dashboard est entièrement responsive et s'adapte à tous les écrans :
- Mobile : Tableaux avec scroll horizontal
- Tablette : Layout optimisé
- Desktop : Vue complète avec toutes les fonctionnalités

## API Backend

Le dashboard communique avec les endpoints suivants :

### Contacts
- `GET /api/contact` - Liste des contacts (avec filtres)
- `GET /api/contact/{id}` - Détails d'un contact
- `PATCH /api/contact/{id}` - Mettre à jour le statut
- `DELETE /api/contact/{id}` - Supprimer un contact

### Discussions
- `GET /api/project-discussions` - Liste des discussions (avec filtres)
- `GET /api/project-discussions/{id}` - Détails d'une discussion
- `PATCH /api/project-discussions/{id}/status` - Mettre à jour le statut
- `DELETE /api/project-discussions/{id}` - Supprimer une discussion

## Configuration

Assurez-vous que l'URL de l'API est configurée dans `.env.local` :

```env
VITE_API_URL=http://localhost:8000
```

## Utilisation

1. **Accéder au dashboard** : Cliquez sur "Dashboard" dans le header ou allez sur `/dashboard`
2. **Consulter les statistiques** : Les stats sont mises à jour automatiquement
3. **Gérer les contacts** : Utilisez l'onglet "Contacts" pour voir et gérer les messages
4. **Gérer les discussions** : Utilisez l'onglet "Discussions" pour suivre les projets
5. **Rechercher** : Utilisez la barre de recherche pour filtrer les résultats
6. **Actualiser** : Cliquez sur "Actualiser" pour recharger les données

## Notes

- Les données sont chargées automatiquement au montage du composant
- La recherche est debounced (500ms) pour optimiser les performances
- Les modaux permettent de voir les détails complets
- Les actions de suppression nécessitent une confirmation

