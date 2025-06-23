"use client";

import React, { useEffect, useRef } from "react";
import TRUNK from "vanta/dist/vanta.trunk.min";
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

  useEffect(() => {
    if (!vantaRef.current) return;

    try {
      vantaEffect.current = TRUNK({
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

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        if (onDestroy) onDestroy();
      }
    };
  }, [width, height, chaos, color, backgroundColor, onDestroy]);

  return (
    <div
      ref={vantaRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
} 