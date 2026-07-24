export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  highlights: string[]
  stack: string[]
  icon: string
  color: 'blue' | 'violet' | 'emerald' | 'amber' | 'rose'
  link: string
}

export const products: Product[] = [
  {
    slug: 'barie-ai',
    name: 'Barie.ai',
    tagline: 'Real-time, WebSocket-driven AI platform',
    description: 'A full-stack AI platform with real-time editing tools that lets users create and refine content collaboratively.',
    highlights: [
      'Canvas-based image editor and dynamic document editor',
      'WebSockets for live, multi-user state synchronization',
      'Event-driven architecture for ML model integration',
      'Built as part of work at Programmers Force'
    ],
    stack: ['React', 'TypeScript', 'WebSockets', 'Canvas', 'ML Integration'],
    icon: 'i-lucide-bot-message-square',
    color: 'blue',
    link: ''
  },
  {
    slug: 'amlwatcher',
    name: 'AMLWatcher',
    tagline: 'Real-time compliance platform',
    description: 'A live compliance platform where I developed real-time news updates and integrated APIs for continuous front-end and back-end data synchronization.',
    highlights: [
      'Developed the production front end with a React focus',
      'Implemented a live News Update feature',
      'Integrated APIs for real-time frontend-backend synchronization',
      'Built for a live compliance product at amlwatcher.com'
    ],
    stack: ['React', 'TypeScript', 'REST APIs', 'Real-time Sync'],
    icon: 'i-lucide-shield-check',
    color: 'emerald',
    link: 'https://amlwatcher.com'
  },
  {
    slug: 'shufti',
    name: 'Shufti',
    tagline: 'AI-native sales automation tool',
    description: 'A Python-based sales automation tool that uses the Claude API to automate repetitive engineering and business workflows.',
    highlights: [
      'Python-based automation workflows',
      'Claude API integration for AI-assisted logic',
      'AI-native development approach to improve throughput',
      'Built as part of work at Programmers Force'
    ],
    stack: ['Python', 'Claude API', 'Automation', 'AI Integration'],
    icon: 'i-lucide-sparkles',
    color: 'violet',
    link: ''
  },
  {
    slug: 'shufti-collateral',
    name: 'Shufti Collateral',
    tagline: 'Claude-powered retrieval and slide generation',
    description: 'An AI-powered retrieval and generation system over a large library of Shufti sales collateral.',
    highlights: [
      'Searches the collateral library for relevant product assets',
      'Uses Claude to assemble a presentation-ready slide deck',
      'Supports sales teams in finding and preparing material faster'
    ],
    stack: ['Claude AI', 'Retrieval', 'Slide Generation'],
    icon: 'i-lucide-search',
    color: 'amber',
    link: 'https://ai.shuftiapps.com/collateral_v1.2/auth/login'
  },
  {
    slug: 'shufti-documentation',
    name: 'Shufti Documentation',
    tagline: 'Claude-powered documentation workflow',
    description: 'An AI-driven workflow that generates and updates product documentation as the platform evolves.',
    highlights: [
      'Claude generates and updates product documentation',
      'Reduces manual documentation maintenance',
      'Keeps documentation aligned with product changes'
    ],
    stack: ['Claude AI', 'Documentation Automation'],
    icon: 'i-lucide-book-open-check',
    color: 'emerald',
    link: ''
  },
  {
    slug: 'sales-dashboard',
    name: 'Sales Dashboard',
    tagline: 'Claude-powered internal sales dashboard',
    description: 'An internal sales dashboard powered by Claude, MCP server integrations, and custom Claude Skills.',
    highlights: [
      'Surfaces live sales activity for the team',
      'Uses Claude with MCP integrations and custom Skills',
      'Supports sales visibility and automation workflows'
    ],
    stack: ['Claude AI', 'MCP', 'Custom Skills', 'Sales Automation'],
    icon: 'i-lucide-line-chart',
    color: 'rose',
    link: 'https://deals.shuftiapps.com/'
  },
  {
    slug: 'sales-copilot',
    name: 'Sales Copilot',
    tagline: 'Claude-powered sales-automation workspace',
    description: 'An internal workspace that supports sales automation with Claude, MCP server integrations, and custom Claude Skills.',
    highlights: [
      'Surfaces live sales activity for the team',
      'Uses Claude with MCP integrations and custom Skills',
      'Designed to support internal sales workflows'
    ],
    stack: ['Claude AI', 'MCP', 'Custom Skills', 'Sales Automation'],
    icon: 'i-lucide-bot',
    color: 'blue',
    link: 'https://salescopilot.shuftiapps.com/workspace'
  },
  {
    slug: 'interactive-demos',
    name: 'Interactive Demos',
    tagline: 'Claude-powered product demo experiences',
    description: 'Interactive demo experiences for internal teams and prospect-facing product conversations.',
    highlights: [
      'Claude-powered interactive demos',
      'Supports internal and prospect-facing use',
      'Makes product capabilities easier to explore'
    ],
    stack: ['Claude AI', 'Interactive Demos'],
    icon: 'i-lucide-monitor-play',
    color: 'violet',
    link: ''
  },
  {
    slug: 'competitor-analyzer',
    name: 'Competitor Analyzer',
    tagline: 'Claude-powered competitor content analysis',
    description: 'A tool that analyzes competitor social and marketing posts and turns the findings into concrete content and positioning suggestions.',
    highlights: [
      'Analyzes competitor social and marketing content',
      'Generates usable content and positioning suggestions',
      'Supports faster competitive research'
    ],
    stack: ['Claude AI', 'Content Analysis', 'Competitive Research'],
    icon: 'i-lucide-chart-no-axes-combined',
    color: 'rose',
    link: ''
  },
  {
    slug: 'shipsanitor',
    name: 'ShipSanitor',
    tagline: 'Offline-first AI-powered maritime inspection app',
    description: 'A field-focused maritime inspection application designed to work reliably in low-connectivity environments, combining offline data capture with background synchronization once connectivity returns.',
    highlights: [
      'Led architecture planning and core feature development',
      'Offline SQLite storage with background synchronization',
      'Automated SOP enforcement for field inspections',
      'Ship inventory management workflows and QR-based secure access'
    ],
    stack: ['Ionic', 'Angular', 'SQLite', 'Background Sync', 'QR Access'],
    icon: 'i-lucide-ship-wheel',
    color: 'amber',
    link: ''
  },
  {
    slug: 'uberrental',
    name: 'Uberrental',
    tagline: 'React Native car-rental mobile app',
    description: 'A mobile application for car-rental workflows, built with React Native.',
    highlights: [
      'Cross-platform mobile experience for car rentals',
      'Built with React Native',
      'Focused on a simple rental experience for users'
    ],
    stack: ['React Native', 'Mobile Development'],
    icon: 'i-lucide-car-front',
    color: 'blue',
    link: ''
  },
  {
    slug: 'serveayani',
    name: 'Serveayani',
    tagline: 'Full-stack MERN application with an admin dashboard',
    description: 'A full-stack application with a responsive React user interface, Node.js and Express REST APIs, and an admin panel for data-driven operational dashboards.',
    highlights: [
      'Responsive React.js interface for a consistent user experience',
      'REST APIs built with Node.js and Express.js',
      'MongoDB-backed data management',
      'Admin panel with data-driven dashboards'
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    icon: 'i-lucide-layout-dashboard',
    color: 'rose',
    link: ''
  }
]
