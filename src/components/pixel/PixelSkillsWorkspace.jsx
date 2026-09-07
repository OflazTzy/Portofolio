import React, { useState } from "react";
import { useReducedMotion } from "@/hooks";

export function PixelSkillsWorkspace({ activeCategory, onSelectCategory, className = "" }) {
  const reduced = useReducedMotion();
  const [hoveredObj, setHoveredObj] = useState(null);

  const objects = [
    { id: "fullstack", label: "Full Stack Dev", icon: "💻" },
    { id: "security", label: "Cyber Security", icon: "🛡️" },
    { id: "networking", label: "Networking", icon: "🔗" },
    { id: "ml", label: "AI / Machine Learning", icon: "⚙️" },
    { id: "database", label: "Database", icon: "🗄️" },
    { id: "design", label: "Design", icon: "🎨" },
    { id: "os", label: "Operating System", icon: "🖥️" },
  ];

  const handleObjClick = (catId) => {
    if (onSelectCategory) {
      onSelectCategory(activeCategory === catId ? "all" : catId);
    }
  };

  return (
    <div className={`pixel-skills-workspace-container ${className}`}>
      <div className="pixel-workspace-header-bar">
        <div className="pixel-workspace-dots">
          <span className="pixel-dot red" />
          <span className="pixel-dot yellow" />
          <span className="pixel-dot green" />
          <span className="pixel-workspace-title">interactive_developer_workspace.env</span>
        </div>
        <div className="pixel-workspace-hint">
          {hoveredObj ? (
            <span className="pixel-hint-active">Hovering: <strong>{hoveredObj.toUpperCase()}</strong></span>
          ) : activeCategory && activeCategory !== "all" ? (
            <span className="pixel-hint-active">Active Filter: <strong>{activeCategory.toUpperCase()}</strong></span>
          ) : (
            <span className="pixel-hint-muted">Click or hover objects to highlight skills</span>
          )}
        </div>
      </div>

      <div className="pixel-workspace-viewport">
        <svg
          viewBox="0 0 380 210"
          className="pixel-workspace-svg"
          preserveAspectRatio="xMidYMid meet"
          style={{ shapeRendering: "crispEdges" }}
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E28C68" />
              <stop offset="60%" stopColor="#F5D698" />
              <stop offset="100%" stopColor="#F9E4B7" />
            </linearGradient>

            <linearGradient id="sunBeam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF5D6" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#B85C38" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="380" height="160" fill="#F5E9D3" />
          <rect x="0" y="0" width="380" height="5" fill="#E5D3B5" />
          <rect x="0" y="160" width="380" height="6" fill="#B88A68" />
          <rect x="0" y="166" width="380" height="44" fill="#8B6B50" />
          <rect x="0" y="180" width="380" height="1" fill="#7A5C43" />
          <rect x="0" y="196" width="380" height="1" fill="#7A5C43" />

          <rect x="236" y="14" width="130" height="100" fill="#35251F" />
          <rect x="240" y="18" width="122" height="92" fill="url(#skyGrad)" />
          <circle cx="330" cy="36" r="9" fill="#FFF2DB" opacity="0.9" />
          <rect x="310" y="38" width="3" height="72" fill="#55443B" />
          <rect x="304" y="44" width="16" height="2" fill="#3D3029" />
          <path d="M 240 48 Q 280 54 304 45" stroke="#3D3029" strokeWidth="1" fill="none" />
          <rect x="240" y="60" width="122" height="4" fill="#6B4E37" />
          <rect x="300" y="18" width="4" height="92" fill="#6B4E37" />

          <polygon points="300,64 362,110 240,185 80,185" fill="url(#sunBeam)" />

          <g
            className="interactive-pixel-obj"
            onClick={() => handleObjClick("os")}
            onMouseEnter={() => setHoveredObj("Operating System (Linux & Windows)")}
            onMouseLeave={() => setHoveredObj(null)}
            cursor="pointer"
          >
            <rect x="20" y="20" width="36" height="28" fill="#35251F" />
            <rect
              x="22"
              y="22"
              width="32"
              height="24"
              fill={activeCategory === "os" ? "#293746" : "#1F2937"}
              stroke={activeCategory === "os" ? "#B85C38" : "none"}
              strokeWidth="1"
            />
            <rect x="25" y="30" width="8" height="2" fill="#527C78" />
            <rect x="35" y="30" width="14" height="2" fill="#FFF8E7" opacity="0.9" />
            <rect x="25" y="35" width="16" height="1.5" fill="#D9A441" />
            <rect x="25" y="39" width="22" height="1.5" fill="#FFF8E7" opacity="0.8" />
          </g>

          <g
            className="interactive-pixel-obj"
            onClick={() => handleObjClick("ml")}
            onMouseEnter={() => setHoveredObj("AI / Machine Learning (Python, TensorFlow)")}
            onMouseLeave={() => setHoveredObj(null)}
            cursor="pointer"
          >
            <rect x="70" y="24" width="40" height="24" fill="#35251F" />
            <rect
              x="72"
              y="26"
              width="36"
              height="20"
              fill={activeCategory === "ml" ? "#FFF2D4" : "#FFF8E7"}
              stroke={activeCategory === "ml" ? "#D9A441" : "none"}
              strokeWidth="1"
            />
            <circle cx="80" cy="36" r="2" fill="#B85C38" />
            <circle cx="90" cy="31" r="2" fill="#527C78" />
            <circle cx="90" cy="41" r="2" fill="#527C78" />
            <circle cx="100" cy="36" r="2" fill="#D9A441" />
            <line x1="80" y1="36" x2="90" y2="31" stroke="#35251F" strokeWidth="0.8" />
            <line x1="80" y1="36" x2="90" y2="41" stroke="#35251F" strokeWidth="0.8" />
            <line x1="90" y1="31" x2="100" y2="36" stroke="#35251F" strokeWidth="0.8" />
            <line x1="90" y1="41" x2="100" y2="36" stroke="#35251F" strokeWidth="0.8" />
          </g>

          <g
            className="interactive-pixel-obj"
            onClick={() => handleObjClick("database")}
            onMouseEnter={() => setHoveredObj("Database (MySQL, PostgreSQL)")}
            onMouseLeave={() => setHoveredObj(null)}
            cursor="pointer"
          >
            <rect x="18" y="128" width="28" height="42" fill="#293746" />
            <rect
              x="20"
              y="130"
              width="24"
              height="38"
              fill="#1F2937"
              stroke={activeCategory === "database" ? "#B85C38" : "none"}
              strokeWidth="1"
            />
            <rect x="23" y="134" width="18" height="6" fill="#374151" />
            <rect x="23" y="143" width="18" height="6" fill="#374151" />
            <rect x="23" y="152" width="18" height="6" fill="#374151" />
            <circle cx="26" cy="137" r="1" fill="#527C78" />
            <circle cx="30" cy="137" r="1" fill="#D9A441" />
            <circle cx="26" cy="146" r="1" fill="#527C78" />
            <circle cx="26" cy="155" r="1" fill="#527C78" />
          </g>

          <rect x="12" y="138" width="340" height="8" fill="#B88A68" />
          <rect x="12" y="138" width="340" height="2" fill="#D8B292" />
          <rect x="12" y="146" width="340" height="12" fill="#8B6B50" />
          <rect x="52" y="158" width="8" height="34" fill="#6B4E37" />
          <rect x="332" y="158" width="8" height="34" fill="#6B4E37" />

          <g
            className="interactive-pixel-obj"
            onClick={() => handleObjClick("fullstack")}
            onMouseEnter={() => setHoveredObj("Full Stack Dev (PHP, JS, React, Laravel, REST API)")}
            onMouseLeave={() => setHoveredObj(null)}
            cursor="pointer"
          >
            <rect x="54" y="106" width="46" height="30" fill="#293746" />
            <rect
              x="56"
              y="108"
              width="42"
              height="26"
              fill={activeCategory === "fullstack" ? "#B85C38" : "#1E293B"}
              stroke={activeCategory === "fullstack" ? "#FFF8E7" : "none"}
              strokeWidth="1"
            />
            <rect x="59" y="111" width="16" height="2" fill="#B85C38" />
            <rect x="77" y="111" width="18" height="2" fill="#D9A441" />
            <rect x="63" y="115" width="28" height="2" fill="#527C78" />
            <rect x="63" y="119" width="22" height="2" fill="#FFF8E7" opacity="0.9" />
            <rect x="59" y="123" width="32" height="2" fill="#527C78" />
            <rect x="50" y="136" width="54" height="4" fill="#647D91" />
            <rect x="70" y="138" width="14" height="1" fill="#293746" />
          </g>

          <g
            className="interactive-pixel-obj"
            onClick={() => handleObjClick("security")}
            onMouseEnter={() => setHoveredObj("Cyber Security & Security Tools (OWASP, VA/PT, Burp, Nmap)")}
            onMouseLeave={() => setHoveredObj(null)}
            cursor="pointer"
          >
            <rect x="156" y="132" width="16" height="6" fill="#35251F" />
            <rect x="162" y="120" width="4" height="12" fill="#4B5563" />
            <rect x="124" y="78" width="80" height="48" fill="#1F2937" />
            <rect
              x="126"
              y="80"
              width="76"
              height="44"
              fill={activeCategory === "security" ? "#293746" : "#1E293B"}
              stroke={activeCategory === "security" ? "#527C78" : "none"}
              strokeWidth="1.5"
            />
            <rect x="128" y="82" width="72" height="4" fill="#111827" />
            <circle cx="132" cy="84" r="1" fill="#E55353" />
            <circle cx="136" cy="84" r="1" fill="#E5B453" />
            <circle cx="140" cy="84" r="1" fill="#53E58C" />
            <polygon points="164,88 174,88 174,96 169,102 164,96" fill="#527C78" />
            <polygon points="166,90 172,90 172,95 169,99 166,95" fill="#293746" />
            <rect x="132" y="106" width="30" height="2" fill="#527C78" />
            <rect x="132" y="110" width="40" height="2" fill="#D9A441" />
            <rect x="132" y="114" width="24" height="2" fill="#FFF8E7" opacity="0.8" />
          </g>

          <g
            className="interactive-pixel-obj"
            onClick={() => handleObjClick("networking")}
            onMouseEnter={() => setHoveredObj("Networking (TCP/IP, OSI, Subnetting, DNS, Routing)")}
            onMouseLeave={() => setHoveredObj(null)}
            cursor="pointer"
          >
            <rect x="214" y="128" width="30" height="10" fill="#293746" />
            <rect
              x="216"
              y="129"
              width="26"
              height="8"
              fill={activeCategory === "networking" ? "#647D91" : "#1F2937"}
            />
            <rect x="218" y="116" width="2" height="12" fill="#3A4D62" />
            <rect x="238" y="116" width="2" height="12" fill="#3A4D62" />
            <circle cx="221" cy="133" r="1" fill="#527C78" />
            <circle cx="225" cy="133" r="1" fill="#527C78" />
            <circle cx="229" cy="133" r="1" fill="#D9A441" />
            <circle cx="233" cy="133" r="1" fill="#527C78" />
            <path d="M 227 138 Q 232 148 230 166" stroke="#647D91" strokeWidth="1.5" fill="none" />
          </g>

          <g
            className="interactive-pixel-obj"
            onClick={() => handleObjClick("design")}
            onMouseEnter={() => setHoveredObj("Design (Figma, Canva, Adobe Animate, PowerPoint)")}
            onMouseLeave={() => setHoveredObj(null)}
            cursor="pointer"
          >
            <rect x="254" y="130" width="32" height="8" fill="#35251F" />
            <rect
              x="256"
              y="131"
              width="28"
              height="6"
              fill={activeCategory === "design" ? "#E8B89A" : "#D8B292"}
            />
            <rect x="288" y="132" width="12" height="1.5" fill="#B85C38" />
          </g>

          <g>
            <polygon points="300,126 314,126 312,138 302,138" fill="#B85C38" />
            <rect x="303" y="116" width="10" height="10" fill="#4A7C59" />
            <rect x="300" y="119" width="6" height="6" fill="#5A8C69" />
            <rect x="310" y="119" width="6" height="6" fill="#5A8C69" />
          </g>
        </svg>
      </div>

      <div className="pixel-workspace-filters">
        <button
          className={`pixel-filter-btn ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => onSelectCategory("all")}
        >
          [ ALL SKILLS ]
        </button>
        {objects.map((obj) => (
          <button
            key={obj.id}
            className={`pixel-filter-btn ${activeCategory === obj.id ? "active" : ""}`}
            onClick={() => handleObjClick(obj.id)}
          >
            {obj.label}
          </button>
        ))}
      </div>
    </div>
  );
}
