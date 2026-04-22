# 📋 Gestionnaire de Tâches

Une application web simple et efficace pour organiser et gérer vos tâches quotidiennes avec authentification utilisateur.

## 🎯 Fonctionnalités principales

- **Authentification utilisateur**
  - Inscription de nouveaux utilisateurs
  - Connexion sécurisée
  - Déconnexion

- **Gestion des tâches**
  - Ajouter une nouvelle tâche avec titre et description
  - Modifier les tâches existantes
  - Supprimer des tâches
  - Visualiser toutes vos tâches

- **Stockage local**
  - Les données sont stockées localement dans votre navigateur
  - Pas d'inscription à un serveur requis

## 📁 Structure du projet

```
├── index.html          # Page d'accueil (liste des tâches)
├── login.html          # Page de connexion
├── register.html       # Page d'inscription
├── add-task.html       # Formulaire d'ajout de tâche
├── edit-task.html      # Formulaire d'édition de tâche
├── app.js              # Logique JavaScript (authentification et tâches)
├── styles.css          # Styles CSS
└── README.md           # Documentation du projet
```

## 🚀 Comment utiliser

1. **Ouvrir l'application**
   - Ouvrez le fichier `login.html` dans votre navigateur

2. **Créer un compte**
   - Cliquez sur "Pas de compte ? Inscrivez-vous"
   - Remplissez le formulaire avec votre nom d'utilisateur, email et mot de passe
   - Cliquez sur "S'inscrire"

3. **Se connecter**
   - Entrez votre email et mot de passe
   - Cliquez sur "Connexion"

4. **Gérer les tâches**
   - Cliquez sur "Ajouter une tâche" pour créer une nouvelle tâche
   - Remplissez le titre et la description
   - Cliquez sur "Ajouter" pour sauvegarder
   - Vous pouvez modifier ou supprimer les tâches existantes
   - Cliquez sur "Se déconnecter" pour quitter

## 💾 Stockage des données

- **Utilisateurs** : Stockés dans `localStorage` sous la clé `users`
- **Tâches** : Stockés dans `localStorage` sous la clé `tasks`
- **Utilisateur connecté** : Stocké dans `localStorage` sous la clé `currentUser`

> ⚠️ **Important** : Les données sont stockées localement sur votre appareil. Elles seront supprimées si vous nettoyez le cache de votre navigateur.

## 🛠️ Technologies utilisées

- **HTML5** : Structure de l'application
- **CSS3** : Style et mise en page
- **JavaScript (Vanilla)** : Logique métier et gestion du DOM
- **localStorage** : Persistance des données côté client

## 📝 Fonctions principales (app.js)

- `registerUser()` : Enregistre un nouvel utilisateur
- `loginUser()` : Vérifie les identifiants et connecte l'utilisateur
- `logoutUser()` : Déconnecte l'utilisateur
- `getCurrentUser()` : Récupère l'utilisateur actuellement connecté
- `addTask()` : Ajoute une nouvelle tâche
- `updateTask()` : Modifie une tâche existante
- `deleteTask()` : Supprime une tâche
- `getTasks()` : Récupère toutes les tâches de l'utilisateur

## 🌐 Compatibilité

- Chrome, Firefox, Safari, Edge (navigateurs modernes)
- Responsive sur mobile et desktop

## 📚 Notes

- Les tâches sont isolées par utilisateur (chaque utilisateur ne voit que ses tâches)
- Les mots de passe sont stockés en clair (pour usage éducatif uniquement)
- L'application ne nécessite pas de serveur ou de base de données externe

---

Bon travail dans la gestion de vos tâches ! 🎉
