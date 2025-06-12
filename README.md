# Garage React

Ce projet est une application de gestion de véhicules pour un garage, réalisée avec React et Vite.

## Fonctionnalités principales

- **Ajout de véhicules** : Ajoutez des voitures, camions ou motos avec leurs caractéristiques spécifiques (marque, année, couleur, etc).
- **Affichage dynamique** : Les véhicules sont affichés sous forme de tableau visuel, avec des boutons pour afficher les détails ou klaxonner (popup).
- **Filtrage** : Filtrez la liste des véhicules par type, marque, couleur ou année.
- **Validation** : Le formulaire vérifie la validité des champs (ex : l'année doit être un nombre, etc) et affiche les erreurs sous le formulaire.
- **Popups** : Les messages d'erreur, de confirmation et les détails sont affichés dans des popups modernes et sobres.
- **Rendu conditionnel** : Si aucun véhicule ne correspond au filtre, un message adapté s'affiche (ex : "Il n'y a pas de moto dans le garage.").

## Structure du projet

- `src/components/` : Tous les composants réutilisables (Garage, Voiture, Camion, Moto, Modal, KlaxonModal, FormulaireVehicule, FiltreVehicule, SimplePopup).
- `src/App.jsx` : Composant principal, gestion de l'état global, du filtrage et du formulaire.
- `src/App.css` : Styles globaux et composants.

## Lancer le projet

1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```
3. Ouvrir l'application sur [http://localhost:5173](http://localhost:5173) (ou le port affiché dans le terminal).

## Pour aller plus loin

- **Persistance** : On pourrait utiliser `localStorage` ou une solution de stockage asynchrone pour conserver les véhicules même après rechargement de la page.
- **API** : Il serait possible de connecter l'application à une API pour gérer les véhicules à distance (CRUD, authentification, etc).

---
Rémi Salles B3 (ESGI).
