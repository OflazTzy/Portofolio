import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ShieldCheck, Network, Cpu, Database, Palette, Terminal, Wrench } from "lucide-react";
import { useInView } from "@/hooks";
import { PixelSkillsWorkspace } from "@/components/pixel/PixelSkillsWorkspace";
import { PixelDivider } from "@/components/pixel/PixelScene";

export function SkillsSection() {
  const [ref, inView] = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState("all");

  const skillGroups = [
    {
      id: "fullstack",
      number: "// 01 — PRIMARY COMPETENCY",
      title: "FULL STACK DEVELOPMENT",
      description: "Membangun aplikasi web full-stack yang responsif dan scalable, dari perancangan frontend hingga arsitektur backend & REST API.",
      skills: ["PHP", "JavaScript", "React", "Laravel", "WordPress", "REST API", "Bootstrap", "Tailwind"],
      icon: Code2,
      accent: "var(--terracotta)",
      highlight: true,
    },
    {
      id: "security",
      number: "// 02 — SPECIALIZED POSITIONING",
      title: "CYBER SECURITY",
      description: "Pengujian keamanan aplikasi web berbasis standar OWASP Top 10, analisis kerentanan, penetration testing, serta analisis forensik digital.",
      skills: ["Web Application Security", "OWASP Top 10", "Vulnerability Assessment", "Penetration Testing", "Digital Forensics"],
      securityTools: ["Burp Suite", "WPScan", "Nmap", "Metasploit", "Nikto", "Gobuster", "Nuclei", "Wireshark"],
      icon: ShieldCheck,
      accent: "var(--teal)",
      highlight: true,
    },
    {
      id: "networking",
      number: "// 03 — INFRASTRUCTURE",
      title: "NETWORKING",
      description: "Pemahaman arsitektur jaringan komputer, konfigurasi protokol komunikasi, pengalamatan IP, dan keamanan transmisi data.",
      skills: ["TCP/IP", "OSI Model", "Subnetting", "DNS", "DHCP", "Routing", "Network Security"],
      icon: Network,
      accent: "var(--dusty-blue)",
      highlight: false,
    },
    {
      id: "ml",
      number: "// 04 — INTELLIGENT SYSTEMS",
      title: "AI / MACHINE LEARNING",
      description: "Pengembangan model machine learning, pra-pemrosesan data, serta eksplorasi kecerdasan buatan berbasis Python.",
      skills: ["Python", "TensorFlow", "Scikit-learn", "Data Preprocessing", "Model Development"],
      icon: Cpu,
      accent: "#A07820",
      highlight: false,
    },
    {
      id: "database",
      number: "// 05 — DATA STORE",
      title: "DATABASE",
      skills: ["MySQL", "PostgreSQL"],
      icon: Database,
      accent: "var(--brown)",
      highlight: false,
      compact: true,
    },
    {
      id: "design",
      number: "// 06 — VISUAL & UI",
      title: "DESIGN",
      skills: ["Canva", "Figma", "Adobe Animate", "Microsoft PowerPoint"],
      icon: Palette,
      accent: "#9C528B",
      highlight: false,
      compact: true,
    },
    {
      id: "os",
      number: "// 07 — ENVIRONMENTS",
      title: "OPERATING SYSTEM",
      skills: ["Linux", "Windows"],
      icon: Terminal,
      accent: "var(--navy)",
      highlight: false,
      compact: true,
    },
  ];

  const visibleGroups = activeCategory === "all"
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section id="skills" className="section-padding skills-section" aria-label="Skills section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="skills-header"
        >
          <span className="section-number">// 02</span>
          <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>SKILLS</h2>
          <p className="text-muted skills-subtitle">
            Teknologi, bahasa pemrograman, dan alat keamanan yang saya gunakan dalam membangun serta mengamankan aplikasi web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ marginBottom: "3rem" }}
        >
          <PixelSkillsWorkspace
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </motion.div>

        <div className="skills-hierarchy-container">
          <AnimatePresence mode="wait">
            {visibleGroups.map((group, i) => {
              const IconComp = group.icon;
              const isFiltered = activeCategory !== "all" && activeCategory === group.id;

              return (
                <motion.div
                  key={group.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`skill-editorial-block ${group.highlight ? "highlighted" : ""} ${group.compact ? "compact-block" : ""} ${isFiltered ? "active-filter-border" : ""}`}
                >
                  <div className="skill-editorial-header">
                    <span className="skill-editorial-tag">{group.number}</span>
                    <div className="skill-editorial-title-row">
                      <div className="skill-editorial-icon" style={{ color: group.accent, backgroundColor: `rgba(0,0,0,0.03)` }}>
                        <IconComp size={20} />
                      </div>
                      <h3 className="skill-editorial-title">{group.title}</h3>
                    </div>
                    {group.description && (
                      <p className="skill-editorial-desc">{group.description}</p>
                    )}
                  </div>

                  <div className="skill-typography-list">
                    {group.skills.map((skill, idx) => (
                      <React.Fragment key={skill}>
                        <span className="skill-typo-item">
                          <span className="skill-typo-bullet" style={{ backgroundColor: group.accent }} />
                          {skill}
                        </span>
                        {idx < group.skills.length - 1 && (
                          <span className="skill-typo-sep">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  {group.securityTools && (
                    <div className="security-tools-subblock">
                      <div className="security-tools-label">
                        <Wrench size={13} style={{ color: "var(--teal)", flexShrink: 0 }} />
                        <span>SECURITY TOOLS</span>
                      </div>
                      <div className="security-tools-tags">
                        {group.securityTools.map((tool) => (
                          <span key={tool} className="security-tool-badge">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <PixelDivider count={7} />
    </section>
  );
}
