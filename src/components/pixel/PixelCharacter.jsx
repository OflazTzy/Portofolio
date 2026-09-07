import React from "react";
import { useReducedMotion } from "@/hooks";

export function PixelCharacter({ scale = 3, animation = "idle", className = "", style = {} }) {
  const reduced = useReducedMotion();
  const ps = scale;

  const skin = "#E8B89A";
  const hair = "#35251F";
  const shirt = "#527C78";
  const pants = "#293746";
  const shoes = "#35251F";
  const laptop = "#647D91";
  const laptopScreen = "#87CEEB";

  const pixels = [
    { x: 6, y: 1, color: hair }, { x: 7, y: 1, color: hair }, { x: 8, y: 1, color: hair }, { x: 9, y: 1, color: hair },
    { x: 5, y: 2, color: hair }, { x: 6, y: 2, color: hair }, { x: 7, y: 2, color: hair }, { x: 8, y: 2, color: hair }, { x: 9, y: 2, color: hair }, { x: 10, y: 2, color: hair },

    { x: 6, y: 3, color: skin }, { x: 7, y: 3, color: skin }, { x: 8, y: 3, color: skin }, { x: 9, y: 3, color: skin },
    { x: 5, y: 4, color: skin }, { x: 6, y: 4, color: hair }, { x: 7, y: 4, color: skin }, { x: 8, y: 4, color: skin }, { x: 9, y: 4, color: hair }, { x: 10, y: 4, color: skin },
    { x: 6, y: 5, color: skin }, { x: 7, y: 5, color: skin }, { x: 8, y: 5, color: skin }, { x: 9, y: 5, color: skin },

    { x: 5, y: 6, color: shirt }, { x: 6, y: 6, color: shirt }, { x: 7, y: 6, color: shirt }, { x: 8, y: 6, color: shirt }, { x: 9, y: 6, color: shirt }, { x: 10, y: 6, color: shirt },
    { x: 4, y: 7, color: skin }, { x: 5, y: 7, color: shirt }, { x: 6, y: 7, color: shirt }, { x: 7, y: 7, color: shirt }, { x: 8, y: 7, color: shirt }, { x: 9, y: 7, color: shirt }, { x: 10, y: 7, color: shirt }, { x: 11, y: 7, color: skin },
    { x: 4, y: 8, color: skin }, { x: 5, y: 8, color: shirt }, { x: 6, y: 8, color: shirt }, { x: 7, y: 8, color: shirt }, { x: 8, y: 8, color: shirt }, { x: 9, y: 8, color: shirt }, { x: 10, y: 8, color: shirt }, { x: 11, y: 8, color: skin },

    { x: 3, y: 9, color: laptop }, { x: 4, y: 9, color: laptop }, { x: 5, y: 9, color: laptopScreen }, { x: 6, y: 9, color: laptopScreen }, { x: 7, y: 9, color: laptopScreen }, { x: 8, y: 9, color: laptop },
    { x: 3, y: 10, color: laptop }, { x: 4, y: 10, color: laptop }, { x: 5, y: 10, color: laptop }, { x: 6, y: 10, color: laptop }, { x: 7, y: 10, color: laptop }, { x: 8, y: 10, color: laptop },

    { x: 6, y: 10, color: pants }, { x: 7, y: 10, color: pants }, { x: 8, y: 10, color: pants }, { x: 9, y: 10, color: pants },
    { x: 5, y: 11, color: pants }, { x: 6, y: 11, color: pants }, { x: 7, y: 11, color: pants }, { x: 8, y: 11, color: pants }, { x: 9, y: 11, color: pants }, { x: 10, y: 11, color: pants },
    { x: 5, y: 12, color: pants }, { x: 6, y: 12, color: pants }, { x: 9, y: 12, color: pants }, { x: 10, y: 12, color: pants },

    { x: 4, y: 13, color: shoes }, { x: 5, y: 13, color: shoes }, { x: 6, y: 13, color: shoes },
    { x: 9, y: 13, color: shoes }, { x: 10, y: 13, color: shoes }, { x: 11, y: 13, color: shoes },
  ];

  const shadows = pixels
    .map(({ x, y, color }) => `${x * ps}px ${y * ps}px 0 ${color}`)
    .join(",");

  const animationStyle = !reduced && animation === "idle"
    ? { animation: "breathe 3s ease-in-out infinite" }
    : !reduced && animation === "walk"
    ? { animation: "pixel-walk 0.6s ease-in-out infinite" }
    : {};

  return (
    <div
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        width: `${16 * ps}px`,
        height: `${16 * ps}px`,
        ...animationStyle,
        ...style,
      }}
      aria-hidden="true"
      role="img"
      aria-label="Pixel art character"
    >
      <div
        style={{
          width: `${ps}px`,
          height: `${ps}px`,
          boxShadow: shadows,
          position: "absolute",
          top: 0,
          left: 0,
          imageRendering: "pixelated",
        }}
      />
    </div>
  );
}
