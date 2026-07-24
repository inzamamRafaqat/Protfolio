// Timeline shown in the Experience section (newest first).
// Replace the placeholder entries with your real dates, employers, and history.
export interface ExperienceItem {
  date: string
  title: string
  company: string
  description: string
  icon: string
}

export const experience: ExperienceItem[] = [
  {
    date: 'Present',
    title: 'Full-Stack Engineer', // update with your real title
    company: 'Add company name', // e.g. 'Shufti'
    description: 'Building and maintaining a portfolio of AI-powered products end to end — including Bariq.ai, AML Watcher, Shufti Automations, Shufti Collateral, and a CRM-connected sales dashboard — across the full stack from data pipelines to production UI.',
    icon: 'i-lucide-briefcase'
  },
  {
    date: 'Add dates',
    title: 'Add your previous role',
    company: 'Add company name',
    description: 'Add a short description of your responsibilities and impact in this role.',
    icon: 'i-lucide-building-2'
  },
  {
    date: 'Add dates',
    title: 'Add your degree / field of study',
    company: 'Add institution name',
    description: 'Add a short description — relevant coursework, honors, or projects.',
    icon: 'i-lucide-graduation-cap'
  }
]
