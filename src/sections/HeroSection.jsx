import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import { PixelClouds } from "@/components/pixel/PixelScene";
import { PixelCharacter } from "@/components/pixel/PixelCharacter";

export function HeroSection() {
  return (
    <section id="home" className="hero scene-afternoon" aria-label="Hero section">
      <PixelClouds count={5} />

      <div className="hero-content">
        <div className="hero-text">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="pixel-label" style={{ color: "var(--terracotta)", marginBottom: "0.5rem", display: "block" }}>
              ■ PORTFOLIO
            </span>
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            MUHAMMAD DAVID<br />FAWWAS OLFAT
          </motion.h1>

          <motion.div
            className="hero-title-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="hero-title-primary">
              FULL STACK DEVELOPER
            </div>
            <div className="hero-title-secondary">
              CYBER SECURITY
            </div>
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Fresh Graduate S1 Informatika dengan fokus pada Full Stack Development dan Cyber Security. Memiliki pengalaman membangun aplikasi web, REST API, serta melakukan vulnerability assessment dan penetration testing.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <a href="#projects" className="btn-primary hero-cta-primary" id="hero-explore">
              <ArrowDown size={16} />
              <span>EXPLORE MY WORK</span>
            </a>
            <a href={profile.cvUrl} download className="btn-secondary hero-cta-secondary" id="hero-cv">
              <FileDown size={16} />
              <span>DOWNLOAD CV</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-portrait-frame">
            <img
              src={profile.photo}
              alt={`Foto profesional ${profile.name}`}
              className="hero-photo"
              loading="eager"
            />
          </div>

          <PixelCharacter
            scale={2.5}
            animation="idle"
            style={{
              position: "absolute",
              bottom: "-14px",
              right: "-12px",
              zIndex: 4,
            }}
          />
        </motion.div>
      </div>

      <div className="pixel-environment" aria-hidden="true">
        {[
          { left: "3%", width: 55, height: 32, roofColor: "#A85332", wallColor: "#E8D8C0" },
          { left: "18%", width: 45, height: 28, roofColor: "#456965", wallColor: "#D4C5B0" },
          { left: "42%", width: 65, height: 42, roofColor: "#A85332", wallColor: "#F0DEC0" },
          { left: "62%", width: 40, height: 26, roofColor: "#546A7B", wallColor: "#E8D8C0" },
          { left: "80%", width: 50, height: 34, roofColor: "#A85332", wallColor: "#E8B89A" },
        ].map((h, i) => (
          <div key={i} style={{ position: "absolute", bottom: "52px", left: h.left, imageRendering: "pixelated", opacity: 0.9 }}>
            <div style={{
              width: 0,
              height: 0,
              borderLeft: `${h.width / 2 + 4}px solid transparent`,
              borderRight: `${h.width / 2 + 4}px solid transparent`,
              borderBottom: `${h.height * 0.4}px solid ${h.roofColor}`,
              marginLeft: "-4px",
            }} />
            <div style={{
              width: `${h.width}px`,
              height: `${h.height}px`,
              backgroundColor: h.wallColor,
              border: `1px solid rgba(53,37,31,0.12)`,
            }}>
              <div style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#F5D698",
                border: "1px solid rgba(53,37,31,0.2)",
                position: "absolute",
                top: "6px",
                left: `${h.width / 2 - 3.5}px`,
              }} />
            </div>
          </div>
        ))}

        {["28%", "72%"].map((left, i) => (
          <div key={`pole-${i}`} style={{ position: "absolute", bottom: "48px", left, imageRendering: "pixelated", zIndex: 2 }}>
            <div style={{ width: "3px", height: "75px", backgroundColor: "#55443B" }} />
            <div style={{ width: "26px", height: "2px", backgroundColor: "#3D3029", position: "absolute", top: "8px", left: "-11px" }} />
            <div style={{ width: "20px", height: "2px", backgroundColor: "#3D3029", position: "absolute", top: "16px", left: "-8px" }} />
          </div>
        ))}
        <svg style={{ position: "absolute", bottom: "48px", left: 0, width: "100%", height: "80px", pointerEvents: "none", zIndex: 2 }} preserveAspectRatio="none" viewBox="0 0 1000 80">
          <path d="M 0 20 Q 280 28 500 22 Q 720 28 1000 20" stroke="#3D3029" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M 0 28 Q 280 34 500 30 Q 720 34 1000 28" stroke="#3D3029" strokeWidth="1" fill="none" opacity="0.6" />
        </svg>

        {["10%", "36%", "55%", "76%", "90%"].map((left, i) => (
          <div key={`tree-${i}`} style={{
            position: "absolute",
            bottom: "48px",
            left,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            imageRendering: "pixelated",
            zIndex: 2,
          }}>
            <div style={{ width: "18px", height: "18px", backgroundColor: "#4A7C59", borderRadius: "1px" }} />
            <div style={{ width: "14px", height: "12px", backgroundColor: "#5A8C69", marginTop: "-5px", borderRadius: "1px" }} />
            <div style={{ width: "4px", height: "14px", backgroundColor: "#6B4E37" }} />
          </div>
        ))}

        <div style={{
          position: "absolute",
          bottom: "40px",
          left: 0,
          right: 0,
          height: "8px",
          backgroundColor: "#6B8E5A",
          imageRendering: "pixelated",
          zIndex: 3,
        }} />

        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40px",
          backgroundColor: "#293746",
          imageRendering: "pixelated",
          zIndex: 3,
        }}>
          <div style={{
            position: "absolute",
            top: "18px",
            left: 0,
            right: 0,
            height: "3px",
            backgroundImage: "linear-gradient(90deg, #D9A441 50%, transparent 50%)",
            backgroundSize: "40px 100%",
            opacity: 0.6,
          }} />
        </div>
      </div>
    </section>
  );
}
