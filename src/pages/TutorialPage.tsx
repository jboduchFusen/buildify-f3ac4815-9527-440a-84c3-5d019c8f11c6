
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Target, Hand, Zap } from 'lucide-react';

interface TutorialStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  tip?: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 1,
    title: 'Welcome to Angry Cats!',
    description: 'Your mission is to launch cats using a slingshot to knock down structures and defeat all the dogs. Each level has a limited number of cats, so aim carefully!',
    icon: <Target className="w-16 h-16 text-primary" />,
  },
  {
    id: 2,
    title: 'How to Launch',
    description: 'Click and drag the cat backwards on the slingshot. The further you pull, the more power your shot will have. Release to launch!',
    icon: <Hand className="w-16 h-16 text-primary" />,
    tip: 'Aim for weak points in structures to cause maximum damage',
  },
  {
    id: 3,
    title: 'Cat Types',
    description: 'Normal cats are balanced. Heavy cats break through tough materials. Bouncy cats can ricochet off surfaces for tricky shots!',
    icon: <Zap className="w-16 h-16 text-primary" />,
    tip: 'Each cat type has unique physics - experiment to find the best strategy',
  },
  {
    id: 4,
    title: 'Winning & Scoring',
    description: 'Defeat all dogs to win the level. Earn bonus points for using fewer cats and causing more destruction. Unused cats give you extra points!',
    icon: <Target className="w-16 h-16 text-primary" />,
    tip: 'Try to complete levels with as few cats as possible for higher scores',
  },
];

const TutorialPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const step = tutorialSteps[currentStep];

  return (
    <div className="tutorial-page">
      <div className="tutorial-container">
        <div className="tutorial-header">
          <Link to="/" className="back-link">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="tutorial-title">Game Tutorial</h1>
        </div>

        <div className="tutorial-content">
          <div className="step-indicator">
            <span className="step-number">Step {currentStep + 1} of {tutorialSteps.length}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="step-card">
            <div className="step-icon">
              {step.icon}
            </div>
            <h2 className="step-title">{step.title}</h2>
            <p className="step-description">{step.description}</p>
            {step.tip && (
              <div className="step-tip">
                <span className="tip-label">💡 Tip:</span>
                <span className="tip-text">{step.tip}</span>
              </div>
            )}
          </div>

          <div className="tutorial-navigation">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="nav-button prev-button"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>

            {currentStep === tutorialSteps.length - 1 ? (
              <Link to="/game/tutorial" className="start-tutorial-link">
                <button className="nav-button start-button">
                  Start Practice Level
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            ) : (
              <button
                onClick={handleNext}
                className="nav-button next-button"
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="step-dots">
            {tutorialSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`dot ${index === currentStep ? 'active' : ''}`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="skip-section">
          <Link to="/levels" className="skip-link">
            Skip tutorial and go to levels
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;