
interface GameOverModalProps {
  isSuccess: boolean;
  score: number;
  onRestart: () => void;
  onNext?: () => void;
  onExit: () => void;
}

const GameOverModal = ({ 
  isSuccess, 
  score, 
  onRestart, 
  onNext, 
  onExit 
}: GameOverModalProps) => {
  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="game-over-modal">
        <h2>{isSuccess ? 'Level Complete!' : 'Level Failed'}</h2>
        <p>Your score: {score}</p>
        
        <div className="modal-buttons">
          <button className="secondary-button" onClick={onRestart}>
            Restart
          </button>
          
          {onNext && (
            <button className="primary-button" onClick={onNext}>
              Next Level
            </button>
          )}
          
          <button className="secondary-button" onClick={onExit}>
            Exit to Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default GameOverModal;