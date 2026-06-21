"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile, socialLinks } from "@/data/portfolio";
import { easeOut } from "@/lib/motion";
import { useResume } from "@/components/ResumeModal";
import ThemeToggle from "@/components/ThemeToggle";

const menuVariants = {
  hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.55, ease: easeOut },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.4, ease: easeOut },
  },
};

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { open: openResume } = useResume();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="site-header fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-md border-b border-black/[0.06]">
        <div className="site-header-inner">
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="font-mono text-sm font-semibold text-black/85 tracking-tight"
          >
            AG
          </motion.a>
          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`menu-toggle font-mono uppercase tracking-[0.2em] transition-colors ${menuOpen ? "menu-toggle-open" : ""}`}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? "Close" : "Menu"}
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="site-menu fixed inset-0 z-40 backdrop-blur-xl overflow-hidden"
          >
            <div className="menu-orb menu-orb-a" aria-hidden />
            <div className="menu-orb menu-orb-b" aria-hidden />

            <div className="page-inner h-full flex flex-col justify-between pt-24 pb-12 relative z-10">
              <nav className="flex flex-col gap-2 sm:gap-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.45, ease: easeOut }}
                    onClick={() => setMenuOpen(false)}
                    className="menu-nav-link group"
                  >
                    <span className="menu-nav-indicator" />
                    <span className="text-[#2dd4bf]/80 font-mono text-sm sm:text-base">{link.num}.</span>
                    <span>{link.label}</span>
                  </motion.a>
                ))}
                <motion.button
                  type="button"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: 0.08 + navLinks.length * 0.07, duration: 0.45, ease: easeOut }}
                  onClick={() => {
                    setMenuOpen(false);
                    openResume();
                  }}
                  className="menu-nav-link group text-left"
                >
                  <span className="menu-nav-indicator" />
                  <span className="text-[#2dd4bf]/80 font-mono text-sm sm:text-base">05.</span>
                  <span>Résumé</span>
                </motion.button>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.45, ease: easeOut }}
                className="pt-10 border-t border-black/[0.06] space-y-5"
              >
                <div>
                  <p className="font-mono text-[10px] text-black/25 uppercase tracking-widest mb-3">
                    Find me on
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.label === "Email" ? undefined : "_blank"}
                        rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                        onClick={() => setMenuOpen(false)}
                        className="sidebar-social-link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                <p className="font-mono text-[10px] text-black/25 leading-relaxed">
                  {profile.location}
                  <br />
                  {profile.availability}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
