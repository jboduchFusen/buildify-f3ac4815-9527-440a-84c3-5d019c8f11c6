
import React from 'react';

interface CatCharacterProps {
  className?: string;
  scale?: number;
  animationState?: 'idle' | 'bounce' | 'wiggle' | 'flying';
}

const CatCharacter: React.FC<CatCharacterProps> = ({
  className = '',
  scale = 1,
  animationState = 'idle'
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`cat-character cat-${animationState} ${className}`}
      style={{ width: `${100 * scale}px`, height: `${100 * scale}px` }}
    >
      {/* Tail (behind body) */}
      <path
        d="M 15 70 Q 5 65 8 55 Q 10 45 15 50"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Tail stripes */}
      <path
        d="M 10 62 Q 8 58 10 54"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 12 56 Q 10 52 11 48"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Body (main oval) */}
      <ellipse
        cx="40"
        cy="65"
        rx="22"
        ry="18"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Back legs */}
      <ellipse
        cx="28"
        cy="80"
        rx="6"
        ry="10"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse
        cx="38"
        cy="80"
        rx="6"
        ry="10"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Head (circle with ears) */}
      <circle
        cx="50"
        cy="45"
        r="20"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Left ear */}
      <path
        d="M 38 32 L 32 20 L 42 28 Z"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Left ear inner */}
      <path
        d="M 38 30 L 35 24 L 40 28 Z"
        fill="#ffb3d9"
        stroke="none"
      />

      {/* Right ear */}
      <path
        d="M 62 32 L 68 20 L 58 28 Z"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Right ear inner */}
      <path
        d="M 62 30 L 65 24 L 60 28 Z"
        fill="#ffb3d9"
        stroke="none"
      />

      {/* Eyes */}
      {/* Left eye white */}
      <ellipse
        cx="42"
        cy="42"
        rx="6"
        ry="8"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="1.5"
      />
      {/* Left pupil */}
      <circle
        cx="43"
        cy="44"
        r="3"
        fill="#000000"
      />
      {/* Left eye shine */}
      <circle
        cx="41"
        cy="41"
        r="1.5"
        fill="#ffffff"
      />

      {/* Right eye white */}
      <ellipse
        cx="58"
        cy="42"
        rx="6"
        ry="8"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="1.5"
      />
      {/* Right pupil */}
      <circle
        cx="59"
        cy="44"
        r="3"
        fill="#000000"
      />
      {/* Right eye shine */}
      <circle
        cx="57"
        cy="41"
        r="1.5"
        fill="#ffffff"
      />

      {/* Nose */}
      <path
        d="M 50 50 L 48 54 L 52 54 Z"
        fill="#ffb3d9"
        stroke="#000000"
        strokeWidth="1"
      />

      {/* Mouth */}
      <path
        d="M 50 54 Q 46 56 44 54"
        fill="none"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 50 54 Q 54 56 56 54"
        fill="none"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Whiskers - Left */}
      <line
        x1="32"
        y1="46"
        x2="22"
        y2="44"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="50"
        x2="22"
        y2="50"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="32"
        y1="54"
        x2="22"
        y2="56"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Whiskers - Right */}
      <line
        x1="68"
        y1="46"
        x2="78"
        y2="44"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="68"
        y1="50"
        x2="78"
        y2="50"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="68"
        y1="54"
        x2="78"
        y2="56"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Front legs */}
      <ellipse
        cx="45"
        cy="80"
        rx="5"
        ry="9"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
      />
      <ellipse
        cx="55"
        cy="80"
        rx="5"
        ry="9"
        fill="#ff8c42"
        stroke="#000000"
        strokeWidth="2"
      />
    </svg>
  );
};

export default CatCharacter;