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
      "Most converters silently drop formulas, tables, and cross-references. any2md uses a dual-engine\u2014PyMuPDF for text + Qwen-VL for vision\u2014then DeepSeek LLM reconstructs context via layered prompt + few-shot + CoT. Processes 68 pages/min with 85% table structuring and 90% LaTeX formula preservation. Imported 20,000+ pages into a team knowledge base in one week, cutting manual cleanup by 70%.",
    metric: "93% \u00b7 68 pages/min",
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
      "Cursor IDE extension (7 GitHub stars) that exports AI conversations to structured Markdown. Tested on 214 conversations (1,980 messages): processing time dropped from 5.8 min to 0.8 min per conversation, code snippet loss rate under 0.5%, throughput 12.5 conversations/min. Cross-platform VSIX with >98% install success rate across Windows/macOS/Linux.",
    metric: "86% \u00b7 \u26057 stars",
    tags: ["TypeScript", "VSCode API", "Developer Tool"],
    github: "https://github.com/TsekaLuk/Cursor-export-extension",
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
    slug: "warehouse-drone",
    name: "Warehouse Inventory Drone",
    icon: "radar",
    tagline: "95% recognition accuracy, full shelf scan in under 3 minutes",
    description:
      "Multi-rotor drone system for automated warehouse stocktaking. Integrated STM32 flight controller + OpenMV vision + BLE communication for autonomous waypoint navigation and QR code scanning across 3D shelf structures. 95% barcode recognition accuracy with laser calibration, completing full inventory traversal in under 3 minutes.",
    metric: "95% accuracy",
    tags: ["STM32", "OpenMV", "PID", "Embedded"],
    status: "shipped",
  },
  {
    slug: "cdtmp",
    name: "CDTMP Agent Protocol",
    icon: "brain",
    tagline:
      "Task success rate +18pp by turning prompt tricks into reusable protocol",
    description:
      "Turned ad-hoc prompt engineering into a structured agent protocol: task decomposition, state machines, retry strategies, and auditable intermediate states. Tested on 120 cross-domain tasks: success rate jumped from 63% to 81%, JSON compliance from 72% to 94%, rework rounds dropped 29%. Framework-agnostic\u2014plugs into LangGraph, Semantic Kernel, or custom executors.",
    metric: "81% success rate",
    tags: ["Agent Protocol", "LLM", "Open Source"],
    github: "https://github.com/TsekaLuk/CDTMP-Agent-Instructions",
    status: "shipped",
  },
  {
    slug: "hydrogem-web",
    name: "HydroGem",
    icon: "droplets",
    tagline:
      "Real-time water quality dashboard with 5-second refresh and alerts",
    description:
      "React + TypeScript monitoring system tracking 12 water quality parameters (pH, turbidity, dissolved oxygen, etc.) with 5-second auto-refresh and configurable alert thresholds. Built with streaming data visualization and historical trend analysis for environmental monitoring.",
    metric: "12 parameters \u00b7 5s refresh",
    tags: ["React", "TypeScript", "IoT", "Data Viz"],
    github: "https://github.com/TsekaLuk/hydrogem-web",
    status: "shipped",
  },
];
