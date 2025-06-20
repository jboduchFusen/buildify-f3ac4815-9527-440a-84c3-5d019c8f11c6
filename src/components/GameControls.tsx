
import { useState } from 'react';

interface GameControlsProps {
  onPause: () => void;
}

const GameControls = ({ onPause }: GameControlsProps) => {
  const [isPaused, setIsPaused] = useState(false);
  
  const handlePause = () => {
    setIsPaused(true);
    onPause();
  };
  
  return (
    <div className="game-controls">
      <button className="secondary-button" onClick={handlePause}>
        Menu
      </button>
    </div>
  );
};

export default GameControls;