"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

const RESUME_PATH = "/ashish-gaire-resume.pdf";

type ResumeContextValue = {
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const ResumeContext = createContext<ResumeContextValue | null>(null);

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
}

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <ResumeContext.Provider value={{ open, close, toggle }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="resume-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            onClick={close}
          >
            <motion.div
              className="resume-panel"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.45, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="resume-chrome">
                <div className="resume-dots" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
                <span className="resume-filename">ashish-gaire-resume.pdf</span>
                <div className="resume-actions">
                  <a
                    href={RESUME_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-action"
                  >
                    Open ↗
                  </a>
                  <a
                    href={RESUME_PATH}
                    download="Ashish-Gaire-Resume.pdf"
                    className="resume-action resume-action-primary"
                  >
                    Download ↓
                  </a>
                  <button
                    onClick={close}
                    className="resume-close"
                    aria-label="Close résumé"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <div className="resume-doc">
                <iframe
                  src={`${RESUME_PATH}#view=FitH&toolbar=0`}
                  title="Ashish Gaire — Résumé"
                  className="resume-iframe"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ResumeContext.Provider>
  );
}
