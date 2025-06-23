"use client";

import { useEffect, useRef } from 'react';
// Dynamic imports will be used inside the effect to avoid SSR import issues

interface VantaTrunkProps {
  /**
   * Controls how wild vs. orderly the trunk pattern is.
   * - Low values (0.2-0.5): Calm, orderly branches - good for footers or success sections
   * - Medium values (0.8-1.2): Balanced complexity - good for content sections
   * - High values (1.5-2.0): Chaotic, tangled branches - good for problem/challenge sections
   * @default 0.5
   */
  chaos?: number;
  
  /**
   * Controls the distance between branch lines.
   * - Lower values (5-10): Dense pattern
   * - Medium values (10-15): Balanced spacing
   * - Higher values (15-20): Open, airy pattern
   * @default 10
   */
  spacing?: number;
  
  /**
   * Sets the line color in hexadecimal format.
   * Examples: 0x000000 (black), 0x111111 (dark gray), 0xFF0000 (red)
   * @default 0x000000
   */
  color?: number;
  
  /**
   * Sets the canvas background color in hexadecimal format.
   * Should typically match your section's background color.
   * @default 0xffffff
   */
  backgroundColor?: number;
  
  /**
   * Width of the canvas. Can be a number (pixels) or string (e.g., "100%")
   * @default "100%"
   */
  width?: string | number;
  
  /**
   * Height of the canvas. Can be a number (pixels) or string (e.g., "100%")
   * @default "100%"
   */
  height?: string | number;
  
  /**
   * Enable pointer/gyro interaction. Disabling saves a few ms per frame.
   * Defaults to false for better performance; set to true if you need parallax.
   * @default false
   */
  interactive?: boolean;
}

/**
 * VantaTrunk - A reusable Vanta.js trunk animation component
 * 
 * Usage examples:
 * 
 * // Calm footer effect
 * <VantaTrunk chaos={0.2} spacing={15} color={0x494868} />
 * 
 * // Moderate content section
 * <VantaTrunk chaos={1.0} spacing={10} color={0x111111} />
 * 
 * // Chaotic hero/problem section
 * <VantaTrunk chaos={1.5} spacing={8} color={0x2A2A2D} interactive={true} />
 * 
 * Performance notes:
 * - Limit to 2 concurrent instances maximum
 * - Hidden on mobile by default for performance
 * - Automatically cleans up on unmount
 */
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