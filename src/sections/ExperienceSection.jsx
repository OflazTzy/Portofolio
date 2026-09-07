import React from "react";
import { motion } from "framer-motion";
import { Code2, Wrench, Layers } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { useInView } from "@/hooks";
import { PixelFreelanceWorkspace } from "@/components/pixel/PixelFreelanceWorkspace";
import { PixelDivider } from "@/components/pixel/PixelScene";

export function ExperienceSection() {
  const [ref, inView] = useInView(0.08);

  const freelance = experiences.find((e) => e.title === "Freelance Full Stack Developer");
  const grafologi = experiences.find((e) => e.title === "Grafologiindonesia");
  const lab = experiences.find((e) => e.title === "Laboratorium Informatika");
  const diskominfo = experiences.find((e) => e.title === "Diskominfo Kabupaten Batang");
  const cournet = experiences.find((e) => e.title === "PT. Cournet Bangun");

  return (
    <section id="experience" className="section-padding experience-section" aria-label="Experience section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="experience-header"
        >
          <span className="section-number">// 05</span>
          <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>EXPERIENCE</h2>
          <p className="text-muted experience-subtitle">
            Perjalanan teknis yang terus melangkah maju.
          </p>
        </motion.div>

        {freelance && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="featured-freelance-editorial"
          >
            <div className="freelance-header-row">
              <span className="freelance-badge">FEATURED COMPETENCY</span>
              <span className="freelance-period">{freelance.period}</span>
            </div>

            <h3 className="freelance-title">{freelance.title}</h3>
            <p className="freelance-subtitle">Web & API Architecture · Mobile Integration · Workflow Automation</p>

            <div className="freelance-editorial-grid">
              <div className="freelance-workspace-col">
                <PixelFreelanceWorkspace />
              </div>

              <div className="freelance-info-col">
                <div className="resp-group">
                  <span className="resp-group-label text-terracotta">
                    <Code2 size={13} />
                    DEVELOPMENT & APIS
                  </span>
                  <ul className="resp-list">
                    <li>Mengembangkan aplikasi web berbasis Laravel</li>
                    <li>Merancang dan mengembangkan REST API</li>
                    <li>Integrasi aplikasi web dan mobile</li>
                  </ul>
                </div>

                <div className="resp-group">
                  <span className="resp-group-label text-teal">
                    <Layers size={13} />
                    BACKEND & DEPLOYMENT
                  </span>
                  <ul className="resp-list">
                    <li>Implementasi autentikasi & manajemen basis data</li>
                    <li>Optimasi performa aplikasi & pemeliharaan</li>
                    <li>Deployment dan dokumentasi sistem</li>
                  </ul>
                </div>

                <div className="resp-group">
                  <span className="resp-group-label text-golden">
                    <Wrench size={13} />
                    AUTOMATION
                  </span>
                  <ul className="resp-list">
                    <li>Membangun workflow otomatis menggunakan n8n</li>
                  </ul>
                </div>

                <div className="freelance-stack-bar">
                  <span className="stack-tag">Laravel</span>
                  <span className="stack-sep">·</span>
                  <span className="stack-tag">REST API</span>
                  <span className="stack-sep">·</span>
                  <span className="stack-tag">Database</span>
                  <span className="stack-sep">·</span>
                  <span className="stack-tag">Deployment</span>
                  <span className="stack-sep">·</span>
                  <span className="stack-tag">n8n</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="career-journey-block">
          <div className="journey-header">
            <span className="journey-section-tag">// CAREER MILESTONES</span>
            <h3 className="journey-section-title">THE ROAD I'VE TAKEN</h3>
          </div>

          <div className="career-pixel-trail">
            {grafologi && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="trail-milestone"
              >
                <div className="trail-marker-col">
                  <span className="trail-year">2026</span>
                  <span className="trail-pixel-dot red-dot" />
                  <span className="trail-line" />
                </div>

                <div className="trail-content-card">
                  <div className="milestone-badge-row">
                    <span className="milestone-cat-pill text-terracotta">BUILD × SECURE</span>
                    <span className="milestone-period">{grafologi.type} · {grafologi.period}</span>
                  </div>
                  <h4 className="milestone-company">{grafologi.title}</h4>
                  <p className="milestone-role">{grafologi.role}</p>

                  <div className="milestone-split-details">
                    <div className="m-detail-col">
                      <span className="m-label text-terracotta">BUILD SKILLS:</span>
                      <p className="m-text">{grafologi.buildSkills?.join(" · ")}</p>
                    </div>
                    <div className="m-detail-col">
                      <span className="m-label text-teal">SECURE SKILLS:</span>
                      <p className="m-text">{grafologi.secureSkills?.join(" · ")}</p>
                    </div>
                  </div>

                  {grafologi.tools && (
                    <div className="milestone-tools-row">
                      <span className="tools-title">TOOLS:</span>
                      <div className="tools-tags">
                        {grafologi.tools.map((t) => (
                          <span key={t} className="tool-tag-pill">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {lab && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="trail-milestone"
              >
                <div className="trail-marker-col">
                  <span className="trail-year">2025</span>
                  <span className="trail-pixel-dot yellow-dot" />
                  <span className="trail-line" />
                </div>

                <div className="trail-content-card">
                  <div className="milestone-badge-row">
                    <span className="milestone-cat-pill text-golden">ACADEMIC & LAB</span>
                    <span className="milestone-period">{lab.period}</span>
                  </div>
                  <h4 className="milestone-company">{lab.title}</h4>
                  <p className="milestone-role">{lab.role}</p>
                  <p className="milestone-desc">{lab.description}</p>
                </div>
              </motion.div>
            )}

            {diskominfo && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="trail-milestone"
              >
                <div className="trail-marker-col">
                  <span className="trail-year">2025</span>
                  <span className="trail-pixel-dot green-dot" />
                  <span className="trail-line" />
                </div>

                <div className="trail-content-card">
                  <div className="milestone-badge-row">
                    <span className="milestone-cat-pill text-teal">GOVERNMENT INTERNSHIP</span>
                    <span className="milestone-period">Statistik — Magang · {diskominfo.period}</span>
                  </div>
                  <h4 className="milestone-company">{diskominfo.title}</h4>
                  <p className="milestone-desc">
                    Website untuk memprediksi inflasi pendidikan menggunakan Flask dan LSTM (Long Short-Term Memory).
                  </p>
                  <div className="milestone-tools-row">
                    <span className="tools-title">TECH:</span>
                    <div className="tools-tags">
                      {["Python", "Flask", "LSTM", "Machine Learning"].map((t) => (
                        <span key={t} className="tool-tag-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {cournet && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="trail-milestone"
              >
                <div className="trail-marker-col">
                  <span className="trail-year">2024</span>
                  <span className="trail-pixel-dot blue-dot" />
                </div>

                <div className="trail-content-card">
                  <div className="milestone-badge-row">
                    <span className="milestone-cat-pill text-blue">MSIB PROGRAM</span>
                    <span className="milestone-period">{cournet.period}</span>
                  </div>
                  <h4 className="milestone-company">{cournet.title}</h4>
                  <p className="milestone-role">{cournet.role}</p>
                  <p className="milestone-desc">{cournet.description}</p>
                  {cournet.tools && (
                    <div className="milestone-tools-row">
                      <span className="tools-title">TOOLS & TOPICS:</span>
                      <div className="tools-tags">
                        {cournet.tools.map((t) => (
                          <span key={t} className="tool-tag-pill">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <PixelDivider count={7} />
    </section>
  );
}
