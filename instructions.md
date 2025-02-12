Use the following instructions to build a modern video surveillance equipment installation company website.

- Next.js Version: 14 (specific version to avoid hydration issues)
- React: 18.2.0
- Node.js: >=14.x
- Package Manager: npm (not yarn)

  Install the following dependencies:

```bash
npm install autoprefixer@^10.0.0 \
            lucide-react@^0.244.0 \
            next@14 \
            postcss@^8.4.0 \
            react@18.2.0 \
            react-dom@18.2.0 \
            tailwindcss@^3.2.0 \
            shadcn@latest init
```

## Technical Foundation

### 1. Project Architecture

```
/
├── components/          # Reusable UI components
├── pages/              # Next.js pages and routing
├── public/             # Static assets
├── styles/            # Global styles and Tailwind
└── utils/             # Helper functions if needed
```

3. Configuration Files Setup:

- Create `next.config.js` for image domains
- Setup `tailwind.config.js` with custom theme
- Configure `postcss.config.js`
- Add global styles in `styles/globals.css`

### 4. Key Technical Considerations

3. **Responsive Design**

- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

4. **State Management**

- Use React hooks for local state
- Implement context for theme/global states
- Avoid unnecessary re-renders

5. **Animation Implementation**

- Use CSS transitions for simple animations
- Implement smooth scroll behavior
- Add hover effects using Tailwind
- Transition timings example:
  ```css
  transition-duration: 300ms
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
  ```

### 5. Development Best Practices

1. **Code Organization**

- Keep components small and focused
- Use consistent file naming
- Implement proper commenting
- Follow DRY principle

2. **Styling Methodology**

- Use Tailwind utility classes
- Implement consistent spacing
- Follow color system
- Maintain responsive design patterns

3. **Performance Considerations**

- Minimize third-party dependencies
- No Typescript

4. **Image Optimization**

- Next.js Image component usage throughout the app
- Remote domains configured in next.config.js for freepik.com
- Gradient overlays for text contrast
- Priority loading for hero first image

5. **Layout Optimization**

- Responsive grid layouts (1 column mobile, 3 columns desktop)
- Tailwind's container class for consistent spacing
- Mobile-first approach with md: breakpoint
- Proper spacing units through Tailwind classes

6. **Component Structure**

- Modular component architecture
- Reusable button styles
- Consistent styling patterns
- Clean component hierarchy

## Components Architecture

### 1. HeroSlider Component

Purpose: Create a full-screen image slider.

Requirements:

- Use Next.js Image component for optimization
- Implement auto-rotating slides (5-second intervals)
- Include overlay gradient for text contrast
- Add navigation dots
- Smooth transitions between slides
- H1 "GNB-PROTECT"
- h2 "Votre partenaire de confiance"
  Key Features:

- Full viewport height
- Gradient overlay (black to transparent)
- Centered text content

Animation Specifications:

- Slide transition duration: 500ms
- Fade effect with ease-in-out
- Button hover scale: 1.02

Reference Implementation:

### 2. ServiceSection Component

Purpose: to present the company's services

Requirements:

- three-column layout (mobile responsive)
- Create cards with icon, title, image with shadow effect
- Image hover animation
- Gradient overlay on image

Key Features:

- Split layout (text/image)
- Decorative border accents
- Custom animated button
- Image hover zoom effect

Styling Notes:

- Use accent colors for text highlights
- Implement before/after pseudo-elements for button effects
- Add shadow effects on hover
- Maintain consistent spacing

Reference Implementation:

### 3. MaterielSection Component

Purpose: presentation material.

Requirements:

- appearance on scroll
- Implement responsive grid layout
- Add hover animations for cards

Styling Notes:

- Transition duration: 300ms

Reference Implementation:

### 4. companySection component

Purpose : presentation text with a "CONTACTEZ NOUS" button which links to the form

Requirements:

- responsive
- "CONTACTEZ NOUS" button which links to the form

Reference Implementation:

### 5. customerSection component

purpose : Presentation of former clients

Requirements:

- create 1 card with margin 20px and shadow box
- use background image
- use h2 for clients name and add logo
- use subtle animation

Reference Implementation:

### 6. gallerySection component

purpose : photo gallery

Requirements:

- Use Next.js Image component for optimization
- Implement auto-rotating slides (5-second intervals)
- Include overlay gradient for text contrast
- Smooth transitions between slides

Animation Specifications:

- Slide transition duration: 500ms
- Fade effect with ease-in-out

Reference Implementation:

### 7. formSection component

purpose : contact the company by sending an email

Requirements:

- create a form to send an email to the company
- use shacdn ui
- use .env.local
- create a file with information validation logic, security and verification that it is indeed a human who fills out the form
- button submit

### 8. ReviewSection Component

Purpose: Display customer testimonials in a grid layout.

Requirements:

- Use google reviews
- Create a reviews data array with name, review text, and rating
- Implement responsive grid layout (1 column mobile, 3 columns desktop)
- Add hover animations for cards
- Include star rating display

Key Features:

- Review cards with hover scaling (1.05)
- Left border accent on review text
- Top border separator for author info
- Star rating using repeated ★ character

Styling Notes:

- Card background: light color
- Text color: dark color
- Border accents: accent colors
- Transition duration: 300ms

### 6. Footer Component

Purpose: Display contact information and social links.

Requirements:

- Responsive layout
- Social media icons
- Copyright information
- Quick links

Key Features:

- Social icons from Lucide React
- Hover effects on links
- Responsive columns
- Brand logo

Styling Notes:

- Dark background
- Light text
- Accent colors for hover states
- Consistent spacing with main content

## Asset Configuration

### 1. Image Assets

#### Hero Slider Images

```
- Image 1: imgGnb\hero.jpeg
- Image 2: imgGnb\hero2.jpeg
- Image 3: imgGnb\hero3.jpeg
```

#### Story Section Title

```
- H2 "VIDEOSURVEILLANCE"
- H2 "SECURITE"
- H2 "INSTALLATION"
```

### 2. Color System

```css
:root {
  --primary-color: rgb(255, 255, 255); /* Accent Red */
  --secondary-color: #316131; /* Accent Yellow */
  --dark-color: #231f20; /* Custom Grey */
  --accent-color: rgb(30, 65, 30); /* Dark Green */
}
```

Usage in Tailwind:

```javascript:tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        "accent-red": "rgb(255, 255, 255)",
        "accent-yellow": "#316131",
        "light-white": "#FFF9EE",
        "custom-grey": "#231f20",
        "dark-green": "rgb(30, 65, 30)",
      }
    }
  }
}
```

### 3. Materiel image

```
- materiel\aiphone-kit-audio.png
- materiel\ajax-650x468.png
- materiel\Dahua-LOGO_black_with_red_D.png
- materiel\Legrand-Logo.jpg

```

### 4. CompanySection text

- Notre entreprise se distingue par son professionnalisme, sa rapidité d'intervention et la qualité de ses équipements.
- La sécurité de votre établissement est primordiale. Nos alarmes, à des prix compétitifs, préviennent les vols et les dégradations en protégeant efficacement vos employés, vos viens et votre commerce, tout en vous assurant une tranquillité d'esprit.

### 5. customerSection customer names

background-image : imgGnb\client.jpeg

```
- L'artisant du regard
- Forum éclairage
- Stone kid's
- Scm Oximed Pantin
- Okam santé rosny sous bois
- Boutique onze
- Silver store
- L2N pharma
```

### 6. gallerySection image

```
- image1 : gallery\IMG-20240605-WA0008.jpg
- image2 : gallery\IMG-20240605-WA0010.png
- image3 : gallery\IMG-20240605-WA0021.jpg
- image4 : gallery\IMG-20240605-WA0023.png
- image5 : gallery\IMG-20240605-WA0032.jpg
```

### 7. formSection form field

```
- Nom
- Prénom
- Téléphone
- Mail
- Message
```
