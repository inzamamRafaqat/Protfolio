// DUMMY PLACEHOLDER CONTENT — these are not real quotes from real people.
// Replace every entry below with genuine testimonials once you have them
// (a manager, teammate, or client you actually worked with).
export interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Replace this with a real quote. Ask a manager or teammate what it was actually like working with you — specific beats generic.',
    name: 'Add a real name',
    role: 'Their role, e.g. Engineering Manager',
    initials: 'AA'
  },
  {
    quote: 'Replace this with a real quote from a client or stakeholder who used something you shipped, ideally mentioning a specific product or outcome.',
    name: 'Add a real name',
    role: 'Their role, e.g. Product Lead',
    initials: 'BB'
  },
  {
    quote: 'Replace this with a real quote from a peer engineer — what stood out about how you work, not just what you built.',
    name: 'Add a real name',
    role: 'Their role, e.g. Senior Engineer',
    initials: 'CC'
  }
]
