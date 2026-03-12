import { getTranslations } from "next-intl/server";

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
    tagline: "Where other converters lose 40% of context, this one keeps 93%",
    description:
      "Most converters silently drop formulas, tables, and cross-references. any2md uses a dual-engine\u2014PyMuPDF for text + Qwen-VL for vision\u2014then DeepSeek LLM reconstructs context via layered prompt + few-shot + CoT. Processes 68 pages/min with 85% table structuring and 90% LaTeX formula preservation. Imported 20,000+ pages into a team knowledge base in one week, cutting manual cleanup by 70%.",
    metric: "93% \u00b7 68 pages/min",
    tags: ["Python", "VLM", "LLM", "Context Engineering"],
    github: "https://github.com/TsekaLuk/any2md",
    status: "shipped",
    highlights: [
      { value: "93%", label: "Context Retention" },
      { value: "68", label: "Pages / Min" },
      { value: "20K+", label: "Pages Imported" },
      { value: "70%", label: "Cleanup Reduced" },
    ],
    architecture: `graph LR
  PDF[PDF / DOCX] --> PyMuPDF[PyMuPDF\\nText Engine]
  PDF --> QwenVL[Qwen-VL\\nVision Engine]
  PyMuPDF --> Merge[Context Merger]
  QwenVL --> Merge
  Merge --> DeepSeek[DeepSeek LLM\\nLayered Prompt + CoT]
  DeepSeek --> MD[Structured Markdown]`,
    story:
      "Most document converters treat pages as flat text\u2014they silently drop formulas, break tables, and lose cross-references. We measured 40% context loss on competitors. any2md uses a dual-engine approach: PyMuPDF extracts text structure while Qwen-VL reads the visual layout. DeepSeek LLM then reconstructs the missing context through layered prompting with few-shot examples and chain-of-thought reasoning.\n\nThe result: 93% context retention at 68 pages/min, with 85% table structuring accuracy and 90% LaTeX formula preservation. One team imported 20,000+ pages into their knowledge base in a single week, cutting manual cleanup by 70%. The tool processes everything from scanned PDFs to complex academic papers with multi-column layouts.",
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
  SEM --> Paradox[Risk Paradox Discovery\\n\u03b2=0.262 p<0.001]
  Sentiment --> Policy[4-Pillar Policy\\nRecommendations]`,
    story:
      "Every technology adoption model in the last decade predicted the same thing: perceived risk deters adoption. We set out to test this for urban air mobility with 2,609 respondents (93.1% recovery rate, KMO=0.951). The TAM\u2013SEM model proved the opposite\u2014risk perception positively drives willingness to adopt (\u03b2=0.262, p<0.001). People who see the risk also see the reward.\n\nWe cross-validated with 1,695 Bilibili comments mined via SnowNLP sentiment analysis, confirming the paradox in public discourse. The finding challenged a decade of technology adoption literature and earned a Provincial First Prize. We delivered 4-pillar policy recommendations covering airspace management, infrastructure, regulation, and public participation.",
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
    UI[ui\\nRadix + HeroUI + Lobe]
    Tokens[tokens\\nCSS Variables]
    Theme[theme\\n6 oklch Themes]
    Icons[icons\\n541 Geist TSX]
    Brand[brand\\nGradients + Motion]
    Preset[preset\\nSaaS Starter Config]
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
    tagline: "Optimizing tourism vs. environment with 8.3% prediction error",
    description:
      "MCM/ICM 2025 (Problem B): built a system dynamics + NSGA-III multi-objective optimizer balancing tourist flow, environmental quality, and social satisfaction. Achieved 8.3% tourist prediction error with R\u00b2>0.5 on a three-dimensional coupled model. Competed against 28,000+ teams globally. Honorable Mention.",
    metric: "8.3% prediction error",
    tags: ["NSGA-III", "System Dynamics", "PCA-KMeans"],
    status: "shipped",
    highlights: [
      { value: "8.3%", label: "Prediction Error" },
      { value: "28K+", label: "Teams Globally" },
      { value: "R\u00b2>0.5", label: "Model Fit" },
      { value: "3", label: "Objectives Balanced" },
    ],
    architecture: `graph TB
  Data[Historical Tourism Data] --> SD[System Dynamics\\nCausal Loop Model]
  Data --> PCA[PCA-KMeans\\nDestination Clustering]
  SD --> Coupled[3D Coupled Model\\nTourist \u00d7 Environment \u00d7 Social]
  PCA --> Coupled
  Coupled --> NSGA[NSGA-III\\nMulti-Objective Optimizer]
  NSGA --> Pareto[Pareto Frontier\\nPolicy Recommendations]`,
    story:
      "Tourism and environmental sustainability are a zero-sum game\u2014or so the standard models assume. MCM/ICM 2025 (Problem B) challenged us to find synergies. We built a three-dimensional coupled model linking tourist flow, environmental quality, and social satisfaction through system dynamics, then optimized with NSGA-III to find the Pareto frontier.\n\nAchieved 8.3% tourist prediction error with R\u00b2>0.5 on the coupled model. PCA-KMeans clustering identified distinct destination archetypes with different optimal strategies. Competed against 28,000+ teams globally\u2014Honorable Mention.",
  },
  {
    slug: "biomass-modeling",
    name: "Biomass Co-Pyrolysis Optimization",
    icon: "flame",
    tagline:
      "Found the exact 28.44% ratio\u2014won Grand Innovation Award for it",
    description:
      "Three-model ensemble (LightGBM + Gaussian Process Regression + PSO) tested across 500+ pyrolysis data points to discover that 28.44% biomass-to-coal ratio maximizes clean energy output with R\u00b2>0.95 prediction accuracy. The entropy-weighted fuzzy evaluation framework quantified non-linear interactions between 3 yield types (gas, char, liquid). Judges praised the methodology as transferable across energy domains. First Prize + Grand Innovation Award at Shuwei Cup.",
    metric: "28.44% optimal ratio",
    tags: ["LightGBM", "PSO", "Energy", "First Prize"],
    status: "shipped",
    highlights: [
      { value: "28.44%", label: "Optimal Ratio" },
      { value: "1st", label: "Prize + Grand Award" },
      { value: "GPR", label: "Uncertainty Model" },
      { value: "PSO", label: "Global Optimizer" },
    ],
    architecture: `graph TB
  Raw[Biomass + Coal\\nPyrolysis Data] --> FE[Feature Engineering\\nEntropy-Weighted Fuzzy]
  FE --> LGB[LightGBM\\nYield Prediction]
  FE --> GPR[Gaussian Process\\nUncertainty Bounds]
  LGB --> Coupled[Non-Linear\\nInteraction Model]
  GPR --> Coupled
  Coupled --> PSO[Particle Swarm\\nOptimization]
  PSO --> Optimal[28.44% Optimal\\nBiomass Ratio]`,
    story:
      "Clean energy from biomass-coal co-pyrolysis sounds straightforward\u2014mix and burn. But the non-linear interactions between mixing ratios and gas/char/liquid yields make brute-force optimization impossible. We built a three-model ensemble: LightGBM for yield prediction, Gaussian Process Regression for uncertainty quantification, and Particle Swarm Optimization to search the non-convex solution space.\n\nThe entropy-weighted fuzzy evaluation framework captured interactions that single-objective models miss entirely. PSO converged on 28.44% as the optimal biomass-to-coal ratio\u2014a specific, actionable number that maximizes clean energy output. Judges at Shuwei Cup praised the methodology as transferable across energy domains, awarding First Prize plus the Grand Innovation Award.",
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
    highlights: [
      { value: "0.9850", label: "LASSO R²" },
      { value: "$52B", label: "Market by 2026" },
      { value: "144.68M", label: "Pets Predicted" },
      { value: "82.8%", label: "Capacity Utilization" },
    ],
    architecture: `graph TB
  Data[Multi-Source Data\\nMarket + Population + Manufacturing] --> ARIMAX[ARIMAX-GARCH\\nTime Series]
  Data --> VAR[VAR Model\\nCross-Variable Dynamics]
  Data --> LASSO[LASSO Regression\\nR²=0.9850]
  Data --> Prophet[Prophet\\nSeasonal Decomposition]
  ARIMAX --> Ensemble[Ensemble Forecast]
  VAR --> Ensemble
  LASSO --> Ensemble
  Prophet --> Ensemble
  Ensemble --> HHI[HHI Concentration\\nUS/EU Comparison]
  Ensemble --> Forecast[2026 Projections\\n144.68M Pets · $52B Market]`,
    story:
      "China\u2019s pet industry is growing faster than any forecasting model can keep up with. We built an integrated framework spanning four model families\u2014ARIMAX-GARCH for temporal dynamics, VAR for cross-variable interactions, LASSO for driver identification (R\u00b2=0.9850), and Prophet for seasonal decomposition. Each model captures a dimension the others miss.\n\nThe HHI concentration index comparison against US and EU markets revealed China\u2019s market is still fragmenting\u2014the opposite of mature markets. Our ensemble projected 144.68M pets and 82.8% manufacturing capacity utilization by 2026, with a total market size exceeding $52 billion. The framework earned recognition at APMCM for methodological rigor.",
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
    tagline:
      "1,200+ consumer samples \u00d7 AIGC pipeline = 40% engagement lift",
    description:
      "Led a PEST-SWOT driven brand overhaul for Suzhou\u2019s \u201c\u6797\u8393\u8393\u201d agricultural product. Surveyed 1,200+ consumers to map purchase drivers and price sensitivity. Deployed Claude + Flux + Midjourney AIGC toolchain for brand stories and mascot concepts, cutting creative iteration from weeks to days. Projected 40%+ user engagement increase. National Second Prize.",
    metric: "1,200+ samples",
    tags: ["AIGC", "Brand", "Claude", "National Prize"],
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
    tagline:
      "Zero-config Claude Code skill\u2014PDF to Markdown in one command",
    description:
      "Open-source Claude Code skill that wraps MinerU for layout-aware PDF/document conversion. One-command install, no API keys, 3 supported formats (PDF, DOCX, PPTX). Handles 100+ page documents with table and formula preservation. Published on Smithery marketplace, 5+ community installs in first week. Built for the Claude Code ecosystem with auto-detection of document type and intelligent chunking.",
    metric: "0 config needed",
    tags: ["Claude Code", "Open Source", "PDF"],
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
    tagline: "95% recognition accuracy, full shelf scan in under 3 minutes",
    description:
      "Multi-rotor drone system for automated warehouse stocktaking. Integrated STM32 flight controller + OpenMV vision + BLE communication for autonomous waypoint navigation and QR code scanning across 3D shelf structures. 95% barcode recognition accuracy with laser calibration, completing full inventory traversal in under 3 minutes.",
    metric: "95% accuracy",
    tags: ["STM32", "OpenMV", "PID", "Embedded"],
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
    tagline:
      "Task success rate +18pp by turning prompt tricks into reusable protocol",
    description:
      "Turned ad-hoc prompt engineering into a structured agent protocol: task decomposition, state machines, retry strategies, and auditable intermediate states. Tested on 120 cross-domain tasks: success rate jumped from 63% to 81%, JSON compliance from 72% to 94%, rework rounds dropped 29%. Framework-agnostic\u2014plugs into LangGraph, Semantic Kernel, or custom executors.",
    metric: "81% success rate",
    tags: ["Agent Protocol", "LLM", "Open Source"],
    github: "https://github.com/TsekaLuk/CDTMP-Agent-Instructions",
    status: "shipped",
    highlights: [
      { value: "+18pp", label: "Success Rate Lift" },
      { value: "94%", label: "JSON Compliance" },
      { value: "120", label: "Tasks Tested" },
      { value: "-29%", label: "Rework Rounds" },
    ],
    architecture: `graph LR
  Task[Complex Task] --> CD[Context\\nDecomposition]
  CD --> TM[Task Manager\\nState Machine]
  TM --> P[Prompt Protocol\\nRetry + Audit]
  P --> LLM[Any LLM Backend]
  LLM --> Validate[Output Validation\\nJSON Schema]
  Validate -->|Pass| Result[Auditable Result]
  Validate -->|Fail| P`,
    story:
      "Most teams treat prompt engineering as art\u2014ad-hoc tricks that work for one task but break on the next. CDTMP turns it into engineering: a structured protocol with task decomposition, state machines, retry strategies, and auditable intermediate states. Every step is inspectable, every failure is recoverable.\n\nTested across 120 cross-domain tasks, the protocol lifted success rate from 63% to 81% (+18 percentage points), pushed JSON compliance from 72% to 94%, and cut rework rounds by 29%. It\u2019s framework-agnostic\u2014plugs into LangGraph, Semantic Kernel, or custom executors. The insight: reliability in AI agents comes from protocol design, not prompt tricks.",
  },
  {
    slug: "next-unicorn",
    name: "Next-Unicorn",
    icon: "scan",
    tagline: "Your codebase has 47 hand-rolled wheels\u2014this finds them all",
    description:
      "Every codebase accumulates Vibe Coding debt: custom date formatters, DIY loggers, bespoke state machines. Next-Unicorn audits your code via Context7 MCP, identifies reinvented wheels, generates migration plans, and ships delete-code checklists. 176 tests passed with 29 property-based verifications. Published on Smithery + npm, supports 35+ AI agents including Claude Code, Cursor, and OpenCode.",
    metric: "176 tests \u00b7 35+ agents",
    tags: ["TypeScript", "Code Audit", "MCP", "Open Source"],
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
  Scanner --> Context7[Context7 MCP\\nReal-time Docs]
  Context7 --> Analysis[Gap Analysis\\n+ Replacement Match]
  Analysis --> Plan[Migration Plan\\n+ Delete Checklist]
  Plan --> Agent[Claude Code / Cursor\\n/ OpenCode / 35+]`,
    story:
      "Snyk, Dependabot, and Renovate manage your existing dependencies. But they can\u2019t find code you wrote that should become a dependency\u2014or capabilities your project is missing entirely. Next-Unicorn does all three: replacement, gap analysis, and dependency management, verified against real documentation via Context7 MCP.\n\nPublished on Smithery, npm, and GitHub Packages, it supports 35+ AI agents out of the box. 176 tests passed with 29 property-based verifications ensure reliability. The core insight: every codebase accumulates Vibe Coding debt\u2014hand-rolled date formatters, DIY loggers, bespoke state machines\u2014and the cost compounds silently until someone audits it.",
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
    tagline:
      "100% bbox accuracy on 50 element types\u2014from 65% to 92% in 10 prompt iterations",
    description:
      "Production-grade automated annotation system for document page elements. Async 4-stage pipeline with Qwen VL models identifies 50 element types (12 code languages, 13 interaction formats, 12 content elements, 13 other tags). Three-layer fault tolerance (Retry + RateLimit + CircuitBreaker), SHA256 content-addressed cache, and real-time SSE monitoring dashboard.",
    metric: "100% bbox \u00b7 50 labels",
    tags: ["Python", "Qwen VL", "Async Pipeline", "LLM"],
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
    tagline:
      "8-dimensional annotation across 19 prompt iterations\u2014edge cases included",
    description:
      "Multi-modal visual search relevance labeling pipeline using LLMs. Processes image + text signals across 8 annotation dimensions (visual relevance, content relevance, query/doc drop, functional parity, category granularity, visual similarity, modal corroboration). 19 prompt versions with automated comparison and reflection analysis tools.",
    metric: "8 dimensions \u00b7 19 versions",
    tags: ["Python", "Gemini 2.5", "Multi-Modal", "Pipeline"],
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
    tagline:
      "5 platforms, 6 batch processors, 90%+ accuracy\u2014from manual review to automated pipeline",
    description:
      "Multi-platform video content analysis system covering YouTube, Instagram, TikTok, VK, and Facebook. Refactored from legacy monolith to modular architecture: 5 platform fetchers, 6 batch processors, 5 video analyzers. Fast text analysis achieves 90%+ accuracy with 460x acceleration over manual review, processing 1,207+ videos across batch runs.",
    metric: "460x faster \u00b7 1,207+ videos",
    tags: ["Python", "AI Analysis", "Multi-Platform", "Video"],
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
    tagline:
      "8 microservices, real-time GraphQL, TUI cockpit\u2014from raw data to trade thesis",
    description:
      "Open-source quantitative trading copilot for crypto markets. 8 microservices + 9 infrastructure services (17 containers total) with unified TUI cockpit, 41 technical indicators, real-time market data streaming, and in-context AI copilot. TypeScript 5.7 + Python 3.11+, CI/CD with GitHub Actions.",
    metric: "17 containers \u00b7 41 indicators",
    tags: ["TypeScript", "Python", "K8s", "GraphQL"],
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
    tagline:
      "4.62/5 evaluation score across 1,000 real 3D scenes\u20148/8 acceptance criteria passed",
    description:
      "Comprehensive quality evaluation framework for the Habitat-Matterport 3D Research Dataset (1,000 real 3D scenes). Assessed 15+ dimensions including mesh quality, texture integrity, semantic annotation accuracy, and metadata completeness. Achieved 4.62/5 overall score with 100% acceptance pass rate (8/8 criteria). 95% requirement compliance.",
    metric: "4.62/5 \u00b7 1,000 scenes",
    tags: ["3D Evaluation", "Data Quality", "GLB/OBJ", "Habitat"],
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
    slug: "douxing-tea",
    name: "\u6597\u661f\u8336\u53f6 ERP",
    icon: "leaf",
    tagline:
      "60,000-word thesis, 7 database tables with RLS, 6 business modules\u2014production-grade",
    description:
      "Full-stack tea enterprise ERP system built as a graduation thesis project. React 19 + TypeScript + Supabase + PostgreSQL with 15 Row-Level Security policies. 6 business modules (production tracking, quality control, inventory, sales orders, user permissions, analytics) across 7 database tables. Complete 60,000-word thesis with 29 screenshots and 21 tables.",
    metric: "60K words \u00b7 7 tables \u00b7 RLS",
    tags: ["React", "Supabase", "PostgreSQL", "ERP"],
    status: "shipped",
    highlights: [
      { value: "60K", label: "Thesis Words" },
      { value: "15", label: "RLS Policies" },
      { value: "6", label: "Business Modules" },
      { value: "89", label: "Source Files" },
    ],
    architecture: `graph TB
  UI[React + TypeScript\nResponsive UI + Dark Mode] --> Auth[Supabase Auth\nRole-Based Access]
  Auth --> RLS[PostgreSQL RLS\nRow-Level Security]
  RLS --> Prod[Production Tracking\nBatch + Kanban]
  RLS --> QC[Quality Control\nRadar Charts + Scoring]
  RLS --> Inv[Inventory Management\nIn/Out + Alerts]
  RLS --> Sales[Sales Orders\nStatus Flow + Analytics]
  RLS --> Users[User Management\n4 Role Types]`,
    story:
      "Most graduation projects are CRUD demos\u2014this one is a production-grade ERP system for a real tea enterprise. The system covers the entire tea business lifecycle: production tracking with batch kanban boards, quality control with radar chart scoring, inventory management with automatic alerts, and sales order processing with status flow automation.\n\nBuilt on React + TypeScript + Supabase with PostgreSQL Row-Level Security ensuring data isolation across roles. The 60,000-word thesis documents every design decision across 85-90 pages, with 29 system screenshots, 21 data tables, and 20 code examples. 7 database tables with full RLS policies, 4 user role types, and responsive dark mode UI. Not a demo\u2014a deployable business system.",
  },
];

export async function getLocalizedProjects(
  locale: string,
): Promise<Project[]> {
  const t = await getTranslations({ locale, namespace: "projects" });
  return projects.map((p) => ({
    ...p,
    tagline: t(`${p.slug}.tagline`),
    description: t(`${p.slug}.description`),
  }));
}
