
// Define game levels
export const levels = [
  {
    id: 'level1',
    name: 'Beginner\'s Luck',
    catsCount: 3,
    cats: ['normal', 'normal', 'normal'],
    dogs: [
      { x: 800, y: 500, size: 'medium' },
      { x: 850, y: 500, size: 'medium' }
    ],
    obstacles: [
      { x: 700, y: 550, width: 200, height: 20, material: 'wood' },
      { x: 700, y: 450, width: 20, height: 200, material: 'wood' },
      { x: 800, y: 450, width: 20, height: 200, material: 'wood' }
    ]
  },
  {
    id: 'level2',
    name: 'Tower Topple',
    catsCount: 4,
    cats: ['normal', 'heavy', 'normal', 'bouncy'],
    dogs: [
      { x: 800, y: 300, size: 'small' },
      { x: 800, y: 400, size: 'medium' },
      { x: 800, y: 500, size: 'large' }
    ],
    obstacles: [
      { x: 750, y: 550, width: 300, height: 20, material: 'wood' },
      { x: 750, y: 450, width: 300, height: 20, material: 'wood' },
      { x: 750, y: 350, width: 300, height: 20, material: 'wood' },
      { x: 750, y: 250, width: 300, height: 20, material: 'wood' },
      { x: 650, y: 400, width: 20, height: 320, material: 'stone' },
      { x: 850, y: 400, width: 20, height: 320, material: 'stone' }
    ]
  },
  {
    id: 'level3',
    name: 'Glass Castle',
    catsCount: 5,
    cats: ['heavy', 'bouncy', 'normal', 'heavy', 'bouncy'],
    dogs: [
      { x: 750, y: 300, size: 'small' },
      { x: 850, y: 300, size: 'small' },
      { x: 800, y: 200, size: 'medium' }
    ],
    obstacles: [
      { x: 800, y: 550, width: 400, height: 20, material: 'stone' },
      { x: 700, y: 450, width: 20, height: 200, material: 'glass' },
      { x: 900, y: 450, width: 20, height: 200, material: 'glass' },
      { x: 800, y: 350, width: 220, height: 20, material: 'glass' },
      { x: 750, y: 250, width: 20, height: 200, material: 'glass', angle: 45 },
      { x: 850, y: 250, width: 20, height: 200, material: 'glass', angle: -45 }
    ]
  },
  {
    id: 'tutorial',
    name: 'Tutorial',
    catsCount: 5,
    cats: ['normal', 'normal', 'normal', 'normal', 'normal'],
    dogs: [
      { x: 800, y: 500, size: 'medium' }
    ],
    obstacles: [
      { x: 800, y: 550, width: 200, height: 20, material: 'wood' },
      { x: 750, y: 450, width: 20, height: 200, material: 'wood' },
      { x: 850, y: 450, width: 20, height: 200, material: 'wood' },
      { x: 800, y: 350, width: 120, height: 20, material: 'wood' }
    ]
  }
];