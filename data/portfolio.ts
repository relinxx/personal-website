export type Link = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  proofLink?: {
    label: string;
    href: string;
  };
};

export type ProjectKind = "client" | "agent" | "automation" | "ml";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  role: string;
  architecture: string[];
  highlights: string[];
  stack: string[];
  kind: ProjectKind;
  kindLabel: string;
  platform: string;
  year: string;
  status:
    | "Client work"
    | "Private project"
    | "Public repository"
    | "Public demo"
    | "Automation workflow";
  statusState: "shipped" | "progress";
  metrics?: { value: string; label: string }[];
  repository?: string;
  demo?: string;
  reportUrl?: string;
  image?: string;
  imageAlt?: string;
  featuredOrder?: number;
  featured: boolean;
};

export type PortfolioApp = {
  name: string;
  category: "CRM & Ops" | "AI & Retrieval" | "QA & Engineering" | "Applied ML";
  summary: string;
  tags: string[];
  kind: ProjectKind;
};

export type Certification = {
  title: string;
  issuer: string;
  completed: string;
  duration: string;
  skills: string[];
  image: string;
  credentialUrl: string;
  credentialId: string;
  note: string;
};

export type JourneyEntry = {
  id: string;
  year: string;
  period: string;
  type: "work" | "ai" | "automation" | "credentials";
  typeLabel: string;
  kind: ProjectKind;
  title: string;
  organization: string;
  location?: string;
  summary: string;
  href?: string;
  linkLabel?: string;
  latest?: boolean;
};

export type CareerTrack = {
  id: string;
  title: string;
  subtitle: string;
  kind: ProjectKind;
  badgeText: string;
  steps: {
    step: string;
    year?: string;
    title: string;
    detail: string;
    latest?: boolean;
  }[];
};

export const profile = {
  name: "Syed Muhammad Rehan",
  shortName: "Rehan",
  handle: "@relinxx",
  role: "AI & Systems Automation Engineer",
  location: "Rawalpindi, Pakistan",
  timezone: "PKT (UTC+5)",
  email: "rehankaneki@gmail.com",
  phone: "+92 335 568 5701",
  summary:
    "I build grounded AI systems, multi-agent workflows, Python backends, and CRM integrations—owning the work from technical discovery and evaluation through deployment and handover.",
  availability: "Available for AI & Automation roles",
  availabilityDetail:
    "Open to Applied AI, Python Backend, and Systems/CRM Automation roles · Remote worldwide & On-site in Pakistan.",
  links: {
    github: "https://github.com/relinxx",
    linkedin: "https://www.linkedin.com/in/relinxx/",
    email: "mailto:rehankaneki@gmail.com",
    whatsapp: "https://wa.me/923355685701",
  },
  resume: "/Syed-Muhammad-Rehan-Resume.pdf",
  cv: "/Syed-Muhammad-Rehan-CV.pdf",
} as const;

export const heroRotatorWords = [
  { text: "company documents", color: "var(--accent)" },
  { text: "three SQL databases", color: "var(--kind-contribution)" },
  { text: "CRM lead events", color: "var(--kind-product)" },
  { text: "multi-agent workflows", color: "var(--kind-talk)" },
] as const;

export const bentoCycleItems = [
  {
    badge: "20.9k",
    badgeColor: "var(--kind-product)",
    title: "Watermark Enterprise RAG",
    subtitle: "20,934 indexed records · Azure AI Search & Teams",
    href: "/projects/watermark-enterprise-automation",
  },
  {
    badge: "BOA",
    badgeColor: "var(--accent)",
    title: "Builders of Authority",
    subtitle: "Systems Automation Specialist · WhatConverts → Zapier → Salesforce",
    href: "/reports/builders-of-authority",
  },
  {
    badge: "15/15",
    badgeColor: "var(--kind-contribution)",
    title: "Evaluated Agent Delivery",
    subtitle: "Improved defined 15-case evaluation from 11/15 to 15/15 passes",
    href: "/projects/watermark-enterprise-automation",
  },
  {
    badge: "3 DBs",
    badgeColor: "var(--kind-talk)",
    title: "Guarded NL2SQL Analytics",
    subtitle: "Read-only schema-routed queries across 3 Azure SQL databases",
    href: "/projects/natural-language-sql-agent",
  },
] as const;

export const buildingNowItems = [
  {
    title: "CRM Integration & Attribution QA",
    stack: "WhatConverts · Zapier · Salesforce · GHL",
    href: "/reports/builders-of-authority",
    brand: "#30d158",
  },
  {
    title: "Watermark Knowledge & NL2SQL",
    stack: "Azure AI Search · 3 Azure SQL DBs · Teams",
    href: "/projects/watermark-enterprise-automation",
    brand: "#2997ff",
  },
  {
    title: "Autonomous QA Agent Lab",
    stack: "MCP · Playwright · GPT-4o · Next.js · SSE",
    href: "/projects/qa-application",
    brand: "#7d7aff",
  },
  {
    title: "Multi-Agent Research Pipeline",
    stack: "n8n · FastAPI · Qdrant · PostgreSQL",
    href: "/projects/multi-agent-research-automation",
    brand: "#ff375f",
  },
] as const;

export const stackTools = {
  row1: [
    { name: "Python", color: "#3776AB" },
    { name: "FastAPI", color: "#009688" },
    { name: "Azure AI Search", color: "#0078D4" },
    { name: "Azure OpenAI", color: "#2997ff" },
    { name: "LangChain", color: "#30d158" },
    { name: "LangGraph", color: "#04b97a" },
    { name: "Next.js", color: "#a1a1a6" },
    { name: "TypeScript", color: "#3178C6" },
  ],
  row2: [
    { name: "n8n", color: "#EA4B71" },
    { name: "Zapier", color: "#FF4F00" },
    { name: "Salesforce", color: "#00A1E0" },
    { name: "GoHighLevel", color: "#2997ff" },
    { name: "WhatConverts", color: "#30d158" },
    { name: "SharePoint", color: "#038387" },
    { name: "Copilot Studio", color: "#7d7aff" },
    { name: "ClickUp", color: "#7B68EE" },
  ],
  row3: [
    { name: "Azure SQL", color: "#0078D4" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "Qdrant", color: "#DC244C" },
    { name: "ChromaDB", color: "#ff9f0a" },
    { name: "Playwright", color: "#2EAD33" },
    { name: "MCP", color: "#7d7aff" },
    { name: "Docker", color: "#2496ED" },
    { name: "PyTorch", color: "#EE4C2C" },
  ],
} as const;

export const proofPoints = [
  {
    value: "20,934",
    label: "Indexed records in a delivered Azure enterprise retrieval workflow",
  },
  {
    value: "11/15 → 15/15",
    label: "Marked evaluation passes on a defined 15-case client benchmark",
  },
  {
    value: "3 Azure SQL DBs",
    label: "Guarded read-only natural-language analytics with schema routing",
  },
  {
    value: "20 Views",
    label: "Documented CRM attribution & workflow QA screenshots in BOA report",
  },
] as const;

export const experiences: Experience[] = [
  {
    company: "Builders of Authority",
    role: "Systems Automation Specialist",
    period: "Sep 2026 – Present",
    location: "Remote",
    current: true,
    summary:
      "Own CRM integration delivery and quality assurance across lead capture, client onboarding, sales attribution, and operational reporting.",
    highlights: [
      "Audit WhatConverts-to-Salesforce synchronization through Zapier execution history and destination-record validation.",
      "Investigate missing leads, duplicate customers, test-data exceptions, and conditional routing to identify appropriate recovery actions.",
      "Configure GoHighLevel subaccounts and coordinate integration requirements, QA evidence, dependencies, and technical handover through ClickUp.",
    ],
    proofLink: {
      label: "Explore 20-view BOA work report",
      href: "/reports/builders-of-authority",
    },
  },
  {
    company: "Logic Powered Solutions",
    role: "Software Engineer",
    period: "Aug 2025 – Aug 2026",
    location: "F-5, Islamabad, Pakistan",
    summary:
      "Owned client-facing automation and applied AI systems from technical discovery through implementation, QA, deployment, walkthroughs, and handover.",
    highlights: [
      "Served as sole implementation engineer for Watermark Constructions' paid knowledge and data automation engagement while project management was handled separately.",
      "Integrated SharePoint, Azure AI Search, Azure OpenAI, Copilot Studio, and Teams; scaled the final vector index to 20,934 indexed records and improved a defined 15-case evaluation from 11/15 to 15/15 marked passes.",
      "Built a validated, read-only NL2SQL workflow across three Azure SQL databases and delivered it through Functions, Bot Service, Teams, Direct Line, and Web Chat.",
      "Designed n8n workflows with webhooks, API orchestration, branching, human approvals, persistence, monitoring, and explicit error paths.",
    ],
    proofLink: {
      label: "Read Watermark case study",
      href: "/projects/watermark-enterprise-automation",
    },
  },
  {
    company: "A Hamson",
    role: "AI/ML Intern",
    period: "Jun 2025 – Aug 2025",
    location: "Islamabad, Pakistan",
    summary:
      "Worked across internal knowledge retrieval, containerized AI services, databases, and practical web improvements.",
    highlights: [
      "Built an internal LangChain RAG assistant that grounded answers in retrieved company documentation.",
      "Containerized Python services with Docker and supported Kubernetes deployment workflows.",
      "Supported database administration and web UI reliability improvements.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "watermark-enterprise-automation",
    title: "Enterprise Knowledge & Guarded Data Automation",
    eyebrow: "Watermark Constructions · Client Delivery",
    summary:
      "Two connected client-facing AI systems for Watermark Constructions: a SharePoint-grounded knowledge assistant in Teams and a guarded read-only natural-language analytics workflow spanning three operational Azure SQL databases.",
    problem:
      "Staff needed dependable access to company knowledge and operational data without manually digging through SharePoint libraries or writing SQL queries across separate databases.",
    role:
      "Served as sole implementation engineer across technical discovery, architecture, development, integrations, evaluation, Azure deployment, client walkthroughs, troubleshooting, and handover documentation (project management handled separately).",
    architecture: [
      "SharePoint content is incrementally indexed into Azure AI Search (20,934 final indexed records) and exposed through a citation-grounded Copilot Studio assistant in Microsoft Teams.",
      "A separate Python workflow routes plain-English business questions across three Azure SQL databases using bounded schema context.",
      "Read-only validation, table and column allowlists, row limits, query timeouts, and correction retries protect the database execution boundary.",
      "Azure Functions, Azure Bot Service, Key Vault, Direct Line, Web Chat, and Microsoft Teams provide secure enterprise delivery channels.",
    ],
    highlights: [
      "20,934 indexed records in the final Azure vector index",
      "Defined 15-case evaluation improved from 11/15 to 15/15 marked passes",
      "Guarded natural-language analytics across 3 Azure SQL databases",
      "International stakeholder demonstrations and complete technical handover",
    ],
    stack: [
      "Azure AI Search",
      "SharePoint",
      "Azure OpenAI",
      "Copilot Studio",
      "Azure SQL",
      "Azure Functions",
      "Python",
      "Microsoft Teams",
    ],
    kind: "client",
    kindLabel: "Client Delivery",
    platform: "Azure · Enterprise AI",
    year: "2026",
    status: "Client work",
    statusState: "shipped",
    metrics: [
      { value: "20,934", label: "Indexed records" },
      { value: "15/15", label: "Marked eval passes" },
      { value: "3 SQL DBs", label: "Guarded NL2SQL" },
    ],
    featuredOrder: 1,
    featured: true,
  },
  {
    slug: "boa-crm-integrations",
    title: "CRM Integration & Revenue Attribution QA",
    eyebrow: "Builders of Authority · Systems Delivery",
    summary:
      "End-to-end lead synchronization, quote and sales-value attribution, GoHighLevel subaccount onboarding, and documented execution QA across WhatConverts, Zapier, Salesforce, and ClickUp.",
    problem:
      "Client revenue reporting and sales operations depend on accurate event delivery across multiple platforms. Missing records, duplicate accounts, and halted Zapier filters must be traced and reconciled with verifiable evidence.",
    role:
      "Systems Automation Specialist responsible for integration delivery, step-level Zapier execution tracing, destination-record validation in Salesforce, GoHighLevel configuration, and ClickUp QA documentation.",
    architecture: [
      "Trace WhatConverts lead events (forms, calls, bookings) through Zapier filter, formatter, and JavaScript transformation steps.",
      "Validate destination records in Salesforce and reconcile missing leads, duplicate customer accounts, and test-data exceptions.",
      "Verify quote and sales-value attribution paths, distinguishing completed CRM updates from intentionally halted lookup paths.",
      "Configure GoHighLevel subaccounts and document requirements, access blockers, QA evidence, and handover notes in ClickUp.",
    ],
    highlights: [
      "20 documented operational views in the public BOA Work Report",
      "Traceable QA evidence across source events, Zapier runs, and Salesforce records",
      "Quote and sales-value attribution verification across active client accounts",
      "GoHighLevel subaccount configuration and ClickUp handover workflows",
    ],
    stack: [
      "Zapier",
      "Salesforce",
      "GoHighLevel",
      "WhatConverts",
      "n8n",
      "ClickUp",
      "JavaScript",
      "Webhooks",
    ],
    kind: "client",
    kindLabel: "Client Systems",
    platform: "CRM · Integrations",
    year: "2026",
    status: "Client work",
    statusState: "shipped",
    reportUrl: "/reports/builders-of-authority",
    image: "/reports/boa/02-zapier-quote-workflow.jpg",
    imageAlt:
      "Zapier quote-value workflow with filters, JavaScript transformation, and lead matching",
    metrics: [
      { value: "20 Views", label: "Documented QA report" },
      { value: "4 Systems", label: "WC → Zapier → SF / GHL" },
    ],
    featuredOrder: 2,
    featured: true,
  },
  {
    slug: "qa-application",
    title: "Autonomous QA Application (QA Agent Lab)",
    eyebrow: "MCP + Playwright Browser Testing Agent",
    summary:
      "An AI-assisted browser testing system using MCP and Playwright that observes live browser state, discovers flows, generates and executes Playwright specifications, and streams run progress over Server-Sent Events.",
    problem:
      "Manual flow discovery and end-to-end test authoring slow down engineering teams, while unconstrained browser agents lack execution bounds, path safety, and inspectable failure traces.",
    role:
      "Built the MCP agent loop, Playwright browser instrumentation, test code generation and execution runner, real-time SSE telemetry stream, seeded-defect challenges, and sandbox safety controls.",
    architecture: [
      "The orchestrator exposes live DOM state and bounded browser actions to GPT-4o through Model Context Protocol (MCP).",
      "The agent explores the target sandbox, identifies user journeys, and synthesizes executable Playwright test suites.",
      "A guarded runner executes generated specs with a 60-second tool timeout, 5-minute suite cap, and URL/path allowlists.",
      "Server-Sent Events (SSE) stream live step progress, screenshots, traces, and assertion verdicts to the Next.js console.",
    ],
    highlights: [
      "MCP-driven autonomous browser exploration and flow discovery",
      "Generates and executes real Playwright test specifications",
      "Live Server-Sent Events (SSE) execution telemetry and trace artifacts",
      "Strict URL/path safety controls and bounded tool execution timeouts",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Playwright",
      "MCP",
      "GPT-4o",
      "SSE",
    ],
    kind: "agent",
    kindLabel: "AI Agent",
    platform: "Web · Developer Tool",
    year: "2026",
    status: "Public demo",
    statusState: "shipped",
    repository: "https://github.com/relinxx/qa_application",
    demo: "/demos/qa",
    image: "/projects/qa-agent-lab.png",
    imageAlt: "QA Agent Lab authentication scenario and sandbox boundaries",
    metrics: [
      { value: "MCP + SSE", label: "Streaming execution" },
      { value: "Playwright", label: "Generated E2E specs" },
    ],
    featuredOrder: 3,
    featured: true,
  },
  {
    slug: "multi-agent-research-automation",
    title: "Multi-Agent Research Automation",
    eyebrow: "n8n & FastAPI Systems Orchestration",
    summary:
      "A webhook-driven multi-agent research workflow that checks service health, gathers parallel evidence from four sources, scores and indexes context in Qdrant, enforces a reviewer quality gate with revision loops, and persists structured output in PostgreSQL.",
    problem:
      "Single-prompt research pipelines fail silently when upstream scrapers go down, mix low-quality sources with primary evidence, and deliver unverified drafts without retry or audit mechanisms.",
    role:
      "Designed the end-to-end n8n orchestration, FastAPI health and scraping services, parallel source fallback logic, Qdrant vector ingestion, multi-agent review/revision loop, PostgreSQL persistence, and error alerting.",
    architecture: [
      "A webhook intake validates the payload and verifies FastAPI service health before dispatching parallel source queries.",
      "Tavily, a FastAPI scraper, Jina AI Reader, and Semantic Scholar gather evidence with automatic fallback merging.",
      "Passages are deduplicated, scored for relevance, and ingested into Qdrant for grounded retrieval.",
      "Orchestrator, Researcher, Reviewer, Revision, and Synthesis agents collaborate behind an explicit quality-score threshold.",
      "Validated structured output is persisted to PostgreSQL and returned to the caller, backed by a dedicated failure-notification workflow.",
    ],
    highlights: [
      "Parallel multi-source retrieval with health checks and graceful fallbacks",
      "Evidence deduplication, relevance scoring, and Qdrant vector indexing",
      "Reviewer quality threshold with controlled agent revision loop",
      "PostgreSQL persistence and isolated error-notification routing",
    ],
    stack: [
      "n8n",
      "FastAPI",
      "Qdrant",
      "PostgreSQL",
      "Webhooks",
      "Tavily",
      "Semantic Scholar",
      "LLM Agents",
    ],
    kind: "automation",
    kindLabel: "Automation Workflow",
    platform: "n8n · FastAPI",
    year: "2026",
    status: "Automation workflow",
    statusState: "shipped",
    image: "/projects/multi-agent-rag-research-pipeline.png",
    imageAlt:
      "n8n multi-agent RAG research workflow with source retrieval, review, revision, and persistence branches",
    metrics: [
      { value: "5 Agents", label: "Review & revision loop" },
      { value: "Qdrant + PG", label: "Vector & relational store" },
    ],
    featuredOrder: 4,
    featured: true,
  },
  {
    slug: "leadership-briefing-approval-automation",
    title: "Leadership Briefing & Approval Automation",
    eyebrow: "Human-in-the-Loop Operational Governance",
    summary:
      "An intake-to-decision workflow that normalizes operational requests, detects duplicates, performs structured AI risk analysis, routes consequential decisions to human approval, generates executive briefings, and records an immutable audit trail.",
    problem:
      "Operational teams needed rapid request triage and risk summarization without surrendering high-impact authority to an LLM or losing track of why a request was approved, revised, or rejected.",
    role:
      "Architected the n8n intake normalization, duplicate detection, structured LLM classification/risk extraction, deterministic schema validation, human approval routing, briefing synthesis, and audit logging.",
    architecture: [
      "Form and webhook submissions are normalized and checked against existing records to block duplicate intakes.",
      "AI nodes classify request urgency, extract structured fields, and produce a preliminary risk assessment.",
      "Deterministic validation verifies required fields before routing the package to an explicit human approval gate.",
      "Approve, Reject, Revise, and Unknown outcomes follow isolated branches—generating leadership briefings and audit logs.",
    ],
    highlights: [
      "Explicit human-in-the-loop authority for consequential decisions",
      "Deterministic validation between AI extraction and approval routing",
      "Dedicated branches for approve, reject, revise, and ambiguous outcomes",
      "Automated leadership briefing generation and full audit trail",
    ],
    stack: [
      "n8n",
      "Webhooks",
      "LLM Agents",
      "Human Approval",
      "Structured Validation",
      "Audit Logging",
    ],
    kind: "automation",
    kindLabel: "Governance Workflow",
    platform: "n8n · Human-in-Loop",
    year: "2026",
    status: "Automation workflow",
    statusState: "shipped",
    image: "/projects/leadership-briefing-approval-workflow.png",
    imageAlt:
      "n8n leadership briefing workflow with validation, human approval, routing, and audit logging",
    metrics: [
      { value: "4 Branches", label: "Approve / Revise / Reject" },
      { value: "Audit Trail", label: "Deterministic governance" },
    ],
    featuredOrder: 5,
    featured: true,
  },
  {
    slug: "geovision",
    title: "GeoVision — Multi-Agent Geospatial AI",
    eyebrow: "Spatial Optimization & Environmental Planning",
    summary:
      "A multi-agent geospatial planning system combining XGBoost environmental suitability scoring, RAG-based zoning regulation retrieval, and GIS spatial optimization behind a map-centric React and FastAPI workspace.",
    problem:
      "Land-use planning requires reconciling environmental suitability, municipal zoning rules, and spatial parcel geometry—analyses that are typically fragmented across separate GIS and policy tools.",
    role:
      "Designed the multi-agent coordination architecture, FastAPI asynchronous orchestration, XGBoost suitability integration, ChromaDB zoning retrieval, and interactive React map interface.",
    architecture: [
      "An Environmental Agent evaluates parcel terrain and climate indicators using an XGBoost suitability model.",
      "A Zoning Agent retrieves applicable land-use regulations and constraints from ChromaDB using RAG.",
      "A Spatial Agent processes parcel polygons with GeoPandas and optimizes layout allocation.",
      "FastAPI coordinates asynchronous agent execution and streams unified recommendations to the React map UI.",
    ],
    highlights: [
      "Multi-agent fusion of tabular ML, document RAG, and GIS geometry",
      "XGBoost environmental suitability scoring across spatial parcels",
      "ChromaDB regulatory retrieval for zoning compliance",
      "Interactive map-centric React and FastAPI planning interface",
    ],
    stack: [
      "React",
      "FastAPI",
      "Python",
      "XGBoost",
      "ChromaDB",
      "GeoPandas",
      "GIS",
    ],
    kind: "ml",
    kindLabel: "Applied AI & GIS",
    platform: "Web · Spatial AI",
    year: "2026",
    status: "Public demo",
    statusState: "shipped",
    repository: "https://github.com/relinxx/geovision",
    demo: "/demos/geovision",
    image: "/projects/geovision-preview.png",
    imageAlt: "GeoVision multi-agent geospatial AI planning workspace",
    metrics: [
      { value: "3 Agents", label: "Env · Zoning · Spatial" },
      { value: "XGBoost + RAG", label: "Hybrid GIS engine" },
    ],
    featuredOrder: 6,
    featured: true,
  },
  {
    slug: "rag-evidence-studio",
    title: "RAG Evidence Studio / Watermarks RAG Desk",
    eyebrow: "Inspectable Retrieval & Citation Verification",
    summary:
      "A transparent retrieval workspace designed to make ranked passages, relevance scores, and inline source citations directly inspectable alongside synthesized answers.",
    problem:
      "Standard RAG interfaces hide retrieved chunks behind a chat bubble, making it difficult for engineers and operators to verify whether citations are accurate or hallucinated.",
    role:
      "Built the section-aware document chunker, TF-IDF retrieval pipeline with exact-term boosting, strict citation contract, and side-by-side Next.js evidence inspection studio.",
    architecture: [
      "Curated technical documents are segmented into section-aware passages with document and category metadata.",
      "The FastAPI retrieval engine ranks candidate passages using TF-IDF with exact-term boosting.",
      "Grounded synthesis binds every claim to explicit passage IDs and rejects unsupported questions.",
      "The frontend exposes passage scores, matched terms, and one-click source inspection.",
    ],
    highlights: [
      "Side-by-side ranked passage inspector with visible relevance scores",
      "Mandatory inline citation binding and ungrounded-query rejection",
      "Independent FastAPI retrieval backend and Next.js editorial interface",
      "Documented lineage between public Evidence Studio and Watermarks RAG Desk",
    ],
    stack: ["Python", "FastAPI", "Next.js", "TF-IDF", "Citation Evaluation"],
    kind: "agent",
    kindLabel: "RAG System",
    platform: "Web · FastAPI",
    year: "2026",
    status: "Public demo",
    statusState: "shipped",
    repository: "https://github.com/relinxx/rag-evidence-studio",
    demo: "/demos/watermark",
    featured: false,
  },
  {
    slug: "natural-language-sql-agent",
    title: "Natural Language SQL Agent (Atlas SQL)",
    eyebrow: "Schema-Aware Guarded NL2SQL",
    summary:
      "A schema-aware SQL assistant that routes plain-English business questions to the appropriate database, enforces read-only SQLGlot validation and row limits, and returns clear natural-language explanations.",
    problem:
      "Decision-makers need self-serve answers across operational relational databases without writing SQL or risking destructive queries, unbounded scans, or schema hallucinations.",
    role:
      "Developed the schema routing layer, SQLGlot AST validation guardrails, bounded retry loop, and public synthetic SQLite demonstration alongside the production Azure SQL architecture.",
    architecture: [
      "Incoming questions are matched against bounded schema metadata to select the target database.",
      "The LLM generates candidate SQL which is parsed and validated for read-only safety, table allowlists, and row limits.",
      "Execution timeouts and structured error feedback allow automatic query self-correction.",
      "Results are returned with both the executed SQL query and a plain-language summary.",
    ],
    highlights: [
      "Read-only AST validation, table allowlists, and bounded result limits",
      "Multi-database schema routing across 3 operational domains",
      "Transparent SQL inspection alongside plain-English answers",
      "Delivered in production via Azure Functions & Bot Service; public demo on synthetic SQLite",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Azure SQL",
      "SQLGlot",
      "Azure Functions",
      "Azure Bot Service",
    ],
    kind: "agent",
    kindLabel: "Data Agent",
    platform: "Web · NL2SQL",
    year: "2026",
    status: "Public demo",
    statusState: "shipped",
    repository: "https://github.com/relinxx/atlas-sql-agent",
    demo: "https://atlas-sql-agent.vercel.app",
    featured: false,
  },
  {
    slug: "industrial-sentinel",
    title: "Industrial Sentinel — Predictive Maintenance ML",
    eyebrow: "Multivariate Time-Series Condition Monitoring",
    summary:
      "An applied machine learning pipeline for simulated industrial sensor streams covering window preprocessing, multi-task 1D CNN and LightGBM inference, conformal calibration, fault classification, and ONNX export.",
    problem:
      "Static threshold alarms on raw vibration and temperature streams generate high false-positive rates and fail to distinguish between sensor noise and early-stage mechanical degradation.",
    role:
      "Built the time-series feature engineering pipeline, multi-task temporal inference models, calibration and evaluation suite, ONNX runtime export, and operator replay interface.",
    architecture: [
      "Multivariate sensor streams (vibration, temperature, pressure, load) are segmented into aligned sliding windows.",
      "Temporal 1D CNN and LightGBM models perform joint anomaly detection, fault-family classification, and health forecasting.",
      "Calibration and evaluation artifacts quantify precision, recall, and uncertainty across operating regimes.",
      "Models export to ONNX for lightweight deterministic edge/service inference.",
    ],
    highlights: [
      "End-to-end time-series pipeline from raw sensor windows to ONNX export",
      "Multi-task anomaly detection, fault classification, and health trend forecasting",
      "Documented dataset setup, calibration metrics, and evaluation benchmarks",
      "Interactive operator replay console for inspecting alert evidence",
    ],
    stack: [
      "Python",
      "PyTorch",
      "1D CNN",
      "LightGBM",
      "ONNX",
      "Time-Series ML",
      "pytest",
    ],
    kind: "ml",
    kindLabel: "Applied ML",
    platform: "Python · ONNX",
    year: "2026",
    status: "Public demo",
    statusState: "shipped",
    repository: "https://github.com/relinxx/Industrial-Sentinel",
    demo: "/demos/sentinel",
    featured: false,
  },
  {
    slug: "bmo-interactive-ai-character",
    title: "B.M.O — Conversational 3D AI Character",
    eyebrow: "Voice, Memory & Embodied Interaction",
    summary:
      "A personal conversational AI project exploring real-time speech interaction, ChromaDB contextual memory, voice synthesis, and state-driven 3D expressions in React Three Fiber.",
    problem:
      "Standard text chat interfaces strip away personality, vocal cadence, and persistent memory in companion-style interactions.",
    role:
      "Integrated the React Three Fiber 3D character frontend, FastAPI conversational backend, Whisper speech transcription, ChromaDB memory retrieval, and expression state machine.",
    architecture: [
      "Voice input is captured and transcribed via Whisper into the FastAPI conversation loop.",
      "ChromaDB retrieves relevant episodic memories to maintain continuity across sessions.",
      "Generated responses trigger speech synthesis and voice conversion.",
      "Audio and turn state drive real-time 3D facial expressions (idle, listening, thinking, speaking).",
    ],
    highlights: [
      "Embodied 3D character rendered with React Three Fiber",
      "End-to-end voice pipeline with Whisper STT and custom TTS",
      "Persistent vector memory backed by ChromaDB",
      "Real-time state-driven character animations",
    ],
    stack: [
      "Next.js",
      "React Three Fiber",
      "FastAPI",
      "ChromaDB",
      "Whisper",
      "Python",
    ],
    kind: "ml",
    kindLabel: "Creative AI",
    platform: "3D Web · Voice AI",
    year: "2026",
    status: "Public repository",
    statusState: "shipped",
    repository: "https://github.com/relinxx/B.M.O",
    featured: false,
  },
];

export const portfolioApps: PortfolioApp[] = [
  {
    name: "CRM Reconciliation",
    category: "CRM & Ops",
    summary:
      "Compare incoming lead events, Zapier automation history, and destination CRM records to inspect discrepancies and recovery actions.",
    tags: ["WhatConverts", "Zapier", "Salesforce", "QA"],
    kind: "client",
  },
  {
    name: "Document Research Workspace",
    category: "AI & Retrieval",
    summary:
      "Private local document workspace with uploads, durable indexing, keyword + semantic retrieval, exact quoted evidence, and read-only synthetic analytics.",
    tags: ["RAG", "Citations", "RBAC", "NL2SQL"],
    kind: "agent",
  },
  {
    name: "Document Revision Review",
    category: "AI & Retrieval",
    summary:
      "Connect changed passages across document versions directly to operational decisions that require human review.",
    tags: ["Diff Analysis", "Human Review", "Grounding"],
    kind: "agent",
  },
  {
    name: "Research Briefs",
    category: "AI & Retrieval",
    summary:
      "Compare technical and operational options against explicit criteria using traceable source evidence.",
    tags: ["Multi-Source", "Scoring", "Synthesis"],
    kind: "automation",
  },
  {
    name: "Purchase Requests",
    category: "CRM & Ops",
    summary:
      "Route request intakes and revisions through structured validation and human approval with an explicit decision history.",
    tags: ["Approval Routing", "Audit Trail", "Workflows"],
    kind: "automation",
  },
  {
    name: "Release Checks",
    category: "QA & Engineering",
    summary:
      "Manage browser test suites, live execution runs, streamed progress, and trace artifacts.",
    tags: ["Playwright", "MCP", "SSE", "Test Suites"],
    kind: "agent",
  },
  {
    name: "Site Comparison",
    category: "Applied ML",
    summary:
      "Compare candidate land parcels against environmental and zoning criteria with visible spatial context.",
    tags: ["GIS", "Suitability", "Spatial Context"],
    kind: "ml",
  },
  {
    name: "Maintenance Review",
    category: "Applied ML",
    summary:
      "Inspect simulated industrial equipment histories, anomaly predictions, and calibrated model evidence.",
    tags: ["Time-Series", "ONNX", "Telemetry"],
    kind: "ml",
  },
  {
    name: "Local Forge",
    category: "QA & Engineering",
    summary:
      "Local AI-assisted coding workflow using Ollama, Aider, FastAPI, SQLite, and Git worktrees with isolated checks and explicit merge approval.",
    tags: ["Ollama", "Git Worktrees", "FastAPI", "SQLite"],
    kind: "agent",
  },
];

export const journeyEntries: JourneyEntry[] = [
  {
    id: "boa-role",
    year: "2026",
    period: "Sep 2026 – Present",
    type: "work",
    typeLabel: "Current Role",
    kind: "client",
    title: "Systems Automation Specialist",
    organization: "Builders of Authority · Remote",
    summary:
      "Own CRM integration delivery and QA across WhatConverts, Zapier, Salesforce, GoHighLevel, and ClickUp—tracing lead events, verifying quote/sales attribution, and documenting recovery actions.",
    href: "/reports/builders-of-authority",
    linkLabel: "Read 20-view work report",
    latest: true,
  },
  {
    id: "lps-role",
    year: "2026",
    period: "Aug 2025 – Aug 2026",
    type: "work",
    typeLabel: "Employment",
    kind: "agent",
    title: "Software Engineer",
    organization: "Logic Powered Solutions · Islamabad",
    summary:
      "Sole implementation engineer for Watermark Constructions' enterprise knowledge and analytics engagement (20,934 indexed records, 15/15 evaluation pass rate, 3 Azure SQL databases) plus multi-agent n8n workflows.",
    href: "/projects/watermark-enterprise-automation",
    linkLabel: "Read Watermark case study",
  },
  {
    id: "qa-agent-build",
    year: "2026",
    period: "Aug 2026",
    type: "ai",
    typeLabel: "AI Engineering",
    kind: "agent",
    title: "Built Autonomous QA Agent Lab, RAG Evidence Studio & Atlas SQL",
    organization: "Public Engineering Portfolio",
    summary:
      "Shipped three inspectable AI systems: an MCP + Playwright browser testing agent with SSE streaming, a transparent citation-grounded RAG studio, and a guarded read-only NL2SQL agent.",
    href: "/projects/qa-application",
    linkLabel: "Explore QA Agent Lab",
  },
  {
    id: "n8n-orchestration",
    year: "2026",
    period: "2026",
    type: "automation",
    typeLabel: "Workflow Architecture",
    kind: "automation",
    title: "Multi-Agent Research & Human-in-the-Loop Approval Pipelines",
    organization: "n8n · FastAPI · Qdrant · PostgreSQL",
    summary:
      "Designed production-grade webhook orchestrations featuring health checks, parallel source fallbacks, vector scoring, quality-gated revision loops, and explicit human approval audit trails.",
    href: "/projects/multi-agent-research-automation",
    linkLabel: "Inspect workflow architecture",
  },
  {
    id: "certs-2026",
    year: "2026",
    period: "Jun 2026",
    type: "credentials",
    typeLabel: "Credentials",
    kind: "ml",
    title: "6 Professional Certificates in Vector DBs, Azure RAG, n8n & CI/CD",
    organization: "Weaviate · Microsoft · LinkedIn Learning",
    summary:
      "Completed Vector Databases Professional Certificate (Weaviate), Azure RAG for Developers, Build AI Agents with n8n, Microsoft Azure Essentials, and Practical GitHub Actions.",
    href: "#proof",
    linkLabel: "View verified certificates",
  },
  {
    id: "fast-degree",
    year: "2026",
    period: "2022 – 2026",
    type: "credentials",
    typeLabel: "Degree & FYP",
    kind: "ml",
    title: "B.Sc. Software Engineering & GeoVision Final-Year Project",
    organization: "FAST University",
    summary:
      "Graduated in Software Engineering. Built GeoVision as Final-Year Project—a multi-agent geospatial planning system combining XGBoost, ChromaDB RAG, and GeoPandas spatial optimization.",
    href: "/projects/geovision",
    linkLabel: "Explore GeoVision",
  },
  {
    id: "ahamson-intern",
    year: "2025",
    period: "Jun 2025 – Aug 2025",
    type: "work",
    typeLabel: "Internship",
    kind: "agent",
    title: "AI/ML Intern",
    organization: "A Hamson · Islamabad",
    summary:
      "Built an internal LangChain knowledge assistant grounded in company documentation, containerized Python services with Docker, and supported Kubernetes deployment workflows.",
  },
];

export const careerTracks: CareerTrack[] = [
  {
    id: "ai-backend",
    title: "Applied AI & Backend.",
    subtitle: "6 milestones, foundation to production delivery",
    kind: "agent",
    badgeText: "RAG · Agents · NL2SQL · Python",
    steps: [
      {
        step: "Step 01",
        year: "2022–2025",
        title: "Software Engineering & Applied ML Foundations at FAST University",
        detail:
          "Built core backend, data structures, and machine learning foundations—culminating in Industrial Sentinel (PyTorch/ONNX) and GeoVision (XGBoost + ChromaDB + GeoPandas).",
      },
      {
        step: "Step 02",
        year: "Jun 2025",
        title: "Internal LangChain RAG & Docker/K8s at A Hamson",
        detail:
          "Developed a company-grounded LangChain assistant and containerized Python microservices with Docker and Kubernetes deployment support.",
      },
      {
        step: "Step 03",
        year: "2025–2026",
        title: "Sole Implementation Engineer for Watermark Enterprise RAG",
        detail:
          "Delivered a SharePoint + Azure AI Search + Copilot Studio assistant in Teams at Logic Powered Solutions, scaling to 20,934 indexed records and 15/15 evaluation passes.",
      },
      {
        step: "Step 04",
        year: "2026",
        title: "Guarded Multi-Database NL2SQL on Azure",
        detail:
          "Built a read-only natural-language analytics workflow across three Azure SQL databases with schema routing, AST validation, row limits, and correction retries.",
      },
      {
        step: "Step 05",
        year: "Aug 2026",
        title: "Autonomous Browser QA Agent with MCP & Playwright",
        detail:
          "Engineered an MCP + GPT-4o agent that inspects live DOM state, generates and runs Playwright specs, and streams progress via Server-Sent Events.",
        latest: true,
      },
    ],
  },
  {
    id: "systems-automation",
    title: "Systems & CRM Automation.",
    subtitle: "5 milestones, webhooks to enterprise revenue attribution",
    kind: "client",
    badgeText: "n8n · Zapier · Salesforce · GoHighLevel",
    steps: [
      {
        step: "Step 01",
        year: "2025",
        title: "Webhook Contracts, FastAPI Services & API Orchestration",
        detail:
          "Designed resilient REST API boundaries, JSON payload contracts, health checks, and retry patterns connecting Python services to external platforms.",
      },
      {
        step: "Step 02",
        year: "2025–2026",
        title: "Multi-Agent n8n Pipelines with Quality Gates",
        detail:
          "Built webhook-driven n8n workflows combining Tavily, Jina, Semantic Scholar, Qdrant, and PostgreSQL with reviewer score thresholds and fallback routing.",
      },
      {
        step: "Step 03",
        year: "2026",
        title: "Human-in-the-Loop Approval & Audit Workflows",
        detail:
          "Implemented deterministic intake validation, AI risk triage, explicit human approval forms (approve/revise/reject), and audit trail persistence.",
      },
      {
        step: "Step 04",
        year: "Sep 2026",
        title: "CRM Integration & Attribution QA at Builders of Authority",
        detail:
          "Tracing WhatConverts lead events through Zapier to Salesforce, validating quote and sales-value attribution, and diagnosing duplicates and routing exceptions.",
      },
      {
        step: "Step 05",
        year: "Now",
        title: "Multi-Account GoHighLevel Configuration & ClickUp Handovers",
        detail:
          "Configuring client CRM subaccounts, documenting access dependencies, and producing verifiable 20-view operational QA evidence for stakeholders.",
        latest: true,
      },
    ],
  },
];

export const skillGroups = [
  {
    title: "Automation and integration",
    skills: [
      "n8n",
      "Zapier",
      "Salesforce",
      "GoHighLevel",
      "WhatConverts",
      "ClickUp",
      "REST APIs",
      "Webhooks",
      "Human approvals",
      "Audit logging",
      "MCP",
      "Playwright",
    ],
  },
  {
    title: "Systems, backend and cloud",
    skills: [
      "Python",
      "FastAPI",
      "TypeScript",
      "Next.js",
      "Node.js",
      "SSE",
      "Azure Functions",
      "Azure SQL",
      "PostgreSQL / pgvector",
      "SharePoint",
      "Microsoft Teams",
      "Docker",
    ],
  },
  {
    title: "AI, RAG and client delivery",
    skills: [
      "RAG",
      "LLM Agents",
      "LangChain",
      "LangGraph",
      "Azure AI Search",
      "Azure OpenAI",
      "Copilot Studio",
      "Qdrant",
      "ChromaDB",
      "NL2SQL",
      "Retrieval Evaluation",
      "Client Handover",
    ],
  },
] as const;

export const certifications: Certification[] = [
  {
    title: "Vector Databases Professional Certificate",
    issuer: "Weaviate",
    completed: "June 2026",
    duration: "Professional Certificate",
    skills: ["Vector Databases", "Database Development", "Semantic Search"],
    image: "/certificates/vector-databases-weaviate.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/98ebd63e847ed3b7dfe04be8d9ec381d4045524da2c192e51debcef48840f467/",
    credentialId:
      "98ebd63e847ed3b7dfe04be8d9ec381d4045524da2c192e51debcef48840f467",
    note: "Professional certificate covering vector indexing, hybrid search, and production RAG workflows.",
  },
  {
    title: "Azure for Developers: Retrieval-Augmented Generation (RAG) with Azure AI",
    issuer: "LinkedIn Learning",
    completed: "June 2026",
    duration: "Credential",
    skills: ["Azure AI Foundry", "RAG", "Azure AI Search"],
    image: "/certificates/azure-rag.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/d96e659ff6a39caad22564964ddc33f9f2ca799ac9d0cc86fd61e1a95234b77c/",
    credentialId:
      "d96e659ff6a39caad22564964ddc33f9f2ca799ac9d0cc86fd61e1a95234b77c",
    note: "Covers Azure AI Search vector indexing, grounding, and enterprise RAG orchestration.",
  },
  {
    title: "Build AI Agents with n8n",
    issuer: "LinkedIn Learning",
    completed: "June 2026",
    duration: "Credential",
    skills: ["Generative AI", "AI Agents", "Workflow Automation"],
    image: "/certificates/ai-agents-n8n.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/caf7e98cbc5a1afa422dd895c157eefbeac69310e2cafc39552a9e01037cc53b/",
    credentialId:
      "caf7e98cbc5a1afa422dd895c157eefbeac69310e2cafc39552a9e01037cc53b",
    note: "Focused on multi-agent orchestration, tool calling, and webhook workflows in n8n.",
  },
  {
    title: "Microsoft Azure Essentials Professional Certificate",
    issuer: "Microsoft & LinkedIn Learning",
    completed: "June 2026",
    duration: "2h 34m",
    skills: ["Microsoft Azure", "Cloud Computing", "Azure Services"],
    image: "/certificates/microsoft-azure-essentials.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/dfd95eeb61cbb47d2c8a183435e7b572880941e181033022db369a91820f5152",
    credentialId:
      "dfd95eeb61cbb47d2c8a183435e7b572880941e181033022db369a91820f5152",
    note: "Professional certificate issued by Microsoft and LinkedIn Learning covering core Azure cloud architecture.",
  },
  {
    title: "Introduction to AI-Native Vector Databases",
    issuer: "LinkedIn Learning",
    completed: "June 2026",
    duration: "Credential",
    skills: ["LLMs", "Embeddings", "Vector Databases"],
    image: "/certificates/ai-native-vector-databases.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/b9d2330c18248a8eb4dafc8475769bec7f5957e181ff15b9e66b88de75db7671/",
    credentialId:
      "b9d2330c18248a8eb4dafc8475769bec7f5957e181ff15b9e66b88de75db7671",
    note: "Credential focused on embeddings, similarity search, and AI-native vector storage.",
  },
  {
    title: "Practical GitHub Actions",
    issuer: "LinkedIn Learning",
    completed: "June 2026",
    duration: "1h 20m",
    skills: ["GitHub Actions", "CI/CD", "Workflow Automation"],
    image: "/certificates/practical-github-actions.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/424f978825888f35e94c41459f8375019c8f73fd6d5a843950f0fad6a602210d",
    credentialId:
      "424f978825888f35e94c41459f8375019c8f73fd6d5a843950f0fad6a602210d",
    note: "CI/CD pipelines, automated testing workflows, and deployment automation with GitHub Actions.",
  },
];

export const education = {
  school: "FAST University",
  degree: "B.Sc. Software Engineering",
  period: "2022 – 2026",
  project:
    "Final Year Project: GeoVision, a multi-agent AI land-use planning system combining XGBoost, RAG, GIS optimization, FastAPI, and React.",
} as const;
