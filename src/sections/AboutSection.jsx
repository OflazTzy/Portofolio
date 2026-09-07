import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, ShieldCheck, Network, Cpu } from "lucide-react";
import { profile, education } from "@/data/portfolio";
import { useInView } from "@/hooks";
import { PixelWorkspaceScene } from "@/components/pixel/PixelWorkspaceScene";
import { PixelDivider } from "@/components/pixel/PixelScene";

export function AboutSection() {
  const [ref, inView] = useInView(0.15);

  const leftSkills = [
    {
      category: "WEB DEVELOPMENT",
      skills: "Laravel · React · REST API",
      icon: Code2,
      color: "var(--terracotta)",
    },
    {
      category: "CYBER SECURITY",
      skills: "OWASP · Vulnerability Assessment · Penetration Testing",
      icon: ShieldCheck,
      color: "var(--teal)",
    },
  ];

  const rightSkills = [
    {
      category: "NETWORKING",
      skills: "TCP/IP · DNS · DHCP · Routing",
      icon: Network,
      color: "var(--dusty-blue)",
    },
    {
      category: "AI / MACHINE LEARNING",
      skills: "Python · Flask · LSTM · TensorFlow",
      icon: Cpu,
      color: "#A07820",
    },
  ];

  return (
    <section id="about" className="section-padding about-section" aria-label="About section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="about-header"
        >
          <span className="section-number">// 01</span>
          <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>ABOUT ME</h2>
          <p className="text-muted about-subtitle">
            Mengenal lebih dekat siapa saya, pendidikan, dan fokus pengembangan.
          </p>
        </motion.div>

        <div className="about-editorial-grid">
          <motion.div
            className="about-left-col"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="about-identity-block">
              <h3 className="about-name">{profile.name}</h3>

              <div className="about-education-card">
                <div className="about-edu-header">
                  <GraduationCap size={20} className="about-edu-icon" />
                  <div>
                    <h4 className="about-edu-uni">{education.university}</h4>
                    <p className="about-edu-degree">{education.degree} · {education.faculty}</p>
                  </div>
                </div>

                <div className="about-edu-meta">
                  <span className="about-edu-period">{education.period}</span>
                  
                  <div className="about-gpa-tag">
                    <Award size={13} style={{ color: "var(--terracotta)" }} />
                    <span>GPA {education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-focus-section">
              <div className="about-focus-header">
                <span className="about-focus-pill">FOKUS PENGEMBANGAN</span>
              </div>

              <div className="about-description-paragraphs">
                <p className="text-body">
                  Fresh Graduate S1 Informatika dengan fokus pada <strong>Web Development</strong>, <strong>Full Stack Development</strong>, <strong>Cyber Security</strong>, dan <strong>Networking</strong>.
                </p>
                <p className="text-small text-muted" style={{ marginTop: "0.6rem", lineHeight: 1.6 }}>
                  Memiliki pengalaman mengembangkan aplikasi berbasis Laravel dan WordPress, membangun REST API, serta melakukan vulnerability assessment dan penetration testing.
                </p>
              </div>

              <div className="about-skills-compact-list">
                {leftSkills.map((item, idx) => (
                  <div key={idx} className="about-skill-compact-row">
                    <div className="about-skill-category-label">
                      <item.icon size={15} style={{ color: item.color, flexShrink: 0 }} />
                      <span>{item.category}</span>
                    </div>
                    <div className="about-skill-values">{item.skills}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-right-col"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-pixel-frame">
              <div className="about-pixel-frame-bar">
                <span className="pixel-frame-dot red" />
                <span className="pixel-frame-dot yellow" />
                <span className="pixel-frame-dot green" />
                <span className="pixel-frame-title">developer_workspace.env</span>
              </div>
              <PixelWorkspaceScene />
              <div className="about-pixel-caption">
                <span className="pixel-caption-dot" />
                <span>Nostalgic Afternoon Workspace · Semarang, ID</span>
              </div>
            </div>

            <div className="about-skills-compact-list">
              {rightSkills.map((item, idx) => (
                <div key={idx} className="about-skill-compact-row">
                  <div className="about-skill-category-label">
                    <item.icon size={15} style={{ color: item.color, flexShrink: 0 }} />
                    <span>{item.category}</span>
                  </div>
                  <div className="about-skill-values">{item.skills}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <PixelDivider count={7} />
    </section>
  );
}
