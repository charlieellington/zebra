"use client";

import { useEffect, useRef } from 'react';
import TRUNK from 'vanta/dist/vanta.trunk.min';
import * as p5 from 'p5';

interface VantaTrunkProps {
  chaos?: number;
  spacing?: number;
  color?: number;
  backgroundColor?: number;
  width?: string | number;
  height?: string | number;
}

function VantaTrunk({ 
  chaos = 0.5, 
  spacing = 10, 
  color = 0x000000, 
  backgroundColor = 0xffffff, 
  width = '100%', 
  height = '100%' 
}: VantaTrunkProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!vantaRef.current) return;
    
    // Initialize Vanta Trunk effect on mount
    const vantaEffect = TRUNK({
      el: vantaRef.current,
      p5: p5,                      // provide p5 library
      mouseControls: true,         // allow mouse interaction (optional)
      touchControls: true,         // allow touch interaction (optional)
      gyroControls: false,         // no gyro control
      minHeight: 200.0,            // minimum dimensions
      minWidth: 200.0,
      chaos: chaos,                // chaos level (branching randomness)
      spacing: spacing,            // spacing between branch lines
      color: color,                // branch line color (hexadecimal)
      backgroundColor: backgroundColor // background color behind the branches
    });
    
    return () => {
      // Cleanup on unmount to prevent memory leaks
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [chaos, spacing, color, backgroundColor]);

  // The returned div will be filled by the Vanta effect
  return <div ref={vantaRef} style={{ width, height }} />;
}

export default VantaTrunk; 