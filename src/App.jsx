import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useScrollProgress, useActiveSection } from "@/hooks";
import { Navbar } from "@/sections/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SecuritySection } from "@/sections/SecuritySection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";

const NAV_IDS = ["home", "about", "skills", "projects", "security", "experience", "certifications", "contact"];

function ScrollProgress({ progress }) {
  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll progress"
    />
  );
}

function BackToTop({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          className="back-to-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          aria-label="Back to top"
          id="back-to-top"
        >
          <ChevronUp size={20} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const progress = useScrollProgress();
  const active = useActiveSection(NAV_IDS);

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden", backgroundColor: "var(--bg)", color: "var(--text)" }}>
      <ScrollProgress progress={progress} />
      <Navbar active={active} />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <SecuritySection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop visible={progress > 8} />
    </div>
  );
}
