import React from "react";
import { useReducedMotion } from "@/hooks";

export function PixelNetworkScene({ className = "" }) {
  const reduced = useReducedMotion();

  return (
    <div className={`pixel-network-scene-wrapper ${className}`}>
      <svg
        viewBox="0 0 380 140"
        className="pixel-network-svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ shapeRendering: "crispEdges" }}
      >
        <defs>
          <linearGradient id="netGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E2A38" />
            <stop offset="50%" stopColor="#293746" />
            <stop offset="100%" stopColor="#1E2A38" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="380" height="140" fill="url(#netGrad)" rx="8" />
        <rect x="0" y="0" width="380" height="140" fill="none" stroke="rgba(255,248,231,0.08)" strokeWidth="2" rx="8" />

        <path d="M 0 70 Q 40 70 70 70" stroke="#647D91" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />

        <g id="net-client">
          <rect x="40" y="45" width="44" height="32" fill="#0F172A" rx="2" />
          <rect x="42" y="47" width="40" height="28" fill="#1E293B" />
          <text x="62" y="60" textAnchor="middle" dominantBaseline="middle" fill="#8BA0B5" fontSize="6.5" fontFamily="var(--font-pixel)" letterSpacing="0.05em">CLIENT</text>
          <rect x="46" y="68" width="16" height="2" fill="#527C78" />
          <rect x="58" y="77" width="8" height="6" fill="#334155" />
          <rect x="50" y="83" width="24" height="3" fill="#334155" />
        </g>

        <path d="M 84 62 Q 130 62 165 62" stroke="#647D91" strokeWidth="3" fill="none" />
        <circle cx="125" cy="62" r="2" fill="#D9A441" className={reduced ? "" : "pixel-anim-led"} />

        <g id="net-router">
          <rect x="175" y="32" width="2" height="14" fill="#527C78" />
          <rect x="195" y="32" width="2" height="14" fill="#527C78" />

          <rect x="165" y="46" width="42" height="32" fill="#172230" rx="3" stroke="#527C78" strokeWidth="1.5" />
          <text x="186" y="58" textAnchor="middle" dominantBaseline="middle" fill="#527C78" fontSize="6.5" fontFamily="var(--font-pixel)" letterSpacing="0.05em">ROUTER</text>

          <circle cx="172" cy="70" r="1.5" fill="#527C78" />
          <circle cx="178" cy="70" r="1.5" fill="#527C78" />
          <circle cx="184" cy="70" r="1.5" fill="#D9A441" />
          <circle cx="190" cy="70" r="1.5" fill="#527C78" />
          <circle cx="196" cy="70" r="1.5" fill="#B85C38" />
        </g>

        <path d="M 207 62 Q 250 62 285 62" stroke="#527C78" strokeWidth="3" fill="none" />
        <circle cx="245" cy="62" r="2" fill="#527C78" className={reduced ? "" : "pixel-anim-led-delay"} />

        <g id="net-server">
          <rect x="285" y="30" width="55" height="75" fill="#0F172A" rx="3" stroke="#B85C38" strokeWidth="1.5" />
          <text x="312.5" y="42" textAnchor="middle" dominantBaseline="middle" fill="#FFF8E7" fontSize="6.5" fontFamily="var(--font-pixel)" letterSpacing="0.05em">SERVER</text>

          <rect x="290" y="48" width="45" height="10" fill="#1E293B" />
          <circle cx="295" cy="53" r="1.5" fill="#527C78" />
          <circle cx="300" cy="53" r="1.5" fill="#D9A441" />
          <rect x="310" y="52" width="20" height="2" fill="#527C78" />

          <rect x="290" y="61" width="45" height="10" fill="#1E293B" />
          <circle cx="295" cy="66" r="1.5" fill="#527C78" />
          <circle cx="300" cy="66" r="1.5" fill="#527C78" />
          <rect x="310" y="65" width="20" height="2" fill="#D9A441" />

          <rect x="290" y="74" width="45" height="10" fill="#1E293B" />
          <circle cx="295" cy="79" r="1.5" fill="#527C78" />
          <rect x="310" y="78" width="20" height="2" fill="#B85C38" />
        </g>

        <path d="M 340 70 Q 360 70 380 70" stroke="#B85C38" strokeWidth="2.5" fill="none" strokeDasharray="4 2" />
      </svg>
    </div>
  );
}
