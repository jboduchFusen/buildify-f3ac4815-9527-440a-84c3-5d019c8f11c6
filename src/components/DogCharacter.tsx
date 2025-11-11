
import React from 'react';

interface DogCharacterProps {
  className?: string;
  scale?: number;
  animationState?: 'idle' | 'bounce' | 'wiggle' | 'defeated';
}

const DogCharacter: React.FC<DogCharacterProps> = ({
  className = '',
  scale = 1,
  animationState = 'idle'
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`dog-character dog-${animationState} ${className}`}
      style={{ width: `${100 * scale}px`, height: `${100 * scale}px` }}
    >
      {/* Tail (behind body) */}
      <path
        d="M 20 65 Q 15 60 18 50"
        fill="none"
        stroke="#8b4513"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Body (angular rectangle) */}
      <rect
        x="25"
        y="55"
        width="35"
        height="25"
        rx="4"
        fill="#a0522d"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Back legs */}
      <rect
        x="28"
        y="75"
        width="8"
        height="15"
        rx="2"
        fill="#8b4513"
        stroke="#000000"
        strokeWidth="2"
      />
      <rect
        x="40"
        y="75"
        width="8"
        height="15"
        rx="2"
        fill="#8b4513"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Head (angular shape) */}
      <rect
        x="45"
        y="35"
        width="30"
        height="28"
        rx="3"
        fill="#a0522d"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Snout (protruding rectangle) */}
      <rect
        x="70"
        y="45"
        width="15"
        height="12"
        rx="2"
        fill="#8b4513"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Nose */}
      <ellipse
        cx="82"
        cy="51"
        rx="3"
        ry="2.5"
        fill="#000000"
      />

      {/* Left ear (floppy triangle) */}
      <path
        d="M 48 35 L 42 25 L 50 32 Z"
        fill="#8b4513"
        stroke="#000000"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Right ear (pointed triangle) */}
      <path
        d="M 68 35 L 72 22 L 70 32 Z"
        fill="#8b4513"
        stroke="#000000"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Eyes (angry/grumpy expression) */}
      {/* Left eye white */}
      <ellipse
        cx="54"
        cy="45"
        rx="4"
        ry="5"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="1.5"
      />
      {/* Left pupil (looking down/angry) */}
      <circle
        cx="55"
        cy="47"
        r="2"
        fill="#000000"
      />

      {/* Right eye white */}
      <ellipse
        cx="66"
        cy="45"
        rx="4"
        ry="5"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="1.5"
      />
      {/* Right pupil (looking down/angry) */}
      <circle
        cx="67"
        cy="47"
        r="2"
        fill="#000000"
      />

      {/* Angry eyebrows */}
      <line
        x1="50"
        y1="41"
        x2="57"
        y2="43"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="63"
        y1="43"
        x2="70"
        y2="41"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Mouth (grumpy frown) */}
      <path
        d="M 72 56 Q 75 54 78 56"
        fill="none"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Teeth (showing aggression) */}
      <path
        d="M 73 56 L 73 58"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M 77 56 L 77 58"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Collar with spikes */}
      <rect
        x="45"
        y="60"
        width="30"
        height="5"
        fill="#ff0000"
        stroke="#000000"
        strokeWidth="1.5"
      />
      {/* Collar spikes */}
      <path
        d="M 50 60 L 52 56 L 54 60"
        fill="#c0c0c0"
        stroke="#000000"
        strokeWidth="1"
      />
      <path
        d="M 58 60 L 60 56 L 62 60"
        fill="#c0c0c0"
        stroke="#000000"
        strokeWidth="1"
      />
      <path
        d="M 66 60 L 68 56 L 70 60"
        fill="#c0c0c0"
        stroke="#000000"
        strokeWidth="1"
      />

      {/* Front legs */}
      <rect
        x="50"
        y="75"
        width="8"
        height="15"
        rx="2"
        fill="#8b4513"
        stroke="#000000"
        strokeWidth="2"
      />
      <rect
        x="62"
        y="75"
        width="8"
        height="15"
        rx="2"
        fill="#8b4513"
        stroke="#000000"
        strokeWidth="2"
      />

      {/* Paws (darker) */}
      <ellipse
        cx="32"
        cy="88"
        rx="4"
        ry="2.5"
        fill="#654321"
      />
      <ellipse
        cx="44"
        cy="88"
        rx="4"
        ry="2.5"
        fill="#654321"
      />
      <ellipse
        cx="54"
        cy="88"
        rx="4"
        ry="2.5"
        fill="#654321"
      />
      <ellipse
        cx="66"
        cy="88"
        rx="4"
        ry="2.5"
        fill="#654321"
      />
    </svg>
  );
};

export default DogCharacter;