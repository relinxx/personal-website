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
  status: "Client work" | "Private project" | "Public repository";
  repository?: string;
  demo?: string;
  featured: boolean;
};

export type Certification = {
  title: string;
  issuer: string;
  completed: string;
  duration: string;
  skills: string[];
  credentialUrl: string;
  credentialId: string;
  note: string;
};

export const profile = {
  name: "Syed Muhammad Rehan",
  handle: "@relinxx",
  role: "AI-focused Software Engineer",
  location: "Rawalpindi, Pakistan",
  email: "rehankaneki@gmail.com",
  summary:
    "I build production RAG systems, AI agents, NL2SQL workflows, and cloud-deployed automation that turn complex data into useful products.",
  availability:
    "Open to full-time AI engineering roles and focused freelance RAG or agent projects.",
  links: {
    github: "https://github.com/relinxx",
    linkedin: "https://linkedin.com/in/syed-muhammad-rehan-relinxx",
    email: "mailto:rehankaneki@gmail.com",
  },
  resume: "/Syed-Muhammad-Rehan-Resume.pdf",
  cv: "/Syed-Muhammad-Rehan-CV.pdf",
} as const;

export const proofPoints = [
  {
    value: "Enterprise AI",
    label: "RAG and NL2SQL systems delivered for an Australian construction client",
  },
  {
    value: "Production Azure",
    label: "AI Search, OpenAI, Function Apps, Bot Service, SQL, Teams, and Copilot",
  },
  {
    value: "Client-facing",
    label: "Requirements, technical demos, progress reporting, and stakeholder delivery",
  },
] as const;

export const experiences: Experience[] = [
  {
    company: "Logic Powered Solutions",
    role: "Software Engineer",
    period: "Aug 2025 - Present",
    location: "Islamabad, Pakistan",
    summary:
      "Building and deploying enterprise AI products across knowledge retrieval, natural-language data access, and autonomous quality assurance.",
    highlights: [
      "Designed and deployed Watermarks Construction's knowledge assistant using Azure AI Search, Azure OpenAI, SharePoint-indexed documents, Microsoft Teams, and Copilot Studio.",
      "Implemented RAPTOR-style hierarchical retrieval, OCR ingestion for scanned files, document chunking, vector search, and citation-grounded answers.",
      "Built a schema-aware Python NL2SQL agent across three Azure SQL databases and deployed it through Azure Function App and Azure Bot Service.",
      "Developed an MCP, GPT-4o, and Playwright QA agent that explores web applications, discovers flows, writes tests, executes them, and streams progress through SSE.",
      "Led requirements and progress discussions with Australian stakeholders, translating product needs into reliable AI behavior.",
    ],
  },
  {
    company: "A Hamson",
    role: "AI/ML Intern",
    period: "Jun 2025 - Aug 2025",
    location: "Rawalpindi, Pakistan",
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
    slug: "watermarks-enterprise-rag",
    title: "Watermarks Enterprise RAG",
    eyebrow: "Knowledge retrieval",
    summary:
      "A Teams-accessible knowledge assistant that makes SharePoint-indexed construction documents searchable, traceable, and useful to non-technical staff.",
    problem:
      "Watermarks Construction needed a dependable way for employees to find answers across a growing body of enterprise documents, including scanned files and domain-specific material.",
    role:
      "Designed the retrieval approach, implemented ingestion and hierarchical retrieval, integrated the Azure and Microsoft delivery stack, and presented progress to stakeholders.",
    architecture: [
      "SharePoint and document sources feed an ingestion pipeline with OCR support.",
      "Documents are chunked, embedded, indexed, and enriched with RAPTOR-style cluster summaries.",
      "Azure AI Search and Azure OpenAI produce source-grounded answers with citations.",
      "Microsoft Teams and Copilot Studio provide the employee-facing experience.",
    ],
    highlights: [
      "Production delivery for an Australian enterprise client",
      "OCR ingestion for scanned documents",
      "Hierarchical retrieval and cluster summarization",
      "Citation-grounded answers through Microsoft Teams",
    ],
    stack: [
      "Azure AI Search",
      "Azure OpenAI",
      "Microsoft Teams",
      "Copilot Studio",
      "SharePoint",
      "Python",
      "OCR",
    ],
    status: "Client work",
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
      "A user question is interpreted against database and schema context.",
      "The agent generates a constrained SQL query for the appropriate Azure SQL source.",
      "Results are transformed into a clear response for non-technical users.",
      "Azure Function App and Bot Service provide the production integration layer.",
    ],
    highlights: [
      "Plain-English access across three Azure SQL databases",
      "Schema-aware query generation",
      "Human-readable result explanations",
      "Azure Function App and Bot Service deployment",
    ],
    stack: ["Python", "Azure SQL", "Azure Function App", "Azure Bot Service"],
    status: "Client work",
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
      "The LLM receives browser state and available actions through MCP.",
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
    stack: ["Next.js", "Node.js", "GPT-4o", "Playwright", "MCP", "SSE"],
    status: "Public repository",
    repository: "https://github.com/relinxx/qa_application",
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
    status: "Private project",
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
    featured: true,
  },
];

export const skillGroups = [
  {
    title: "AI, RAG, and agents",
    skills: [
      "LangChain",
      "LangGraph",
      "RAPTOR-style retrieval",
      "Vector search",
      "ChromaDB",
      "Tool calling",
      "MCP",
      "NL2SQL",
      "Multi-agent orchestration",
      "OCR",
      "XGBoost",
      "QLoRA / LoRA",
    ],
  },
  {
    title: "Backend and product",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Async workflows",
      "SSE",
      "Playwright",
      "pytest",
      "React",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    title: "Azure, data, and delivery",
    skills: [
      "Azure AI Search",
      "Azure OpenAI",
      "Azure Function App",
      "Azure Bot Service",
      "Azure SQL",
      "Copilot Studio",
      "Docker",
      "Kubernetes",
      "Git / GitHub",
      "Client demos",
      "Requirements gathering",
    ],
  },
] as const;

export const certifications: Certification[] = [
  {
    title: "Microsoft Azure Essentials Professional Certificate",
    issuer: "Microsoft and LinkedIn Learning",
    completed: "June 5, 2026",
    duration: "2h 34m",
    skills: ["Microsoft Azure", "Cloud Computing"],
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
