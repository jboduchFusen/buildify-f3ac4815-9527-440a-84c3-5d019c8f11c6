
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-section">
          <h1 className="game-title">Angry Cats</h1>
          <p className="game-subtitle">Launch cats, destroy structures, defeat dogs!</p>
          
          {isLoading ? (
            <div className="loading-spinner">
              <p style={{ color: '#000000', fontWeight: 'bold' }}>Loading game assets...</p>
            </div>
          ) : (
            <div className="menu-buttons">
              <Link to="/levels">
                <button className="primary-button play-button">Play Game</button>
              </Link>
              <Link to="/game/tutorial">
                <button className="secondary-button tutorial-button">Tutorial</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
