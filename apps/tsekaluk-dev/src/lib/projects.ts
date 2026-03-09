export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: string;
  metric?: string;
  url?: string;
  github?: string;
  status: "live" | "building" | "shipped";
}

export const projects: Project[] = [
  {
    slug: "any2md",
    name: "any2md",
    icon: "file-text",
    tagline: "Where other converters lose 40% of context, this one keeps 93%",
    description:
      "Most PDF-to-Markdown tools silently drop formulas, tables, and cross-references. any2md solves this with a dual-engine architecture\u2014PyMuPDF extracts semantic text while Qwen-VL reads visual layout\u2014then DeepSeek LLM reconstructs the missing links via layered prompt + few-shot + chain-of-thought. Tested on 20,000+ real-world pages across research papers and enterprise archives, cutting manual cleanup by 70%.",
    metric: "93% context retention",
    tags: ["Python", "VLM", "LLM", "Context Engineering"],
    github: "https://github.com/TsekaLuk/any2md",
    status: "shipped",
  },
  {
    slug: "low-altitude-economy",
    name: "Low-Altitude Economy Research",
    icon: "plane",
    tagline:
      "Discovered a paradox: risk perception actually increases adoption",
    description:
      "Everyone assumed perceived risk would deter UAM adoption. Our TAM\u2013SEM model on 2,609 respondents (93.1% recovery rate, KMO=0.951) proved the opposite: risk positively drives willingness to adopt (\u03b2=0.262, p<0.001). We also mined 1,695 Bilibili comments with SnowNLP to map public sentiment. The \u201crisk paradox\u201d finding challenged a decade of technology adoption literature. Provincial First Prize.",
    metric: "\u03b2=0.262, p<0.001",
    tags: ["SEM", "NLP", "Python", "2,609 Samples"],
    status: "shipped",
  },
  {
    slug: "nebutra-sailor",
    name: "Nebutra Sailor",
    tagline: "One monorepo, 4 production apps, 12,000+ lines of shared code",
    icon: "ship",
    description:
      "Enterprise-grade monorepo powering 4 apps (marketing, dashboard, docs, studio) from 6 shared packages. Next.js 16 + React 19 + Tailwind v4, with a custom design token pipeline, 541 tree-shakable icons, and multi-theme engine supporting 6 oklch color schemes. Ships features 3x faster than separate repos.",
    metric: "6 packages \u00b7 4 apps",
    tags: ["Next.js 16", "Turborepo", "AI SaaS", "Open Source"],
    github: "https://github.com/Nebutra/Nebutra-Sailor",
    status: "building",
  },
  {
    slug: "mcm-icm",
    name: "Synergistic Equilibrium",
    icon: "bar-chart-3",
    tagline: "Optimizing tourism vs. environment with 8.3% prediction error",
    description:
      "MCM/ICM 2025 (Problem B): built a system dynamics + NSGA-III multi-objective optimizer balancing tourist flow, environmental quality, and social satisfaction. Achieved 8.3% tourist prediction error with R\u00b2>0.5 on a three-dimensional coupled model. Competed against 28,000+ teams globally. Honorable Mention.",
    metric: "8.3% prediction error",
    tags: ["NSGA-III", "System Dynamics", "PCA-KMeans"],
    status: "shipped",
  },
  {
    slug: "biomass-modeling",
    name: "Biomass Co-Pyrolysis Optimization",
    icon: "flame",
    tagline:
      "Found the exact 28.44% ratio\u2014won Grand Innovation Award for it",
    description:
      "Used LightGBM + Gaussian Process Regression + PSO to discover that 28.44% biomass-to-coal ratio maximizes clean energy output. The entropy-weighted fuzzy evaluation framework quantified non-linear interactions between mixing ratios and gas/char/liquid yields. Judges praised the methodology as transferable across energy domains. First Prize + Grand Innovation Award at Shuwei Cup.",
    metric: "28.44% optimal ratio",
    tags: ["LightGBM", "PSO", "Energy", "First Prize"],
    status: "shipped",
  },
  {
    slug: "pet-industry",
    name: "China Pet Industry Forecast",
    icon: "trending-up",
    tagline: "LASSO R\u00b2=0.9850 predicted a $52B market by 2026",
    description:
      "Built an integrated forecasting framework (ARIMAX-GARCH + VAR + LASSO + Prophet) spanning market size, pet population, and food manufacturing. LASSO regression identified key drivers with R\u00b2=0.9850. Cross-compared US/EU markets using HHI concentration index. Predicted 144.68M pets and 82.8% capacity utilization by 2026.",
    metric: "R\u00b2=0.9850",
    tags: ["ARIMAX-GARCH", "LASSO", "Prophet", "APMCM"],
    status: "shipped",
  },
  {
    slug: "cursor-export",
    name: "Cursor Export Extension",
    icon: "file-output",
    tagline:
      "86% less time on knowledge management\u2014one-click conversation export",
    description:
      "Built a Cursor IDE extension that exports AI conversations to structured Markdown with layered parsing of thinking blocks, code segments, and context. Handles cross-platform compatibility with error rollback. Reduced per-conversation organization time from ~15 min to ~2 min (5x efficiency) across a 20-person team.",
    metric: "86% time reduction",
    tags: ["TypeScript", "VSCode API", "Developer Tool"],
    status: "shipped",
  },
  {
    slug: "brand-strategy",
    name: "\u6797\u8393\u8393 Brand Strategy",
    icon: "megaphone",
    tagline:
      "1,200+ consumer samples \u00d7 AIGC pipeline = 40% engagement lift",
    description:
      "Led a PEST-SWOT driven brand overhaul for Suzhou\u2019s \u201c\u6797\u8393\u8393\u201d agricultural product. Surveyed 1,200+ consumers to map purchase drivers and price sensitivity. Deployed Claude + Flux + Midjourney AIGC toolchain for brand stories and mascot concepts, cutting creative iteration from weeks to days. Projected 40%+ user engagement increase. National Second Prize.",
    metric: "1,200+ samples",
    tags: ["AIGC", "Brand", "Claude", "National Prize"],
    status: "shipped",
  },
  {
    slug: "mineru-skill",
    name: "MinerU-Skill",
    icon: "pickaxe",
    tagline:
      "Zero-config Claude Code skill\u2014PDF to Markdown in one command",
    description:
      "Open-source Claude Code skill that wraps MinerU for layout-aware PDF/document conversion. One-command install, no API keys needed. Handles 100+ page documents with table and formula preservation. Built for the Claude Code ecosystem with auto-detection of document type and intelligent chunking.",
    metric: "0 config needed",
    tags: ["Claude Code", "Open Source", "PDF"],
    github: "https://github.com/Nebutra/MinerU-Skill",
    status: "live",
  },
  {
    slug: "appen-sop",
    name: "Appen SOP System",
    icon: "clipboard-check",
    tagline: "50,000+ AI annotations per week, QA time cut by 60%",
    description:
      "Designed the V4 SOP framework at Appen handling 50,000+ AI data annotations weekly across TCS, BW, and DP pipelines. Automated report dashboards replaced 8+ hours/week of manual QA review. Built the HM3D dataset evaluation pipeline for 3D spatial annotation quality scoring.",
    metric: "60% QA time saved",
    tags: ["Node.js", "Automation", "AI Data", "Appen"],
    status: "shipped",
  },
  {
    slug: "breakdown",
    name: "Breakdown",
    icon: "zap",
    tagline: "Lighthouse 96, sub-1.2s LCP, 12 scroll-driven animations",
    description:
      "AI product marketing OS with dark-theme \u6e05\u534e\u7d2b brand system. Built with Next.js 15 and Framer Motion, featuring 12 scroll-driven animation sequences choreographed to 60fps. Lighthouse performance 96, accessibility 98, LCP under 1.2 seconds. Mobile-first with zero layout shift.",
    metric: "Lighthouse 96",
    tags: ["Next.js", "Framer Motion", "Design"],
    status: "shipped",
  },
  {
    slug: "hydrogem-web",
    name: "HydroGem",
    icon: "droplets",
    tagline:
      "12 water quality parameters, real-time alerts, sub-second refresh",
    description:
      "Real-time water quality monitoring dashboard processing 10,000+ sensor readings daily across 12 parameters (pH, turbidity, dissolved oxygen, etc.). Sub-second data refresh with configurable alert thresholds. Built on React with streaming data visualization and historical trend analysis.",
    metric: "10,000+ readings/day",
    tags: ["React", "IoT", "Data Viz", "Real-time"],
    github: "https://github.com/TsekaLuk/hydrogem-web",
    status: "shipped",
  },
];
