"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface VantaTrunkProps {
  width?: number;
  height?: number;
  chaos?: number;
  color?: string;
  backgroundColor?: string;
  className?: string;
  onDestroy?: () => void;
}

export default function VantaTrunk({
  width = 300,
  height = 300,
  chaos = 1.0,
  color = 0x000000,
  backgroundColor = 0xffffff,
  className = "",
  onDestroy,
}: VantaTrunkProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [vantaLoaded, setVantaLoaded] = useState(false);

  useEffect(() => {
    // Make THREE available globally for Vanta
    if (typeof window !== "undefined") {
      (window as any).THREE = THREE;
    }

    // Dynamically import Vanta after THREE is available
    import("vanta/dist/vanta.trunk.min").then((VANTA) => {
      setVantaLoaded(true);
      
      if (!vantaRef.current) return;

      try {
        vantaEffect.current = VANTA.default({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: height,
          minWidth: width,
          scale: 1.0,
          scaleMobile: 1.0,
          color: color,
          backgroundColor: backgroundColor,
          chaos: chaos,
          spacing: 10,
        });
      } catch (error) {
        console.error("Error initializing Vanta Trunk:", error);
      }
    });

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        try {
          // Check if the element still exists before destroying
          if (vantaRef.current && vantaEffect.current.destroy) {
            vantaEffect.current.destroy();
          }
        } catch (error) {
          console.error("Error destroying Vanta effect:", error);
        }
        vantaEffect.current = null;
      }
      if (onDestroy) onDestroy();
    };
  }, []); // Empty dependency array to prevent re-initialization

  return (
    <div
      ref={vantaRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: `${width}px`, 
        height: `${height}px`,
        backgroundColor: vantaLoaded ? 'transparent' : '#f5f5f5'
      }}
    >
      {!vantaLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
} 