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

## Testing Tasks

### Task 8: Tutorial Flow and Navigation Testing
**Description**: Comprehensive testing of TutorialPage component functionality and user experience
**Status**: READY FOR TESTING
**Estimated Size**: Manual testing + potential bug fixes (50 LOC × 10 = 500 tokens)
**Execution Strategy**:
- Manual testing of all navigation paths
- Verify responsive behavior
- Check accessibility features
- Document bugs and improvements
**Dependencies**: TutorialPage.tsx (completed)

**Detailed Test Cases**:

#### 8.1: Navigation Flow Testing
**Objective**: Verify all navigation controls work correctly
**Test Steps**:
1. **Initial State**
   - [ ] Page loads on step 1 of 4
   - [ ] Previous button is disabled
   - [ ] Next button is enabled
   - [ ] Progress bar shows 25%
   - [ ] First dot is active
   
2. **Forward Navigation**
   - [ ] Click Next button → advances to step 2
   - [ ] Progress bar updates to 50%
   - [ ] Second dot becomes active
   - [ ] Previous button becomes enabled
   - [ ] Content changes to step 2
   
3. **Backward Navigation**
   - [ ] Click Previous button → returns to step 1
   - [ ] Progress bar returns to 25%
   - [ ] First dot becomes active
   - [ ] Previous button becomes disabled
   
4. **Dot Navigation**
   - [ ] Click dot 3 → jumps to step 3
   - [ ] Click dot 1 → jumps back to step 1
   - [ ] All dots are clickable and responsive
   
5. **Final Step Behavior**
   - [ ] Navigate to step 4
   - [ ] Next button is replaced with "Start Practice Level" button
   - [ ] Button links to /game/tutorial
   - [ ] Progress bar shows 100%

**Expected Results**: All navigation controls function smoothly with proper state updates

#### 8.2: Content Display Testing
**Objective**: Verify all tutorial content displays correctly
**Test Steps**:
1. **Step 1 Content**
   - [ ] Title: "Welcome to Angry Cats!"
   - [ ] Target icon displays
   - [ ] Description text is readable
   - [ ] No tip section (as per design)
   
2. **Step 2 Content**
   - [ ] Title: "How to Launch"
   - [ ] Hand icon displays
   - [ ] Description explains drag mechanics
   - [ ] Tip about weak points displays
   
3. **Step 3 Content**
   - [ ] Title: "Cat Types"
   - [ ] Zap icon displays
   - [ ] Description covers all cat types
   - [ ] Tip about experimentation displays
   
4. **Step 4 Content**
   - [ ] Title: "Winning & Scoring"
   - [ ] Target icon displays
   - [ ] Description explains victory conditions
   - [ ] Tip about efficiency displays

**Expected Results**: All content renders correctly with proper formatting

#### 8.3: Responsive Design Testing
**Objective**: Verify tutorial works on different screen sizes
**Test Steps**:
1. **Desktop (1920x1080)**
   - [ ] Layout is centered and well-spaced
   - [ ] Navigation buttons are side-by-side
   - [ ] Icons are appropriately sized
   - [ ] Text is readable
   
2. **Tablet (768x1024)**
   - [ ] Layout adapts to narrower width
   - [ ] Content remains readable
   - [ ] Touch targets are adequate
   
3. **Mobile (375x667)**
   - [ ] Navigation buttons stack vertically
   - [ ] Step card min-height adjusts
   - [ ] Font sizes scale appropriately
   - [ ] Dots remain visible and clickable

**Expected Results**: Tutorial is fully functional and visually appealing on all screen sizes

#### 8.4: Link and Route Testing
**Objective**: Verify all links navigate correctly
**Test Steps**:
1. **Back to Home Link**
   - [ ] Click "Back to Home" → navigates to /
   - [ ] Hover effect works
   - [ ] Icon and text align properly
   
2. **Start Practice Level Link**
   - [ ] Appears only on step 4
   - [ ] Click → navigates to /game/tutorial
   - [ ] Tutorial level loads correctly
   
3. **Skip Tutorial Link**
   - [ ] Click "Skip tutorial and go to levels" → navigates to /levels
   - [ ] Link is visible on all steps
   - [ ] Hover effect works

**Expected Results**: All links navigate to correct routes without errors

#### 8.5: Animation and Visual Effects Testing
**Objective**: Verify animations enhance user experience
**Test Steps**:
1. **Icon Animations**
   - [ ] Icons have float animation
   - [ ] Animation is smooth (no jank)
   - [ ] Animation doesn't distract from content
   
2. **Progress Bar Animation**
   - [ ] Smooth transition when changing steps
   - [ ] Gradient displays correctly
   - [ ] Width updates accurately
   
3. **Button Hover Effects**
   - [ ] Hover changes background color
   - [ ] Transform effects work (translateX/Y)
   - [ ] Transitions are smooth
   
4. **Dot Transitions**
   - [ ] Active dot expands smoothly
   - [ ] Inactive dots scale on hover
   - [ ] Color transitions work

**Expected Results**: All animations are smooth and purposeful

#### 8.6: Accessibility Testing
**Objective**: Ensure tutorial is accessible to all users
**Test Steps**:
1. **Keyboard Navigation**
   - [ ] Tab key navigates through interactive elements
   - [ ] Enter/Space activates buttons
   - [ ] Focus indicators are visible
   - [ ] Tab order is logical
   
2. **Screen Reader Support**
   - [ ] Step numbers are announced
   - [ ] Button states (disabled) are announced
   - [ ] Dot buttons have aria-labels
   - [ ] Content hierarchy is logical
   
3. **Color Contrast**
   - [ ] Text meets WCAG AA standards
   - [ ] Button text is readable
   - [ ] Disabled states are distinguishable

**Expected Results**: Tutorial is fully accessible via keyboard and screen readers

#### 8.7: Edge Cases and Error Handling
**Objective**: Test unusual scenarios
**Test Steps**:
1. **Direct URL Access**
   - [ ] Navigate directly to /tutorial → loads correctly
   - [ ] Starts on step 1
   
2. **Browser Back/Forward**
   - [ ] Browser back button works
   - [ ] Browser forward button works
   - [ ] State is maintained
   
3. **Rapid Clicking**
   - [ ] Rapid Next clicks don't break state
   - [ ] Rapid dot clicks work correctly
   - [ ] No console errors

**Expected Results**: Tutorial handles edge cases gracefully

### Bug Tracking Template
**If issues are found during testing:**

| Bug ID | Severity | Component | Description | Steps to Reproduce | Expected | Actual |
|--------|----------|-----------|-------------|-------------------|----------|--------|
| T-001 | High/Med/Low | Navigation | [Description] | [Steps] | [Expected] | [Actual] |

### Potential Improvements Identified
**Based on testing, consider:**
1. Add keyboard shortcuts (arrow keys for navigation)
2. Add progress save to localStorage
3. Add "Mark as complete" functionality
4. Add visual preview images for each step
5. Add animation when transitioning between steps
6. Add sound effects for button clicks (optional)

## Next Steps
1. **IMMEDIATE**: Perform manual testing of Task 8 (Tutorial Flow Testing)
2. Document any bugs found using Bug Tracking Template
3. Fix critical bugs if discovered
4. Continue with Task 4: Build FeatureCard component
5. Complete Task 5: Enhance HomePage layout with characters and features
