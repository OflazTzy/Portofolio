import React from "react";

export function PixelStudyRoom() {
  return (
    <div className="pixel-study-room-container" aria-hidden="true">
      <svg
        viewBox="0 0 800 260"
        className="pixel-study-room-svg"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          shapeRendering: "crispEdges",
          borderRadius: "var(--radius-lg)",
          border: "2px solid rgba(53, 37, 31, 0.12)",
          boxShadow: "0 10px 30px rgba(53, 37, 31, 0.06)",
          background: "#F7EBD2",
        }}
      >
        <defs>
          <linearGradient id="windowSunlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFEAA7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FAB1A0" stopOpacity="0.3" />
          </linearGradient>

          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D9A441" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#D9A441" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#D9A441" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="wallGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F5E5C9" />
            <stop offset="85%" stopColor="#EAD7B5" />
            <stop offset="100%" stopColor="#D6C09A" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="800" height="200" fill="url(#wallGradient)" />

        <rect x="0" y="200" width="800" height="60" fill="#35251F" />
        <rect x="0" y="200" width="800" height="4" fill="#B85C38" />
        <rect x="0" y="204" width="800" height="8" fill="#422F27" />

        {[0, 100, 200, 300, 400, 500, 600, 700].map((x) => (
          <rect key={x} x={x} y="212" width="2" height="48" fill="rgba(0,0,0,0.15)" />
        ))}
        {[40, 90, 140, 190, 240, 290, 340, 390, 440, 490, 540, 590, 640, 690, 740].map((yOffset, i) => (
          <rect key={i} x={(i * 55) % 760} y={212 + (i % 3) * 15} width="40" height="1" fill="rgba(255,255,255,0.06)" />
        ))}

        <rect x="0" y="194" width="800" height="6" fill="#5C3D2E" />

        <rect x="40" y="30" width="110" height="130" rx="4" fill="#35251F" />
        <rect x="44" y="34" width="102" height="122" rx="2" fill="#5C3D2E" />
        <rect x="48" y="38" width="94" height="114" fill="#78A6C8" />
        <rect x="48" y="38" width="94" height="114" fill="url(#windowSunlight)" />
        <rect x="55" y="55" width="24" height="8" fill="#FFF8E7" opacity="0.8" />
        <rect x="60" y="50" width="16" height="6" fill="#FFF8E7" opacity="0.8" />
        <rect x="95" y="70" width="30" height="10" fill="#FFF8E7" opacity="0.7" />
        <rect x="100" y="65" width="20" height="7" fill="#FFF8E7" opacity="0.7" />
        <rect x="48" y="120" width="94" height="32" fill="#527C78" opacity="0.5" />
        <rect x="70" y="110" width="45" height="20" fill="#527C78" opacity="0.7" />
        <rect x="94" y="38" width="2" height="114" fill="#5C3D2E" />
        <rect x="48" y="90" width="94" height="2" fill="#5C3D2E" />
        <rect x="36" y="158" width="118" height="6" fill="#35251F" />
        <rect x="110" y="146" width="12" height="12" fill="#B85C38" />
        <rect x="112" y="136" width="8" height="10" fill="#527C78" />
        <rect x="108" y="138" width="5" height="6" fill="#416360" />

        <g transform="translate(200, 35)">
          <rect x="0" y="0" width="60" height="45" fill="#35251F" rx="2" />
          <rect x="3" y="3" width="54" height="39" fill="#FFF8E7" />
          <rect x="6" y="6" width="48" height="33" fill="none" stroke="#527C78" strokeWidth="1" />
          <rect x="15" y="10" width="30" height="3" fill="#B85C38" />
          <rect x="12" y="16" width="36" height="2" fill="#35251F" opacity="0.6" />
          <rect x="16" y="21" width="28" height="2" fill="#35251F" opacity="0.4" />
          <rect x="20" y="26" width="20" height="2" fill="#35251F" opacity="0.4" />
          <circle cx="44" cy="30" r="4" fill="#D9A441" />
          <rect x="42" y="34" width="4" height="4" fill="#B85C38" />
        </g>

        <g transform="translate(280, 25)">
          <rect x="0" y="0" width="70" height="50" fill="#5C3D2E" rx="2" />
          <rect x="3" y="3" width="64" height="44" fill="#FFF8E7" />
          <rect x="6" y="6" width="58" height="38" fill="none" stroke="#B85C38" strokeWidth="1" />
          <rect x="20" y="10" width="32" height="4" fill="#527C78" />
          <rect x="14" y="18" width="44" height="2" fill="#35251F" opacity="0.7" />
          <rect x="18" y="23" width="36" height="2" fill="#35251F" opacity="0.5" />
          <rect x="22" y="28" width="28" height="2" fill="#35251F" opacity="0.5" />
          <circle cx="15" cy="34" r="4.5" fill="#D9A441" />
        </g>

        <g transform="translate(370, 35)">
          <rect x="0" y="0" width="55" height="42" fill="#35251F" rx="2" />
          <rect x="3" y="3" width="49" height="36" fill="#FFF8E7" />
          <rect x="5" y="5" width="45" height="32" fill="none" stroke="#D9A441" strokeWidth="1" />
          <rect x="14" y="9" width="27" height="3" fill="#647D91" />
          <rect x="10" y="15" width="35" height="2" fill="#35251F" opacity="0.6" />
          <rect x="14" y="20" width="27" height="2" fill="#35251F" opacity="0.4" />
          <circle cx="38" cy="27" r="4" fill="#B85C38" />
        </g>

        <line x1="230" y1="20" x2="230" y2="35" stroke="#35251F" strokeWidth="1" opacity="0.4" />
        <line x1="315" y1="15" x2="315" y2="25" stroke="#35251F" strokeWidth="1" opacity="0.4" />
        <line x1="397" y1="20" x2="397" y2="35" stroke="#35251F" strokeWidth="1" opacity="0.4" />

        <g transform="translate(450, 40)">
          <rect x="0" y="45" width="160" height="6" fill="#5C3D2E" />
          <rect x="10" y="51" width="10" height="12" fill="#35251F" />
          <rect x="140" y="51" width="10" height="12" fill="#35251F" />

          <rect x="15" y="15" width="12" height="30" fill="#B85C38" />
          <rect x="28" y="20" width="10" height="25" fill="#527C78" />
          <rect x="39" y="12" width="14" height="33" fill="#647D91" />
          <rect x="54" y="18" width="11" height="27" fill="#D9A441" />
          <rect x="70" y="22" width="24" height="9" fill="#E8B89A" transform="rotate(-20 70 22)" />
          <rect x="105" y="15" width="30" height="30" fill="#35251F" />
          <rect x="107" y="17" width="26" height="26" fill="#FFF8E7" />
          <rect x="111" y="21" width="18" height="2" fill="#527C78" />
          <rect x="111" y="26" width="18" height="10" fill="#EAD7B5" />
          <circle cx="120" cy="38" r="2.5" fill="#D9A441" />
        </g>

        <g transform="translate(650, 70)">
          <rect x="0" y="0" width="110" height="130" fill="#35251F" rx="3" />
          <rect x="4" y="4" width="102" height="122" fill="#5C3D2E" />
          <rect x="4" y="42" width="102" height="5" fill="#35251F" />
          <rect x="4" y="82" width="102" height="5" fill="#35251F" />

          <rect x="12" y="14" width="12" height="28" fill="#B85C38" />
          <rect x="25" y="10" width="14" height="32" fill="#527C78" />
          <rect x="40" y="16" width="10" height="26" fill="#D9A441" />
          <rect x="51" y="20" width="16" height="22" fill="#647D91" />
          <rect x="75" y="18" width="24" height="24" fill="#35251F" />
          <rect x="77" y="20" width="20" height="20" fill="#FFF8E7" />
          <circle cx="87" cy="30" r="3" fill="#D9A441" />

          <rect x="12" y="52" width="15" height="30" fill="#647D91" />
          <rect x="28" y="56" width="12" height="26" fill="#E8B89A" />
          <rect x="41" y="50" width="14" height="32" fill="#B85C38" />
          <rect x="62" y="70" width="38" height="12" fill="#527C78" />
          <rect x="65" y="61" width="32" height="9" fill="#D9A441" />

          <rect x="12" y="94" width="25" height="30" fill="#293746" />
          <rect x="40" y="94" width="25" height="30" fill="#293746" />
          <rect x="68" y="94" width="35" height="30" fill="#35251F" />
          <rect x="18" y="104" width="13" height="8" fill="#FFF8E7" />
          <rect x="46" y="104" width="13" height="8" fill="#FFF8E7" />
        </g>

        <g transform="translate(180, 130)">
          <rect x="20" y="60" width="10" height="70" fill="#35251F" />
          <rect x="360" y="60" width="10" height="70" fill="#35251F" />
          <rect x="15" y="124" width="20" height="6" fill="#35251F" />
          <rect x="355" y="124" width="20" height="6" fill="#35251F" />

          <rect x="0" y="50" width="390" height="12" fill="#5C3D2E" rx="2" />
          <rect x="0" y="50" width="390" height="3" fill="#8B5A2B" />
          <rect x="0" y="60" width="390" height="3" fill="#35251F" />

          <rect x="140" y="-15" width="110" height="62" fill="#35251F" rx="3" />
          <rect x="144" y="-11" width="102" height="54" fill="#293746" />
          <rect x="150" y="-5" width="35" height="3" fill="#B85C38" />
          <rect x="150" y="2" width="55" height="3" fill="#527C78" />
          <rect x="158" y="9" width="40" height="3" fill="#D9A441" />
          <rect x="158" y="16" width="60" height="3" fill="#647D91" />
          <rect x="150" y="23" width="25" height="3" fill="#B85C38" />
          <rect x="150" y="30" width="70" height="3" fill="#527C78" />

          <rect x="187" y="47" width="16" height="5" fill="#35251F" />
          <rect x="175" y="49" width="40" height="2" fill="#35251F" />

          <rect x="155" y="51" width="60" height="3" fill="#35251F" />
          <rect x="230" y="51" width="10" height="3" fill="#35251F" />

          <rect x="60" y="42" width="32" height="10" fill="#FFF8E7" />
          <rect x="75" y="42" width="2" height="10" fill="#B85C38" />
          <rect x="64" y="44" width="8" height="2" fill="#35251F" opacity="0.5" />
          <rect x="64" y="48" width="8" height="2" fill="#35251F" opacity="0.5" />

          <rect x="105" y="38" width="14" height="14" fill="#B85C38" rx="2" />
          <rect x="107" y="36" width="10" height="2" fill="#FFF8E7" />
          <rect x="119" y="42" width="4" height="6" fill="none" stroke="#B85C38" strokeWidth="2" />
          <path d="M109 32 Q 111 28 109 25" stroke="#FFF8E7" strokeWidth="1.5" fill="none" opacity="0.6" />
          <path d="M114 33 Q 116 29 114 26" stroke="#FFF8E7" strokeWidth="1.5" fill="none" opacity="0.6" />

          <rect x="20" y="48" width="24" height="4" fill="#35251F" />
          <path d="M 32 48 Q 25 20 40 5" stroke="#35251F" strokeWidth="3" fill="none" />
          <polygon points="35,5 55,-2 48,15 30,12" fill="#B85C38" />
          <polygon points="35,14 10,-5 120,52 35,52" fill="url(#lampGlow)" />

          <rect x="300" y="36" width="16" height="16" fill="#B85C38" />
          <rect x="298" y="34" width="20" height="3" fill="#35251F" />
          <rect x="304" y="20" width="8" height="14" fill="#527C78" />
          <rect x="296" y="24" width="10" height="8" fill="#416360" />
          <rect x="310" y="22" width="10" height="8" fill="#416360" />
        </g>

        <g transform="translate(275, 140)">
          <rect x="-10" y="0" width="12" height="45" fill="#35251F" rx="2" />
          <rect x="-6" y="45" width="4" height="25" fill="#35251F" />

          <rect x="2" y="12" width="26" height="30" fill="#B85C38" rx="3" />
          <rect x="8" y="8" width="14" height="5" fill="#FFF8E7" />

          <rect x="6" y="-12" width="18" height="20" fill="#E8B89A" rx="2" />
          <rect x="4" y="-16" width="22" height="10" fill="#35251F" rx="2" />
          <rect x="4" y="-10" width="5" height="8" fill="#35251F" />
          <rect x="14" y="-5" width="8" height="6" fill="none" stroke="#35251F" strokeWidth="1.5" />

          <rect x="18" y="22" width="22" height="8" fill="#B85C38" rx="2" />
          <rect x="38" y="24" width="8" height="6" fill="#E8B89A" />
        </g>
      </svg>
    </div>
  );
}
