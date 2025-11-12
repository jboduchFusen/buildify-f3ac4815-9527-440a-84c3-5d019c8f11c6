# Angry Cats Game - Planning Document

## Requirements

### Functional Requirements
- Physics-based cat launching game similar to Angry Birds
- Multiple levels with increasing difficulty
- Score tracking and level progression
- Tutorial mode for new players
- Responsive game controls

### Non-Functional Requirements
- Smooth 60 FPS gameplay
- Mobile-friendly responsive design
- Fast loading times
- Engaging visual design
- Intuitive user interface

## Design

### Current State Analysis
**Homepage (HomePage.tsx)**
- Simple centered layout with white card
- Basic gradient background (sky blue to teal)
- Minimal text-only interface
- Loading spinner simulation
- Two buttons: Play Game and Tutorial

**Visual Issues Identified**
- No graphics or imagery
- Plain white card looks uninviting
- No visual representation of game characters (cats/dogs)
- Missing visual hierarchy and excitement
- No animation or dynamic elements
- Lacks personality and theme reinforcement

### Proposed Homepage Enhancements

#### Visual Elements to Add
1. **Hero Graphics**
   - Animated cat character illustrations
   - Slingshot visual element
   - Flying cat animation
   - Background scenery (clouds, grass, structures)

2. **Background Improvements**
   - Dynamic gradient with multiple colors
   - Floating cloud animations
   - Parallax effect elements
   - Themed background image from Unsplash

3. **Character Showcase**
   - Cat character preview cards
   - Dog enemy preview
   - Visual power-ups or special abilities

4. **Interactive Elements**
   - Animated title with bounce effect
   - Pulsing "Play" button
   - Hover effects on all interactive elements
   - Particle effects or confetti

5. **Information Cards**
   - Feature highlights (physics-based, multiple levels, etc.)
   - Quick stats or achievements preview
   - Visual game instructions

#### Layout Structure
```
┌─────────────────────────────────────────┐
│  Animated Background (clouds, sky)      │
│  ┌───────────────────────────────────┐  │
│  │  Animated Cat Character (left)    │  │
│  │                                   │  │
│  │    ANGRY CATS (animated title)    │  │
│  │    Tagline with icon              │  │
│  │                                   │  │
│  │    [Large Play Button]            │  │
│  │    [Tutorial Button]              │  │
│  │                                   │  │
│  │  Feature Cards (3 columns)        │  │
│  │  [Physics] [Levels] [Characters]  │  │
│  │                                   │  │
│  │  Dog Character (right)            │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## Tasks

### Task 1: Create Assets Directory and Add Background Image
**Description**: Set up assets folder structure and add themed background
**Estimated Size**: 20 LOC × 10 = 200 tokens
**Execution Strategy**: 
- Create src/assets directory
- Add CSS for background image integration
**Dependencies**: None

### Task 2: Design Enhanced CSS Animations
**Description**: Add keyframe animations for title, buttons, and floating elements
**Estimated Size**: 80 LOC × 10 = 800 tokens
**Execution Strategy**:
- Create @keyframes for bounce, pulse, float effects
- Add transition effects for hover states
- Implement gradient animations
**Dependencies**: None

### Task 3: Create Character SVG Components
**Description**: Build simple SVG cat and dog character illustrations
**Status**: IN PROGRESS
**Estimated Size**: 150 LOC × 10 = 1,500 tokens
**Execution Strategy**:
- Create CatCharacter.tsx component with SVG
- Create DogCharacter.tsx component with SVG
- Add animation props for movement
**Dependencies**: None (SVG components are self-contained)

**Detailed Subtasks**:
- **3.1**: CatCharacter SVG component with cartoon styling
  **Status**: COMPLETED
  **Size**: ~60 LOC component + ~15 LOC CSS = 75 LOC total
  
  **Atomic Breakdown**:
  - **3.1.1**: TypeScript interface definition (10 LOC)
    - Props: className, scale, animationState
    - Animation state type: 'idle' | 'bounce' | 'wiggle' | 'flying'
    - Default values and optional position props
    
  - **3.1.2**: SVG cat structure design (40 LOC)
    - ViewBox: 0 0 100 100
    - Body: Rounded oval (#ff8c42 orange)
    - Head: Circle with triangular ears
    - Face: Large eyes, pink nose, whiskers
    - Tail: Curved with stripes
    - Limbs: Simple rounded shapes
    - Bold black outlines (2px stroke)
    
  - **3.1.3**: Color palette implementation (5 LOC)
    - Primary: #ff8c42 (orange body)
    - Accent: #ff6b6b (stripes/details)
    - Eyes: White with black pupils
    - Nose: #ffb3d9 (pink)
    - Outline: #000000 (2px)
    
  - **3.1.4**: Animation state support (5 LOC)
    - Conditional className based on animationState
    - CSS classes: cat-idle, cat-bounce, cat-wiggle, cat-flying
    - Transform origin centered
  
  **Design Specifications**:
  - Style: Cute, round features, big expressive eyes
  - Proportions: Head 40% of body, tail 50% of body length
  - Expression: Happy/determined (launch-ready)
  - Pose: Sitting/crouched position
  - Details: Tail stripes, whiskers, inner ear shading
  
  **SVG Layer Order** (bottom to top):
  1. Tail (behind body)
  2. Body (main oval)
  3. Back legs
  4. Head (circle with ears)
  5. Face features (eyes, nose, whiskers)
  6. Front legs
  
  **CSS Animations** (App.css):
  - `.cat-idle`: Breathing effect (scale 1 to 1.02, 2s loop)
  - `.cat-bounce`: Bounce for menu (translateY, 0.6s ease)
  - `.cat-wiggle`: Shake in slingshot (rotate ±5deg, 0.3s)
  - `.cat-flying`: Rotation during flight (rotate 360deg, 1s linear)
  
  **Files to Create/Update**:
  - CREATE: src/components/CatCharacter.tsx (~60 LOC)
  - UPDATE: src/App.css - Add keyframes (~15 LOC)
  
  **Testing Checklist**:
  - [ ] Renders at scale 0.5x, 1x, 2x
  - [ ] All animation states work
  - [ ] Colors match design system
  - [ ] Responsive on mobile
  - [ ] No performance issues
  
- **3.2**: DogCharacter SVG component with enemy appearance
  **Status**: COMPLETED
  - Brown dog with angular features
  - Grumpy/angry expression with eyebrows
  - Standing defensive pose
  - Red spiked collar for enemy appearance
  - Showing teeth for aggression
  - Size: ~240 LOC (component) + ~40 LOC (CSS animations)
  
- **3.3**: TypeScript interfaces for props
  - Position (x, y coordinates)
  - Scale factor
  - Animation state (idle, bounce, wiggle)
  - Optional className for custom styling
  - Size: ~15 LOC
  
- **3.4**: CSS animations in App.css
  - @keyframes for bounce effect
  - @keyframes for wiggle/shake effect
  - @keyframes for float effect
  - Size: ~15 LOC

**Implementation Notes**:
- Use viewBox for scalability
- Keep path complexity low for performance
- Use CSS variables for colors to match theme
- Default size: 100x100 viewBox, scalable via props

### Task 4: Build Feature Cards Component
**Description**: Create reusable feature card components to showcase game features
**Status**: IN PROGRESS
**Estimated Size**: 100 LOC × 10 = 1,000 tokens
**Execution Strategy**:
- Create FeatureCard.tsx component
- Add icons using lucide-react
- Style with hover effects and shadows
**Dependencies**: None (includes own scoped animations)

**Detailed Subtasks**:
- **4.1**: FeatureCard component structure
  - TypeScript interface: title, description, icon, color
  - Flexible layout with icon at top
  - Semantic HTML structure
  - Size: ~40 LOC
  
- **4.2**: Icon integration from lucide-react
  - Zap icon for "Physics-Based Gameplay"
  - Trophy icon for "Multiple Levels"
  - Cat icon for "Unique Characters"
  - Icon size and color props
  - Size: ~10 LOC
  
- **4.3**: Card styling in App.css
  - Base card styles (padding, border-radius, background)
  - Box shadow with depth
  - Gradient backgrounds per card type
  - Size: ~30 LOC
  
- **4.4**: Hover effects and transitions
  - Transform on hover (translateY, scale)
  - Shadow enhancement on hover
  - Icon animation on hover
  - Smooth transitions (0.3s ease)
  - Size: ~20 LOC

**Card Specifications**:
1. **Physics Card**
   - Icon: Zap (lightning bolt)
   - Color: Electric blue (#4ecdc4)
   - Title: "Physics-Based Gameplay"
   - Description: "Realistic physics for challenging shots"

2. **Levels Card**
   - Icon: Trophy
   - Color: Gold/Warning (#ffd166)
   - Title: "Multiple Levels"
   - Description: "Progress through exciting challenges"

3. **Characters Card**
   - Icon: Cat
   - Color: Primary red (#ff6b6b)
   - Title: "Unique Characters"
   - Description: "Launch different cats with special abilities"

### Task 5: Enhance HomePage Layout
**Description**: Restructure HomePage with new visual elements and layout
**Estimated Size**: 120 LOC × 10 = 1,200 tokens
**Execution Strategy**:
- Import and position character components
- Add feature cards section
- Integrate background image
- Add floating cloud elements
**Dependencies**: Tasks 2, 3, 4

### Task 6: Add Interactive Animations
**Description**: Implement interactive hover and click animations
**Estimated Size**: 60 LOC × 10 = 600 tokens
**Execution Strategy**:
- Add useState for animation triggers
- Implement button pulse effect
- Add particle effects on hover
**Dependencies**: Task 5

### Task 7: Optimize for Mobile Responsiveness
**Description**: Ensure all new elements work on mobile devices
**Estimated Size**: 70 LOC × 10 = 700 tokens
**Execution Strategy**:
- Add media queries for responsive layout
- Adjust character sizes for mobile
- Stack feature cards vertically on small screens
**Dependencies**: Task 5

## Discussions

### Design Decisions

**Q: Should we use SVG or image files for characters?**
A: SVG components provide better scalability, smaller file size, and easier animation control. We'll create simple, stylized SVG characters.

**Q: How many feature cards should we display?**
A: Three feature cards highlighting: Physics-Based Gameplay, Multiple Levels, Unique Characters. This provides good balance without overwhelming.

**Q: Should we add sound effects to the homepage?**
A: Not initially. Focus on visual appeal first. Sound can be added in a future iteration.

**Q: What background image theme should we use?**
A: Cartoon-style game environment with bright colors - possibly a playful outdoor scene with structures that hint at the gameplay.

### Technical Considerations

**Animation Performance**
- Use CSS transforms and opacity for animations (GPU accelerated)
- Limit number of simultaneous animations
- Use will-change property sparingly
- Implement requestAnimationFrame for complex animations

**Image Optimization**
- Use Unsplash with proper size parameters (w=1920&h=1080)
- Consider WebP format for better compression
- Lazy load non-critical images

**Component Structure**
- Keep character components pure and reusable
- Use composition for complex layouts
- Implement proper TypeScript interfaces

### Implementation Priority

**Phase 1 (High Priority)**
- Tasks 1, 2, 5: Core visual improvements
- Get background, animations, and layout working

**Phase 2 (Medium Priority)**
- Tasks 3, 4: Character graphics and feature cards
- Add personality and information

**Phase 3 (Low Priority)**
- Tasks 6, 7: Polish and responsiveness
- Fine-tune interactions and mobile experience

## Total Estimated Cost
- Task 1: 200 tokens
- Task 2: 800 tokens
- Task 3: 1,500 tokens
- Task 4: 1,000 tokens
- Task 5: 1,200 tokens
- Task 6: 600 tokens
- Task 7: 700 tokens

**Total: 6,000 tokens**

## File Status

### Core Files
- ✅ index.html - Entry point with proper meta tags
- ✅ src/main.tsx - React root with error boundary
- ✅ src/index.css - Design system with CSS variables
- ✅ src/App.tsx - Router configuration
- ✅ src/App.css - Component animations

### Components
- ✅ src/components/CatCharacter.tsx - Hero character SVG
- ✅ src/components/DogCharacter.tsx - Enemy character SVG
- ✅ src/components/GameControls.tsx
- ✅ src/components/GameOverModal.tsx

### Pages
- ✅ src/pages/HomePage.tsx
- ✅ src/pages/TutorialPage.tsx - Interactive step-by-step tutorial
- ✅ src/pages/GamePage.tsx
- ✅ src/pages/LevelsPage.tsx
- ✅ src/pages/NotFoundPage.tsx

### Game Logic
- ✅ src/game/entities.ts
- ✅ src/game/levels.ts

## Next Steps
1. Continue with Task 4: Build FeatureCard component
2. Complete Task 5: Enhance HomePage layout with characters and features
3. Add interactive animations (Task 6)
4. Optimize for mobile responsiveness (Task 7)
