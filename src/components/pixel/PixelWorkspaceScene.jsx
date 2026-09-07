import React from "react";
import { useReducedMotion } from "@/hooks";

export function PixelWorkspaceScene({ className = "" }) {
  const reduced = useReducedMotion();

  return (
    <div
      className={`pixel-workspace-container ${className}`}
      aria-label="Pixel art workspace scene"
    >
      <svg
        viewBox="0 0 320 200"
        className="pixel-workspace-svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ shapeRendering: "crispEdges" }}
      >
        <defs>
          <linearGradient id="sunlightBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D4" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#F9DF9C" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#B85C38" stopOpacity="0.02" />
          </linearGradient>

          <linearGradient id="afternoonSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E28C68" />
            <stop offset="50%" stopColor="#F5D698" />
            <stop offset="100%" stopColor="#F9E4B7" />
          </linearGradient>

          <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="320" height="154" fill="#F5E9D3" />
        <rect x="0" y="0" width="320" height="4" fill="#E8D5B7" />

        <rect x="0" y="154" width="320" height="6" fill="#B88A68" />

        <rect x="0" y="160" width="320" height="40" fill="#8B6B50" />
        <rect x="0" y="170" width="320" height="1" fill="#7A5C43" />
        <rect x="0" y="182" width="320" height="1" fill="#7A5C43" />
        <rect x="0" y="194" width="320" height="1" fill="#7A5C43" />
        <rect x="60" y="160" width="1" height="10" fill="#7A5C43" />
        <rect x="180" y="160" width="1" height="10" fill="#7A5C43" />
        <rect x="120" y="171" width="1" height="11" fill="#7A5C43" />
        <rect x="250" y="171" width="1" height="11" fill="#7A5C43" />
        <rect x="40" y="183" width="1" height="11" fill="#7A5C43" />
        <rect x="210" y="183" width="1" height="11" fill="#7A5C43" />

        <rect x="176" y="12" width="132" height="108" fill="#35251F" />
        <rect x="180" y="16" width="124" height="100" fill="url(#afternoonSky)" />

        <circle cx="280" cy="36" r="10" fill="#FFF2DB" opacity="0.9" />

        <g className={reduced ? "" : "pixel-anim-cloud"}>
          <rect x="190" y="30" width="24" height="6" fill="#FFF8E7" opacity="0.8" />
          <rect x="194" y="27" width="16" height="3" fill="#FFF8E7" opacity="0.8" />
          <rect x="235" y="42" width="30" height="7" fill="#FFF8E7" opacity="0.75" />
        </g>

        <rect x="180" y="85" width="45" height="31" fill="#4A7C59" />
        <rect x="184" y="78" width="35" height="10" fill="#5A8C69" />
        <rect x="195" y="74" width="20" height="5" fill="#6B9C7A" />

        <rect x="268" y="40" width="4" height="76" fill="#55443B" />
        <rect x="260" y="48" width="20" height="2" fill="#3D3029" />
        <rect x="262" y="56" width="16" height="2" fill="#3D3029" />
        <path d="M 180 50 Q 220 56 260 49" stroke="#3D3029" strokeWidth="1" fill="none" />
        <path d="M 280 49 Q 295 53 304 52" stroke="#3D3029" strokeWidth="1" fill="none" />
        <path d="M 180 58 Q 220 63 262 57" stroke="#3D3029" strokeWidth="1" fill="none" />

        <rect x="180" y="16" width="124" height="4" fill="#6B4E37" />
        <rect x="180" y="112" width="124" height="4" fill="#6B4E37" />
        <rect x="180" y="16" width="4" height="100" fill="#6B4E37" />
        <rect x="300" y="16" width="4" height="100" fill="#6B4E37" />
        <rect x="240" y="16" width="4" height="100" fill="#6B4E37" />
        <rect x="180" y="64" width="124" height="4" fill="#6B4E37" />

        <polygon
          points="240,68 304,116 190,175 40,175"
          fill="url(#sunlightBeam)"
          className={reduced ? "" : "pixel-anim-sunlight"}
        />

        {!reduced && (
          <g className="pixel-anim-dust">
            <rect x="150" y="110" width="2" height="2" fill="#FFF8E7" opacity="0.8" />
            <rect x="200" y="90" width="2" height="2" fill="#FFF8E7" opacity="0.6" />
            <rect x="180" y="140" width="2" height="2" fill="#FFF8E7" opacity="0.7" />
            <rect x="230" y="120" width="2" height="2" fill="#FFF8E7" opacity="0.9" />
          </g>
        )}

        <rect x="24" y="24" width="36" height="28" fill="#35251F" />
        <rect x="26" y="26" width="32" height="24" fill="#FFF8E7" />
        <rect x="30" y="30" width="12" height="2" fill="#B85C38" />
        <rect x="30" y="34" width="24" height="1.5" fill="#527C78" />
        <rect x="30" y="37" width="18" height="1.5" fill="#35251F" />
        <rect x="30" y="40" width="20" height="1.5" fill="#647D91" />
        <circle cx="50" cy="42" r="3" fill="#D9A441" />

        <rect x="100" y="26" width="16" height="16" fill="#35251F" />
        <rect x="102" y="28" width="12" height="12" fill="#FFF8E7" />
        <rect x="107" y="33" width="4" height="1.5" fill="#35251F" />
        <rect x="107" y="30" width="1.5" fill="#35251F" height="4" />

        <rect x="122" y="104" width="36" height="46" fill="#293746" />
        <rect x="126" y="108" width="28" height="38" fill="#3A4D62" />
        <rect x="138" y="150" width="4" height="20" fill="#1F2937" />

        <rect x="16" y="132" width="268" height="8" fill="#B88A68" />
        <rect x="16" y="132" width="268" height="2" fill="#D8B292" />
        <rect x="16" y="140" width="268" height="14" fill="#8B6B50" />
        <rect x="16" y="154" width="268" height="2" fill="#6B4E37" />

        <rect x="24" y="156" width="8" height="34" fill="#6B4E37" />
        <rect x="268" y="156" width="8" height="34" fill="#6B4E37" />

        <g id="desk-laptop">
          <rect x="32" y="128" width="44" height="4" fill="#647D91" />
          <rect x="44" y="131" width="20" height="1" fill="#293746" />
          <rect x="34" y="100" width="40" height="28" fill="#293746" />
          <rect x="36" y="102" width="36" height="24" fill="url(#screenGlow)" />
          <rect x="38" y="104" width="32" height="3" fill="#B85C38" opacity="0.9" />
          <rect x="38" y="109" width="14" height="2" fill="#527C78" />
          <rect x="38" y="113" width="22" height="2" fill="#D9A441" />
          <rect x="38" y="117" width="18" height="2" fill="#FFF8E7" opacity="0.8" />
          <rect x="38" y="121" width="26" height="2" fill="#527C78" />
          <circle cx="70" cy="126" r="1" fill="#527C78" />
        </g>

        <g id="desk-monitor">
          <rect x="120" y="126" width="16" height="6" fill="#35251F" />
          <rect x="126" y="116" width="4" height="12" fill="#4B5563" />
          <rect x="94" y="74" width="68" height="44" fill="#1F2937" />
          <rect x="96" y="76" width="64" height="40" fill="url(#screenGlow)" />
          <rect x="98" y="78" width="60" height="4" fill="#111827" />
          <circle cx="102" cy="80" r="1" fill="#E53E3E" />
          <circle cx="106" cy="80" r="1" fill="#DD6B20" />
          <circle cx="110" cy="80" r="1" fill="#38A169" />
          <rect x="100" y="86" width="16" height="2" fill="#B85C38" />
          <rect x="118" y="86" width="22" height="2" fill="#D9A441" />
          <rect x="104" y="90" width="30" height="2" fill="#527C78" />
          <rect x="104" y="94" width="24" height="2" fill="#FFF8E7" opacity="0.85" />
          <rect x="104" y="98" width="36" height="2" fill="#647D91" />
          <rect x="104" y="102" width="18" height="2" fill="#B85C38" />
          <rect x="100" y="106" width="10" height="2" fill="#527C78" />
          <rect
            x="112"
            y="106"
            width="3"
            height="3"
            fill="#D9A441"
            className={reduced ? "" : "pixel-anim-cursor"}
          />
        </g>

        <g id="desk-security">
          <rect x="170" y="118" width="12" height="14" fill="#293746" />
          <rect x="172" y="120" width="8" height="10" fill="#527C78" />
          <polygon points="176,120 180,123 176,130 172,123" fill="#D9A441" />
        </g>

        <g id="desk-network">
          <rect x="190" y="124" width="24" height="8" fill="#293746" />
          <rect x="193" y="114" width="2" height="10" fill="#3A4D62" />
          <rect x="209" y="114" width="2" height="10" fill="#3A4D62" />
          <circle cx="196" cy="128" r="1" fill="#527C78" className={reduced ? "" : "pixel-anim-led"} />
          <circle cx="200" cy="128" r="1" fill="#527C78" className={reduced ? "" : "pixel-anim-led-delay"} />
          <circle cx="204" cy="128" r="1" fill="#D9A441" />
          <circle cx="208" cy="128" r="1" fill="#527C78" />
          <path d="M 202 132 Q 206 142 204 158" stroke="#3A4D62" strokeWidth="1.5" fill="none" />
        </g>

        <g id="desk-books">
          <rect x="222" y="126" width="28" height="6" fill="#B85C38" />
          <rect x="224" y="127" width="24" height="4" fill="#D87854" />
          <rect x="222" y="127" width="2" height="4" fill="#FFF8E7" />
          <rect x="224" y="120" width="24" height="6" fill="#527C78" />
          <rect x="226" y="121" width="20" height="4" fill="#6B9C97" />
          <rect x="224" y="121" width="2" height="4" fill="#FFF8E7" />
          <rect x="227" y="115" width="20" height="5" fill="#D9A441" />
          <rect x="227" y="116" width="2" height="3" fill="#FFF8E7" />
        </g>

        <g id="desk-plant">
          <polygon points="260,120 274,120 272,132 262,132" fill="#B85C38" />
          <rect x="259" y="118" width="18" height="2" fill="#D87854" />
          <rect x="262" y="120" width="10" height="2" fill="#35251F" />
          <rect x="264" y="110" width="8" height="8" fill="#4A7C59" />
          <rect x="258" y="112" width="7" height="6" fill="#5A8C69" />
          <rect x="270" y="113" width="6" height="6" fill="#5A8C69" />
          <rect x="263" y="105" width="6" height="6" fill="#6B9C7A" />
        </g>

        <g id="desk-coffee">
          <rect x="80" y="124" width="8" height="8" fill="#FFF8E7" />
          <rect x="86" y="126" width="2" height="4" fill="#FFF8E7" />
          <rect x="81" y="125" width="6" height="2" fill="#B85C38" />
        </g>

        <rect x="0" y="0" width="320" height="2" fill="#35251F" opacity="0.3" />
        <rect x="0" y="198" width="320" height="2" fill="#35251F" opacity="0.3" />
        <rect x="0" y="0" width="2" height="200" fill="#35251F" opacity="0.3" />
        <rect x="318" y="0" width="2" height="200" fill="#35251F" opacity="0.3" />
      </svg>
    </div>
  );
}
