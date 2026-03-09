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
      "Open-source monorepo architecture for building multi-tenant AI platforms. Next.js 16, Prisma, multi-agent workflows.",
    tags: ["Next.js", "AI", "SaaS", "Open Source"],
    github: "https://github.com/Nebutra/Nebutra-Sailor",
    status: "building",
  },
  {
    slug: "mineru-skill",
    name: "MinerU-Skill",
    tagline: "PDF \u2192 Markdown AI conversion tool",
    description:
      "Claude Code skill for converting PDFs and documents to clean Markdown using MinerU.",
    tags: ["Claude", "Developer Tool", "Open Source"],
    github: "https://github.com/Nebutra/MinerU-Skill",
    status: "live",
  },
  {
    slug: "breakdown",
    name: "Breakdown",
    tagline: "AI product marketing OS",
    description:
      "Next.js 15 marketing site with dark theme, Framer Motion animations, \u6E05\u534E\u7D2B brand system.",
    tags: ["Next.js", "Marketing", "Design"],
    status: "shipped",
  },
  {
    slug: "polaris-web",
    name: "Polaris Web",
    tagline: "\u6597\u661F\u8336\u4E1A brand experience",
    description: "Premium tea brand website with custom scroll animations.",
    tags: ["Next.js", "Brand", "Chinese Market"],
    status: "live",
  },
];
