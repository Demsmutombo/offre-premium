# 📚 Documentation des Améliorations - Site Mémorial Funéraire

## 📋 Table des matières
1. [Système de sélection de thèmes](#système-de-sélection-de-thèmes)
2. [Carte mémorial personnalisée](#carte-mémorial-personnalisée)
3. [Améliorations de l'interface utilisateur](#améliorations-de-linterface-utilisateur)
4. [Corrections techniques](#corrections-techniques)
5. [Guide d'implémentation](#guide-dimplémentation)

---

## 🎨 Système de sélection de thèmes

### Description
Système complet permettant aux utilisateurs de choisir parmi 5 thèmes prédéfinis (Blanc, Sombre, Gris, Bleu, Brun) avec persistance des préférences via localStorage.

### Fichiers créés/modifiés

#### 1. `src/utils/theme.js` (NOUVEAU)
**Fonctionnalité** : Gestion centralisée des thèmes

```javascript
// Structure d'un thème
{
  id: 'white',
  name: 'Blanc',
  colors: {
    '--background-color': '#ffffff',
    '--default-color': '#212529',
    '--heading-color': '#1a1a1a',
    '--accent-color': '#ce1212',
    '--surface-color': '#f5f5f5',
    '--contrast-color': '#ffffff'
  }
}

// Fonctions principales :
- applyTheme(themeId) : Applique un thème au document
- saveTheme(themeId) : Sauvegarde dans localStorage
- loadTheme() : Charge le thème sauvegardé
```

**Points clés** :
- Utilise des variables CSS (`--background-color`, etc.)
- Persistance via `localStorage.getItem('memorial-theme')`
- Application automatique au chargement de la page

#### 2. `src/components/ThemeSelector.vue` (NOUVEAU)
**Fonctionnalité** : Composant de sélection de thème avec modal

**Caractéristiques** :
- Bouton flottant en bas à droite
- Modal avec aperçu des thèmes
- Animation d'apparition/disparition
- Overlay pour fermer le modal
- Design moderne avec preview des couleurs

**Structure HTML** :
```vue
<template>
  <div class="theme-selector fixed">
    <button class="theme-toggle-btn" @click="toggleDropdown">
      <i class="bi bi-palette-fill"></i>
    </button>
    
    <div v-if="showDropdown" class="theme-dropdown">
      <!-- Liste des thèmes avec preview -->
    </div>
    
    <div v-if="showDropdown" class="theme-overlay" @click="closeDropdown"></div>
  </div>
</template>
```

**Méthodes importantes** :
- `toggleDropdown()` : Ouvre/ferme le modal
- `selectTheme(themeId)` : Sélectionne et applique un thème
- `handleClickOutside()` : Ferme le modal si clic extérieur

#### 3. `src/main.js` (MODIFIÉ)
**Ajout** : Chargement automatique du thème au démarrage
```javascript
import { loadTheme } from './utils/theme'
loadTheme() // Applique le thème sauvegardé avant le montage de l'app
```

#### 4. `src/App.vue` (MODIFIÉ)
**Ajout** : Import et utilisation du ThemeSelector
```vue
<template>
  <div id="app">
    <ThemeSelector />
    <!-- ... -->
  </div>
</template>
```

### Styles CSS
- Position fixe en bas à droite
- Z-index élevé (10000+) pour rester au-dessus
- Animations fluides
- Design responsive

---

## 🖼️ Carte mémorial personnalisée

### Description
Page dédiée pour afficher et télécharger une carte mémorial élégante avec fond noir et textes dorés.

### Fichiers créés/modifiés

#### 1. `src/views/CarteMemorial.vue` (NOUVEAU)
**Fonctionnalité** : Page complète de la carte mémorial

**Caractéristiques principales** :

**Design** :
- Fond noir pur (`#000000`)
- Textes en doré (`#D4AF37`)
- Décorations florales SVG en doré
- Cadre circulaire pour la photo avec bordure dorée
- Typographie élégante (Dancing Script pour le nom)

**Structure** :
```vue
<template>
  <div class="carte-memorial-page">
    <Header />
    <main>
      <section class="carte-section">
        <div class="carte-container">
          <!-- Décorations florales SVG -->
          <div class="carte-content">
            <h2 class="carte-title">En Mémoire De</h2>
            <div class="carte-image-frame">
              <img :src="photoUrl" />
            </div>
            <h1 class="carte-name">{{ nom }}</h1>
            <p class="carte-dates">{{ dates }}</p>
            <p class="carte-message">{{ message }}</p>
            <div class="carte-separator"></div>
            <div class="carte-service-info">
              <p class="service-date">{{ dateService }}</p>
              <p class="service-location">{{ lieuService }}</p>
            </div>
          </div>
        </div>
        <button @click="downloadCarte" class="btn-download">
          Télécharger la carte
        </button>
      </section>
    </main>
  </div>
</template>
```

**Fonctionnalité de téléchargement** :
```javascript
async downloadCarte() {
  // 1. Attendre le chargement des images
  await this.waitForImages(carteElement)
  
  // 2. Générer l'image avec html2canvas
  const canvas = await html2canvas(carteElement, {
    backgroundColor: '#000000',
    scale: 3, // Haute résolution
    useCORS: true,
    allowTaint: true
  })
  
  // 3. Télécharger en PNG
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'carte-memorial.png'
    link.click()
  }, 'image/png', 1.0)
}
```

**Points techniques** :
- Utilise `html2canvas` pour convertir le DOM en image
- Scale de 3 pour haute qualité
- Gestion du chargement des images avant capture
- Responsive design pour mobile

#### 2. `src/router/index.js` (MODIFIÉ)
**Ajout** : Route vers la carte mémorial
```javascript
{
  path: '/carte-memorial',
  name: 'CarteMemorial',
  component: () => import('../views/CarteMemorial.vue')
}
```

#### 3. `src/components/Header.vue` (MODIFIÉ)
**Ajout** : Lien de navigation vers la carte mémorial
```vue
<li>
  <router-link to="/carte-memorial">Carte Mémorial</router-link>
</li>
```

### Styles CSS de la carte
- Fond noir avec bordure dorée
- Décorations florales positionnées absolument
- Image circulaire avec ombre dorée
- Textes avec ombres pour lisibilité
- Responsive avec media queries

---

## 🎯 Améliorations de l'interface utilisateur

### 1. Visibilité des textes selon les thèmes

#### Problème résolu
Les textes n'étaient pas visibles sur certains thèmes (noir sur noir, etc.)

#### Solution implémentée
Remplacement des couleurs hardcodées par des variables CSS dynamiques :

**Fichiers modifiés** :
- `src/views/Home.vue`
- `src/views/Temoignage.vue`
- `src/components/Footer.vue`

**Exemple de modification** :
```css
/* Avant */
.credits-content {
  color: #000000; /* Problème sur thème sombre */
}

/* Après */
.credits-content {
  color: var(--default-color) !important;
}
```

**Classes CSS créées** :
- `.credits-content`, `.credits-brand`, `.credits-label`
- `.quotes-section`, `.quotes-title`, `.quote-item`
- `.funeral-info-section`, `.funeral-title`, `.funeral-info-item`

### 2. Navigation visible par défaut

#### Problème résolu
Les liens de navigation étaient noirs sur fond noir

#### Solution
Modification de `assets/css/main.css` :
```css
:root {
  --nav-color: #1a1a1a; /* Au lieu de #ffffff */
}

.navmenu a {
  color: var(--nav-color) !important;
}
```

### 3. Séparation des boutons flottants

#### Problème résolu
Le bouton scroll-top et le sélecteur de thème se chevauchaient

#### Solution
Ajustement des positions dans `assets/css/main.css` :
```css
/* Desktop */
.scroll-top.active {
  right: 100px; /* À gauche du sélecteur de thème */
  bottom: 30px;
}

.theme-selector.fixed {
  right: 30px; /* À droite */
  bottom: 30px;
}

/* Mobile */
.scroll-top.active {
  bottom: 15px;
}

.theme-selector.fixed {
  bottom: 80px; /* Plus haut pour éviter chevauchement */
}
```

---

## 🔧 Corrections techniques

### 1. Remplacement de Lightbox2 par GLightbox

#### Problème
Lightbox2 nécessitait jQuery (non présent) → erreur `a is not a function`

#### Solution
Remplacement par GLightbox (déjà présent dans le projet)

**Fichiers modifiés** :
- `src/views/Home.vue` : Changement des attributs `data-lightbox` en `class="glightbox"`
- `index.html` : Suppression du CSS Lightbox2
- Ajout de la méthode `initGLightbox()`

**Code** :
```javascript
// Dans Home.vue
initGLightbox() {
  if (window.GLightbox) {
    window.GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true
    })
  }
}
```

### 2. Amélioration de la qualité du téléchargement

#### Problème
La carte téléchargée était de mauvaise qualité

#### Solution
Augmentation du scale dans html2canvas :
```javascript
const canvas = await html2canvas(carteElement, {
  scale: 3, // Au lieu de 2
  backgroundColor: '#000000',
  useCORS: true,
  allowTaint: true
})
```

### 3. Responsive de la carte mémorial

#### Ajout
Media queries pour adaptation mobile :
- Réduction des tailles de police
- Ajustement des espacements
- Masquage de certaines décorations sur très petit écran

---

## 📦 Dépendances ajoutées

### Packages npm
Aucun nouveau package (utilise les dépendances existantes)

### Bibliothèques utilisées
- `html2canvas` : Pour le téléchargement de la carte
- `GLightbox` : Pour la galerie d'images (remplace Lightbox2)

---

## 🚀 Guide d'implémentation

### Étape 1 : Système de thèmes

1. **Créer `src/utils/theme.js`** :
```javascript
export const themes = {
  white: { /* ... */ },
  dark: { /* ... */ },
  // etc.
}

export function applyTheme(themeId) {
  const theme = themes[themeId]
  const root = document.documentElement
  Object.entries(theme.colors).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
  document.body.className = `theme-${themeId}`
}

export function saveTheme(themeId) {
  localStorage.setItem('memorial-theme', themeId)
}

export function loadTheme() {
  const saved = localStorage.getItem('memorial-theme')
  if (saved && themes[saved]) {
    applyTheme(saved)
  }
}
```

2. **Créer `src/components/ThemeSelector.vue`** :
   - Copier le composant complet
   - S'assurer que les styles CSS sont inclus

3. **Modifier `src/main.js`** :
```javascript
import { loadTheme } from './utils/theme'
loadTheme() // Avant app.mount()
```

4. **Modifier `src/App.vue`** :
```vue
<template>
  <ThemeSelector />
</template>
<script>
import ThemeSelector from './components/ThemeSelector.vue'
</script>
```

### Étape 2 : Carte mémorial

1. **Créer `src/views/CarteMemorial.vue`** :
   - Copier le composant complet
   - Adapter les données (nom, dates, photo, etc.)

2. **Ajouter la route** dans `src/router/index.js` :
```javascript
{
  path: '/carte-memorial',
  component: () => import('../views/CarteMemorial.vue')
}
```

3. **Ajouter le lien de navigation** dans le Header

4. **Installer html2canvas** (si pas déjà présent) :
```bash
npm install html2canvas
```

### Étape 3 : Améliorations UI

1. **Remplacer les couleurs hardcodées** par des variables CSS :
```css
/* Au lieu de */
color: #000000;

/* Utiliser */
color: var(--default-color) !important;
```

2. **Ajuster les positions des boutons** dans `assets/css/main.css`

3. **Tester sur tous les thèmes** pour vérifier la visibilité

### Étape 4 : Corrections techniques

1. **Remplacer Lightbox2 par GLightbox** :
   - Changer `data-lightbox` en `class="glightbox"`
   - Initialiser GLightbox dans le composant

2. **Améliorer la qualité du téléchargement** :
   - Augmenter le `scale` dans html2canvas

---

## 📝 Checklist d'implémentation

- [ ] Créer `src/utils/theme.js` avec les 5 thèmes
- [ ] Créer `src/components/ThemeSelector.vue`
- [ ] Modifier `src/main.js` pour charger le thème
- [ ] Modifier `src/App.vue` pour inclure ThemeSelector
- [ ] Créer `src/views/CarteMemorial.vue`
- [ ] Ajouter la route dans `src/router/index.js`
- [ ] Ajouter le lien dans le Header
- [ ] Remplacer toutes les couleurs hardcodées par des variables CSS
- [ ] Ajuster les positions des boutons flottants
- [ ] Tester le système de thèmes
- [ ] Tester le téléchargement de la carte
- [ ] Vérifier la responsivité mobile
- [ ] Tester sur tous les navigateurs

---

## 🎨 Palette de couleurs utilisées

### Thème Noir et Doré (Carte mémorial)
- **Noir** : `#000000`
- **Doré** : `#D4AF37`
- **Doré clair (hover)** : `#FFD700`

### Variables CSS des thèmes
- `--background-color` : Couleur de fond principale
- `--default-color` : Couleur du texte par défaut
- `--heading-color` : Couleur des titres
- `--accent-color` : Couleur d'accentuation
- `--surface-color` : Couleur des surfaces (cartes, modals)
- `--contrast-color` : Couleur de contraste (texte sur fond accent)

---

## 🔍 Points d'attention

1. **localStorage** : Le thème est sauvegardé dans `localStorage.getItem('memorial-theme')`
2. **Z-index** : Les composants flottants utilisent des z-index élevés (10000+)
3. **Responsive** : Tester sur mobile avec les media queries
4. **Performance** : html2canvas peut être lent sur les grandes images
5. **Compatibilité** : Vérifier la compatibilité des variables CSS sur les anciens navigateurs

---

## 📚 Ressources supplémentaires

- [Documentation html2canvas](https://html2canvas.hertzen.com/)
- [Documentation GLightbox](https://biati-digital.github.io/glightbox/)
- [Variables CSS MDN](https://developer.mozilla.org/fr/docs/Web/CSS/Using_CSS_custom_properties)
- [localStorage MDN](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)

---

## ✨ Résumé des fonctionnalités ajoutées

1. ✅ **Système de thèmes** : 5 thèmes avec persistance
2. ✅ **Carte mémorial** : Page dédiée avec téléchargement en haute qualité
3. ✅ **Visibilité améliorée** : Textes adaptatifs selon le thème
4. ✅ **Navigation corrigée** : Liens visibles par défaut
5. ✅ **Boutons séparés** : Scroll-top et sélecteur de thème bien positionnés
6. ✅ **Galerie d'images** : Migration vers GLightbox
7. ✅ **Design responsive** : Adaptation mobile complète

---

**Date de création** : Aujourd'hui  
**Version** : 1.0  
**Auteur** : Documentation générée automatiquement

