export const profile = {
  name: "Ashish Gaire",
  firstName: "Ashish",
  lastName: "Gaire",
  title: "Co-Founder @ Codyza · Next.js & AI",
  tagline: "I turn ideas into shipped, AI-powered web apps — fast, and built to last.",
  email: "gaireashish64@gmail.com",
  github: "https://github.com/aashishgaire999",
  githubUsername: "aashishgaire999",
  website: "https://codyza.com",
  linkedin: "https://www.linkedin.com/in/ashishgaire/",
  instagram: "https://www.instagram.com/ash.ish_12_3/",
  x: "https://x.com/nifjustice",
  facebook: "https://www.facebook.com/aashish.gaire.37",
  location: "Marshall, MN",
  availability: "F-1 / OPT Eligible",
  avatar: "https://avatars.githubusercontent.com/u/138271766?v=4",
  bio: "Full-stack developer and co-founder with a track record of shipping production-grade, AI-integrated web applications. Built and launched Codyza — a live developer community platform — in under 4 weeks using Next.js, TypeScript, and Supabase.",
  longBio: [
    "I'm a CS student at Southwest Minnesota State University (Expected May 2028) and co-founder of Codyza, where I sole-engineered a production developer platform from zero with zero paid marketing.",
    "I build at the intersection of AI and modern web development — from Gemini-powered code review pipelines to Supabase RLS security. I take ideas from zero to production fast.",
  ],
};

export const stats = [
  { value: "13", label: "Contributors onboarded" },
  { value: "8+", label: "Projects shipped" },
  { value: "15+", label: "Pages in Codyza" },
  { value: "4 wks", label: "Codyza launch time" },
];

export const heroFocus = ["Next.js", "TypeScript", "Supabase", "Gemini AI"];

export const heroWords: { text: string; bold: boolean; href?: string }[] = [
  { text: "Ashish Gaire", bold: true },
  { text: "is a", bold: false },
  { text: "full-stack", bold: false },
  { text: "developer", bold: false },
];

export const navLinks = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Projects", href: "#projects" },
  { num: "04", label: "Contact", href: "#contact" },
];

export const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Java", "Python", "HTML/CSS"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"] },
  { category: "Backend & DB", items: ["Node.js", "Supabase", "PostgreSQL", "RLS", "REST APIs", "MongoDB"] },
  { category: "AI & Integrations", items: ["Gemini AI", "OpenAI API", "Claude API", "Stripe", "Resend"] },
  { category: "DevOps", items: ["Git", "GitHub", "Vercel", "CI/CD", "VS Code"] },
];

export const experience = [
  {
    title: "Co-Founder & Lead Developer",
    company: "Codyza",
    companyUrl: "https://codyza.com",
    period: "Jan 2025 — Present",
    description:
      "Co-founded and sole-engineered a production developer platform with AI code review, gamification, and team collaboration — zero paid marketing.",
    bullets: [
      "Built AI code review pipeline using Gemini AI — evaluates submissions across 6 quality dimensions and auto-distributes XP",
      "Engineered 8-tier XP gamification system with rank progression, streak tracking, and leaderboard",
      "Architected team collaboration: Project Groups, Open Bounties with XP rewards, real-time notifications",
      "Implemented Supabase RLS policies, JWT auth, invite-only access — resolved silent policy failures without data loss",
      "Shipped full design system across 15+ pages — glassmorphism, Framer Motion, responsive layouts",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Gemini AI", "Vercel"],
  },
];

export const education = {
  degree: "B.S. Computer Science",
  school: "Southwest Minnesota State University",
  period: "Expected May 2028",
  coursework: [
    "Data Structures",
    "Object-Oriented Design & Programming",
    "Computer Organization & Architecture",
    "Fundamentals of Programming",
  ],
};

export type FeaturedProject = {
  name: string;
  role: string;
  year: string;
  href: string;
  github: string;
  previewUrl?: string;
  previewImage?: string;
  gradient: string;
  label: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Codyza",
    role: "Co-Founder & Lead Developer",
    year: "2025",
    href: "https://codyza.com",
    github: "https://github.com/aashishgaire999/codyza",
    previewUrl: "https://codyza.com",
    gradient: "linear-gradient(145deg, #0c1222 0%, #1e3a5f 50%, #0ea5e9 100%)",
    label: "Developer Ecosystem",
    description:
      "Production developer platform with AI code review, 8-tier XP gamification, team collaboration, and invite-only access.",
    highlights: [
      "Invite-only access with Supabase RLS + JWT auth",
      "Gemini AI reviews code across 6 quality dimensions",
      "Full design system across 15+ pages",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Gemini AI", "Vercel"],
  },
  {
    name: "RuralReach",
    role: "Solo Developer",
    year: "2026",
    href: "https://github.com/aashishgaire999/ruralreach",
    github: "https://github.com/aashishgaire999/ruralreach",
    gradient: "linear-gradient(145deg, #052e16 0%, #166534 50%, #2dd4bf 100%)",
    label: "Healthcare AI Agent",
    description:
      "AI-powered healthcare navigation for rural families in Marshall, MN — Google Cloud Hackathon 2026.",
    highlights: [
      "Gemini AI agent with action cards",
      "MongoDB family profiles & memory",
      "Built for rural families in Marshall, MN",
    ],
    stack: ["Next.js", "Gemini AI", "MongoDB", "Framer Motion"],
  },
  {
    name: "Kalika Website",
    role: "Solo Developer",
    year: "2026",
    href: "https://kalikacleaning.com",
    github: "https://github.com/aashishgaire999/kalika-website",
    previewUrl: "https://kalikacleaning.com",
    previewImage: "/previews/kalika.png",
    gradient: "linear-gradient(145deg, #1c1917 0%, #78716c 50%, #d97706 100%)",
    label: "Hospitality",
    description: "Premium hospitality website with responsive layouts and mobile-optimized service grids.",
    highlights: ["Custom Python build pipeline", "Deployed on Vercel"],
    stack: ["HTML", "CSS", "Python", "Vercel"],
  },
];

export const otherProjects = [
  {
    name: "FoodTruth",
    description: "Interactive web experience exploring food transparency and nutrition.",
    href: "https://github.com/aashishgaire999/foodtruth",
    year: "2025",
    language: "HTML",
  },
  {
    name: "Task Management",
    description: "Java-based task management application with clean OOP architecture.",
    href: "https://github.com/aashishgaire999/TASK-MANAGEMENT",
    year: "2025",
    language: "Java",
  },
  {
    name: "Quiz Game",
    description: "Interactive quiz game with styled UI and score tracking.",
    href: "https://github.com/aashishgaire999/Quiz-game",
    year: "2025",
    language: "CSS",
  },
];

export const manifesto =
  "Make it fast. Make it beautiful. Make it consistent. Make it carefully. Make it timeless. Make it soulful. Make it.";

export const socialLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "X", href: profile.x },
  { label: "Email", href: `mailto:${profile.email}` },
];

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" as const, external: false },
  { label: "GitHub", href: profile.github, icon: "github" as const },
  { label: "X", href: profile.x, icon: "x" as const },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" as const },
];

export const techMarquee = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Three.js",
  "Framer Motion",
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Gemini AI",
  "OpenAI",
  "Git",
  "Vercel",
  "Stripe",
  "HTML/CSS",
  "REST APIs",
];
