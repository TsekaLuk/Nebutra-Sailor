export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  status: "live" | "building" | "shipped";
}

export const projects: Project[] = [
  {
    slug: "nebutra-sailor",
    name: "Nebutra Sailor",
    tagline: "Enterprise AI-native SaaS platform",
    description:
      "Open-source monorepo architecture for building multi-tenant AI platforms. Next.js 16, Prisma, multi-agent workflows, 6 shared packages.",
    tags: ["Next.js", "AI", "SaaS", "Open Source"],
    github: "https://github.com/Nebutra/Nebutra-Sailor",
    status: "building",
  },
  {
    slug: "any2md",
    name: "any2md",
    tagline: "High-fidelity document \u2192 Markdown converter",
    description:
      "Dual-engine architecture: PyMuPDF for text + Qwen-VL for vision. Context engineering with DeepSeek LLM achieves 93% context retention across 20,000+ pages.",
    tags: ["Python", "VLM", "LLM", "Context Engineering"],
    github: "https://github.com/TsekaLuk/any2md",
    status: "shipped",
  },
  {
    slug: "mineru-skill",
    name: "MinerU-Skill",
    tagline: "PDF \u2192 Markdown AI conversion tool",
    description:
      "Claude Code skill for converting PDFs and documents to clean Markdown using MinerU. One-command install.",
    tags: ["Claude", "Developer Tool", "Open Source"],
    github: "https://github.com/Nebutra/MinerU-Skill",
    status: "live",
  },
  {
    slug: "low-altitude-economy",
    name: "Low-Altitude Economy Research",
    tagline: "TAM-SEM model \u00d7 SnowNLP sentiment analysis",
    description:
      "Surveyed 2,609 respondents (93.1% recovery) on UAM perception in Jiangsu. Discovered a \u201crisk paradox\u201d: perceived risk positively drives adoption (\u03b2=0.262, p<0.001). Provincial First Prize.",
    tags: ["SEM", "NLP", "Python", "Research"],
    status: "shipped",
  },
  {
    slug: "breakdown",
    name: "Breakdown",
    tagline: "AI product marketing OS",
    description:
      "Next.js 15 marketing site with dark theme, Framer Motion scroll-driven animations, \u6e05\u534e\u7d2b brand system.",
    tags: ["Next.js", "Marketing", "Design"],
    status: "shipped",
  },
  {
    slug: "polaris-web",
    name: "Polaris Web",
    tagline: "\u6597\u661f\u8336\u4e1a brand experience",
    description:
      "Premium tea brand website with custom scroll animations and mobile-first design for the Chinese market.",
    tags: ["Next.js", "Brand", "Chinese Market"],
    status: "live",
  },
  {
    slug: "appen-sop",
    name: "Appen SOP System",
    tagline: "AI annotation workflow automation",
    description:
      "Designed V4 SOP framework for AI data annotation at Appen. Built automated report dashboards (TCS/BW/DP) and HM3D dataset evaluation pipeline.",
    tags: ["Node.js", "Automation", "AI Data"],
    status: "shipped",
  },
  {
    slug: "hydrogem-web",
    name: "HydroGem",
    tagline: "Water quality monitoring system",
    description:
      "React-based real-time water quality monitoring dashboard with data visualization and alert system.",
    tags: ["React", "IoT", "Data Viz"],
    github: "https://github.com/TsekaLuk/hydrogem-web",
    status: "shipped",
  },
];
