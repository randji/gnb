# Animations GSAP - GNB Protect

## 🎯 Vue d'ensemble

Ce projet utilise GSAP (GreenSock Animation Platform) pour créer des animations professionnelles et fluides sur le site web GNB Protect. Les animations sont optimisées pour les performances et offrent une expérience utilisateur moderne.

## 📁 Structure des fichiers

```
utils/
├── animations.js          # Fonctions d'animation GSAP
└── useGSAPAnimations.js   # Hook React personnalisé

styles/
└── animations.css         # Styles CSS pour les animations

components/
├── LoadingScreen.js       # Écran de chargement animé
└── HeroSlider.js         # Slider hero avec animations

pages/
├── _app.js               # Configuration avec écran de loading
└── index.js              # Page principale avec animations
```

## 🎬 Types d'animations disponibles

### 1. **FadeInUp** - Apparition par le bas

```javascript
animateFadeInUp(element, delay);
```

- Animation d'apparition avec translation vers le haut
- Effet de fade-in progressif
- Déclenchement au scroll

### 2. **SlideInLeft/Right** - Glissement latéral

```javascript
animateSlideInLeft(element, delay);
animateSlideInRight(element, delay);
```

- Animation de glissement depuis la gauche ou la droite
- Effet de parallaxe subtil
- Timing personnalisable

### 3. **ScaleIn** - Apparition avec zoom

```javascript
animateScaleIn(element, delay);
```

- Animation d'apparition avec effet de scale
- Utilise l'easing "back.out" pour un effet rebond
- Idéal pour les cartes et images

### 4. **RotateIn** - Apparition avec rotation

```javascript
animateRotateIn(element, delay);
```

- Animation avec rotation et scale
- Effet dynamique pour les éléments importants
- Rotation de -15° à 0°

### 5. **StaggerCards** - Animation en cascade

```javascript
animateStaggerCards(elements, stagger);
```

- Animation séquentielle des cartes
- Délai configurable entre chaque élément
- Effet de wave visuel

### 6. **ParallaxEffect** - Effet parallaxe

```javascript
animateParallax(element, speed);
```

- Effet de parallaxe au scroll
- Vitesse configurable
- Effet de profondeur

### 7. **TextReveal** - Révélation de texte

```javascript
animateTextReveal(element, delay);
```

- Animation lettre par lettre
- Effet de typewriter moderne
- Timing personnalisable

### 8. **ProgressiveLoad** - Chargement progressif

```javascript
animateProgressiveLoad(elements, stagger);
```

- Animation de chargement séquentiel
- Idéal pour les listes d'éléments
- Effet de cascade fluide

## 🎨 Classes CSS utilisées

### Classes d'animation

- `.service-card` - Cartes de services
- `.materiel-card` - Cartes de matériel
- `.testimonial` - Témoignages clients
- `.gallery-image` - Images de la galerie
- `.company-title` - Titres de section
- `.company-content` - Contenu de section
- `.company-image` - Images de section
- `.customer-title` - Titres clients
- `.gallery-title` - Titres galerie
- `.form-title` - Titres de formulaire
- `.contact-form` - Formulaire de contact
- `.contact-info` - Informations de contact
- `.footer-content` - Contenu du footer

### Classes d'effets

- `.gsap-animation` - Optimisation des performances
- `.glass-effect` - Effet de glassmorphism
- `.pulse-glow` - Animation de pulsation
- `.icon-animate` - Animation des icônes

## 🚀 Utilisation

### 1. Import du hook

```javascript
import { useGSAPAnimations } from "../utils/useGSAPAnimations";
```

### 2. Initialisation

```javascript
const {
  animateFadeInUp,
  animateSlideInLeft,
  animateScaleIn,
  // ... autres fonctions
} = useGSAPAnimations();
```

### 3. Application des animations

```javascript
useEffect(() => {
  // Animation d'un élément
  animateFadeInUp(elementRef.current, 0.2);

  // Animation d'une liste d'éléments
  const elements = containerRef.current.querySelectorAll(".card");
  animateStaggerCards(elements, 0.15);
}, []);
```

## ⚡ Optimisations

### Performance

- Utilisation de `will-change` pour optimiser le rendu
- Animations hardware-accelerated
- Nettoyage automatique des animations

### Responsive

- Animations adaptées aux mobiles
- Désactivation des effets hover sur mobile
- Timing optimisé selon la taille d'écran

### Accessibilité

- Respect des préférences de réduction de mouvement
- Animations non-bloquantes
- Fallbacks pour les navigateurs non-supportés

## 🎯 Points de déclenchement

Les animations se déclenchent automatiquement au scroll avec ces paramètres :

- **Start**: `top 85%` - Déclenchement quand l'élément est à 85% de la hauteur de l'écran
- **End**: `bottom 15%` - Fin quand l'élément sort de l'écran
- **Toggle**: `play none none reverse` - Joue l'animation puis la reverse

## 🔧 Configuration

### Délais d'animation

- **Rapide**: 0.1s - 0.3s
- **Normal**: 0.4s - 0.6s
- **Lent**: 0.7s - 1s

### Easing functions

- `power3.out` - Animation fluide et naturelle
- `back.out(1.7)` - Effet de rebond
- `power2.inOut` - Animation symétrique

## 🎨 Personnalisation

### Ajouter une nouvelle animation

1. Créer la fonction dans `utils/animations.js`
2. Ajouter la fonction au hook dans `utils/useGSAPAnimations.js`
3. Utiliser dans le composant

### Modifier les paramètres

- Ajuster les délais dans les appels de fonction
- Modifier les easing dans les fonctions d'animation
- Personnaliser les points de déclenchement ScrollTrigger

## 📱 Compatibilité

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers
- ⚠️ IE11 (limitations)

## 🎬 Exemples d'utilisation

### Animation simple

```javascript
const titleRef = useRef(null);
animateFadeInUp(titleRef.current, 0.2);
```

### Animation en cascade

```javascript
const cards = containerRef.current.querySelectorAll(".card");
animateStaggerCards(cards, 0.15);
```

### Animation de parallaxe

```javascript
const backgroundRef = useRef(null);
animateParallax(backgroundRef.current, 0.5);
```

## 🔍 Debug

Pour activer le debug des animations :

```javascript
// Dans utils/animations.js
scrollTrigger: {
  markers: true, // Affiche les marqueurs de déclenchement
  // ... autres options
}
```

## 📈 Performance

- Utilisation de `transform` et `opacity` pour les animations
- Éviter les propriétés qui déclenchent un reflow
- Optimisation avec `will-change`
- Nettoyage automatique des listeners

---

_Ces animations créent une expérience utilisateur moderne et professionnelle pour le site GNB Protect._
