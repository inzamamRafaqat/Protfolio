export interface SkillGroup {
  category: string
  icon: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: 'i-lucide-layout-panel-left',
    items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Vue.js', 'Redux', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Backend',
    icon: 'i-lucide-server',
    items: ['Node.js', 'Express.js', 'PHP', 'Laravel', 'WordPress', 'REST APIs', 'WebSockets', 'MongoDB', 'PostgreSQL', 'SQL']
  },
  {
    category: 'AI & Testing',
    icon: 'i-lucide-brain-circuit',
    items: ['Claude API', 'ML model integration', 'AI-assisted automation', 'React Testing Library', 'Component testing', 'Debugging']
  },
  {
    category: 'Platform & Tools',
    icon: 'i-lucide-wrench',
    items: ['React Native', 'Firebase', 'SQLite', 'Offline-first architecture', 'Background sync', 'Ionic', 'Git', 'GitHub']
  }
]
