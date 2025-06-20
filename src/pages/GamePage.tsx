
import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Engine, Render, World, Bodies, Body, Events, Composite } from 'matter-js';
import { levels } from '../game/levels';
import { createCat, createDog, createObstacle } from '../game/entities';
import GameControls from '../components/GameControls';
import GameOverModal from '../components/GameOverModal';

const GamePage = () => {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const catsRef = useRef<Matter.Body[]>([]);
  const dogsRef = useRef<Matter.Body[]>([]);
  const obstaclesRef = useRef<Matter.Body[]>([]);
  const slingshotRef = useRef<{ x: number, y: number }>({ x: 200, y: 500 });
  const currentCatRef = useRef<Matter.Body | null>(null);
  const isDraggingRef = useRef(false);
  
  const [score, setScore] = useState(0);
  const [catsLeft, setCatsLeft] = useState(3);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [currentLevel, setCurrentLevel] = useState<any>(null);

  // Initialize the physics engine and renderer
  useEffect(() => {
    // Find the current level data
    const level = levels.find(l => l.id === levelId);
    if (!level) {
      navigate('/levels');
      return;
    }
    setCurrentLevel(level);
    
    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 1, scale: 0.001 }
    });
    engineRef.current = engine;
    
    // Create renderer
    const render = Render.create({
      canvas: canvasRef.current!,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: '#87CEEB',
      }
    });
    renderRef.current = render;
    
    // Create ground
    const ground = Bodies.rectangle(
      window.innerWidth / 2, 
      window.innerHeight - 50, 
      window.innerWidth, 
      100, 
      { 
        isStatic: true,
        render: {
          fillStyle: '#3A5F0B',
          strokeStyle: '#000000',
          lineWidth: 2
        }
      }
    );
    
    // Create slingshot base (visual only)
    const slingshotBase = Bodies.rectangle(
      slingshotRef.current.x,
      slingshotRef.current.y + 40,
      20,
      80,
      {
        isStatic: true,
        render: {
          fillStyle: '#8B4513',
          strokeStyle: '#000000',
          lineWidth: 2
        },
        collisionFilter: {
          group: -1  // Don't collide with anything
        }
      }
    );
    
    // Add ground and slingshot to world
    World.add(engine.world, [ground, slingshotBase]);
    
    // Create level elements
    setupLevel(level, engine);
    
    // Start the engine and renderer
    Engine.run(engine);
    Render.run(render);
    
    // Handle collisions
    Events.on(engine, 'collisionStart', (event) => {
      event.pairs.forEach((pair) => {
        const { bodyA, bodyB } = pair;
        
        // Check if a cat hit a dog
        if (
          (bodyA.label === 'cat' && bodyB.label === 'dog') ||
          (bodyA.label === 'dog' && bodyB.label === 'cat')
        ) {
          const dog = bodyA.label === 'dog' ? bodyA : bodyB;
          
          // Remove the dog and update score
          setTimeout(() => {
            World.remove(engine.world, dog);
            dogsRef.current = dogsRef.current.filter(d => d.id !== dog.id);
            setScore(prev => prev + 100);
            
            // Check if level is complete
            if (dogsRef.current.length === 0) {
              setIsLevelComplete(true);
              setIsGameOver(true);
              
              // Unlock next level
              const currentLevelIndex = levels.findIndex(l => l.id === levelId);
              if (currentLevelIndex < levels.length - 1) {
                const unlockedLevels = Math.max(
                  parseInt(localStorage.getItem('unlockedLevels') || '1'),
                  currentLevelIndex + 2
                );
                localStorage.setItem('unlockedLevels', unlockedLevels.toString());
              }
            }
          }, 100);
        }
      });
    });
    
    // Cleanup
    return () => {
      if (renderRef.current) {
        Render.stop(renderRef.current);
        World.clear(engine.world, false);
        Engine.clear(engine);
        renderRef.current.canvas.remove();
        renderRef.current.textures = {};
      }
    };
  }, [levelId, navigate]);
  
  // Setup level elements
  const setupLevel = (level: any, engine: Matter.Engine) => {
    // Create obstacles
    level.obstacles.forEach((obstacle: any) => {
      const body = createObstacle(obstacle);
      World.add(engine.world, body);
      obstaclesRef.current.push(body);
    });
    
    // Create dogs (targets)
    level.dogs.forEach((dog: any) => {
      const body = createDog(dog);
      World.add(engine.world, body);
      dogsRef.current.push(body);
    });
    
    // Create initial cat
    createNewCat();
    
    // Set initial cats count
    setCatsLeft(level.catsCount || 3);
  };
  
  // Create a new cat at the slingshot position
  const createNewCat = () => {
    if (catsLeft <= 0) return;
    
    const cat = createCat({
      x: slingshotRef.current.x,
      y: slingshotRef.current.y,
      type: currentLevel?.cats?.[catsRef.current.length % currentLevel.cats.length] || 'normal'
    });
    
    World.add(engineRef.current!.world, cat);
    currentCatRef.current = cat;
    catsRef.current.push(cat);
    
    // Make the cat static initially (attached to slingshot)
    Body.setStatic(cat, true);
  };
  
  // Handle mouse/touch events for the slingshot
  useEffect(() => {
    if (!canvasRef.current || !engineRef.current) return;
    
    const canvas = canvasRef.current;
    
    const handleStart = (e: MouseEvent | TouchEvent) => {
      const pos = getEventPosition(e);
      if (!currentCatRef.current) return;
      
      // Check if the user clicked on the cat
      const cat = currentCatRef.current;
      const catPos = cat.position;
      const distance = Math.sqrt(
        Math.pow(pos.x - catPos.x, 2) + Math.pow(pos.y - catPos.y, 2)
      );
      
      if (distance < 50) {
        isDraggingRef.current = true;
      }
    };
    
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingRef.current || !currentCatRef.current) return;
      
      const pos = getEventPosition(e);
      const cat = currentCatRef.current;
      
      // Calculate distance from slingshot
      const slingshot = slingshotRef.current;
      const dx = pos.x - slingshot.x;
      const dy = pos.y - slingshot.y;
      
      // Limit the pull distance
      const maxDistance = 150;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const angle = Math.atan2(dy, dx);
      
      const limitedDistance = Math.min(distance, maxDistance);
      const limitedX = slingshot.x + limitedDistance * Math.cos(angle);
      const limitedY = slingshot.y + limitedDistance * Math.sin(angle);
      
      // Update cat position
      Body.setPosition(cat, { x: limitedX, y: limitedY });
    };
    
    const handleEnd = () => {
      if (!isDraggingRef.current || !currentCatRef.current) return;
      
      const cat = currentCatRef.current;
      const slingshot = slingshotRef.current;
      
      // Calculate launch velocity based on pull distance
      const dx = slingshot.x - cat.position.x;
      const dy = slingshot.y - cat.position.y;
      const power = 0.15; // Adjust for desired power
      
      // Make the cat dynamic and apply launch force
      Body.setStatic(cat, false);
      Body.setVelocity(cat, { x: dx * power, y: dy * power });
      
      // Reset state
      isDraggingRef.current = false;
      currentCatRef.current = null;
      
      // Reduce cats left
      setCatsLeft(prev => prev - 1);
      
      // Create a new cat after a delay if there are cats left
      if (catsLeft > 1) {
        setTimeout(() => {
          createNewCat();
        }, 2000);
      } else {
        // Check if game is over
        setTimeout(() => {
          if (dogsRef.current.length > 0) {
            setIsGameOver(true);
            setIsLevelComplete(false);
          }
        }, 5000);
      }
    };
    
    // Helper to get position from mouse or touch event
    const getEventPosition = (e: MouseEvent | TouchEvent) => {
      let clientX, clientY;
      
      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      const rect = canvas.getBoundingClientRect();
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };
    
    // Add event listeners
    canvas.addEventListener('mousedown', handleStart);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseup', handleEnd);
    canvas.addEventListener('touchstart', handleStart);
    canvas.addEventListener('touchmove', handleMove);
    canvas.addEventListener('touchend', handleEnd);
    
    // Cleanup
    return () => {
      canvas.removeEventListener('mousedown', handleStart);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseup', handleEnd);
      canvas.removeEventListener('touchstart', handleStart);
      canvas.removeEventListener('touchmove', handleMove);
      canvas.removeEventListener('touchend', handleEnd);
    };
  }, [catsLeft]);
  
  // Restart the current level
  const restartLevel = () => {
    navigate(0); // Refresh the page to restart
  };
  
  // Go to the next level
  const goToNextLevel = () => {
    const currentIndex = levels.findIndex(l => l.id === levelId);
    if (currentIndex < levels.length - 1) {
      navigate(`/game/${levels[currentIndex + 1].id}`);
    } else {
      navigate('/levels');
    }
  };
  
  return (
    <div className="game-page">
      <canvas ref={canvasRef} className="game-canvas" />
      
      <div className="game-ui">
        <div className="score-display">Score: {score}</div>
        <div className="cats-left">Cats Left: {catsLeft}</div>
        <GameControls onPause={() => navigate('/levels')} />
      </div>
      
      {isGameOver && (
        <GameOverModal
          isSuccess={isLevelComplete}
          score={score}
          onRestart={restartLevel}
          onNext={isLevelComplete ? goToNextLevel : undefined}
          onExit={() => navigate('/levels')}
        />
      )}
    </div>
  );
};

export default GamePage;