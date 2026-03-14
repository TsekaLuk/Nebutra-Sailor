import { getTranslations } from "next-intl/server";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  techStack?: string[];
  icon: string;
  metric?: string;
  url?: string;
  github?: string;
  status: "live" | "building" | "shipped";
  highlights?: { value: string; label: string }[];
  architecture?: string;
  story?: string;
  cover?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    slug: "any2md",
    name: "any2md",
    icon: "file-text",
    cover:
      "https://images.unsplash.com/photo-1616861771635-49063a4636ed?w=1200&h=900&fit=crop&auto=format",
    tagline: "Where other converters lose 40% of context, this one keeps 93%",
    description:
      "Most converters silently drop formulas, tables, and cross-references. any2md uses a dual-engine\u2014PyMuPDF for text + Qwen-VL for vision\u2014then DeepSeek LLM reconstructs context via layered prompt + few-shot + CoT. Processes 68 pages/min with 85% table structuring and 90% LaTeX formula preservation. Imported 20,000+ pages into a team knowledge base in one week, cutting manual cleanup by 70%.",
    metric: "93% \u00b7 68 pages/min",
    tags: ["Python", "VLM", "LLM", "Context Engineering"],
    techStack: [
      "Python",
      "Qwen VL",
      "DeepSeek LLM",
      "Context Engineering",
      "PDF",
      "Async Pipeline",
    ],
    github: "https://github.com/TsekaLuk/any2md",
    status: "shipped",
    highlights: [
      { value: "93%", label: "Context Retention" },
      { value: "68", label: "Pages / Min" },
      { value: "20K+", label: "Pages Imported" },
      { value: "70%", label: "Cleanup Reduced" },
    ],
    architecture: `graph LR
  PDF[PDF / DOCX] --> PyMuPDF[PyMuPDF<br/>Text Engine]
  PDF --> QwenVL[Qwen-VL<br/>Vision Engine]
  PyMuPDF --> Merge[Context Merger]
  QwenVL --> Merge
  Merge --> DeepSeek[DeepSeek LLM<br/>Layered Prompt + CoT]
  DeepSeek --> MD[Structured Markdown]`,
    story:
      "Most document converters treat pages as flat text\u2014they silently drop formulas, break tables, and lose cross-references. We measured 40% context loss on competitors. any2md uses a dual-engine approach: PyMuPDF extracts text structure while Qwen-VL reads the visual layout. DeepSeek LLM then reconstructs the missing context through layered prompting with few-shot examples and chain-of-thought reasoning.\n\nThe result: 93% context retention at 68 pages/min, with 85% table structuring accuracy and 90% LaTeX formula preservation. One team imported 20,000+ pages into their knowledge base in a single week, cutting manual cleanup by 70%. The tool processes everything from scanned PDFs to complex academic papers with multi-column layouts.",
  },
  {
    slug: "low-altitude-economy",
    name: "Low-Altitude Economy Research",
    icon: "plane",
    cover:
      "https://images.unsplash.com/photo-1760377964851-29a6d3e3259a?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "Discovered a paradox: risk perception actually increases adoption",
    description:
      "Everyone assumed perceived risk would deter UAM adoption. Our TAM\u2013SEM model on 2,609 respondents (93.1% recovery rate, KMO=0.951) proved the opposite: risk positively drives willingness to adopt (\u03b2=0.262, p<0.001). We also mined 1,695 Bilibili comments with SnowNLP to map public sentiment. The \u201crisk paradox\u201d finding challenged a decade of technology adoption literature. Provincial First Prize.",
    metric: "\u03b2=0.262, p<0.001",
    tags: ["SEM", "NLP", "Python", "2,609 Samples"],
    techStack: ["Python", "SEM", "NLP", "Analytics", "Bilibili"],
    status: "shipped",
    highlights: [
      { value: "2,609", label: "Respondents" },
      { value: "93.1%", label: "Recovery Rate" },
      { value: "0.951", label: "KMO Score" },
      { value: "1,695", label: "Comments Mined" },
    ],
    architecture: `graph TB
  Survey[2,609 Surveys] --> TAM[TAM-SEM Model]
  Bilibili[1,695 Bilibili Comments] --> SnowNLP[SnowNLP Sentiment]
  TAM --> SEM[Structural Equation Modeling]
  SnowNLP --> Sentiment[Sentiment Map]
  SEM --> Paradox[Risk Paradox Discovery<br/>\u03b2=0.262 p<0.001]
  Sentiment --> Policy[4-Pillar Policy<br/>Recommendations]`,
    story:
      "Every technology adoption model in the last decade predicted the same thing: perceived risk deters adoption. We set out to test this for urban air mobility with 2,609 respondents (93.1% recovery rate, KMO=0.951). The TAM\u2013SEM model proved the opposite\u2014risk perception positively drives willingness to adopt (\u03b2=0.262, p<0.001). People who see the risk also see the reward.\n\nWe cross-validated with 1,695 Bilibili comments mined via SnowNLP sentiment analysis, confirming the paradox in public discourse. The finding challenged a decade of technology adoption literature and earned a Provincial First Prize. We delivered 4-pillar policy recommendations covering airspace management, infrastructure, regulation, and public participation.",
  },
  {
    slug: "nebutra-sailor",
    name: "Nebutra Sailor",
    tagline: "One monorepo, 4 production apps, 12,000+ lines of shared code",
    icon: "ship",
    cover:
      "https://images.unsplash.com/photo-1753998943413-8cba1b923c0e?w=1200&h=900&fit=crop&auto=format",
    description:
      "Enterprise-grade monorepo powering 4 apps (marketing, dashboard, docs, studio) from 6 shared packages. Next.js 16 + React 19 + Tailwind v4, with a custom design token pipeline, 541 tree-shakable icons, and multi-theme engine supporting 6 oklch color schemes. Ships features 3x faster than separate repos.",
    metric: "6 packages \u00b7 4 apps",
    tags: ["Next.js 16", "Turborepo", "AI SaaS", "Open Source"],
    techStack: [
      "Next.js 16",
      "React",
      "TypeScript",
      "Turborepo",
      "Vercel",
      "Open Source",
    ],
    github: "https://github.com/Nebutra/Nebutra-Sailor",
    status: "building",
    highlights: [
      { value: "6", label: "Shared Packages" },
      { value: "4", label: "Production Apps" },
      { value: "541", label: "Tree-Shakable Icons" },
      { value: "6", label: "Color Themes" },
    ],
    architecture: `graph TB
  subgraph Apps
    LP[Landing Page]
    Web[Dashboard]
    Docs[Design Docs]
    Studio[Sanity Studio]
  end
  subgraph Packages
    UI[ui<br/>Radix + HeroUI + Lobe]
    Tokens[tokens<br/>CSS Variables]
    Theme[theme<br/>6 oklch Themes]
    Icons[icons<br/>541 Geist TSX]
    Brand[brand<br/>Gradients + Motion]
    Preset[preset<br/>SaaS Starter Config]
  end
  Packages --> Apps
  Turbo[Turborepo] --> Apps`,
    story:
      "Most startups maintain separate repos for each app\u2014marketing site here, dashboard there, docs somewhere else. Every shared component gets copy-pasted. Nebutra Sailor is the opposite: one monorepo powers 4 production apps from 6 shared packages. The custom design token pipeline flows from brand primitives through runtime CSS variables to 541 tree-shakable icons and a multi-theme engine with 6 oklch color schemes.\n\nThe architecture ships features 3x faster than separate repos. A design change in the token package propagates to all 4 apps instantly. The component library bridges Radix, HeroUI, and Lobe UI under a single API. Built with Next.js 16, React 19, and Tailwind v4\u2014this is the engineering foundation for AI-native products at Nebutra.",
  },
  {
    slug: "mcm-icm",
    name: "Synergistic Equilibrium",
    icon: "bar-chart-3",
    cover:
      "https://images.unsplash.com/photo-1711409254907-fda1c4e05be0?w=1200&h=900&fit=crop&auto=format",
    tagline: "Optimizing tourism vs. environment with 8.3% prediction error",
    description:
      "MCM/ICM 2025 (Problem B): built a system dynamics + NSGA-III multi-objective optimizer balancing tourist flow, environmental quality, and social satisfaction. Achieved 8.3% tourist prediction error with R\u00b2>0.5 on a three-dimensional coupled model. Competed against 28,000+ teams globally. Honorable Mention.",
    metric: "8.3% prediction error",
    tags: ["NSGA-III", "System Dynamics", "PCA-KMeans"],
    techStack: ["Python", "NSGA-III", "System Dynamics", "Analytics"],
    status: "shipped",
    highlights: [
      { value: "8.3%", label: "Prediction Error" },
      { value: "28K+", label: "Teams Globally" },
      { value: "R\u00b2>0.5", label: "Model Fit" },
      { value: "3", label: "Objectives Balanced" },
    ],
    architecture: `graph TB
  Data[Historical Tourism Data] --> SD[System Dynamics<br/>Causal Loop Model]
  Data --> PCA[PCA-KMeans<br/>Destination Clustering]
  SD --> Coupled[3D Coupled Model<br/>Tourist \u00d7 Environment \u00d7 Social]
  PCA --> Coupled
  Coupled --> NSGA[NSGA-III<br/>Multi-Objective Optimizer]
  NSGA --> Pareto[Pareto Frontier<br/>Policy Recommendations]`,
    story:
      "Tourism and environmental sustainability are a zero-sum game\u2014or so the standard models assume. MCM/ICM 2025 (Problem B) challenged us to find synergies. We built a three-dimensional coupled model linking tourist flow, environmental quality, and social satisfaction through system dynamics, then optimized with NSGA-III to find the Pareto frontier.\n\nAchieved 8.3% tourist prediction error with R\u00b2>0.5 on the coupled model. PCA-KMeans clustering identified distinct destination archetypes with different optimal strategies. Competed against 28,000+ teams globally\u2014Honorable Mention.",
  },
  {
    slug: "biomass-modeling",
    name: "Biomass Co-Pyrolysis Optimization",
    icon: "flame",
    cover:
      "https://images.unsplash.com/photo-1752136519704-0ed3d735e9da?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "Found the exact 28.44% ratio\u2014won Grand Innovation Award for it",
    description:
      "Three-model ensemble (LightGBM + Gaussian Process Regression + PSO) tested across 500+ pyrolysis data points to discover that 28.44% biomass-to-coal ratio maximizes clean energy output with R\u00b2>0.95 prediction accuracy. The entropy-weighted fuzzy evaluation framework quantified non-linear interactions between 3 yield types (gas, char, liquid). Judges praised the methodology as transferable across energy domains. First Prize + Grand Innovation Award at Shuwei Cup.",
    metric: "28.44% optimal ratio",
    tags: ["LightGBM", "PSO", "Energy", "First Prize"],
    techStack: ["Python", "LightGBM", "PSO", "Analytics"],
    status: "shipped",
    highlights: [
      { value: "28.44%", label: "Optimal Ratio" },
      { value: "1st", label: "Prize + Grand Award" },
      { value: "GPR", label: "Uncertainty Model" },
      { value: "PSO", label: "Global Optimizer" },
    ],
    architecture: `graph TB
  Raw[Biomass + Coal<br/>Pyrolysis Data] --> FE[Feature Engineering<br/>Entropy-Weighted Fuzzy]
  FE --> LGB[LightGBM<br/>Yield Prediction]
  FE --> GPR[Gaussian Process<br/>Uncertainty Bounds]
  LGB --> Coupled[Non-Linear<br/>Interaction Model]
  GPR --> Coupled
  Coupled --> PSO[Particle Swarm<br/>Optimization]
  PSO --> Optimal[28.44% Optimal<br/>Biomass Ratio]`,
    story:
      "Clean energy from biomass-coal co-pyrolysis sounds straightforward\u2014mix and burn. But the non-linear interactions between mixing ratios and gas/char/liquid yields make brute-force optimization impossible. We built a three-model ensemble: LightGBM for yield prediction, Gaussian Process Regression for uncertainty quantification, and Particle Swarm Optimization to search the non-convex solution space.\n\nThe entropy-weighted fuzzy evaluation framework captured interactions that single-objective models miss entirely. PSO converged on 28.44% as the optimal biomass-to-coal ratio\u2014a specific, actionable number that maximizes clean energy output. Judges at Shuwei Cup praised the methodology as transferable across energy domains, awarding First Prize plus the Grand Innovation Award.",
  },
  {
    slug: "pet-industry",
    name: "China Pet Industry Forecast",
    icon: "trending-up",
    cover:
      "https://images.unsplash.com/photo-1765862880734-c1faf3ed42b8?w=1200&h=900&fit=crop&auto=format",
    tagline: "LASSO R\u00b2=0.9850 predicted a $52B market by 2026",
    description:
      "Built an integrated forecasting framework (ARIMAX-GARCH + VAR + LASSO + Prophet) spanning market size, pet population, and food manufacturing. LASSO regression identified key drivers with R\u00b2=0.9850. Cross-compared US/EU markets using HHI concentration index. Predicted 144.68M pets and 82.8% capacity utilization by 2026.",
    metric: "R\u00b2=0.9850",
    tags: ["ARIMAX-GARCH", "LASSO", "Prophet", "APMCM"],
    techStack: ["Python", "ARIMAX-GARCH", "Prophet", "LASSO", "Data Viz"],
    status: "shipped",
    highlights: [
      { value: "0.9850", label: "LASSO R²" },
      { value: "$52B", label: "Market by 2026" },
      { value: "144.68M", label: "Pets Predicted" },
      { value: "82.8%", label: "Capacity Utilization" },
    ],
    architecture: `graph TB
  Data[Multi-Source Data<br/>Market + Population + Manufacturing] --> ARIMAX[ARIMAX-GARCH<br/>Time Series]
  Data --> VAR[VAR Model<br/>Cross-Variable Dynamics]
  Data --> LASSO[LASSO Regression<br/>R²=0.9850]
  Data --> Prophet[Prophet<br/>Seasonal Decomposition]
  ARIMAX --> Ensemble[Ensemble Forecast]
  VAR --> Ensemble
  LASSO --> Ensemble
  Prophet --> Ensemble
  Ensemble --> HHI[HHI Concentration<br/>US/EU Comparison]
  Ensemble --> Forecast[2026 Projections<br/>144.68M Pets · $52B Market]`,
    story:
      "China\u2019s pet industry is growing faster than any forecasting model can keep up with. We built an integrated framework spanning four model families\u2014ARIMAX-GARCH for temporal dynamics, VAR for cross-variable interactions, LASSO for driver identification (R\u00b2=0.9850), and Prophet for seasonal decomposition. Each model captures a dimension the others miss.\n\nThe HHI concentration index comparison against US and EU markets revealed China\u2019s market is still fragmenting\u2014the opposite of mature markets. Our ensemble projected 144.68M pets and 82.8% manufacturing capacity utilization by 2026, with a total market size exceeding $52 billion. The framework earned recognition at APMCM for methodological rigor.",
  },
  {
    slug: "cursor-export",
    name: "Cursor Export Extension",
    icon: "file-output",
    cover:
      "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "86% less time on knowledge management\u2014one-click conversation export",
    description:
      "Cursor IDE extension (7 GitHub stars) that exports AI conversations to structured Markdown. Tested on 214 conversations (1,980 messages): processing time dropped from 5.8 min to 0.8 min per conversation, code snippet loss rate under 0.5%, throughput 12.5 conversations/min. Cross-platform VSIX with >98% install success rate across Windows/macOS/Linux.",
    metric: "86% \u00b7 \u26057 stars",
    tags: ["TypeScript", "VSCode API", "Developer Tool"],
    techStack: [
      "TypeScript",
      "VSCode Extension",
      "Cursor IDE",
      "Developer Tool",
      "Open Source",
    ],
    github: "https://github.com/TsekaLuk/Cursor-export-extension",
    status: "shipped",
    highlights: [
      { value: "86%", label: "Time Saved" },
      { value: "214", label: "Conversations Tested" },
      { value: "<0.5%", label: "Snippet Loss Rate" },
      { value: "98%+", label: "Install Success" },
    ],
    architecture: `graph LR
  Cursor[Cursor IDE\nAI Conversations] --> Ext[VSCode Extension\nEvent Listener]
  Ext --> Parser[Message Parser\nCode + Text Separation]
  Parser --> Formatter[Markdown Formatter\nSyntax Highlighting]
  Formatter --> Export[One-Click Export\nStructured .md File]
  Export --> KB[Knowledge Base\n214+ Conversations]`,
    story:
      "AI-assisted coding generates valuable conversations that vanish when the IDE closes. Manual export takes 5.8 minutes per conversation\u2014multiply that by 214 conversations and you\u2019ve lost days. This extension drops it to 0.8 minutes with one click: structured Markdown output with preserved code snippets, syntax highlighting, and conversation threading.\n\nTested on 1,980 messages across 214 real conversations: code snippet loss rate under 0.5%, throughput 12.5 conversations/min, cross-platform VSIX with >98% install success rate. 7 GitHub stars and growing\u2014built for developers who treat AI conversations as a knowledge asset, not disposable chat.",
  },
  {
    slug: "brand-strategy",
    name: "\u6797\u8393\u8393 Brand Strategy",
    icon: "megaphone",
    cover:
      "https://images.unsplash.com/photo-1763705857736-2b4f16a33758?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "1,200+ consumer samples \u00d7 AIGC pipeline = 40% engagement lift",
    description:
      "Led a PEST-SWOT driven brand overhaul for Suzhou\u2019s \u201c\u6797\u8393\u8393\u201d agricultural product. Surveyed 1,200+ consumers to map purchase drivers and price sensitivity. Deployed Claude + Flux + Midjourney AIGC toolchain for brand stories and mascot concepts, cutting creative iteration from weeks to days. Projected 40%+ user engagement increase. National Second Prize.",
    metric: "1,200+ samples",
    tags: ["AIGC", "Brand", "Claude", "National Prize"],
    techStack: ["Claude", "Flux", "Midjourney", "Multi-Modal"],
    status: "shipped",
    highlights: [
      { value: "1,200+", label: "Consumer Samples" },
      { value: "40%+", label: "Engagement Lift" },
      { value: "2nd", label: "National Prize" },
      { value: "3x", label: "Faster Creative" },
    ],
    architecture: `graph LR
  Research[1,200+ Surveys\nPurchase Drivers] --> PEST[PEST-SWOT\nStrategic Analysis]
  PEST --> Brief[Brand Brief\nPositioning + Voice]
  Brief --> AIGC[AIGC Pipeline\nClaude + Flux + Midjourney]
  AIGC --> Stories[Brand Stories\n+ Mascot Concepts]
  Stories --> Validate[Consumer Validation\nA/B Engagement Test]
  Validate --> Launch[40%+ Engagement\nProjected Lift]`,
    story:
      "Agricultural branding in China’s Yangtze Delta is stuck in the 1990s—generic packaging, no story, competing on price alone. We surveyed 1,200+ consumers to map purchase drivers and price sensitivity for Suzhou’s \u201c\u6797\u8393\u8393\u201d agricultural products. The PEST-SWOT analysis revealed a positioning gap: premium local produce with zero brand equity.\n\nWe deployed a Claude + Flux + Midjourney AIGC toolchain that cut creative iteration from weeks to days—3x faster than traditional agency workflows. The pipeline generated brand stories, mascot concepts, and packaging variants—all validated against the consumer survey data. Projected 40%+ user engagement increase. National Second Prize in the marketing innovation category.",
  },
  {
    slug: "mineru-skill",
    name: "MinerU-Skill",
    icon: "pickaxe",
    cover:
      "https://images.unsplash.com/photo-1693045181254-08462917f681?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "Zero-config Claude Code skill\u2014PDF to Markdown in one command",
    description:
      "Open-source Claude Code skill that wraps MinerU for layout-aware PDF/document conversion. One-command install, no API keys, 3 supported formats (PDF, DOCX, PPTX). Handles 100+ page documents with table and formula preservation. Published on Smithery marketplace, 5+ community installs in first week. Built for the Claude Code ecosystem with auto-detection of document type and intelligent chunking.",
    metric: "0 config needed",
    tags: ["Claude Code", "Open Source", "PDF"],
    techStack: ["Claude Code", "Python", "MCP", "PDF", "Smithery"],
    github: "https://github.com/Nebutra/MinerU-Skill",
    status: "live",
    highlights: [
      { value: "0", label: "Config Required" },
      { value: "100+", label: "Pages per Doc" },
      { value: "1", label: "Command Install" },
      { value: "3", label: "Doc Formats" },
    ],
    architecture: `graph LR
  User[Claude Code\nUser] --> Skill[MinerU-Skill\nAuto-Detect Format]
  Skill --> MinerU[MinerU Engine\nLayout-Aware Parsing]
  MinerU --> Tables[Table\nPreservation]
  MinerU --> Formulas[LaTeX\nExtraction]
  MinerU --> Layout[Multi-Column\nReconstruction]
  Tables --> MD[Structured\nMarkdown]
  Formulas --> MD
  Layout --> MD`,
    story:
      "PDF-to-Markdown tools exist—but none are designed for the Claude Code ecosystem. MinerU-Skill wraps the MinerU engine as a zero-config Claude Code skill: one command install, no API keys, automatic document type detection. It handles 100+ page documents with table preservation, LaTeX formula extraction, and multi-column layout reconstruction.\n\nThe skill bridges the gap between raw documents and AI-ready knowledge. Drop a PDF, get structured Markdown that preserves the original document’s semantic structure. Built as open-source infrastructure for the growing Claude Code skill ecosystem.",
  },
  {
    slug: "warehouse-drone",
    name: "Warehouse Inventory Drone",
    icon: "radar",
    cover:
      "https://images.unsplash.com/photo-1590038667005-7d82ac6f864b?w=1200&h=900&fit=crop&auto=format",
    tagline: "95% recognition accuracy, full shelf scan in under 3 minutes",
    description:
      "Multi-rotor drone system for automated warehouse stocktaking. Integrated STM32 flight controller + OpenMV vision + BLE communication for autonomous waypoint navigation and QR code scanning across 3D shelf structures. 95% barcode recognition accuracy with laser calibration, completing full inventory traversal in under 3 minutes.",
    metric: "95% accuracy",
    tags: ["STM32", "OpenMV", "PID", "Embedded"],
    techStack: ["Python", "IoT", "Web"],
    status: "shipped",
    highlights: [
      { value: "95%", label: "Recognition Accuracy" },
      { value: "<3min", label: "Full Shelf Scan" },
      { value: "3D", label: "Waypoint Navigation" },
      { value: "BLE", label: "Real-Time Comms" },
    ],
    architecture: `graph TB
  FC[STM32 Flight Controller\nPID Stabilization] --> Nav[Autonomous Navigation\n3D Waypoint Grid]
  Nav --> Scan[OpenMV Camera\nQR + Barcode Scanning]
  Scan --> Laser[Laser Calibration\nDistance + Alignment]
  Laser --> BLE[BLE Module\nReal-Time Data Uplink]
  BLE --> Server[Inventory Server\nStock Reconciliation]
  Server --> Dashboard[Dashboard\n95% Match Rate]`,
    story:
      "Manual warehouse stocktaking takes hours and shuts down operations. Our multi-rotor drone system automates the entire process: STM32 flight controller with PID stabilization navigates a 3D waypoint grid across shelf structures, while OpenMV camera scans QR codes and barcodes at each position. Laser calibration ensures distance and alignment accuracy.\n\nBLE communication streams scan results in real-time to the inventory server for stock reconciliation. The system achieves 95% barcode recognition accuracy and completes a full shelf scan in under 3 minutes—turning a half-day manual process into an autonomous fly-through. Built for the 2025 National Electronic Design Competition.",
  },
  {
    slug: "cdtmp",
    name: "CDTMP Agent Protocol",
    icon: "brain",
    cover:
      "https://images.unsplash.com/photo-1770210217380-d78a69acdc77?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "Task success rate +18pp by turning prompt tricks into reusable protocol",
    description:
      "Turned ad-hoc prompt engineering into a structured agent protocol: task decomposition, state machines, retry strategies, and auditable intermediate states. Tested on 120 cross-domain tasks: success rate jumped from 63% to 81%, JSON compliance from 72% to 94%, rework rounds dropped 29%. Framework-agnostic\u2014plugs into LangGraph, Semantic Kernel, or custom executors.",
    metric: "81% success rate",
    tags: ["Agent Protocol", "LLM", "Open Source"],
    techStack: ["Python", "Agent Protocol", "LLM", "LangGraph", "Open Source"],
    github: "https://github.com/TsekaLuk/CDTMP-Agent-Instructions",
    status: "shipped",
    highlights: [
      { value: "+18pp", label: "Success Rate Lift" },
      { value: "94%", label: "JSON Compliance" },
      { value: "120", label: "Tasks Tested" },
      { value: "-29%", label: "Rework Rounds" },
    ],
    architecture: `graph LR
  Task[Complex Task] --> CD[Context<br/>Decomposition]
  CD --> TM[Task Manager<br/>State Machine]
  TM --> P[Prompt Protocol<br/>Retry + Audit]
  P --> LLM[Any LLM Backend]
  LLM --> Validate[Output Validation<br/>JSON Schema]
  Validate -->|Pass| Result[Auditable Result]
  Validate -->|Fail| P`,
    story:
      "Most teams treat prompt engineering as art\u2014ad-hoc tricks that work for one task but break on the next. CDTMP turns it into engineering: a structured protocol with task decomposition, state machines, retry strategies, and auditable intermediate states. Every step is inspectable, every failure is recoverable.\n\nTested across 120 cross-domain tasks, the protocol lifted success rate from 63% to 81% (+18 percentage points), pushed JSON compliance from 72% to 94%, and cut rework rounds by 29%. It\u2019s framework-agnostic\u2014plugs into LangGraph, Semantic Kernel, or custom executors. The insight: reliability in AI agents comes from protocol design, not prompt tricks.",
  },
  {
    slug: "next-unicorn",
    name: "Next-Unicorn",
    icon: "scan",
    cover:
      "https://images.unsplash.com/photo-1574607407517-cd664b1504f5?w=1200&h=900&fit=crop&auto=format",
    tagline: "Your codebase has 47 hand-rolled wheels\u2014this finds them all",
    description:
      "Every codebase accumulates Vibe Coding debt: custom date formatters, DIY loggers, bespoke state machines. Next-Unicorn audits your code via Context7 MCP, identifies reinvented wheels, generates migration plans, and ships delete-code checklists. 176 tests passed with 29 property-based verifications. Published on Smithery + npm, supports 35+ AI agents including Claude Code, Cursor, and OpenCode.",
    metric: "176 tests \u00b7 35+ agents",
    tags: ["TypeScript", "Code Audit", "MCP", "Open Source"],
    techStack: ["TypeScript", "Code Audit", "MCP", "Smithery", "Open Source"],
    github: "https://github.com/Nebutra/Next-Unicorn-Skill",
    status: "live",
    highlights: [
      { value: "176", label: "Tests Passed" },
      { value: "29", label: "Property Tests" },
      { value: "35+", label: "Agents Supported" },
      { value: "3", label: "Registries" },
    ],
    architecture: `graph LR
  Codebase[Your Codebase] --> Scanner[Static Scanner]
  Scanner --> Context7[Context7 MCP<br/>Real-time Docs]
  Context7 --> Analysis[Gap Analysis<br/>+ Replacement Match]
  Analysis --> Plan[Migration Plan<br/>+ Delete Checklist]
  Plan --> Agent[Claude Code / Cursor<br/>/ OpenCode / 35+]`,
    story:
      "Snyk, Dependabot, and Renovate manage your existing dependencies. But they can\u2019t find code you wrote that should become a dependency\u2014or capabilities your project is missing entirely. Next-Unicorn does all three: replacement, gap analysis, and dependency management, verified against real documentation via Context7 MCP.\n\nPublished on Smithery, npm, and GitHub Packages, it supports 35+ AI agents out of the box. 176 tests passed with 29 property-based verifications ensure reliability. The core insight: every codebase accumulates Vibe Coding debt\u2014hand-rolled date formatters, DIY loggers, bespoke state machines\u2014and the cost compounds silently until someone audits it.",
  },
  {
    slug: "hydrogem-web",
    name: "HydroGem",
    icon: "droplets",
    cover:
      "https://images.unsplash.com/photo-1771788893925-f817bad1f563?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "Real-time water quality dashboard with 5-second refresh and alerts",
    description:
      "React + TypeScript monitoring system tracking 12 water quality parameters (pH, turbidity, dissolved oxygen, etc.) with 5-second auto-refresh and configurable alert thresholds. Built with streaming data visualization and historical trend analysis for environmental monitoring.",
    metric: "12 parameters \u00b7 5s refresh",
    tags: ["React", "TypeScript", "IoT", "Data Viz"],
    techStack: [
      "React",
      "TypeScript",
      "IoT",
      "WebSocket",
      "REST API",
      "Data Viz",
    ],
    github: "https://github.com/TsekaLuk/hydrogem-web",
    status: "shipped",
    highlights: [
      { value: "12", label: "Water Parameters" },
      { value: "5s", label: "Auto-Refresh" },
      { value: "24/7", label: "Monitoring" },
      { value: "i18n", label: "Multi-Language" },
    ],
    architecture: `graph LR
  Sensors[IoT Sensors\n12 Parameters] --> API[REST API\nReal-Time Stream]
  API --> WS[WebSocket\n5s Push]
  WS --> Dashboard[React Dashboard\nTrend Charts + Gauges]
  Dashboard --> Alerts[Alert Engine\nConfigurable Thresholds]
  Alerts --> Notify[Notification\nEmail + SMS]
  Dashboard --> History[Historical Analysis\nTrend Comparison]`,
    story:
      "Environmental monitoring stations generate continuous data streams\u2014pH, turbidity, dissolved oxygen, conductivity, and 8 more parameters. Most dashboards show numbers; HydroGem shows trends. The React + TypeScript system visualizes all 12 water quality parameters with 5-second auto-refresh, configurable alert thresholds, and historical trend comparison.\n\nThe dashboard supports multi-language (i18n) for deployment across regions, with responsive design for both control room displays and mobile field checks. Alert thresholds are configurable per parameter, triggering notifications before water quality degrades past regulatory limits. Built as an open-source reference for IoT environmental monitoring.",
  },
  {
    slug: "ocr-auto",
    name: "OCR-Auto",
    icon: "scan-line",
    cover:
      "https://images.unsplash.com/photo-1646776174801-0d1918cb4d2b?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "100% bbox accuracy on 50 element types\u2014from 65% to 92% in 10 prompt iterations",
    description:
      "Production-grade automated annotation system for document page elements. Async 4-stage pipeline with Qwen VL models identifies 50 element types (12 code languages, 13 interaction formats, 12 content elements, 13 other tags). Three-layer fault tolerance (Retry + RateLimit + CircuitBreaker), SHA256 content-addressed cache, and real-time SSE monitoring dashboard.",
    metric: "100% bbox \u00b7 50 labels",
    tags: ["Python", "Qwen VL", "Async Pipeline", "LLM"],
    techStack: ["Python", "Qwen VL", "Async Pipeline", "LLM"],
    status: "shipped",
    highlights: [
      { value: "100%", label: "Bbox Accuracy" },
      { value: "50", label: "Element Types" },
      { value: "92%", label: "Label Accuracy" },
      { value: "19", label: "Prompt Versions" },
    ],
    architecture: `graph TB
  Input[Document Pages\nPDF + PNG] --> Stage1[Stage 1: Input Handler\n5 Workers]
  Stage1 --> Stage2[Stage 2: Image Processor\n3 Workers + SHA256 Cache]
  Stage2 --> Stage3[Stage 3: OCR Analyzer\nQwen VL + Retry + CircuitBreaker]
  Stage3 --> Stage4[Stage 4: Output Gen\nCSV + Reports]
  Stage3 --> Monitor[SSE Dashboard\nReal-Time Metrics]
  Stage3 --> Checkpoint[Checkpoint Manager\nJSONL Recovery]`,
    story:
      "Most annotation tools require human labelers to classify each element manually. OCR-Auto replaces that entire workflow with an async 4-stage pipeline powered by Qwen VL models. The system identifies 50 distinct element types across code languages, interaction formats, content elements, and edge cases\u2014from hyperlinks to multi-column layouts to watermarks.\n\nThe engineering challenge was reliability at scale: three-layer fault tolerance (exponential backoff retry, EWMA-adaptive rate limiting, circuit breaker), SHA256 content-addressed caching for deterministic results, and checkpoint recovery for crash resilience. Prompt engineering iterated from V1.0 (65% accuracy) through 10+ versions to V3.9 (92%), with V2.0 achieving 100% bbox accuracy on validation sets.",
  },
  {
    slug: "tiktok-pipeline",
    name: "TikTok Visual Search Pipeline",
    icon: "search",
    cover:
      "https://images.unsplash.com/photo-1762340273332-89b40f2868ab?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "8-dimensional annotation across 19 prompt iterations\u2014edge cases included",
    description:
      "Multi-modal visual search relevance labeling pipeline using LLMs. Processes image + text signals across 8 annotation dimensions (visual relevance, content relevance, query/doc drop, functional parity, category granularity, visual similarity, modal corroboration). 19 prompt versions with automated comparison and reflection analysis tools.",
    metric: "8 dimensions \u00b7 19 versions",
    tags: ["Python", "Gemini 2.5", "Multi-Modal", "Pipeline"],
    techStack: ["Python", "Gemini 2.5 Flash", "Multi-Modal", "Async Pipeline"],
    status: "shipped",
    highlights: [
      { value: "8", label: "Annotation Dimensions" },
      { value: "19", label: "Prompt Versions" },
      { value: "12", label: "API Concurrency" },
      { value: "v2.2", label: "Production Version" },
    ],
    architecture: `graph TB
  Input[TikTok Data\nImages + Text Signals] --> Prep[Data Preprocessor\nMulti-Modal Alignment]
  Prep --> LLM[Gemini 2.5 Flash\n7-Dim Annotation]
  LLM --> Compare[Comparison Tools\nVersion Diff Analysis]
  LLM --> Reflect[Reflection Engine\nSystematic Error Mining]
  Compare --> Iterate[Prompt Iteration\nv1 \u2192 v2.2 \u2192 v4.0]
  Reflect --> Iterate
  Iterate --> Output[Labeled Dataset\nCSV + Quality Flags]`,
    story:
      "Visual search relevance is deceptively complex\u2014a red dress query matching a red dress image seems obvious until you encounter edge cases: same dress different angle, similar dress different brand, dress in a lifestyle context. We built a 7-dimensional annotation framework that captures visual relevance, content relevance, query/doc quality drops, functional parity, category granularity, and visual similarity.\n\nThe pipeline iterated through 10+ prompt versions, each informed by automated comparison tools and reflection analysis that mined systematic error patterns. Rate limiting, checkpoint recovery, and concurrent processing made it production-ready. The final v2.2 prompt handles medical safety edge cases and clothing-specific rules that earlier versions missed entirely.",
  },
  {
    slug: "mlbb-analysis",
    name: "MLBB Video Analysis",
    icon: "video",
    cover:
      "https://images.unsplash.com/photo-1580744515502-bd922b737d06?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "5 platforms, 6 batch processors, 90%+ accuracy\u2014from manual review to automated pipeline",
    description:
      "Multi-platform video content analysis system covering YouTube, Instagram, TikTok, VK, and Facebook. Refactored from legacy monolith to modular architecture: 5 platform fetchers, 6 batch processors, 5 video analyzers. Fast text analysis achieves 90%+ accuracy with 460x acceleration over manual review, processing 1,207+ videos across batch runs.",
    metric: "460x faster \u00b7 1,207+ videos",
    tags: ["Python", "AI Analysis", "Multi-Platform", "Video"],
    techStack: [
      "Python",
      "Gemini 2.5",
      "Video AI",
      "Analytics",
      "Async Pipeline",
    ],
    status: "shipped",
    highlights: [
      { value: "5", label: "Platforms Covered" },
      { value: "90%+", label: "Analysis Accuracy" },
      { value: "1,207+", label: "Videos Reviewed" },
      { value: "25", label: "Python Modules" },
    ],
    architecture: `graph TB
  Platforms[5 Platform Fetchers\nYT + IG + TT + VK + FB] --> Batch[6 Batch Processors\nParallel + Checkpoint]
  Batch --> Fast[Fast Text Analyzer\n8 Workers + 90%+ Accuracy]
  Batch --> Video[Video Content Analyzer\nFrame Extraction + AI]
  Batch --> IG[Instagram Suite\n5 Specialized Tools]
  Fast --> Results[Results Aggregator\nCSV + Reports]
  Video --> Results
  IG --> Results`,
    story:
      "Reviewing thousands of videos across five social platforms manually is a nightmare\u2014inconsistent criteria, reviewer fatigue, and weeks of turnaround. We replaced that with an automated pipeline: platform-specific fetchers handle the quirks of YouTube, Instagram, TikTok, VK, and Facebook APIs, while 6 batch processors manage parallel execution with checkpointing.\n\nThe fast text analyzer achieves 90%+ accuracy at 8-thread concurrency, processing 1000+ videos per batch. For cases requiring visual verification, dedicated video analyzers extract frames and run AI inference. The system was refactored from a 25-file legacy monolith into a modular architecture with unified CLI, making it maintainable and extensible.",
  },
  {
    slug: "synapse-quant",
    name: "Synapse-Quant",
    icon: "line-chart",
    cover:
      "https://images.unsplash.com/photo-1768242079046-c9c633187db1?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "8 microservices, real-time GraphQL, TUI cockpit\u2014from raw data to trade thesis",
    description:
      "Open-source quantitative trading copilot for crypto markets. 8 microservices + 9 infrastructure services (17 containers total) with unified TUI cockpit, 41 technical indicators, real-time market data streaming, and in-context AI copilot. TypeScript 5.7 + Python 3.11+, CI/CD with GitHub Actions.",
    metric: "17 containers \u00b7 41 indicators",
    tags: ["TypeScript", "Python", "K8s", "GraphQL"],
    techStack: ["TypeScript", "Python", "GraphQL", "Node", "Analytics"],
    github: "https://github.com/TsekaLuk/Synapse-Quant",
    status: "building",
    highlights: [
      { value: "17", label: "Containers" },
      { value: "41", label: "Tech Indicators" },
      { value: "TUI", label: "Terminal Cockpit" },
      { value: "CI/CD", label: "GitHub Actions" },
    ],
    architecture: `graph TB
  Market[Crypto Market Data\nSpot + Kline + Depth] --> Ingestion[Ingestion Service\n+ Workers]
  Ingestion --> Feature[Feature Engine\nSignals + Factors]
  Feature --> ML[ML Models\nPrediction + Scoring]
  Feature --> GQL[GraphQL Gateway\nReal-Time Subscriptions]
  ML --> RAG[RAG Service\nContext Assembly]
  RAG --> Copilot[AI Copilot\nTrade Thesis]
  GQL --> TUI[Unified TUI\nMulti-Panel Cockpit]
  Copilot --> TUI
  GQL --> WebApp[Web Dashboard\nVisualization]`,
    story:
      "Most crypto tools offer either pretty charts with weak data lineage or rich data pipes with poor trader UX. Synapse-Quant bridges both: 8 microservices handle real-time market ingestion, feature engineering, ML scoring, and RAG-powered context assembly\u2014all accessible through a unified TUI cockpit where you can monitor markets and query the AI copilot without leaving the terminal.\n\nThe architecture is production-grade: GraphQL gateway with real-time subscriptions, dedicated ingestion workers for continuous data streaming, and a feature engine that computes signals and factors on live data. TypeScript 5.7 for the platform layer, Python 3.11+ for ML models, CI/CD via GitHub Actions. Open-source and MIT-licensed.",
  },
  {
    slug: "hm3d-eval",
    name: "HM3D 3D Scene Evaluation",
    icon: "box",
    cover:
      "https://images.unsplash.com/photo-1687389806477-22be64a5480f?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "4.62/5 evaluation score across 1,000 real 3D scenes\u20148/8 acceptance criteria passed",
    description:
      "Comprehensive quality evaluation framework for the Habitat-Matterport 3D Research Dataset (1,000 real 3D scenes). Assessed 15+ dimensions including mesh quality, texture integrity, semantic annotation accuracy, and metadata completeness. Achieved 4.62/5 overall score with 100% acceptance pass rate (8/8 criteria). 95% requirement compliance.",
    metric: "4.62/5 \u00b7 1,000 scenes",
    tags: ["3D Evaluation", "Data Quality", "GLB/OBJ", "Habitat"],
    techStack: ["Python", "3D Evaluation", "Data Quality", "Analytics"],
    status: "shipped",
    highlights: [
      { value: "4.62/5", label: "Overall Score" },
      { value: "1,000", label: "3D Scenes" },
      { value: "100%", label: "Acceptance Rate" },
      { value: "15+", label: "Quality Dimensions" },
    ],
    architecture: `graph TB
  Dataset[HM3D Dataset\n1,000 Real Scenes] --> Mesh[Mesh Quality\nTopology + Precision]
  Dataset --> Texture[Texture Integrity\nUV + Resolution]
  Dataset --> Semantic[Semantic Annotation\n216 Labeled Scenes]
  Dataset --> Meta[Metadata Completeness\n15+ Dimensions]
  Mesh --> Score[Multi-Criteria Scoring\nWeighted Evaluation]
  Texture --> Score
  Semantic --> Score
  Meta --> Score
  Score --> Report[Evaluation Report\n4.62/5 + Recommendations]`,
    story:
      "Evaluating a dataset of 1,000 real 3D scenes requires more than spot-checking\u2014you need systematic quality assessment across every dimension that matters for downstream AI applications. We built a comprehensive evaluation framework covering mesh quality (topology continuity, no broken faces), texture integrity (UV correctness, resolution), semantic annotation accuracy (v0.2 error corrections), and metadata completeness (15+ dimensions per scene).\n\nThe result: 4.62/5 overall score with 100% acceptance pass rate across all 8 client criteria. 95% of requirements were perfectly matched, with the remaining 5% being addressable limitations (academic-only license, 21.6% semantic annotation coverage). The evaluation report included actionable recommendations and a decision matrix for different use cases\u2014from embodied AI to VR/AR prototyping.",
  },
  {
    slug: "appen-dashboard",
    name: "Appen ARG Dashboard",
    icon: "monitor",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "Enterprise SaaS for a NASDAQ data company: the B2B demo mode playbook in production",
    description:
      "Built multi-tenant reporting infrastructure for Appen (NASDAQ: APT), one of the world's largest AI training data companies. Next.js 16 monorepo (5 apps + 10 packages) serves TCS, ByteWorks, and DataPower dashboards with Upstash QStash async job queues and Pusher real-time. The breakthrough: a production-grade demo mode with MSW + tRPC mock interception, privacy redaction pipeline, and 4 behavioral strategies—solving the #1 enterprise SaaS sales problem (can't show real data).",
    metric: "5 apps · 10 packages · 3 clients",
    tags: ["Next.js 16", "Turborepo", "Upstash QStash", "Enterprise SaaS"],
    techStack: [
      "Next.js 16",
      "Turborepo",
      "Upstash QStash",
      "PostgreSQL",
      "Pusher",
      "Enterprise SaaS",
    ],
    status: "shipped",
    highlights: [
      { value: "5", label: "Production Apps" },
      { value: "10", label: "Shared Packages" },
      { value: "3", label: "Enterprise Clients" },
      { value: "4", label: "Demo Strategies" },
    ],
    architecture: `graph TB
  subgraph Apps
    Web[Web Dashboard\nMulti-Tenant Reports]
    Labeling[G3D Labeling\n7 Categories · 101 Subcats]
    Survey[Crowdsource Survey\nAnti-Fraud · Geo Support]
    Docs[Docs Hub\nDesign System]
  end
  subgraph Packages
    DB[db · Prisma + PostgreSQL\nRow-Level Isolation]
    Auth[auth · Multi-Tenant\nTCS/BW/DP Scoping]
    AI[ai · Report Generation\nStructured Output]
    I18n[i18n · en/zh]
  end
  CSV[CSV Ingestion] --> Web
  Web --> QStash[Upstash QStash\nAsync Job Queue]
  QStash --> Email[Email Dispatch\nReport Delivery]
  Web --> Pusher[Pusher\nReal-Time Updates]
  Web --> Demo[Demo Mode\nMSW + tRPC Mocks]
  Demo --> Strategies[MOCK / SKELETON\nERROR / MIXED]
  Packages --> Apps`,
    story:
      "Appen (NASDAQ: APT) is a $500M+ AI training data company whose pipelines supply Google, Microsoft, and Amazon. When they needed internal tooling to manage 3 separate client performance programs simultaneously, we built the infrastructure from scratch—without access to production data during development.\n\nThe technical challenge was multi-tenancy done right: TCS, ByteWorks, and DataPower have completely different data structures, KPI definitions, and reporting cadences. Prisma + PostgreSQL with row-level isolation keeps client data strictly separated while a shared Next.js 16 monorepo (5 apps, 10 packages) means UI changes propagate everywhere. Upstash QStash handles the async report generation job queue—CSV ingestion triggers a pipeline that runs analysis, generates PDF reports, and dispatches email—all without blocking the UI.\n\nThe real innovation was demo mode. Enterprise B2B sales die when you can't show the product without exposing real client data. We engineered a production-grade mock layer using MSW (Mock Service Worker) + tRPC interceptors that operate at the request level—not fake static screens. Four strategies: MOCK_FOREVER with seeded data and periodic heartbeat updates, SKELETON_FOREVER for loading state showcases, ERROR_FOREVER for testing error recovery UX, and MIXED for high-fidelity module-specific simulation. A unified 'schema validate → redaction → normalize → value protocol' pipeline ensures every mock response passes the same validation as real data. Role switching (Viewer/Analyst/Admin) and live data seed control available in the demo panel.\n\nThis is the demo mode architecture that every enterprise SaaS eventually builds—we shipped it on day one.",
  },
  {
    slug: "t2v-relabeling",
    name: "T2V Hook Relabeling Pipeline",
    icon: "film",
    cover:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "Using better AI to fix worse AI's labeling mistakes—at the cost human reviewers can't match",
    description:
      "Meta-labeling pipeline that audits and corrects mislabeled AI-generated video training data using Gemini 2.5 Flash multimodal. Classifies 6 attributes per video (quality gate, gender, age, race, scene, season) with EWMA-adaptive rate limiting and HTTP/2 concurrency. Processes 60MB+ video URLs through Gemini Files API without local download. 3 full-run rounds with incremental merge—each round corrects where the previous lacked confidence. Targets the cost wall: human labeling costs ~$1/video; this pipeline costs ~$0.01/video at scale.",
    metric: "~100x cost vs. human labeling",
    tags: ["Python", "Gemini 2.5 Flash", "Async", "Video AI"],
    techStack: ["Python", "Gemini 2.5 Flash", "Async Pipeline", "Video AI"],
    status: "shipped",
    highlights: [
      { value: "6", label: "Label Dimensions" },
      { value: "3", label: "Iterative Rounds" },
      { value: "100x", label: "Cost vs. Human" },
      { value: "EWMA", label: "Adaptive Rate Limit" },
    ],
    architecture: `graph LR
  Input[CSV: AI Avatar Videos\nExternal URL + Prior Labels] --> Gemini[Gemini 2.5 Flash\nFiles API · No Download]
  Gemini --> Labels[6 Attributes\nQuality·Gender·Age·Race·Scene·Season]
  Labels --> Confidence[Confidence Gate\nLow-conf → Re-queue]
  Confidence --> Merge[Incremental Merge\nRound 1 → 2 → 3]
  Merge --> Audit[Disagreement Analysis\nOld vs New Label]
  EWMA[EWMA Rate Limiter\nAdaptive TPM] --> Gemini
  HTTP2[HTTP/2 Concurrent\nStreaming] --> Gemini`,
    story:
      "The AI-generated video content industry has a dirty secret: the training data that teaches models about human demographics, scenes, and seasons is itself labeled by humans—and human labelers make systematic mistakes that compound into model bias. By 2025, synthetic avatar video generation is a $500M+ market (Sora, Kling, Pika, HeyGen), and every model needs demographic-accurate training labels.\n\nThe meta-labeling insight: a more capable frontier model (Gemini 2.5 Flash) can audit and correct the output of cheaper, less accurate labeling rounds. Human labeling costs $0.50–2.00 per video. Our Gemini pipeline costs ~$0.01 per video at scale—a 50–200x cost reduction while improving label accuracy. The economic math is undeniable once you're beyond 10,000 videos.\n\nThe engineering challenge was rate-limit adaptation at scale. Gemini's API has token-per-minute quotas that change dynamically based on request patterns. Static throttling either leaves throughput on the table or causes cascading 429s. We implemented EWMA (Exponentially Weighted Moving Average) rate tracking that learns the effective TPM from the last N requests and automatically adjusts concurrency—no manual tuning, no token waste.\n\nGemini's Files API lets the model receive a video URL and stream the content directly without local download. The 60MB guard rail prevents timeout failures on oversized files. After 3 full-run rounds with incremental merge—preserving high-confidence labels from earlier rounds, re-examining only the uncertain ones—the label dataset quality converges.",
  },
  {
    slug: "url-annotation",
    name: "URL Consistency Annotator",
    icon: "link-2",
    cover:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "The TLS fingerprint arms race: when IP blocking and JS challenges aren't enough, impersonate Chrome at the handshake",
    description:
      "Production URL consistency annotation pipeline that defeats modern bot detection at zero marginal LLM cost. curl_cffi spoofs Chrome 124's TLS ClientHello (cipher suites, extensions, ordering)—not just user-agent headers. Playwright handles JS-rendered SPAs. Local Qwen3:1.7b via Ollama compares page content semantically without API fees or GDPR exposure. Rotating-ad detection re-fetches each URL 3× to flag domain changes. 30 HTTP + 5 Playwright + 5 LLM concurrent—brand/product extracted per landing page with domain fallback.",
    metric: "Chrome TLS · $0 LLM cost",
    tags: ["Python", "Playwright", "Local LLM", "Anti-Bot"],
    techStack: [
      "Python",
      "Playwright",
      "Ollama",
      "Qwen3",
      "Local LLM",
      "Anti-Bot",
    ],
    status: "shipped",
    highlights: [
      { value: "Chrome 124", label: "TLS Impersonation" },
      { value: "30+5+5", label: "Concurrency" },
      { value: "3×", label: "Ad-Rotation Checks" },
      { value: "$0", label: "LLM API Cost" },
    ],
    architecture: `graph TB
  Input[URL Groups\nCSV: clean_url + full_urls] --> CurlCFI[curl_cffi\nChrome 124 TLS Fingerprint]
  CurlCFI --> Normalize[URL Normalization\nStrip Params + Fragments]
  Normalize --> FastPath{All Same?}
  FastPath -->|Yes| Same[相同\nNo LLM Needed]
  FastPath -->|No| Playwright[Playwright\nJS-Rendered DOM]
  Playwright --> Qwen[Qwen3:1.7b\nOllama · Local Inference]
  Qwen --> Label[相同 / 不同]
  CurlCFI --> AdDetect[Rotating Ad Check\n3× Re-fetch · Domain Diff]
  AdDetect --> Other[其他\nRotating Ad Flagged]`,
    story:
      "Bot detection has gone through three generations: IP blocking (beaten by rotating proxies), JavaScript challenges like Cloudflare Bot Management (beaten by headless browsers), and now TLS fingerprinting (2022+). Most Python HTTP libraries—requests, aiohttp, even httpx—have distinctive TLS ClientHello signatures that modern CDNs flag instantly. The Python ecosystem's response is curl_cffi: Python bindings for curl that impersonate specific browser TLS handshakes at the socket level.\n\nChrome 124's TLS fingerprint includes specific cipher suite ordering, ALPN protocol negotiation, session ticket support, and extension sequencing. curl_cffi replicates all of it. From the server's perspective, it's talking to a real Chrome browser. For the ~60% of pages that still need JS rendering after TLS bypass, Playwright handles full DOM execution with 5 concurrent pages—enough for the annotation throughput we need without memory exhaustion.\n\nThe local LLM choice (Qwen3:1.7b via Ollama) was deliberate. Cloud LLM APIs add latency, cost, and GDPR complexity—every page content chunk you send to OpenAI is a potential data exposure. Running inference locally means zero marginal cost, zero data leaving the machine, and no rate limit surprises. At 1.7B parameters, Qwen3 is small enough to run on a MacBook Pro but accurate enough to distinguish 'same product different URL structure' from 'different product same domain'.\n\nThe rotating-ad detection is the edge case that kills naive URL deduplication: ad networks serve different landing pages on sequential requests from the same URL. We re-fetch each URL 3 times with fresh TLS sessions and flag any case where the final redirect domain changes—those are rotating ad slots, not duplicate content.",
  },
  {
    slug: "3dgs-eval",
    name: "3DGS Vendor Evaluation",
    icon: "layers",
    cover:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=900&fit=crop&auto=format",
    tagline:
      "3DGS had 2,000+ citations in 6 months but zero enterprise quality standards—we wrote the spec",
    description:
      "First systematic vendor capability evaluation framework for 3D Gaussian Splatting (3DGS) content production. Multi-round scored assessment across 6 dimensions: HP/LP geometry (pivot alignment, retopology proof), PBR texture completeness (BaseColor + Normal + Metallic + AO), file management conventions, semantic annotation accuracy, preview image standards (8+ renders), and communication SLA. Structured CSV tracks multi-vendor revision cycles with decision rationale—enabling repeatable procurement at enterprise content pipeline scale.",
    metric: "6 dimensions · frontier tech",
    tags: ["3DGS", "Quality Framework", "Enterprise", "3D Content"],
    techStack: [
      "Python",
      "3DGS",
      "3D Evaluation",
      "Quality Assurance",
      "Enterprise",
    ],
    status: "shipped",
    highlights: [
      { value: "2023", label: "Tech Breakthrough" },
      { value: "6", label: "Score Dimensions" },
      { value: "100+ FPS", label: "vs NeRF 10s/frame" },
      { value: "PBR", label: "Texture Standard" },
    ],
    architecture: `graph TB
  Vendor[Vendor Submission\nFBX HP/LP + PBR Maps + Previews + Metadata] --> Geo[Geometry QA\nPivot at origin · LP retopo verified · No broken faces]
  Vendor --> Tex[Texture QA\nBaseColor · Normal · Metallic · AO · Single-set PBR]
  Vendor --> Files[File QA\nNo spaces · No double extension · Valid metadata.json]
  Vendor --> Anno[Annotation QA\nSemantic tags · Bounding box · Category match]
  Vendor --> Preview[Preview QA\n8+ renders · Standardized angles · Correct naming]
  Vendor --> Comms[Communication SLA\nResponse time · Revision compliance]
  Geo --> Score[Weighted Score\n0–100 · Accept / Reject / Revise]
  Tex --> Score
  Files --> Score
  Anno --> Score
  Preview --> Score
  Comms --> Score
  Score --> CSV[Revision Tracker\nMulti-vendor · Multi-round · Auditable]`,
    story:
      "In August 2023, a paper called '3D Gaussian Splatting for Real-Time Radiance Field Rendering' landed at SIGGRAPH. Within 6 months: 2,000+ citations, GitHub implementations in every major engine, and venture capital pouring into 3D content startups. The technology is genuinely transformative—where NeRF requires 10+ seconds per frame, 3DGS renders at 100+ FPS in real-time. Game studios, AR platforms, and film VFX pipelines are racing to adopt it.\n\nThe problem nobody solved: enterprise content pipelines need standardized, auditable quality from vendors. What does a 'good' 3DGS asset even mean? No standards existed. Appen needed to source 3DGS content at scale for AI training datasets, which required evaluating vendors systematically—not just 'looks nice' but measurable, reproducible quality criteria.\n\nWe designed the evaluation framework from first principles. Geometry: does the HP mesh have a correct world-space pivot point? Is the LP version provably retopologized (not just decimated)? Texture: are all 4 PBR maps present (BaseColor, Normal, Metallic, AO) with correct naming conventions and no duplicate sets? File management: zero spaces in filenames, no double extensions (.json.txt), proper directory hierarchy, metadata.json with real values (not TODO placeholders)? Preview images: 8+ renders at defined camera angles with standardized naming?\n\nWhat we discovered was diagnostic: the vendors who failed weren't technically incapable of producing beautiful 3DGS assets. They were operationally immature—no internal QA, no naming conventions, no understanding of downstream pipeline requirements. The evaluation framework didn't just score vendors; it revealed which ones could be trained to meet enterprise standards versus which ones needed to be cut. The multi-round CSV tracker made every revision cycle auditable: vendor X failed geometry in round 1, fixed it in round 2, introduced a new naming error, fixed that in round 3—full history, zero ambiguity.",
  },
];

export async function getLocalizedProjects(locale: string): Promise<Project[]> {
  const t = await getTranslations({ locale, namespace: "projects" });
  return projects.map((p) => ({
    ...p,
    tagline: t(`${p.slug}.tagline`),
    description: t(`${p.slug}.description`),
  }));
}
