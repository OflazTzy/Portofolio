import React from "react";

export function PixelProjectFrame({
  image,
  alt,
  theme = "web",
  title = "project_view.env",
  className = "",
}) {
  const themeClasses = {
    web: "frame-theme-web",
    cyber: "frame-theme-cyber",
    ml: "frame-theme-ml",
    design: "frame-theme-design",
  };

  return (
    <div className={`pixel-project-frame-wrapper ${themeClasses[theme] || "frame-theme-web"} ${className}`}>
      <div className="pixel-project-bar">
        <div className="pixel-project-bar-dots">
          <span className="p-dot red" />
          <span className="p-dot yellow" />
          <span className="p-dot green" />
          <span className="pixel-project-title-text">{title}</span>
        </div>
        <span className="pixel-project-env-tag">{theme.toUpperCase()}</span>
      </div>

      <div className="pixel-project-screen">
        <img
          src={image}
          alt={alt}
          className="pixel-project-real-img"
          loading="lazy"
        />
        <span className="pixel-corner top-left" />
        <span className="pixel-corner top-right" />
        <span className="pixel-corner bottom-left" />
        <span className="pixel-corner bottom-right" />
      </div>

      <div className="pixel-project-footer">
        <span className="pixel-project-status-dot" />
        <span className="pixel-project-status-text">CRISP PREVIEW · NO FILTERS</span>
      </div>
    </div>
  );
}
