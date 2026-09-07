import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="footer-night-scene" role="contentinfo">
      <div className="footer-sky" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i}
            className="footer-star"
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="footer-content">
        <h3 className="footer-title-primary">
          FULL STACK DEVELOPER <span className="footer-divider-cross">×</span> CYBER SECURITY
        </h3>

        <div className="footer-social-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            id="footer-github"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            id="footer-linkedin"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            id="footer-email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="footer-copyright">
          © 2026 Muhammad David Fawwas Olfat
        </p>
      </div>
    </footer>
  );
}
