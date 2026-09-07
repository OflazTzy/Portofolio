import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Network, Cpu, Wrench, BookOpen } from "lucide-react";
import { cyberSecuritySkills, experiences } from "@/data/portfolio";
import { useInView } from "@/hooks";
import { PixelNightWorkspace } from "@/components/pixel/PixelNightWorkspace";
import { PixelNetworkScene } from "@/components/pixel/PixelNetworkScene";
import { PixelResearchWorkspace } from "@/components/pixel/PixelResearchWorkspace";
import { PixelDivider } from "@/components/pixel/PixelScene";

export function SecuritySection() {
  const [ref, inView] = useInView(0.08);
  const cournet = experiences.find((e) => e.title === "PT. Cournet Bangun");
  const grafologi = experiences.find((e) => e.title === "Grafologiindonesia");

  return (
    <section
      id="security"
      className="section-padding scene-night security-continuous-section"
      aria-label="Security, Networking, and Machine Learning technical journey"
    >
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="stage-header"
        >
          <span className="section-number" style={{ color: "var(--golden)" }}>// 04 — CONTINUOUS TECHNICAL JOURNEY</span>
          <h2 className="heading-lg" style={{ color: "var(--warm-white)", marginBottom: "0.5rem" }}>
            CYBER SECURITY
          </h2>
          <p style={{ color: "#8BA0B5", maxWidth: "600px", marginBottom: "2.5rem" }}>
            Security-focused development — membangun dan mengamankan sistem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ marginBottom: "2rem" }}
        >
          <PixelNightWorkspace />
        </motion.div>

        <div className="compact-security-skills-bar">
          <span className="compact-bar-label">
            <ShieldCheck size={14} style={{ color: "var(--teal)" }} />
            <span>SECURITY COMPETENCIES:</span>
          </span>
          <div className="compact-bar-skills">
            {cyberSecuritySkills.map((skill, idx) => (
              <React.Fragment key={skill}>
                <span className="compact-bar-item">{skill}</span>
                {idx < cyberSecuritySkills.length - 1 && (
                  <span className="compact-bar-sep">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="security-experiences-editorial">
          {grafologi && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="editorial-exp-card"
            >
              <div className="exp-card-header">
                <div className="exp-card-title-meta">
                  <h3 className="exp-card-company">{grafologi.title}</h3>
                  <span className="exp-card-role">{grafologi.role}</span>
                </div>
                <span className="exp-card-period">{grafologi.type} — {grafologi.period}</span>
              </div>

              <div className="grafologi-build-secure-grid">
                <div className="build-secure-col">
                  <span className="col-header-tag text-terracotta">BUILD</span>
                  <div className="col-skills-wrap">
                    {grafologi.buildSkills?.map((s) => (
                      <span key={s} className="skill-item-tag build-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="build-secure-col">
                  <span className="col-header-tag text-teal">SECURE</span>
                  <div className="col-skills-wrap">
                    {grafologi.secureSkills?.map((s) => (
                      <span key={s} className="skill-item-tag secure-tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {grafologi.tools && (
                <div className="exp-tools-row">
                  <span className="tools-label">
                    <Wrench size={12} style={{ color: "var(--dusty-blue)" }} />
                    <span>TOOLS USED:</span>
                  </span>
                  <div className="tools-wrap">
                    {grafologi.tools.map((t) => (
                      <span key={t} className="tool-code-badge">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {cournet && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="editorial-exp-card"
            >
              <div className="exp-card-header">
                <div className="exp-card-title-meta">
                  <h3 className="exp-card-company">{cournet.title}</h3>
                  <span className="exp-card-role">{cournet.role}</span>
                </div>
                <span className="exp-card-period">{cournet.period}</span>
              </div>

              <p className="exp-card-desc">{cournet.description}</p>

              {cournet.secureSkills && (
                <div className="col-skills-wrap" style={{ marginBottom: "1rem" }}>
                  {cournet.secureSkills.map((s) => (
                    <span key={s} className="skill-item-tag secure-tag">
                      {s}
                    </span>
                  ))}
                </div>
              )}

              {cournet.tools && (
                <div className="exp-tools-row">
                  <span className="tools-label">
                    <Wrench size={12} style={{ color: "var(--dusty-blue)" }} />
                    <span>TOOLS USED:</span>
                  </span>
                  <div className="tools-wrap">
                    {cournet.tools.map((t) => (
                      <span key={t} className="tool-code-badge">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="stage-block networking-stage"
        >
          <div className="stage-header">
            <span className="stage-mini-number">// 04.2 — INFRASTRUCTURE & FLOW</span>
            <h3 className="stage-title" style={{ color: "var(--warm-white)" }}>
              <Network size={22} style={{ color: "var(--dusty-blue)" }} />
              NETWORKING
            </h3>
            <p style={{ color: "#8BA0B5", fontSize: "0.95rem" }}>
              Arsitektur jaringan, alokasi IP, dan komunikasi server.
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <PixelNetworkScene />
          </div>

          <div className="compact-security-skills-bar">
            <span className="compact-bar-label">
              <Network size={14} style={{ color: "var(--dusty-blue)" }} />
              <span>NETWORKING PROTOCOLS:</span>
            </span>
            <div className="compact-bar-skills">
              {["TCP/IP", "OSI Model", "Subnetting", "DNS", "DHCP", "Routing", "Network Security"].map((skill, idx, arr) => (
                <React.Fragment key={skill}>
                  <span className="compact-bar-item">{skill}</span>
                  {idx < arr.length - 1 && (
                    <span className="compact-bar-sep">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="stage-block ml-stage"
        >
          <div className="stage-header">
            <span className="stage-mini-number">// 04.3 — INTELLIGENT SYSTEMS & RESEARCH</span>
            <h3 className="stage-title" style={{ color: "var(--warm-white)" }}>
              <Cpu size={22} style={{ color: "#D9A441" }} />
              AI / MACHINE LEARNING & RESEARCH
            </h3>
            <p style={{ color: "#8BA0B5", fontSize: "0.95rem" }}>
              Eksplorasi kecerdasan buatan, pemrosesan data, dan publikasi penelitian.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <PixelResearchWorkspace />
          </div>

          <div className="ml-research-grid">
            <div className="ml-card-editorial">
              <span className="card-editorial-badge golden">INTERNSHIP PROJECT</span>
              <h4 className="card-editorial-title">Diskominfo Kabupaten Batang</h4>
              <p className="card-editorial-meta">Statistik — Magang · Januari – April 2025</p>
              <p className="card-editorial-desc">
                Website untuk memprediksi inflasi pendidikan menggunakan Flask dan LSTM (Long Short-Term Memory).
              </p>
              <div className="card-stack-row">
                {["Python", "Flask", "LSTM", "Machine Learning"].map((t) => (
                  <span key={t} className="tool-code-badge golden-badge">{t}</span>
                ))}
              </div>
            </div>

            <div className="ml-card-editorial publication-card">
              <div className="pub-header-row">
                <BookOpen size={16} style={{ color: "var(--terracotta)" }} />
                <span className="card-editorial-badge terracotta">RESEARCH PUBLICATION</span>
              </div>
              <h4 className="card-editorial-title pub-title">
                Explainable Machine Learning Framework for Outbound IoT Botnet DDoS Detection
              </h4>
              <p className="card-editorial-meta">Jurnal Sisfokom · SINTA 3 · 2026</p>
              <p className="pub-intersection-note">
                Mengintegrasikan <strong>Machine Learning + Networking + Cyber Security</strong> untuk deteksi dini serangan DDoS pada jaringan IoT.
              </p>
              <div className="card-stack-row">
                {["Machine Learning", "Networking", "Cyber Security"].map((tag) => (
                  <span key={tag} className="tool-code-badge terracotta-badge">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <PixelDivider count={7} color="var(--navy)" />
    </section>
  );
}
