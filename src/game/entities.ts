
import { Bodies, Body } from 'matter-js';

// Cat types with different properties
const CAT_TYPES = {
  normal: {
    radius: 30,
    density: 0.004,
    restitution: 0.8,
    color: '#FF6B6B'
  },
  heavy: {
    radius: 40,
    density: 0.008,
    restitution: 0.4,
    color: '#FF9E6B'
  },
  bouncy: {
    radius: 25,
    density: 0.003,
    restitution: 1.2,
    color: '#6BFFB8'
  }
};

// Create a cat with the given properties
export const createCat = ({ x, y, type = 'normal' }: { x: number, y: number, type: string }) => {
  const catProps = CAT_TYPES[type as keyof typeof CAT_TYPES] || CAT_TYPES.normal;
  
  return Bodies.circle(x, y, catProps.radius, {
    label: 'cat',
    density: catProps.density,
    restitution: catProps.restitution,
    frictionAir: 0.005,
    render: {
      fillStyle: catProps.color
    }
  });
};

// Create a dog (target)
export const createDog = ({ x, y, size = 'medium' }: { x: number, y: number, size?: string }) => {
  let width, height, density;
  
  switch (size) {
    case 'small':
      width = 40;
      height = 40;
      density = 0.002;
      break;
    case 'large':
      width = 80;
      height = 80;
      density = 0.006;
      break;
    default: // medium
      width = 60;
      height = 60;
      density = 0.004;
      break;
  }
  
  return Bodies.rectangle(x, y, width, height, {
    label: 'dog',
    density,
    restitution: 0.2,
    render: {
      fillStyle: '#8C6B4F'
    }
  });
};

// Create an obstacle with the given properties
export const createObstacle = ({ 
  x, y, width, height, angle = 0, material = 'wood' 
}: { 
  x: number, 
  y: number, 
  width: number, 
  height: number, 
  angle?: number, 
  material?: string 
}) => {
  let density, restitution, fillStyle;
  
  switch (material) {
    case 'stone':
      density = 0.008;
      restitution = 0.1;
      fillStyle = '#A0A0A0';
      break;
    case 'glass':
      density = 0.003;
      restitution = 0.3;
      fillStyle = '#ADD8E6';
      break;
    default: // wood
      density = 0.0005;
      restitution = 0.2;
      fillStyle = '#8B4513';
      break;
  }
  
  const obstacle = Bodies.rectangle(x, y, width, height, {
    label: 'obstacle',
    density,
    restitution,
    render: {
      fillStyle
    }
  });
  
  if (angle !== 0) {
    Body.rotate(obstacle, angle * Math.PI / 180);
  }
  
  return obstacle;
};