import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Award, Shield, Code, Server, Database, Sparkles } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { useInView } from "@/hooks";
import { PixelStudyRoom } from "@/components/pixel/PixelStudyRoom";

function CertModal({ cert, onClose }) {
  if (!cert) return null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      className="cert-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-cert-title"
    >
      <motion.div
        className="cert-modal"
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cert-modal-header-image" style={{ position: "relative" }}>
          <img
            src={cert.image}
            alt={`Sertifikat ${cert.title} dari ${cert.issuer}`}
            className="cert-modal-img"
          />
          <button
            className="cert-modal-close"
            onClick={onClose}
            aria-label="Tutup pratinjau sertifikat"
          >
            <X size={18} />
          </button>
        </div>

        <div className="cert-modal-body">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.5rem" }}>
            <h3 id="modal-cert-title" style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--brown)", lineHeight: 1.3 }}>
              {cert.title}
            </h3>
            <span className="pixel-label" style={{ backgroundColor: "rgba(184, 92, 56, 0.1)", color: "var(--terracotta)", padding: "0.2rem 0.5rem", borderRadius: "3px", whiteSpace: "nowrap" }}>
              {cert.category}
            </span>
          </div>

          <p className="text-small text-muted" style={{ marginBottom: "0.75rem" }}>
            Penerbit: <strong>{cert.issuer}</strong> · Tahun: <strong>{cert.date}</strong>
          </p>

          {cert.skills && cert.skills.length > 0 && (
            <div style={{ marginTop: "1rem" }}>
              <span className="text-xs text-muted" style={{ display: "block", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                Keahlian Terkait:
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {cert.skills.map((skill) => (
                  <span key={skill} className="tech-tag" style={{ fontSize: "0.72rem" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function getCategoryIcon(category) {
  switch (category) {
    case "Cybersecurity":
      return <Shield size={14} style={{ color: "var(--muted-teal)" }} />;
    case "Web Development":
      return <Code size={14} style={{ color: "var(--terracotta)" }} />;
    case "Networking":
    case "System Admin":
      return <Server size={14} style={{ color: "var(--dusty-blue)" }} />;
    case "Database":
      return <Database size={14} style={{ color: "var(--warm-yellow)" }} />;
    default:
      return <Award size={14} style={{ color: "var(--terracotta)" }} />;
  }
}

export function CertificationsSection() {
  const [ref, inView] = useInView(0.05);
  const [selected, setSelected] = useState(null);
  const [filterCategory, setFilterCategory] = useState("ALL");

  const featuredTitles = [
    "MSIB Batch 7 - Cyber Security",
    "Cyber Security Advanced",
    "Cyber Security Intermediate",
    "Web Development",
    "Database Advanced",
    "Computer Networks",
    "Linux Administration",
    "Object-Oriented Programming (OOP)",
  ];

  const featuredCerts = certifications.filter((c) => featuredTitles.includes(c.title));
  const otherCerts = certifications.filter((c) => !featuredTitles.includes(c.title));

  const categories = ["ALL", "Cybersecurity", "Web Development", "Database", "Networking", "MSIB"];

  const filteredCerts = filterCategory === "ALL"
    ? certifications
    : certifications.filter((c) => c.category === filterCategory || (filterCategory === "Networking" && c.category === "System Admin"));

  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ backgroundColor: "var(--warm-white)" }}
      aria-label="Certifications section"
    >
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "2rem" }}
        >
          <span className="section-number">// 06</span>
          <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>CERTIFICATIONS</h2>
          <p className="text-muted" style={{ maxWidth: "620px" }}>
            Beberapa kredensial yang mendukung perjalanan saya di bidang teknologi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ marginBottom: "3rem" }}
        >
          <PixelStudyRoom />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="cert-category-filters"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2rem",
            alignItems: "center",
          }}
        >
          <span className="pixel-label" style={{ marginRight: "0.5rem", color: "var(--brown)" }}>
            KATEGORI:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`cert-filter-btn ${filterCategory === cat ? "active" : ""}`}
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "0.7rem",
                padding: "0.35rem 0.75rem",
                borderRadius: "4px",
                border: "1px solid rgba(53, 37, 31, 0.12)",
                background: filterCategory === cat ? "var(--terracotta)" : "rgba(247, 235, 210, 0.5)",
                color: filterCategory === cat ? "#FFF8E7" : "var(--brown)",
                cursor: "pointer",
                transition: "all var(--transition)",
              }}
            >
              {cat === "ALL" ? "SEMUA" : cat.toUpperCase()}
            </button>
          ))}
        </motion.div>

        <div className="cert-wall-container">
          {filterCategory === "ALL" ? (
            <>
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <Sparkles size={16} style={{ color: "var(--terracotta)" }} />
                  <h3 className="text-small-head" style={{ fontSize: "1rem", letterSpacing: "0.05em", color: "var(--brown)" }}>
                    KREDENSIAL UTAMA
                  </h3>
                  <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(53, 37, 31, 0.1)" }} />
                </div>

                <div className="cert-wall-grid">
                  {featuredCerts.map((cert, i) => (
                    <motion.div
                      key={cert.title}
                      className="pixel-framed-cert-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                      onClick={() => setSelected(cert)}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setSelected(cert)}
                      role="button"
                      aria-label={`Lihat sertifikat: ${cert.title} dari ${cert.issuer}`}
                      id={`featured-cert-${i}`}
                    >
                      <div className="pixel-frame-border">
                        <div className="cert-img-wrapper">
                          <img
                            src={cert.image}
                            alt={`Sertifikat ${cert.title}`}
                            className="cert-real-img"
                            loading="lazy"
                          />
                          <div className="cert-hover-overlay">
                            <span className="pixel-label" style={{ color: "#FFF8E7", backgroundColor: "var(--terracotta)", padding: "0.3rem 0.6rem", borderRadius: "3px" }}>
                              KLIK UNTUK DETAIL
                            </span>
                          </div>
                        </div>

                        <div className="cert-card-info">
                          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.25rem" }}>
                            {getCategoryIcon(cert.category)}
                            <span className="pixel-label" style={{ fontSize: "0.6rem", color: "var(--terracotta)" }}>
                              {cert.category}
                            </span>
                            <span style={{ margin: "0 0.2rem", opacity: 0.3 }}>·</span>
                            <span className="text-xs text-muted">{cert.date}</span>
                          </div>

                          <h4 className="cert-title-text">{cert.title}</h4>
                          <p className="cert-issuer-text">{cert.issuer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  <Award size={16} style={{ color: "var(--muted-teal)" }} />
                  <h3 className="text-small-head" style={{ fontSize: "0.95rem", letterSpacing: "0.05em", color: "var(--brown)" }}>
                    KREDENSIAL LAINNYA
                  </h3>
                  <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(53, 37, 31, 0.1)" }} />
                </div>

                <div className="cert-wall-grid secondary-grid">
                  {otherCerts.map((cert, i) => (
                    <motion.div
                      key={cert.title}
                      className="pixel-framed-cert-card compact"
                      initial={{ opacity: 0, y: 15 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.04 }}
                      onClick={() => setSelected(cert)}
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setSelected(cert)}
                      role="button"
                      aria-label={`Lihat sertifikat: ${cert.title} dari ${cert.issuer}`}
                      id={`other-cert-${i}`}
                    >
                      <div className="pixel-frame-border">
                        <div className="cert-img-wrapper">
                          <img
                            src={cert.image}
                            alt={`Sertifikat ${cert.title}`}
                            className="cert-real-img"
                            loading="lazy"
                          />
                        </div>

                        <div className="cert-card-info">
                          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.2rem" }}>
                            <span className="pixel-label" style={{ fontSize: "0.58rem", color: "var(--muted-teal)" }}>
                              {cert.category}
                            </span>
                            <span style={{ opacity: 0.3 }}>·</span>
                            <span className="text-xs text-muted">{cert.date}</span>
                          </div>

                          <h4 className="cert-title-text" style={{ fontSize: "0.88rem" }}>{cert.title}</h4>
                          <p className="cert-issuer-text" style={{ fontSize: "0.78rem" }}>{cert.issuer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="cert-wall-grid">
              {filteredCerts.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  className="pixel-framed-cert-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setSelected(cert)}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setSelected(cert)}
                  role="button"
                  aria-label={`Lihat sertifikat: ${cert.title} dari ${cert.issuer}`}
                >
                  <div className="pixel-frame-border">
                    <div className="cert-img-wrapper">
                      <img
                        src={cert.image}
                        alt={`Sertifikat ${cert.title}`}
                        className="cert-real-img"
                        loading="lazy"
                      />
                    </div>

                    <div className="cert-card-info">
                      <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.2rem" }}>
                        {getCategoryIcon(cert.category)}
                        <span className="pixel-label" style={{ fontSize: "0.6rem", color: "var(--terracotta)" }}>
                          {cert.category}
                        </span>
                        <span style={{ opacity: 0.3 }}>·</span>
                        <span className="text-xs text-muted">{cert.date}</span>
                      </div>

                      <h4 className="cert-title-text">{cert.title}</h4>
                      <p className="cert-issuer-text">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <CertModal cert={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
