export interface ExperienceItem {
  date: string
  title: string
  company: string
  description: string
  icon: string
}

export const experience: ExperienceItem[] = [
  {
    date: 'Jan 2026 - Present',
    title: 'Full Stack Engineer',
    company: 'Programmers Force - Lahore, Pakistan (On-site)',
    description: 'Building scalable full-stack products with a strong React focus. Developed AMLWatcher real-time news updates and API integrations, built Barie.ai editing tools with WebSocket-based multi-user sync, and contribute to Shufti Python and Claude API-powered sales automation workflows.',
    icon: 'i-lucide-briefcase'
  },
  {
    date: 'Jan 2025 - Dec 2025',
    title: 'Software Engineer (MERN)',
    company: 'Learn2Earn Tech - On-site',
    description: 'Built and optimized MERN-stack applications, connecting React and Angular front ends to RESTful APIs. Developed dynamic Node.js and Express APIs backed by MongoDB, while independently planning and delivering features across multiple release cycles.',
    icon: 'i-lucide-building-2'
  },
  {
    date: 'Oct 2024 - Dec 2024',
    title: 'Frontend Developer Intern',
    company: 'Social Swirl - Lahore, Pakistan (Hybrid)',
    description: 'Developed responsive, modern React interfaces for multiple web applications, collaborated on API integrations, and improved front-end performance across browsers and devices.',
    icon: 'i-lucide-code-2'
  },
  {
    date: '2020 - 2024',
    title: 'BS Software Engineering',
    company: 'University of Central Punjab - Lahore, Pakistan',
    description: 'Relevant study included data structures, software engineering, design patterns, web development, machine learning, mobile development, software quality engineering, and advanced web development.',
    icon: 'i-lucide-graduation-cap'
  }
]
