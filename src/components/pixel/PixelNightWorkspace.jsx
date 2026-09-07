import React from "react";
import { useReducedMotion } from "@/hooks";

export function PixelNightWorkspace({ className = "" }) {
  const reduced = useReducedMotion();

  return (
    <div className={`pixel-night-workspace-wrapper ${className}`}>
      <svg
        viewBox="0 0 380 180"
        className="pixel-night-svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ shapeRendering: "crispEdges" }}
      >
        <defs>
          <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B131F" />
            <stop offset="100%" stopColor="#1E2A38" />
          </linearGradient>

          <linearGradient id="deskLampGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F5D698" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#527C78" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="380" height="140" fill="#172230" />
        <rect x="0" y="140" width="380" height="6" fill="#253548" />
        <rect x="0" y="146" width="380" height="34" fill="#0F1722" />

        <rect x="230" y="14" width="130" height="90" fill="#090E17" />
        <rect x="234" y="18" width="122" height="82" fill="url(#nightSky)" />

        <rect x="250" y="30" width="2" height="2" fill="#FFF8E7" opacity="0.9" />
        <rect x="280" y="24" width="1.5" height="1.5" fill="#FFF8E7" opacity="0.7" />
        <rect x="320" y="36" width="2" height="2" fill="#FFF8E7" opacity="0.8" />
        <rect x="340" y="50" width="1.5" height="1.5" fill="#FFF8E7" opacity="0.6" />
        <circle cx="335" cy="30" r="7" fill="#FFF2D4" />
        <circle cx="338" cy="28" r="6" fill="#0B131F" />

        <rect x="234" y="55" width="122" height="3" fill="#293746" />
        <rect x="294" y="18" width="3" height="82" fill="#293746" />

        <polygon points="30,40 120,150 0,150" fill="url(#deskLampGlow)" />

        <rect x="34" y="50" width="4" height="25" fill="#527C78" />
        <rect x="26" y="44" width="18" height="6" fill="#527C78" />
        <circle cx="35" cy="52" r="3" fill="#F5D698" opacity="0.9" />

        <rect x="20" y="100" width="28" height="50" fill="#0F172A" />
        <rect x="22" y="102" width="24" height="46" fill="#1E293B" />
        <rect x="25" y="106" width="18" height="6" fill="#334155" />
        <rect x="25" y="116" width="18" height="6" fill="#334155" />
        <rect x="25" y="126" width="18" height="6" fill="#334155" />
        <circle cx="28" cy="109" r="1" fill="#527C78" />
        <circle cx="32" cy="109" r="1" fill="#D9A441" />
        <circle cx="28" cy="119" r="1" fill="#527C78" />

        <rect x="10" y="120" width="360" height="8" fill="#293746" />
        <rect x="10" y="120" width="360" height="2" fill="#527C78" />
        <rect x="10" y="128" width="360" height="12" fill="#1E293B" />
        <rect x="30" y="140" width="8" height="36" fill="#172230" />
        <rect x="340" y="140" width="8" height="36" fill="#172230" />

        <rect x="70" y="75" width="65" height="45" fill="#0F172A" />
        <rect x="72" y="77" width="61" height="41" fill="#1E293B" />
        <rect x="74" y="79" width="57" height="4" fill="#0F172A" />
        <rect x="76" y="86" width="24" height="2" fill="#527C78" />
        <rect x="76" y="90" width="34" height="2" fill="#FFF8E7" opacity="0.8" />
        <rect x="76" y="94" width="20" height="2" fill="#D9A441" />
        <rect x="76" y="98" width="28" height="2" fill="#B85C38" />
        <rect x="76" y="102" width="16" height="2" fill="#527C78" />
        <rect x="96" y="120" width="12" height="5" fill="#334155" />

        <rect x="145" y="65" width="85" height="55" fill="#0F172A" />
        <rect x="147" y="67" width="81" height="51" fill="#1E293B" />
        <rect x="149" y="69" width="77" height="4" fill="#0F172A" />
        <polygon points="183,78 193,78 193,86 188,92 183,86" fill="#527C78" />
        <rect x="154" y="96" width="30" height="2" fill="#B85C38" />
        <rect x="154" y="100" width="45" height="2" fill="#527C78" />
        <rect x="154" y="104" width="28" height="2" fill="#FFF8E7" opacity="0.85" />
        <rect x="154" y="108" width="36" height="2" fill="#D9A441" />
        <rect x="180" y="120" width="14" height="5" fill="#334155" />

        <rect x="240" y="112" width="28" height="8" fill="#0F172A" />
        <circle cx="244" cy="116" r="1" fill="#527C78" />
        <circle cx="248" cy="116" r="1" fill="#527C78" />
        <circle cx="252" cy="116" r="1" fill="#D9A441" />
        <path d="M 256 116 Q 300 118 380 125" stroke="#527C78" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}
