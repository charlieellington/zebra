import React from "react";

interface CSSTreePatternProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function CSSTreePattern({ 
  width = 300, 
  height = 300, 
  className = "" 
}: CSSTreePatternProps) {
  return (
    <div 
      className={`relative overflow-hidden bg-gray-50 ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg 
        viewBox="0 0 300 300" 
        className="w-full h-full opacity-20"
        aria-hidden="true"
      >
        <defs>
          <pattern 
            id="trunk-pattern" 
            x="0" 
            y="0" 
            width="60" 
            height="60" 
            patternUnits="userSpaceOnUse"
          >
            {/* Main trunk */}
            <path 
              d="M30 0 L30 60" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              fill="none"
              className="text-gray-600"
            />
            {/* Branches */}
            <path 
              d="M30 20 L15 5 M30 20 L45 5" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none"
              className="text-gray-500 animate-pulse"
              style={{ animationDelay: '0s', animationDuration: '4s' }}
            />
            <path 
              d="M30 40 L10 20 M30 40 L50 20" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none"
              className="text-gray-500 animate-pulse"
              style={{ animationDelay: '1s', animationDuration: '4s' }}
            />
            <path 
              d="M30 60 L20 45 M30 60 L40 45" 
              stroke="currentColor" 
              strokeWidth="0.5" 
              fill="none"
              className="text-gray-400 animate-pulse"
              style={{ animationDelay: '2s', animationDuration: '4s' }}
            />
          </pattern>
          
          {/* Gradient for depth */}
          <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'rgb(249 250 251)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(249 250 251)', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        
        {/* Apply pattern */}
        <rect width="300" height="300" fill="url(#trunk-pattern)" />
        
        {/* Overlay gradient */}
        <rect width="300" height="300" fill="url(#fade-gradient)" opacity="0.5" />
      </svg>
      
      {/* Animated dots for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-float"
             style={{ top: '20%', left: '30%', animationDelay: '0s' }} />
        <div className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-float"
             style={{ top: '60%', left: '70%', animationDelay: '1.5s' }} />
        <div className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-float"
             style={{ top: '40%', left: '50%', animationDelay: '3s' }} />
      </div>
    </div>
  );
} 