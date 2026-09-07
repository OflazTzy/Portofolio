import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code2, ShieldCheck, Cpu } from "lucide-react";
import { projects } from "@/data/portfolio";
import { useInView } from "@/hooks";
import { PixelProjectFrame } from "@/components/pixel/PixelProjectFrame";
import { PixelDivider } from "@/components/pixel/PixelScene";

export function ProjectsSection() {
  const [ref, inView] = useInView(0.08);
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", label: "ALL PROJECTS" },
    { id: "Web", label: "WEB DEVELOPMENT" },
    { id: "Cyber", label: "CYBER SECURITY" },
    { id: "ML", label: "MACHINE LEARNING" },
  ];

  const categoryThemes = {
    Web: "web",
    Cyber: "cyber",
    ML: "ml",
  };

  const categoryAccents = {
    Web: "var(--terracotta)",
    Cyber: "var(--teal)",
    ML: "#A07820",
  };

  const categoryIcons = {
    Web: Code2,
    Cyber: ShieldCheck,
    ML: Cpu,
  };

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  const featuredProject = projects.find((p) => p.featured) || projects[0];

  return (
    <section id="projects" className="section-padding projects-section" aria-label="Projects section">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="projects-header"
        >
          <span className="section-number">// 03</span>
          <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>PROJECTS</h2>
          <p className="text-muted projects-subtitle">
            Tempat dan aplikasi yang saya bangun sepanjang perjalanan sebagai pengembang.
          </p>
        </motion.div>

        <div className="projects-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`project-tab-btn ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {(activeTab === "all" || activeTab === "Web") && featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="featured-project-editorial"
          >
            <div className="featured-badge-row">
              <span className="featured-pixel-badge">01 / FEATURED PROJECT</span>
              <span className="featured-category-tag" style={{ color: "var(--terracotta)" }}>
                WEB / FULL STACK
              </span>
            </div>

            <h3 className="featured-project-title">{featuredProject.title}</h3>
            {featuredProject.titleEn && (
              <p className="featured-project-title-en">{featuredProject.titleEn}</p>
            )}

            <div className="featured-editorial-grid">
              <div className="featured-frame-col">
                <PixelProjectFrame
                  image={featuredProject.image}
                  alt={featuredProject.title}
                  theme="web"
                  title="bank_sampah_mfa.env"
                />
              </div>

              <div className="featured-info-col">
                <p className="featured-summary-text">{featuredProject.summary}</p>

                {featuredProject.problem && (
                  <div className="project-fact-block">
                    <span className="fact-label">PROBLEM STATEMENT</span>
                    <p className="fact-text">{featuredProject.problem}</p>
                  </div>
                )}

                {featuredProject.solution && (
                  <div className="project-fact-block">
                    <span className="fact-label">SOLUTION & IMPLEMENTATION</span>
                    <p className="fact-text">{featuredProject.solution}</p>
                  </div>
                )}

                <div className="project-stack-typography">
                  <span className="stack-label">TECH STACK:</span>
                  <div className="stack-items">
                    {featuredProject.stack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="stack-item-name">{tech}</span>
                        {idx < featuredProject.stack.length - 1 && (
                          <span className="stack-item-sep">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                <div className="project-links-row">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn primary"
                    >
                      <Github size={15} />
                      <span>GitHub ↗</span>
                    </a>
                  )}
                  {featuredProject.demo && (
                    <a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn secondary"
                    >
                      <ExternalLink size={15} />
                      <span>View Demo / Article ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="projects-editorial-list">
          <AnimatePresence mode="wait">
            {filteredProjects
              .filter((p) => activeTab !== "all" || !p.featured)
              .map((project, idx) => {
                const projectNum = String(
                  activeTab === "all" ? idx + 2 : idx + 1
                ).padStart(2, "0");
                const theme = categoryThemes[project.category] || "web";
                const accentColor = categoryAccents[project.category] || "var(--terracotta)";
                const IconComp = categoryIcons[project.category] || Code2;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: idx * 0.06 }}
                    className={`project-editorial-row ${isEven ? "row-normal" : "row-reverse"}`}
                  >
                    <div className="project-row-frame">
                      <PixelProjectFrame
                        image={project.image}
                        alt={project.title}
                        theme={theme}
                        title={`${project.title.toLowerCase().replace(/\s+/g, "_")}.env`}
                      />
                    </div>

                    <div className="project-row-info">
                      <div className="project-row-meta">
                        <span className="project-row-num">{projectNum}</span>
                        <span className="project-row-cat-pill" style={{ color: accentColor, borderColor: `rgba(0,0,0,0.12)` }}>
                          <IconComp size={13} />
                          {project.category.toUpperCase()}
                        </span>
                      </div>

                      <h4 className="project-row-title">{project.title}</h4>
                      {project.titleEn && (
                        <p className="project-row-title-en">{project.titleEn}</p>
                      )}

                      <p className="project-row-summary">{project.summary}</p>

                      <div className="project-stack-typography">
                        <div className="stack-items">
                          {project.stack.map((tech, i) => (
                            <React.Fragment key={tech}>
                              <span className="stack-item-name">{tech}</span>
                              {i < project.stack.length - 1 && (
                                <span className="stack-item-sep">·</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>

                      <div className="project-links-row" style={{ marginTop: "1rem" }}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn primary"
                          >
                            <Github size={14} />
                            <span>GitHub ↗</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn secondary"
                          >
                            <ExternalLink size={14} />
                            <span>View Publication / Article ↗</span>
                          </a>
                        )}
                      </div>
                    </div>
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
