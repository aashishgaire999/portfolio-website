"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeOut } from "@/lib/motion";
import { applyTheme, getStoredTheme } from "@/lib/theme";

const SEEN_KEY = "theme-prompt-seen";
const AUTO_DISMISS_MS = 6000;

export default function ThemePrompt() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = localStorage.getItem(SEEN_KEY) === "1";
    } catch {
      /* ignore */
    }

    // Only greet first-time visitors who haven't already picked a theme.
    if (seen || getStoredTheme() !== null) return;

    const showTimer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const autoTimer = setTimeout(() => dismiss(), AUTO_DISMISS_MS);
    return () => clearTimeout(autoTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const markSeen = () => {
    try {
      localStorage.setItem(SEEN_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const choose = (theme: "light" | "dark") => {
    applyTheme(theme);
    markSeen();
    setOpen(false);
  };

  const dismiss = () => {
    markSeen();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="theme-prompt"
          role="dialog"
          aria-label="Choose appearance"
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.97 }}
          transition={{ duration: 0.32, ease: easeOut }}
        >
          <button
            type="button"
            className="theme-prompt-close"
            onClick={dismiss}
            aria-label="Dismiss"
          >
            ×
          </button>

          <span className="theme-prompt-label">Pick your view</span>

          <div className="theme-prompt-options">
            <motion.button
              type="button"
              onClick={() => choose("light")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="theme-prompt-option"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              Light
            </motion.button>

            <motion.button
              type="button"
              onClick={() => choose("dark")}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="theme-prompt-option theme-prompt-option-dark"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
              Dark
            </motion.button>
          </div>

          <motion.span
            className="theme-prompt-progress"
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: AUTO_DISMISS_MS / 1000, ease: "linear" }}
            aria-hidden
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
