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
  /**
   * Enable pointer/gyro interaction. Disabling saves a few ms per frame.
   * Defaults to false for better performance; set to true if you need parallax.
   */
  interactive?: boolean;
}

function VantaTrunk({
  chaos = 0.5,
  spacing = 10,
  color = 0x000000,
  backgroundColor = 0xffffff,
  width = "100%",
  height = "100%",
  interactive = false,
}: VantaTrunkProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null); // guard against Strict-Mode double mount

  useEffect(() => {
    if (!vantaRef.current || effectRef.current) return; // already initialised

    let vantaEffect: any;

    // Dynamically import p5 and TRUNK only on the client to avoid SSR errors
    const loadVanta = async () => {
      const p5Module = await import("p5");
      const p5Instance = p5Module.default ?? p5Module; // support both default & namespace export

      // Clamp pixel density to 1× to reduce GPU load on retina screens
      try {
        if (typeof p5Instance.prototype.pixelDensity === "function") {
          p5Instance.prototype.pixelDensity(1);
        }
      } catch (_) {
        /* noop */
      }

      const vantaModule = await import("vanta/dist/vanta.trunk.min");
      const TRUNK = vantaModule.default ?? vantaModule;

      if (!TRUNK) return;

      vantaEffect = TRUNK({
        el: vantaRef.current,
        p5: p5Instance,
        mouseControls: interactive,
        touchControls: interactive,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        chaos,
        spacing,
        color,
        backgroundColor,
      });

      effectRef.current = vantaEffect; // mark as initialised
    };

    loadVanta();

    // Cleanup on unmount
    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [chaos, spacing, color, backgroundColor, interactive]);

  // The returned div will be filled by the Vanta effect
  return <div ref={vantaRef} style={{ width, height }} />;
}

export default VantaTrunk; 