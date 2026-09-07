import React from "react";
import { useReducedMotion } from "@/hooks";

export function PixelResearchWorkspace({ className = "" }) {
  const reduced = useReducedMotion();

  return (
    <div className={`pixel-research-workspace-wrapper ${className}`}>
      <svg
        viewBox="0 0 380 160"
        className="pixel-research-svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ shapeRendering: "crispEdges" }}
      >
        <defs>
          <linearGradient id="eveningWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#251F1C" />
            <stop offset="100%" stopColor="#35251F" />
          </linearGradient>

          <linearGradient id="screenYellowGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#292013" />
            <stop offset="100%" stopColor="#1A140A" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="380" height="125" fill="url(#eveningWall)" />
        <rect x="0" y="125" width="380" height="5" fill="#453128" />
        <rect x="0" y="130" width="380" height="30" fill="#251A16" />

        <rect x="240" y="12" width="120" height="85" fill="#1C1410" />
        <rect x="244" y="16" width="112" height="77" fill="#2A1B14" />
        <rect x="244" y="60" width="112" height="33" fill="#6E3524" opacity="0.6" />
        <rect x="244" y="75" width="112" height="18" fill="#B85C38" opacity="0.4" />
        <rect x="244" y="55" width="112" height="3" fill="#35251F" />
        <rect x="300" y="16" width="3" height="77" fill="#35251F" />

        <rect x="15" y="110" width="350" height="8" fill="#8B6B50" />
        <rect x="15" y="110" width="350" height="2" fill="#A37B5C" />
        <rect x="15" y="118" width="350" height="12" fill="#6B4E37" />
        <rect x="35" y="130" width="8" height="30" fill="#4A3425" />
        <rect x="335" y="130" width="8" height="30" fill="#4A3425" />

        <g id="ml-monitor">
          <rect x="50" y="55" width="80" height="52" fill="#1F1A17" />
          <rect x="52" y="57" width="76" height="48" fill="url(#screenYellowGlow)" />
          <rect x="54" y="59" width="72" height="6" fill="#3D2E1A" />
          <circle cx="58" cy="62" r="1.2" fill="#E55353" />
          <circle cx="62" cy="62" r="1.2" fill="#E5B453" />
          <circle cx="66" cy="62" r="1.2" fill="#53E58C" />
          <rect x="72" y="61" width="28" height="2" fill="#D9A441" />

          <rect x="60" y="88" width="6" height="12" fill="#B85C38" />
          <rect x="70" y="80" width="6" height="20" fill="#D9A441" />
          <rect x="80" y="74" width="6" height="26" fill="#527C78" />
          <rect x="90" y="84" width="6" height="16" fill="#D9A441" />
          <rect x="100" y="70" width="6" height="30" fill="#B85C38" />
          <rect x="110" y="78" width="6" height="22" fill="#527C78" />
          <path d="M 63 90 L 73 82 L 83 76 L 93 85 L 103 72 L 113 80" stroke="#FFF8E7" strokeWidth="1.5" fill="none" />
          <rect x="84" y="107" width="12" height="3" fill="#3D2E1A" />
        </g>

        <g id="research-paper">
          <rect x="145" y="92" width="40" height="20" fill="#FFF8E7" transform="rotate(-4 145 92)" />
          <rect x="149" y="96" width="20" height="2" fill="#B85C38" />
          <rect x="149" y="100" width="30" height="1.5" fill="#35251F" />
          <rect x="149" y="103" width="26" height="1.5" fill="#35251F" />
          <rect x="149" y="106" width="32" height="1.5" fill="#527C78" />
        </g>

        <g id="ml-laptop">
          <rect x="195" y="78" width="48" height="30" fill="#251F1C" />
          <rect x="197" y="80" width="44" height="26" fill="#1C1814" />
          <rect x="200" y="83" width="14" height="2" fill="#D9A441" />
          <rect x="216" y="83" width="20" height="2" fill="#FFF8E7" />
          <rect x="200" y="88" width="24" height="2" fill="#527C78" />
          <rect x="200" y="93" width="34" height="2" fill="#B85C38" />
          <rect x="200" y="98" width="18" height="2" fill="#FFF8E7" opacity="0.85" />
          <rect x="190" y="108" width="58" height="4" fill="#453128" />
        </g>
      </svg>
    </div>
  );
}
