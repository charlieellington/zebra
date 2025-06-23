"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ColoredHighlightProps {
  children: React.ReactNode;
  color: "purple" | "green" | "pink" | "coral" | "blue" | "yellow";
  className?: string;
}

const colorMap = {
  purple: {
    bg: "#CDCBFF30",
    text: "#6B68FF",
  },
  green: {
    bg: "#B8E8D430",
    text: "#4A9B7F",
  },
  pink: {
    bg: "#E7BDD730",
    text: "#C054A0",
  },
  coral: {
    bg: "#FDA7A030",
    text: "#E85D75",
  },
  blue: {
    bg: "#B8D4E330",
    text: "#5B8FB9",
  },
  yellow: {
    bg: "#FFDAB930",
    text: "#C09456",
  },
};

export function ColoredHighlight({ children, color, className }: ColoredHighlightProps) {
  const colors = colorMap[color];
  
  return (
    <span 
      className={cn(
        "inline-flex items-center px-3 py-1.5 mx-0.5 rounded-lg transition-all hover:scale-105",
        className
      )}
      style={{ 
        backgroundColor: colors.bg,
        verticalAlign: 'baseline',
      }}
    >
      <span 
        className="font-medium" 
        style={{ 
          color: colors.text,
          lineHeight: 1,
        }}
      >
        {children}
      </span>
    </span>
  );
} 