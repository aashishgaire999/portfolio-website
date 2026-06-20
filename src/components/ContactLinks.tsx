"use client";

import { motion } from "framer-motion";
import { easeOut, fadeUp, stagger } from "@/lib/motion";
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const icons = {
  mail: MailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  x: XIcon,
  facebook: FacebookIcon,
};

export type ContactLink = {
  label: string;
  href: string;
  icon: keyof typeof icons;
  external?: boolean;
};

export default function ContactLinks({
  links,
  layout = "grid",
}: {
  links: ContactLink[];
  layout?: "grid" | "grid-3" | "stack" | "row";
}) {
  if (layout === "row") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger(0.07)}
        className="flex flex-wrap items-center gap-x-7 gap-y-3"
      >
        {links.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.external !== false && link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.external !== false && link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: easeOut }}
            className="contact-link-row group"
            aria-label={link.label}
          >
            <span>{link.label}</span>
            <span className="contact-link-row-arrow" aria-hidden>
              ↗
            </span>
          </motion.a>
        ))}
      </motion.div>
    );
  }

  const gridClass =
    layout === "stack"
      ? "flex flex-col gap-3"
      : layout === "grid-3"
        ? "contact-links-grid-3 grid grid-cols-2 sm:grid-cols-4 gap-4"
        : "grid sm:grid-cols-2 gap-3";

  const isTile = layout === "grid-3";

  const Wrapper = isTile ? motion.div : "div";
  const wrapperProps = isTile
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true },
        variants: stagger(0.06),
      }
    : {};

  return (
    <Wrapper className={gridClass} {...wrapperProps}>
      {links.map((link, i) => {
        const Icon = icons[link.icon];
        const LinkTag = isTile ? motion.a : "a";
        const linkProps = isTile
          ? {
              variants: fadeUp,
              transition: { duration: 0.45, ease: easeOut },
              whileHover: { y: -4, scale: 1.03 },
              whileTap: { scale: 0.97 },
            }
          : {};

        return (
          <LinkTag
            key={link.label}
            href={link.href}
            target={link.external !== false && link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.external !== false && link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`contact-link group${isTile ? " contact-link-tile" : ""}`}
            aria-label={link.label}
            {...linkProps}
          >
            <span className="contact-link-icon">
              <Icon />
            </span>
            {isTile ? (
              <span className="text-[15px] font-medium text-black/75 group-hover:text-[#2dd4bf] transition-colors">
                {link.label}
              </span>
            ) : (
              <span>
                <span className="block text-sm font-medium text-black/75 group-hover:text-[#2dd4bf] transition-colors">
                  {link.label}
                </span>
                <span className="block text-[11px] text-black/30 font-mono mt-0.5 truncate">
                  {link.href.replace("mailto:", "").replace("https://", "").replace("www.", "")}
                </span>
              </span>
            )}
          </LinkTag>
        );
      })}
    </Wrapper>
  );
}
