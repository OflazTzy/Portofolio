import React from "react";
import { useReducedMotion } from "@/hooks";

export function PixelScene({ grid, pixelSize = 4, width, height, className = "", style = {} }) {
  const reduced = useReducedMotion();

  if (!grid || grid.length === 0) return null;

  const shadows = grid
    .map(({ x, y, color }) => `${x * pixelSize}px ${y * pixelSize}px 0 ${color}`)
    .join(",");

  return (
    <div
      className={`pixel-scene-wrapper ${className}`}
      style={{
        position: "relative",
        width: width || "100%",
        height: height || "auto",
        overflow: "hidden",
        ...style,
      }}
      aria-hidden="true"
    >
      <div
        className="pixel-art"
        style={{
          width: `${pixelSize}px`,
          height: `${pixelSize}px`,
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

export function PixelClouds({ count = 5 }) {
  const reduced = useReducedMotion();

  const clouds = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: 10 + Math.random() * 30,
    width: 40 + Math.random() * 60,
    height: 8 + Math.random() * 12,
    duration: 40 + Math.random() * 50,
    delay: -(Math.random() * 60),
    opacity: 0.3 + Math.random() * 0.4,
  }));

  if (reduced) return null;

  return (
    <>
      {clouds.map((c) => (
        <div
          key={c.id}
          className="pixel-cloud"
          style={{
            top: `${c.top}%`,
            width: `${c.width}px`,
            height: `${c.height}px`,
            opacity: c.opacity,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`,
            borderRadius: "2px",
          }}
        />
      ))}
    </>
  );
}

export function PixelDivider({ count = 5, color }) {
  return (
    <div className="pixel-divider">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          style={color ? { backgroundColor: color } : undefined}
        />
      ))}
    </div>
  );
}

export function PixelElement({ type, size = 1, style = {} }) {
  const s = size;
  const elements = {
    tree: (
      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", ...style }} aria-hidden="true">
        <div style={{ width: 12*s, height: 12*s, backgroundColor: "#4A7C59", imageRendering: "pixelated" }} />
        <div style={{ width: 8*s, height: 8*s, backgroundColor: "#5A8C69", imageRendering: "pixelated", marginTop: -2*s }} />
        <div style={{ width: 4*s, height: 10*s, backgroundColor: "#8B6B50", imageRendering: "pixelated" }} />
      </div>
    ),
    house: (
      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", ...style }} aria-hidden="true">
        <div style={{ width: 0, height: 0, borderLeft: `${10*s}px solid transparent`, borderRight: `${10*s}px solid transparent`, borderBottom: `${8*s}px solid #B85C38` }} />
        <div style={{ width: 20*s, height: 14*s, backgroundColor: "#E8B89A", imageRendering: "pixelated" }} />
        <div style={{ width: 6*s, height: 8*s, backgroundColor: "#8B6B50", imageRendering: "pixelated", marginTop: -8*s }} />
      </div>
    ),
    pole: (
      <div style={{ display: "inline-flex", flexDirection: "column", absolute: "center", ...style }} aria-hidden="true">
        <div style={{ width: 2*s, height: 40*s, backgroundColor: "#6B5E57", imageRendering: "pixelated" }} />
        <div style={{ width: 20*s, height: 1*s, backgroundColor: "#555", marginTop: -35*s, imageRendering: "pixelated" }} />
      </div>
    ),
    star: (
      <div style={{ width: 3*s, height: 3*s, backgroundColor: "#FFF8E7", imageRendering: "pixelated", borderRadius: 0, ...style }} aria-hidden="true" />
    ),
  };

  return elements[type] || null;
}
