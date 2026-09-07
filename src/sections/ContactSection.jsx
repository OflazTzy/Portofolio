import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { useInView } from "@/hooks";
import { PixelCharacter } from "@/components/pixel/PixelCharacter";

export function ContactSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, var(--cream) 0%, #E8C9A0 12%, #D4A574 25%, #C88B5C 38%, #B85C38 50%, #8B4530 62%, #5A3A28 75%, #293746 88%, #1E2A38 100%)",
        paddingTop: "clamp(5.5rem, 8vw, 7rem)",
        paddingBottom: "clamp(2rem, 4vw, 3.5rem)",
      }}
      aria-label="Contact section"
    >
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }} aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: "#FFF8E7",
              top: `${55 + Math.random() * 42}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.6,
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              imageRendering: "pixelated",
            }}
          />
        ))}
      </div>

      <div className="section-container contact-content" ref={ref} style={{ position: "relative", zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number" style={{ color: "var(--golden)" }}>// 07 CONTACT</span>
          <h2
            className="heading-xl"
            style={{
              marginTop: "0.5rem",
              marginBottom: "1rem",
              color: "var(--warm-white)",
              textShadow: "0 2px 20px rgba(41,55,70,0.3)",
            }}
          >
            LET'S BUILD<br />SOMETHING USEFUL<br />AND SECURE.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ color: "var(--warm-white)", opacity: 0.9, fontSize: "0.98rem", maxWidth: "540px", margin: "0 auto 1.5rem auto", lineHeight: 1.6 }}
        >
          Terbuka untuk peluang karir di bidang Full Stack Development, Web Development, Software Engineering, dan Cyber Security.
        </motion.p>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="contact-item"
            style={{ color: "var(--warm-white)", textDecoration: "none" }}
            id="contact-email"
          >
            <Mail size={18} style={{ color: "var(--golden)" }} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="contact-item"
            style={{ color: "var(--warm-white)", textDecoration: "none" }}
            id="contact-phone"
          >
            <Phone size={18} style={{ color: "var(--golden)" }} />
            {profile.phone}
          </a>
        </motion.div>

        <motion.div
          className="contact-social"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            id="contact-github"
          >
            <Github size={20} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            id="contact-linkedin"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{ marginTop: "1.75rem", marginBottom: "1rem" }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="btn-primary hero-cta-primary"
            id="contact-cta"
            style={{ fontSize: "0.95rem", padding: "0.85rem 2.25rem", backgroundColor: "var(--terracotta)", color: "var(--warm-white)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            <span>HUBUNGI SAYA</span>
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>

      <div style={{ position: "relative", width: "100%", height: "90px", marginTop: "1rem", pointerEvents: "none", zIndex: 3 }} aria-hidden="true">
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "28px",
          backgroundColor: "#18222d",
          imageRendering: "pixelated",
        }}>
          <div style={{
            position: "absolute",
            top: "12px",
            left: 0,
            right: 0,
            height: "2px",
            backgroundImage: "linear-gradient(90deg, #D9A441 50%, transparent 50%)",
            backgroundSize: "36px 100%",
            opacity: 0.5,
          }} />
        </div>

        <div style={{
          position: "absolute",
          bottom: "28px",
          left: 0,
          right: 0,
          height: "6px",
          backgroundColor: "#223124",
          imageRendering: "pixelated",
        }} />

        {[
          { left: "5%", w: 42, h: 26 },
          { left: "20%", w: 32, h: 20 },
          { left: "40%", w: 52, h: 34 },
          { left: "62%", w: 38, h: 24 },
          { left: "80%", w: 46, h: 30 },
        ].map((h, i) => (
          <div key={i} style={{
            position: "absolute",
            bottom: "34px",
            left: h.left,
            width: `${h.w}px`,
            height: `${h.h}px`,
            backgroundColor: "#16202c",
            border: "1px solid rgba(255,248,231,0.06)",
            imageRendering: "pixelated",
          }}>
            <div style={{
              position: "absolute",
              top: "6px",
              left: `${h.w / 2 - 3}px`,
              width: "6px",
              height: "6px",
              backgroundColor: "#D9A441",
              boxShadow: "0 0 5px rgba(217, 164, 65, 0.5)",
            }} />
          </div>
        ))}

        {["30%", "72%"].map((left, i) => (
          <div key={`p-${i}`} style={{ position: "absolute", bottom: "34px", left, imageRendering: "pixelated", zIndex: 4 }}>
            <div style={{ width: "3px", height: "55px", backgroundColor: "#3D3029" }} />
            <div style={{ width: "20px", height: "2px", backgroundColor: "#2A201A", position: "absolute", top: "7px", left: "-8px" }} />
          </div>
        ))}

        {["12%", "34%", "54%", "86%"].map((left, i) => (
          <div key={`t-${i}`} style={{
            position: "absolute",
            bottom: "34px",
            left,
            imageRendering: "pixelated",
            zIndex: 4,
          }}>
            <div style={{ width: "14px", height: "18px", backgroundColor: "#18281b", borderRadius: "1px" }} />
            <div style={{ width: "3px", height: "8px", backgroundColor: "#121b13", margin: "0 auto" }} />
          </div>
        ))}

        <div style={{ position: "absolute", bottom: "34px", left: "58%", transform: "translateX(-50%)", zIndex: 5 }}>
          <PixelCharacter scale={2} animation="walk" />
        </div>
      </div>
    </section>
  );
}
