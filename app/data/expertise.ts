// Self-assessed proficiency for the Skills section's bar chart.
// These percentages are a subjective estimate — adjust them to match your
// own read of your level in each.
export interface ExpertiseItem {
  label: string
  level: number
}

export const expertise: ExpertiseItem[] = [
  { label: 'Frontend (Vue / Nuxt)', level: 92 },
  { label: 'Backend (Python / FastAPI)', level: 85 },
  { label: 'AI & LLM integration', level: 80 },
  { label: 'Product shipping', level: 88 }
]
