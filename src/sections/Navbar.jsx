import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileDown, Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/portfolio";
import { useScrolled } from "@/hooks";

export function Navbar({ active }) {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo" id="navbar-logo">
            PORTFOLIO
          </a>

          <ul className="navbar-links" role="list">
            {navigation.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? "active" : ""}
                  id={`nav-${item.id}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-social">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              id="nav-github"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              id="nav-linkedin"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.cvUrl}
              download
              aria-label="Download CV"
              id="nav-cv"
              className="navbar-cv-btn"
            >
              <FileDown size={14} />
              <span>CV</span>
            </a>
          </div>

          <button
            className="navbar-mobile-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            id="navbar-mobile-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--brown)",
              }}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                id={`mobile-nav-${item.id}`}
              >
                {item.label}
              </a>
            ))}

            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>

            <a
              href={profile.cvUrl}
              download
              className="navbar-cv-btn"
              style={{ marginTop: "1.25rem", padding: "0.6rem 1.5rem", fontSize: "0.85rem" }}
            >
              <FileDown size={16} />
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
