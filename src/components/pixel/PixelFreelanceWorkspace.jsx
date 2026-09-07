import React from "react";
import { useReducedMotion } from "@/hooks";

export function PixelFreelanceWorkspace({ className = "" }) {
  const reduced = useReducedMotion();

  return (
    <div className={`pixel-freelance-workspace-wrapper ${className}`}>
      <svg
        viewBox="0 0 380 170"
        className="pixel-freelance-svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ shapeRendering: "crispEdges" }}
      >
        <defs>
          <linearGradient id="freelanceWall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7EBD2" />
            <stop offset="100%" stopColor="#EADBBF" />
          </linearGradient>

          <linearGradient id="freelanceSun" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF2D4" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#B85C38" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="380" height="135" fill="url(#freelanceWall)" />
        <rect x="0" y="135" width="380" height="5" fill="#B88A68" />
        <rect x="0" y="140" width="380" height="30" fill="#8B6B50" />
        <rect x="0" y="152" width="380" height="1" fill="#7A5C43" />
        <rect x="0" y="162" width="380" height="1" fill="#7A5C43" />

        <rect x="236" y="12" width="124" height="95" fill="#35251F" />
        <rect x="240" y="16" width="116" height="87" fill="#F5D698" />
        <rect x="240" y="60" width="116" height="43" fill="#E28C68" opacity="0.7" />
        <circle cx="320" cy="36" r="9" fill="#FFF2DB" opacity="0.9" />
        <rect x="240" y="58" width="116" height="3" fill="#6B4E37" />
        <rect x="298" y="16" width="3" height="87" fill="#6B4E37" />

        <polygon points="298,61 356,103 240,165 70,165" fill="url(#freelanceSun)" />

        <rect x="22" y="22" width="36" height="26" fill="#35251F" />
        <rect x="24" y="24" width="32" height="22" fill="#FFF8E7" />
        <rect x="28" y="28" width="14" height="2" fill="#B85C38" />
        <rect x="28" y="32" width="24" height="1.5" fill="#527C78" />
        <rect x="28" y="35" width="18" height="1.5" fill="#35251F" />

        <rect x="12" y="118" width="356" height="8" fill="#B88A68" />
        <rect x="12" y="118" width="356" height="2" fill="#D8B292" />
        <rect x="12" y="126" width="356" height="14" fill="#8B6B50" />
        <rect x="24" y="140" width="8" height="30" fill="#6B4E37" />
        <rect x="348" y="140" width="8" height="30" fill="#6B4E37" />

        <g id="freelance-laptop">
          <rect x="42" y="90" width="46" height="28" fill="#293746" />
          <rect x="44" y="92" width="42" height="24" fill="#1E293B" />
          <rect x="47" y="95" width="18" height="2" fill="#B85C38" />
          <rect x="67" y="95" width="14" height="2" fill="#D9A441" />
          <rect x="51" y="99" width="30" height="2" fill="#527C78" />
          <rect x="51" y="103" width="22" height="2" fill="#FFF8E7" opacity="0.85" />
          <rect x="47" y="107" width="34" height="2" fill="#647D91" />
          <rect x="38" y="116" width="54" height="4" fill="#647D91" />
        </g>

        <g id="freelance-monitor">
          <rect x="110" y="68" width="84" height="50" fill="#1F2937" />
          <rect x="112" y="70" width="80" height="46" fill="#0F172A" />
          <rect x="114" y="72" width="76" height="4" fill="#1E293B" />
          <circle cx="118" cy="74" r="1.2" fill="#E55353" />
          <circle cx="122" cy="74" r="1.2" fill="#E5B453" />
          <circle cx="126" cy="74" r="1.2" fill="#53E58C" />
          <rect x="118" y="80" width="20" height="2" fill="#B85C38" />
          <rect x="140" y="80" width="28" height="2" fill="#D9A441" />
          <rect x="122" y="84" width="38" height="2" fill="#527C78" />
          <rect x="122" y="88" width="44" height="2" fill="#FFF8E7" opacity="0.9" />
          <rect x="122" y="92" width="26" height="2" fill="#647D91" />
          <rect x="118" y="96" width="14" height="2" fill="#527C78" />
          <rect x="146" y="116" width="12" height="4" fill="#35251F" />
        </g>

        <g id="freelance-accessories">
          <rect x="206" y="110" width="8" height="8" fill="#FFF8E7" />
          <rect x="207" y="111" width="6" height="2" fill="#B85C38" />
          <rect x="220" y="110" width="24" height="8" fill="#293746" />
          <circle cx="224" cy="114" r="1" fill="#527C78" />
          <circle cx="228" cy="114" r="1" fill="#D9A441" />
        </g>
      </svg>
    </div>
  );
}
