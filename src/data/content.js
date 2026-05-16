// ──────────────────────────────────────────────────────────
//  All portfolio content lives here.
//  Edit a single string and the whole site updates.
// ──────────────────────────────────────────────────────────

export const PROFILE = {
  name: "Syed Farhan Ali",
  role: "AI / ML Engineer",
  tagline: "Building production-grade AI systems",
  location: "Lahore, Pakistan",
  email: "syedfarhanali2005@gmail.com",
  github: "https://github.com/farhansyedAli",
  linkedin: "https://www.linkedin.com/in/syed-farhan-ali-shah-ab2309287/",
  huggingface: "https://huggingface.co/syedfarhanali99",
  available: true,
}

export const ABOUT = {
  // Used as the long-form bio
  paragraphs: [
    "I’m a Data Science undergraduate at Punjab University College of Information Technology (PUCIT), building toward a career in applied AI and machine learning engineering. My focus is on systems that move beyond notebooks — models served behind real APIs, retrieval pipelines that work on messy documents, and applications that ship to users.",
    "Most of my work sits at the intersection of NLP, retrieval-augmented generation, and classical ML. I’ve deployed live applications on Hugging Face Spaces, written algorithmic AI from scratch (Minimax with alpha-beta pruning), and built end-to-end ML projects from data collection through deployment.",
    "I’m drawn to problems where the model is only half the work — where infrastructure, evaluation, and product design decide whether something is actually useful. My long-term direction is research-informed engineering at companies building real intelligent systems.",
  ],
  highlights: [
    { label: "Education",   value: "BS Data Science · PUCIT" },
    { label: "Focus",       value: "AI Engineering · NLP · RAG" },
    { label: "Deployments", value: "Live on Hugging Face" },
    { label: "Open to",     value: "AI/ML Internships & Roles" },
  ],
}

// ────────── Skills grouped by category ──────────
export const SKILLS = [
  {
    category: "AI & Machine Learning",
    items: ["Retrieval-Augmented Generation", "NLP & Text Classification", "Sentence Embeddings", "Recommendation Systems", "Model Deployment", "Prompt Engineering"],
  },
  {
    category: "Data Science",
    items: ["scikit-learn", "Pandas", "NumPy", "Feature Engineering", "EDA & Visualization", "Jupyter / Notebooks"],
  },
  {
    category: "Algorithms",
    items: ["Minimax", "Alpha-Beta Pruning", "Genetic Algorithms", "Greedy & DP", "Heuristic Search"],
  },
  {
    category: "Frameworks & Tools",
    items: ["Gradio", "Streamlit", "Hugging Face", "Sentence-Transformers", "PyMuPDF", "Kivy"],
  },
  {
    category: "Languages",
    items: ["Python", "C", "C++", "SQL"],
  },
  {
    category: "Engineering",
    items: ["Git & GitHub", "Linux", "REST APIs", "System-level C", "GUI Apps"],
  },
]

// ────────── Featured project case studies ──────────
// Curated from the actual GitHub profile — only projects strong enough
// to read as case studies appear here.
export const PROJECTS = [
  {
    id: "rag-chatbot",
    title: "Enhanced RAG Chatbot",
    headline: "Conversational question answering over user-uploaded documents",
    year: "2025",
    status: "Live",
    category: "AI Engineering",
    problem:
      "Knowledge workers waste hours scanning PDFs for specific answers. Generic LLM chat doesn't know about their documents, and uploading a 200-page report into a context window is impractical and expensive.",
    approach:
      "Built a retrieval-augmented chatbot that ingests PDF, DOCX, and TXT files, chunks them, encodes each chunk with a sentence-transformer model, and stores the embeddings in memory. At query time, the user's question is embedded against the same space and the top-k most semantically similar chunks are passed to the model as grounded context — drastically reducing hallucination versus a raw LLM call.",
    challenges: [
      "Handling heterogeneous document formats (scanned PDFs vs native PDFs vs Word) with consistent extraction",
      "Choosing chunk size + overlap that balances recall (small chunks) against context coherence (large chunks)",
      "Designing a UI that makes retrieval feel like chat, not search",
    ],
    outcomes: [
      "Deployed publicly on Hugging Face Spaces with a Gradio interface",
      "Supports PDF, DOCX, TXT in a single ingestion pipeline",
      "Cosine-similarity retrieval over sentence-transformer embeddings",
    ],
    stack: ["Python", "Sentence-Transformers", "PyMuPDF", "python-docx", "Gradio", "NumPy", "scikit-learn"],
    links: {
      github: "https://github.com/farhansyedAli/RAG-Chatbot",
      live:   "https://huggingface.co/spaces/syedfarhanali99/Rag-pdf-chatbot",
    },
    accent: "cyan",
  },
  {
    id: "dev-role-predictor",
    title: "Developer Role Predictor",
    headline: "ML classifier that maps a developer's tech stack to a likely role",
    year: "2024",
    status: "Live",
    category: "Machine Learning",
    problem:
      "Tech stacks tend to cluster by role — frontend developers don't usually write CUDA kernels, ML engineers rarely touch React Native. But this signal is often buried in resumes and profiles. The question: can a model recover role from stack alone?",
    approach:
      "Framed it as a multi-class classification problem. Curated a labelled dataset of developer profiles tagged with their roles, engineered features from the technology lists (one-hot + co-occurrence signals), and trained a classical ML pipeline benchmarked across multiple model families. Final model exposed through a Gradio UI where the user enters a stack and gets back a predicted role with confidence.",
    challenges: [
      "Handling sparse, high-cardinality categorical features without overfitting",
      "Distinguishing overlapping roles (e.g. Full-Stack vs Backend, ML Engineer vs Data Scientist)",
      "Designing a feature representation that captures co-occurrence, not just presence",
    ],
    outcomes: [
      "End-to-end ML pipeline from raw data to deployed inference",
      "Live demo on Hugging Face Spaces with interactive predictions",
      "Demonstrates feature engineering on categorical, set-valued inputs",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Gradio", "Jupyter"],
    links: {
      github: "https://github.com/farhansyedAli/Developer-Role-Predictor",
      live:   "https://huggingface.co/spaces/syedfarhanali99/Developer-role-predictor",
    },
    accent: "violet",
  },
  {
    id: "animood-bot",
    title: "AniMood Bot",
    headline: "Mood-aware anime recommendation chatbot",
    year: "2025",
    status: "Active",
    category: "NLP",
    problem:
      "Existing anime recommendation tools optimise for ratings and genre filters, but most viewing decisions are driven by mood and time available, not by a static taste profile. The product question: can a conversational interface surface better picks than a database filter?",
    approach:
      "Built a conversational agent that combines three signals — current mood, genre preference, and episode length — to recommend shows. The bot also supports free-form Q&A about anime and a random-pick mode for indecisive users. Conversational state is tracked across turns so the recommendation refines as the user clarifies.",
    challenges: [
      "Mapping subjective mood inputs to objective tags in the recommendation index",
      "Designing a conversation flow that feels helpful, not interrogative",
      "Balancing recommendation diversity against tight relevance",
    ],
    outcomes: [
      "Multi-turn conversational agent with state management",
      "Hybrid system: rule-based recommendation + free-form chat fallback",
      "Random-pick mode for users who want a surprise",
    ],
    stack: ["Python", "NLP", "Conversational AI", "Recommendation Logic"],
    links: {
      github: "https://github.com/farhansyedAli/AniMood-Bot",
    },
    accent: "cyan",
  },
  {
    id: "tic-tac-toe-ai",
    title: "Tic-Tac-Toe Pro · Unbeatable AI",
    headline: "Minimax with alpha-beta pruning, wrapped in a neon Kivy UI",
    year: "2024",
    status: "Complete",
    category: "Algorithms & GUI",
    problem:
      "Tic-Tac-Toe is solved, so the interesting question isn't winning — it's writing an opponent that plays optimally in every position while still feeling responsive on a mobile-class UI. That means implementing classical adversarial search correctly, not just bolting a random move generator to a button.",
    approach:
      "Implemented the Minimax algorithm from scratch, then added alpha-beta pruning to cut the search tree without changing the optimal move. On a 3×3 board the unpruned tree is small enough to brute force, but the implementation is structured so it generalises to larger boards. Wrapped the engine in a Kivy GUI with neon-themed visuals and a Player-vs-Player mode for local matches.",
    challenges: [
      "Implementing alpha-beta pruning correctly without breaking optimality",
      "Designing a Kivy layout that feels native on both desktop and mobile",
      "Cleanly separating game state, AI engine, and UI for testability",
    ],
    outcomes: [
      "Provably unbeatable AI on Hard difficulty",
      "Local PvP mode for two players on one device",
      "Clean architectural separation between game logic and presentation",
    ],
    stack: ["Python", "Kivy", "Minimax", "Alpha-Beta Pruning"],
    links: {
      github: "https://github.com/farhansyedAli/Tic-Tac-Toe",
    },
    accent: "violet",
  },
]

// ────────── Smaller / supporting projects (chip list) ──────────
export const SECONDARY_PROJECTS = [
  {
    title: "Super Market Management System",
    description: "GUI-based inventory and billing system with Python.",
    href: "https://github.com/farhansyedAli/Super-Market-Management-System",
    tag: "Software Dev",
  },
  {
    title: "Hangman Game",
    description: "Classic word-guessing game with a custom GUI in Python.",
    href: "https://github.com/farhansyedAli/Hang-Man-Game",
    tag: "GUI",
  },
]

// ────────── Journey timeline ──────────
export const JOURNEY = [
  {
    period: "2022",
    title: "First lines of Python",
    body: "Started programming with Python during early college, drawn in by how quickly the language lets you go from idea to running script.",
  },
  {
    period: "2023",
    title: "GUI applications & systems thinking",
    body: "Built GUI applications (Hangman, Supermarket Management) to understand event-driven architecture, then moved into C/C++ for lower-level systems work.",
  },
  {
    period: "2024",
    title: "Machine learning foundations",
    body: "Transitioned focus to Data Science at PUCIT. Worked through classical ML, feature engineering, and deployed the Developer Role Predictor as a live ML application.",
  },
  {
    period: "2024",
    title: "Algorithmic AI",
    body: "Implemented Minimax with alpha-beta pruning from scratch in the Tic-Tac-Toe project — connecting AI theory to game-playing code.",
  },
  {
    period: "2025",
    title: "RAG & generative AI",
    body: "Built the Enhanced RAG Chatbot and AniMood Bot — moving from classification problems into retrieval, embeddings, and conversational interfaces.",
  },
  {
    period: "Now",
    title: "Production AI engineering",
    body: "Building toward shipping AI applications at production scale — deeper into LLM orchestration, evaluation, and the engineering surrounding real ML systems.",
  },
]

// ────────── GitHub stats (visible numbers from the profile) ──────────
export const GITHUB = {
  username: "farhansyedAli",
  repos: 19,
  pinned: 6,
  achievements: ["Pull Shark"],
  hfSpaces: 2,
  topLanguages: [
    { name: "Python",   pct: 72 },
    { name: "Jupyter",  pct: 12 },
    { name: "C / C++",  pct: 10 },
    { name: "Other",    pct: 6  },
  ],
}
