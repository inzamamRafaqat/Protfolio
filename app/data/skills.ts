export interface SkillGroup {
  category: string
  icon: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'i-lucide-layout-panel-left',
    items: ['Vue 3', 'Nuxt 3', 'Nuxt UI', 'React', 'Tailwind CSS', 'Pinia', 'TanStack Query']
  },
  {
    category: 'Backend',
    icon: 'i-lucide-server',
    items: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'Webhooks', 'PostgreSQL']
  },
  {
    category: 'AI & Retrieval',
    icon: 'i-lucide-brain-circuit',
    items: ['Google Gemini', 'Groq', 'OpenAI', 'RAG pipelines', 'Pinecone', 'Prompt engineering']
  },
  {
    category: 'Platform & Tools',
    icon: 'i-lucide-wrench',
    items: ['Electron', 'Firebase', 'Socket.io', 'OAuth2 / JWT', 'Docker', 'Git']
  }
]
