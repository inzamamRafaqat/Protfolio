export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  icon: string
  color: 'blue' | 'violet' | 'emerald' | 'amber' | 'rose'
  link: string // live URL, if publicly shareable — leave blank otherwise
}

export const products: Product[] = [
  {
    slug: 'bariq-ai',
    name: 'Bariq.ai',
    tagline: 'AI chat assistant desktop app with built-in productivity tools',
    description: 'A ChatGPT-style AI assistant shipped as a cross-platform desktop app, pairing conversational chat with built-in rich-text, spreadsheet, and image editors so users can create and refine content without ever leaving the conversation.',
    highlights: [
      'Multi-turn conversational chat interface with rich, formatted responses',
      'Built-in document, spreadsheet, and image editors (Tiptap + Konva) inside the chat',
      '"Explore" and "Library" hub for templates and saved work',
      'Integrations panel for connecting third-party tools',
      'Multi-language (i18n) support with light/dark theming',
      'Packaged as a native desktop app via Electron, with Firebase-backed auth'
    ],
    stack: ['Nuxt 3', 'Nuxt UI', 'Vue 3', 'Tailwind CSS', 'Pinia', 'Electron', 'Firebase', 'Tiptap', 'Konva'],
    icon: 'i-lucide-bot-message-square',
    color: 'blue',
    link: ''
  },
  {
    slug: 'aml-watcher',
    name: 'AML Watcher',
    tagline: 'Global AML/KYC screening and case-management platform',
    description: 'A compliance platform that screens individuals and entities against sanctions lists, watchlists, PEPs, and adverse media across 235+ territories and 80+ languages — giving analysts real-time risk scores, case management, and organization-wide administration.',
    highlights: [
      'Real-time entity screening against sanctions, PEP, and adverse-media sources',
      'Ongoing monitoring with automatic risk re-scoring as new data appears',
      'Case-management workflow with webhook integrations for compliance analysts',
      'Admin backoffice for organization, user, and role management',
      'Custom Python crawler pipeline with PDF/image extraction feeding the risk data',
      'Supports on-premise deployment for regulated clients'
    ],
    stack: ['Vue 3', 'Quasar', 'Highcharts', 'Socket.io', 'Pinia', 'Python', 'PostgreSQL'],
    icon: 'i-lucide-shield-check',
    color: 'emerald',
    link: ''
  },
  {
    slug: 'shufti-automations',
    name: 'Shufti Automations',
    tagline: 'Internal API testing and automation suite for identity verification',
    description: 'A purpose-built internal tool for constructing, sending, and inspecting identity-verification API requests — Face, Document, Address, AML, and KYB — replacing ad-hoc Postman collections with a dedicated playground, later rewritten in Nuxt 3 with an integrated code editor.',
    highlights: [
      'Visual request builder covering 5 verification types',
      'JSON request/response inspector with syntax highlighting',
      'Webhook payload viewer and import for debugging callbacks',
      'Local request history with search and filtering',
      'Monaco-powered code playground in the Nuxt rewrite'
    ],
    stack: ['Nuxt 3', 'Nuxt UI', 'Vue Monaco Editor', 'Pinia', 'TanStack Query', 'React (v1)'],
    icon: 'i-lucide-flask-conical',
    color: 'violet',
    link: ''
  },
  {
    slug: 'shufti-collateral',
    name: 'Shufti Collateral',
    tagline: 'AI-powered semantic search over sales collateral',
    description: 'A retrieval-augmented system that indexes sales decks, spreadsheets, and PDFs at slide- and sheet-level granularity — including visual content — so sales reps can search or chat their way to the exact material they need instead of digging through shared drives.',
    highlights: [
      'Multimodal parsing of PPTX, PDF, and XLSX files, including visual slide content',
      'Natural-language semantic search plus a conversational chat mode',
      'CLI for indexing, searching, chatting, and inspecting stats',
      'FastAPI backend with a Nuxt 3 web UI',
      'Gemini as primary LLM with Groq as fallback for resilience',
      'Pinecone vector store for fast retrieval at scale'
    ],
    stack: ['Python', 'FastAPI', 'PyMuPDF', 'python-pptx', 'Google Gemini', 'Groq', 'Pinecone', 'Nuxt 3'],
    icon: 'i-lucide-search',
    color: 'amber',
    link: ''
  },
  {
    slug: 'sales-dashboard',
    name: 'Sales Dashboard',
    tagline: 'Real-time HubSpot deal-health and forecasting dashboard',
    description: 'A production dashboard that syncs live from HubSpot CRM to surface deal health, win probability, and pipeline risk for sales leadership, with LLM-assisted forecasting, deal summarization, and automated daily digests.',
    highlights: [
      'Live HubSpot CRM sync via a background scheduler',
      'Deal health scoring and win-probability modeling',
      'Advanced filtering by stage, owner, health score, and deal amount',
      'LLM-based forecasting and deal summarization',
      'Google OAuth2 authentication with JWT-based sessions',
      'Responsive, dark/light themed UI with quick search ("/")'
    ],
    stack: ['React', 'Vite', 'Recharts', 'Python', 'HubSpot API', 'Google OAuth2'],
    icon: 'i-lucide-line-chart',
    color: 'rose',
    link: ''
  }
]
