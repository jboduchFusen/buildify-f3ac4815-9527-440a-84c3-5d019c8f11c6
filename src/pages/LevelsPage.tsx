
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { levels } from '../game/levels';

const LevelsPage = () => {
  const [unlockedLevels, setUnlockedLevels] = useState(1);

  useEffect(() => {
    // In a real app, we would load progress from localStorage or a backend
    const savedProgress = localStorage.getItem('unlockedLevels');
    if (savedProgress) {
      setUnlockedLevels(parseInt(savedProgress));
    }
  }, []);

  return (
    <div className="levels-page">
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Select Level</h1>
        <Link to="/">
          <button className="secondary-button back-button">Back to Menu</button>
        </Link>
        
        <div className="levels-grid">
          {levels.map((level, index) => (
            <div 
              key={level.id} 
              className={`level-card ${index + 1 > unlockedLevels ? 'locked' : ''}`}
              style={{ border: '2px solid #000000' }}
            >
              <h3 style={{ color: '#000000' }}>Level {index + 1}</h3>
              <p style={{ color: '#000000' }}>{level.name}</p>
              <p style={{ color: '#000000' }}>Cats: {level.catsCount}</p>
              <p style={{ color: '#000000' }}>Dogs: {level.dogs.length}</p>
              {index + 1 <= unlockedLevels ? (
                <Link to={`/game/${level.id}`}>
                  <button className="primary-button">Play</button>
                </Link>
              ) : (
                <button className="primary-button" disabled>Locked</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelsPage;
