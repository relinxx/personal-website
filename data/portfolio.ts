export type Link = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

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
  status:
    | "Client work"
    | "Private project"
    | "Public repository"
    | "Public demo"
    | "Automation workflow";
  repository?: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
  featuredOrder?: number;
  featured: boolean;
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

export const profile = {
  name: "Syed Muhammad Rehan",
  handle: "@relinxx",
  role: "AI Systems & Automation Engineer",
  location: "Rawalpindi, Pakistan",
  email: "rehankaneki@gmail.com",
  summary:
    "I design AI workflows, API integrations, and data systems that reduce manual work while remaining observable, testable, and understandable to the teams using them.",
  availability:
    "Open to systems automation, solutions engineering, and applied AI roles with client-facing ownership.",
  links: {
    github: "https://github.com/relinxx",
    linkedin: "https://www.linkedin.com/in/relinxx",
    email: "mailto:rehankaneki@gmail.com",
  },
  resume: "/Syed-Muhammad-Rehan-Resume.pdf",
  cv: "/Syed-Muhammad-Rehan-CV.pdf",
} as const;

export const proofPoints = [
  {
    value: "1.5 years",
    label: "Professional software, automation, and applied AI experience",
  },
  {
    value: "End-to-end",
    label: "Discovery, implementation, QA, deployment, walkthroughs, and handover",
  },
  {
    value: "20,934",
    label: "Indexed records in a delivered Azure enterprise retrieval workflow",
  },
] as const;

export const deliverySteps = [
  {
    number: "01",
    title: "Discover the workflow",
    detail:
      "Clarify the business outcome, current systems, data movement, failure points, owners, and acceptance criteria.",
  },
  {
    number: "02",
    title: "Connect and automate",
    detail:
      "Build the API, webhook, data, and AI workflow with explicit routing, validation, and human control where it matters.",
  },
  {
    number: "03",
    title: "Test the full path",
    detail:
      "Exercise success, rejection, retry, timeout, malformed-input, and no-result paths before a client walkthrough.",
  },
  {
    number: "04",
    title: "Explain and hand over",
    detail:
      "Communicate progress early, demonstrate the system clearly, document decisions, and leave the next operator with a usable runbook.",
  },
] as const;

export const experiences: Experience[] = [
  {
    company: "Logic Powered Solutions",
    role: "Software Engineer",
    period: "Aug 2025 - Present",
    location: "F-5, Islamabad, Pakistan",
    summary:
      "Owning client-facing automation and applied AI systems from technical discovery through implementation, QA, deployment, walkthroughs, and handover.",
    highlights: [
      "Served as sole implementation engineer for Watermark Constructions' paid knowledge and data automation engagement while project management was handled separately.",
      "Integrated SharePoint, Azure AI Search, Azure OpenAI, Copilot Studio, and Teams; scaled the final vector index to 20,934 indexed records.",
      "Built a validated, read-only NL2SQL workflow across three Azure SQL databases and delivered it through Functions, Bot Service, Teams, Direct Line, and Web Chat.",
      "Designed n8n workflows with webhooks, API orchestration, branching, human approvals, persistence, monitoring, and explicit error paths.",
      "Led technical walkthroughs and implementation updates for international stakeholders, translating feedback into testable system changes.",
    ],
  },
  {
    company: "A Hamson",
    role: "AI/ML Intern",
    period: "Jun 2025 - Aug 2025",
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
    slug: "multi-agent-research-automation",
    title: "Multi-Agent Research Automation",
    eyebrow: "n8n systems orchestration",
    summary:
      "A webhook-driven research pipeline that coordinates multiple sources, vector ingestion, specialist agents, review thresholds, revision loops, persistence, monitoring, and structured responses.",
    problem:
      "Research requests needed more than a single model call: upstream services could fail, sources could overlap, weak drafts needed revision, and every successful or failed execution needed a controlled outcome.",
    role:
      "Designed the full n8n workflow, API and webhook boundaries, fallback source strategy, evidence processing, agent responsibilities, review gate, persistence path, success response, and failure notification flow.",
    architecture: [
      "A research webhook accepts the request and checks FastAPI service health before continuing.",
      "Tavily, a FastAPI scraper, Jina AI Reader, and Semantic Scholar provide parallel evidence sources with fallback merging.",
      "The workflow deduplicates and scores evidence, stores selected context in Qdrant, and prepares agent-ready input.",
      "Orchestrator, researcher, reviewer, revision, and synthesis agents collaborate through explicit quality-score routing.",
      "Structured output is validated, persisted to PostgreSQL, returned to the caller, and monitored through a separate error path.",
    ],
    highlights: [
      "Multi-source API orchestration with health checks and fallbacks",
      "Evidence deduplication, scoring, and vector ingestion",
      "Reviewer threshold and controlled revision loop",
      "PostgreSQL persistence, monitoring, and error notification",
    ],
    stack: ["n8n", "FastAPI", "Webhooks", "Qdrant", "PostgreSQL", "LLM Agents"],
    status: "Automation workflow",
    image: "/projects/multi-agent-rag-research-pipeline.png",
    imageAlt: "n8n multi-agent RAG research workflow with source retrieval, review, revision, and persistence branches",
    featuredOrder: 2,
    featured: true,
  },
  {
    slug: "leadership-briefing-approval-automation",
    title: "Leadership Briefing & Approval Automation",
    eyebrow: "Human-in-the-loop operations",
    summary:
      "An intake-to-decision workflow that normalizes requests, detects duplicates, classifies issues, extracts structured data, analyzes risk, routes human approvals, generates leadership briefings, and records final actions.",
    problem:
      "Operational requests needed consistent triage and risk analysis without removing human authority from high-impact decisions or losing an auditable record of what happened.",
    role:
      "Designed the end-to-end n8n workflow, branching rules, AI classification and extraction steps, validation gates, human approval form, outcome routing, executive briefing generation, and approval audit path.",
    architecture: [
      "Manual or form-based intake is normalized and checked for duplicate submissions.",
      "AI steps classify the issue, extract structured fields, and assess risk before deterministic validation.",
      "Validated requests are formatted into a human approval form with explicit approve, reject, revise, and unknown routes.",
      "Approved work produces a leadership briefing and a final audit record; other outcomes follow their own controlled branch.",
    ],
    highlights: [
      "Human approval retained for consequential decisions",
      "Structured classification, extraction, and risk analysis",
      "Deterministic validation before approval routing",
      "Executive briefing generation and approval audit logging",
    ],
    stack: ["n8n", "Forms", "Webhooks", "LLM Agents", "Human Approval", "Audit Logging"],
    status: "Automation workflow",
    image: "/projects/leadership-briefing-approval-workflow.png",
    imageAlt: "n8n leadership briefing workflow with validation, human approval, routing, and audit logging",
    featured: false,
  },
  {
    slug: "watermark-enterprise-automation",
    title: "Enterprise Knowledge & Data Automation",
    eyebrow: "Client systems delivery",
    summary:
      "Two client-facing systems for Watermark Constructions: a SharePoint-grounded knowledge assistant and a secure natural-language analytics workflow across three operational databases.",
    problem:
      "Staff needed dependable access to company knowledge and operational data without manually searching large SharePoint libraries or writing SQL across separate databases.",
    role:
      "Worked as sole implementation engineer across discovery, architecture, development, integrations, evaluation, Azure deployment, demonstrations, troubleshooting, and handover documentation.",
    architecture: [
      "SharePoint content is incrementally indexed into Azure AI Search and exposed through a citation-grounded Copilot Studio assistant in Teams.",
      "A separate Python workflow routes business questions across three Azure SQL databases using bounded schema context.",
      "Read-only validation, table and column checks, row limits, timeouts, and correction retries protect the query path.",
      "Azure Functions, Bot Service, Key Vault, Direct Line, Web Chat, and Teams provide secure delivery channels.",
    ],
    highlights: [
      "20,934 indexed records in the final Azure vector index",
      "15-case evaluation improved from 11/15 to 15/15 marked passes",
      "Natural-language access across three Azure SQL databases",
      "International client walkthroughs and technical handover",
    ],
    stack: ["Azure AI Search", "SharePoint", "Azure OpenAI", "Copilot Studio", "Azure SQL", "Teams"],
    status: "Client work",
    featuredOrder: 1,
    featured: true,
  },
  {
    slug: "rag-evidence-studio",
    title: "RAG Evidence Studio",
    eyebrow: "Transparent knowledge retrieval",
    summary:
      "A standalone research workspace that exposes ranked passages, relevance scores, citations, and grounded answer synthesis instead of hiding retrieval behind a chat box.",
    problem:
      "RAG demos often show only the final answer, making it impossible to judge whether retrieval was relevant, citations were correct, or the model was grounded.",
    role:
      "Designed the public document pack, retrieval pipeline, citation contract, grounded synthesis, evidence reader, and independently deployed API and frontend.",
    architecture: [
      "A curated technical document pack is split into section-aware passages with document and category metadata.",
      "The API ranks passages using TF-IDF retrieval with exact-term boosting.",
      "Mistral synthesizes concise answers from retrieved evidence while citation checks reject unsupported source IDs.",
      "The Swiss editorial frontend lets users compare ranked evidence and inspect every cited passage.",
    ],
    highlights: [
      "Independent FastAPI retrieval service",
      "Visible passage scores and retrieval metadata",
      "Source-linked grounded synthesis",
      "Five-document, fifteen-passage public corpus",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Next.js",
      "Mistral",
      "TF-IDF",
      "Citation evaluation",
    ],
    status: "Public demo",
    repository: "https://github.com/relinxx/rag-evidence-studio",
    demo: "https://rag-evidence-studio.vercel.app",
    image: "/projects/rag-evidence-studio.png",
    imageAlt: "RAG Evidence Studio showing retrieved evidence and grounded answer inspection",
    featuredOrder: 3,
    featured: true,
  },
  {
    slug: "natural-language-sql-agent",
    title: "Natural Language SQL Agent",
    eyebrow: "Agentic data access",
    summary:
      "A schema-aware agent that translates plain-English business questions into SQL across three Azure databases and returns readable answers.",
    problem:
      "Business users needed useful answers from multiple Azure SQL databases without writing queries or understanding the underlying schemas.",
    role:
      "Built the Python agent, schema-aware query workflow, result explanation layer, and Azure deployment path.",
    architecture: [
      "A user question is routed to the appropriate database and interpreted against bounded schema context.",
      "Mistral generates structured SQL output for the selected source.",
      "SQLGlot, table allowlists, SQLite query planning, read-only connections, and row limits validate execution.",
      "Results are transformed into a clear response for non-technical users.",
      "Azure Function App and Bot Service provide the production integration layer.",
    ],
    highlights: [
      "Plain-English access across three Azure SQL databases",
      "Schema-aware query generation",
      "Human-readable result explanations",
      "Azure Function App and Bot Service deployment",
    ],
    stack: ["Python", "Mistral", "SQLGlot", "Azure SQL", "FastAPI", "Azure Bot Service"],
    status: "Public demo",
    repository: "https://github.com/relinxx/atlas-sql-agent",
    demo: "https://atlas-sql-agent.vercel.app",
    image: "/projects/natural-language-sql-agent.png",
    imageAlt: "Atlas SQL Agent translating a business question into validated SQL and results",
    featuredOrder: 4,
    featured: true,
  },
  {
    slug: "qa-application",
    title: "Autonomous QA Application",
    eyebrow: "AI testing agent",
    summary:
      "An MCP and Playwright agent that explores web apps, discovers user flows, generates tests, executes them, and streams progress in real time.",
    problem:
      "Manual discovery and test authoring are slow, especially when teams need a quick understanding of an unfamiliar application's behavior.",
    role:
      "Built the agent loop, browser-tool integration, generated test workflow, real-time progress streaming, and path-safety controls.",
    architecture: [
      "Mistral receives browser state and available actions through MCP.",
      "It chooses Playwright actions, explores the application, and discovers flows.",
      "The system writes and executes Playwright tests.",
      "SSE streams progress and results to the interface.",
    ],
    highlights: [
      "MCP-based tool execution",
      "Autonomous browser exploration",
      "Generated and executable Playwright tests",
      "Real-time SSE progress",
    ],
    stack: ["Next.js", "Node.js", "Mistral", "Playwright", "MCP", "SSE"],
    status: "Public demo",
    repository: "https://github.com/relinxx/qa_application",
    demo: "https://qa-agent-lab-iota.vercel.app",
    image: "/projects/autonomous-qa-agent.png",
    imageAlt: "Autonomous QA Agent interface showing target configuration and live agent console",
    featuredOrder: 5,
    featured: true,
  },
  {
    slug: "geovision",
    title: "GeoVision",
    eyebrow: "Multi-agent geospatial AI",
    summary:
      "A final-year project that combines environmental suitability, zoning context, and GIS optimization into a land-use planning workflow.",
    problem:
      "Land-use decisions require environmental, regulatory, and spatial analysis that is usually fragmented across separate tools and specialties.",
    role:
      "Designed the multi-agent workflow and built the FastAPI orchestration and map-centric planning experience.",
    architecture: [
      "An environment agent uses XGBoost for suitability scoring.",
      "A zoning agent retrieves compliance context through RAG.",
      "A spatial agent generates and optimizes GIS geometry.",
      "FastAPI coordinates asynchronous jobs and merges results for the React interface.",
    ],
    highlights: [
      "Multi-agent planning workflow",
      "XGBoost environmental suitability",
      "RAG-based zoning analysis",
      "GIS geometry generation and optimization",
    ],
    stack: ["React", "FastAPI", "XGBoost", "ChromaDB", "GeoPandas"],
    status: "Public demo",
    repository: "https://github.com/relinxx/geovision",
    demo: "https://geovision-eight-pi-72.vercel.app",
    featured: false,
  },
  {
    slug: "industrial-sentinel",
    title: "Industrial Sentinel",
    eyebrow: "Production machine learning",
    summary:
      "A condition-monitoring system that detects abnormal sensor behavior, classifies likely faults, and forecasts equipment health from multivariate time-series data.",
    problem:
      "Industrial teams need an early warning before equipment degradation becomes an outage, but raw sensor streams are difficult to interpret and threshold-only alerts create noise.",
    role:
      "Built the time-series preprocessing, multi-task inference workflow, model evaluation, ONNX export path, and an operator-facing replay experience for explaining predictions.",
    architecture: [
      "A replayable sensor stream provides vibration, temperature, pressure, and load signals.",
      "Preprocessing creates aligned windows and normalized features for inference.",
      "A multi-task 1D CNN detects anomalies, classifies fault families, and estimates the near-term health trend.",
      "The dashboard surfaces confidence, model metrics, and the evidence behind each alert, with a constrained Mistral operator brief.",
    ],
    highlights: [
      "Multi-task time-series inference",
      "Anomaly detection and fault classification",
      "ONNX-ready lightweight deployment",
      "Visible confidence and evaluation metrics",
    ],
    stack: ["Python", "PyTorch", "ONNX", "Mistral", "Time-series ML", "pytest"],
    status: "Public demo",
    repository: "https://github.com/relinxx/Industrial-Sentinel",
    demo: "https://industrial-sentinel.vercel.app",
    image: "/projects/industrial-sentinel.png",
    imageAlt: "Industrial Sentinel operator interface with sensor replay and fault analysis",
    featuredOrder: 6,
    featured: true,
  },
  {
    slug: "bmo-interactive-ai-character",
    title: "B.M.O Interactive AI Character",
    eyebrow: "Conversational 3D experience",
    summary:
      "A voice-enabled 3D conversational character with vector memory, speech input, generated responses, voice conversion, and state-driven expressions.",
    problem:
      "The project explores how conversational AI can feel embodied and expressive rather than behaving like a standard chat interface.",
    role:
      "Integrated the 3D frontend, conversational backend, speech pipeline, vector memory, and character state system.",
    architecture: [
      "Speech input is transcribed and passed to the conversational backend.",
      "Vector memory provides relevant context for generated responses.",
      "Speech synthesis and voice conversion produce character audio.",
      "Frontend state drives the character's idle, listening, thinking, and talking expressions.",
    ],
    highlights: [
      "Interactive 3D character",
      "Voice input and generated speech",
      "Vector-backed conversational memory",
      "State-driven expressions",
    ],
    stack: [
      "Next.js",
      "React Three Fiber",
      "FastAPI",
      "ChromaDB",
      "Whisper",
    ],
    status: "Public repository",
    repository: "https://github.com/relinxx/B.M.O",
    featured: false,
  },
];

export const skillGroups = [
  {
    title: "Automation and integration",
    skills: [
      "n8n",
      "REST APIs",
      "Webhooks",
      "JSON payloads",
      "Conditional routing",
      "Human approvals",
      "Error workflows",
      "Audit logging",
      "MCP",
      "Playwright",
    ],
  },
  {
    title: "Systems and data",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "SSE",
      "Azure Functions",
      "Azure SQL",
      "PostgreSQL / pgvector",
      "SQLite",
      "SharePoint",
      "Microsoft Teams",
      "Docker",
      "Git / GitHub",
    ],
  },
  {
    title: "AI and client delivery",
    skills: [
      "LLM agents",
      "RAG",
      "LangChain",
      "LangGraph",
      "Azure AI Search",
      "Azure OpenAI",
      "Copilot Studio",
      "NL2SQL",
      "Workflow QA",
      "Client demos",
      "Requirements gathering",
      "Technical documentation",
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
    note: "Professional certificate covering vector database concepts and development workflows.",
  },
  {
    title: "Introduction to AI-Native Vector Databases",
    issuer: "LinkedIn Learning",
    completed: "June 2026",
    duration: "Credential",
    skills: ["Large Language Models", "Artificial Intelligence", "Vector Databases"],
    image: "/certificates/ai-native-vector-databases.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/b9d2330c18248a8eb4dafc8475769bec7f5957e181ff15b9e66b88de75db7671/",
    credentialId:
      "b9d2330c18248a8eb4dafc8475769bec7f5957e181ff15b9e66b88de75db7671",
    note: "Credential focused on AI-native vector databases for LLM and semantic search applications.",
  },
  {
    title: "Azure for Developers: Retrieval-Augmented Generation (RAG) with Azure AI",
    issuer: "LinkedIn Learning",
    completed: "June 2026",
    duration: "Credential",
    skills: ["Azure AI Foundry", "RAG", "Azure AI"],
    image: "/certificates/azure-rag.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/d96e659ff6a39caad22564964ddc33f9f2ca799ac9d0cc86fd61e1a95234b77c/",
    credentialId:
      "d96e659ff6a39caad22564964ddc33f9f2ca799ac9d0cc86fd61e1a95234b77c",
    note: "Credential covering Azure AI-based retrieval-augmented generation workflows.",
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
    note: "Credential focused on building AI agent workflows and automation with n8n.",
  },
  {
    title: "Microsoft Azure Essentials Professional Certificate",
    issuer: "Microsoft and LinkedIn Learning",
    completed: "June 5, 2026",
    duration: "2h 34m",
    skills: ["Microsoft Azure", "Cloud Computing"],
    image: "/certificates/microsoft-azure-essentials.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/dfd95eeb61cbb47d2c8a183435e7b572880941e181033022db369a91820f5152",
    credentialId:
      "dfd95eeb61cbb47d2c8a183435e7b572880941e181033022db369a91820f5152",
    note: "Learning path completion credential issued through LinkedIn Learning.",
  },
  {
    title: "Practical GitHub Actions",
    issuer: "LinkedIn Learning",
    completed: "June 5, 2026",
    duration: "1h 20m",
    skills: ["GitHub", "Workflow Automation", "GitHub Actions"],
    image: "/certificates/practical-github-actions.jpg",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/424f978825888f35e94c41459f8375019c8f73fd6d5a843950f0fad6a602210d",
    credentialId:
      "424f978825888f35e94c41459f8375019c8f73fd6d5a843950f0fad6a602210d",
    note: "Course completion credential by Ray Villalobos through LinkedIn Learning.",
  },
];

export const education = {
  school: "FAST University",
  degree: "B.Sc. Software Engineering",
  period: "2021 - 2026",
  project:
    "Final Year Project: GeoVision, a multi-agent AI land-use planning system combining XGBoost, RAG, GIS optimization, FastAPI, and React.",
} as const;
