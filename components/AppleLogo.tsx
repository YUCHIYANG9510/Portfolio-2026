import React from 'react';

interface AppleLogoProps {
  size?: number;
  className?: string;
  src?: string;
}

export const AppleLogo: React.FC<AppleLogoProps> = ({ size = 18, className = '', src }) => {
  // If custom image source is provided, render as img
  if (src) {
    return (
      <img
        src={src}
        alt="Apple"
        width={size}
        height={size}
        className={className}
        draggable="false"
      />
    );
  }

  // Default SVG Apple logo
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.05 13.5c-.73 2.89 2.3 5.48 4.87 3.65 1.23-.86 1.84-2.21 1.77-3.65-.07-1.44-.83-2.48-1.99-3.02 1.28-.14 2.23-.86 2.7-2.15.47-1.29.38-2.65-.28-3.95C22.82 1.56 20.96.5 18.7.5c-1.33 0-2.53.42-3.58 1.25-1.05.83-1.57 1.9-1.57 3.2 0 1.3.52 2.37 1.57 3.2 1.05.83 2.25 1.25 3.58 1.25.83 0 1.61-.15 2.35-.45-.51 1.1-1.18 1.96-2 2.57-1.13.86-2.49 1.31-4.08 1.31-1.28 0-2.42-.32-3.42-.97-1-.64-1.72-1.52-2.16-2.64-.44-1.13-.48-2.35-.13-3.66.35-1.31 1.07-2.42 2.17-3.32 1.1-.9 2.4-1.43 3.91-1.6.62-.07 1.23-.1 1.85-.1.62 0 1.23.03 1.85.1 1.51.17 2.81.7 3.91 1.6 1.1.9 1.82 2.01 2.17 3.32.35 1.31.31 2.53-.13 3.66-.44 1.13-1.16 2.01-2.16 2.65-1 .65-2.14.97-3.42.97-1.59 0-2.95-.45-4.08-1.31-.82-.61-1.49-1.47-2-2.57z" />
    </svg>
  );
};
