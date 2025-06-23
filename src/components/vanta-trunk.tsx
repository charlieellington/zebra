"use client";

import { useEffect, useRef } from 'react';
// Dynamic imports will be used inside the effect to avoid SSR import issues

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
  width = "100%",
  height = "100%",
}: VantaTrunkProps) {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    let vantaEffect: any;

    // Dynamically import p5 and TRUNK only on the client to avoid SSR errors
    const loadVanta = async () => {
      const p5Module = await import("p5");
      const p5Instance = p5Module.default ?? p5Module; // support both default & namespace export

      const vantaModule = await import("vanta/dist/vanta.trunk.min");
      const TRUNK = vantaModule.default ?? vantaModule;

      if (!TRUNK) return;

      vantaEffect = TRUNK({
        el: vantaRef.current,
        p5: p5Instance,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        chaos,
        spacing,
        color,
        backgroundColor,
      });
    };

    loadVanta();

    // Cleanup on unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [chaos, spacing, color, backgroundColor]);

  // The returned div will be filled by the Vanta effect
  return <div ref={vantaRef} style={{ width, height }} />;
}

export default VantaTrunk; 