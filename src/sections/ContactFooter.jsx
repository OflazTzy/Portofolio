import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Award } from "lucide-react";

export function ContactSection({ data }) {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="brutal-line mb-12" />
      <span className="brutal-badge bg-black text-white mb-4 inline-block">// CONTACT</span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-black dark:text-white mb-2">
        {data.ui.contactTitle}
      </h2>
      <p className="font-mono text-stone-600 dark:text-stone-400 mb-10 max-w-2xl">{data.ui.contactDesc}</p>

      <div className="max-w-2xl mx-auto">
        <div className="brutal-card-static bg-white dark:bg-stone-900 p-6">
          <h3 className="font-display text-xl font-black text-black dark:text-white mb-2">
            {data.ui.professionalLinks}
          </h3>
          <p className="font-mono text-sm text-stone-600 dark:text-stone-400 mb-6 leading-6">
            {data.ui.professionalLinksDesc}
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {data.socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="brutal-btn justify-between bg-stone-100 dark:bg-stone-800 text-black dark:text-white px-5 py-4 text-sm uppercase w-full">
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={data.profile.cvUrl} download
              className="brutal-btn bg-brutal-yellow text-black px-6 py-3 text-sm uppercase">
              <Download className="h-4 w-4" /> {data.ui.downloadCv}
            </a>
            <a href={data.profile.certificateUrl}
              className="brutal-btn bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm uppercase">
              <Award className="h-4 w-4" /> {data.ui.certificationPortfolio}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ data }) {
  return (
    <footer className="bg-black dark:bg-stone-950 border-t-3 border-black dark:border-white px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-xl font-black text-brutal-yellow">[DAVID_OLFAT]</p>
            <p className="font-mono text-xs text-stone-400 mt-2 max-w-md">{data.ui.builtWith}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.label} href={link.href} aria-label={link.label}
                  className="brutal-btn h-10 w-10 bg-brutal-yellow text-black">
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-8 h-px bg-stone-800" />
        <p className="mt-4 font-mono text-xs text-stone-500">
          © {new Date().getFullYear()} Portfolio. {data.ui.allRightsReserved}
        </p>
      </div>
    </footer>
  );
}
