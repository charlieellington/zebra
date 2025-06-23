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
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    
    // Make THREE available globally for Vanta
    if (typeof window !== "undefined") {
      (window as any).THREE = THREE;
    }

    let timeoutId: NodeJS.Timeout;

    // Dynamically import Vanta after THREE is available
    const initVanta = async () => {
      try {
        const VANTA = await import("vanta/dist/vanta.trunk.min");
        
        // Check if component is still mounted
        if (!mounted.current || !vantaRef.current) return;
        
        setVantaLoaded(true);

        // Small delay to ensure DOM is ready
        timeoutId = setTimeout(() => {
          if (!mounted.current || !vantaRef.current) return;

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
        }, 100);
      } catch (error) {
        console.error("Error loading Vanta:", error);
      }
    };

    initVanta();

    // Cleanup function
    return () => {
      mounted.current = false;
      
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // Delay cleanup to avoid race conditions
      setTimeout(() => {
        if (vantaEffect.current) {
          try {
            // Override the destroy method to prevent errors
            const renderer = vantaEffect.current.renderer;
            if (renderer && renderer.domElement && renderer.domElement.parentNode) {
              renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
            
            // Clear the effect without calling destroy
            vantaEffect.current.renderer = null;
            vantaEffect.current.scene = null;
            vantaEffect.current.camera = null;
            vantaEffect.current = null;
          } catch (error) {
            // Silently fail - element already removed
          }
        }
        
        if (onDestroy) onDestroy();
      }, 0);
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