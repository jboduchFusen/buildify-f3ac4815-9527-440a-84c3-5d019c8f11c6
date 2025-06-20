
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
      <div className="game-over-modal" style={{ border: '3px solid #000000' }}>
        <h2 style={{ color: '#000000', marginBottom: '15px' }}>
          {isSuccess ? 'Level Complete!' : 'Level Failed'}
        </h2>
        <p style={{ color: '#000000', fontSize: '20px', marginBottom: '20px' }}>
          Your score: {score}
        </p>
        
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
