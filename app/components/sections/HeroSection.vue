<script setup lang="ts">
import { profile } from '~/data/profile'

const stats = [
  { label: 'Products shipped', target: 16, suffix: '' },
  { label: 'LLM-powered products', target: 6, suffix: '' },
  { label: 'Countries screened (AML Watcher)', target: 235, suffix: '+' },
  { label: 'Languages supported (AML Watcher)', target: 80, suffix: '+' }
]

const displayValues = ref(stats.map(() => 0))

onMounted(() => {
  stats.forEach((stat, index) => {
    const duration = 1200
    setTimeout(() => {
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - (1 - progress) ** 3
        displayValues.value[index] = Math.round(stat.target * eased)
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, index * 120)
  })
})

// One-shot decrypt/scramble reveal on the headline — settles left to right.
// Only the name itself carries the accent color/glow; "Hi, I'm" and the
// trailing period stay neutral so the accent reads as a single deliberate
// highlight rather than a gradient wash over the whole line.
const reducedMotion = usePreferredReducedMotion()
const finalName = profile.name
// Starts as the real text (so SSR/no-JS markup stays meaningful for SEO and
// accessibility) — the scramble-in only kicks in client-side, post-mount.
const displayName = ref(finalName)
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#$%&_/'

onMounted(() => {
  if (reducedMotion.value === 'reduce') return

  displayName.value = finalName.replace(/\S/g, ' ')
  const duration = 900
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const revealCount = Math.floor(progress * finalName.length)

    displayName.value = finalName
      .split('')
      .map((char, i) => {
        if (char === ' ' || i < revealCount) return char
        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      })
      .join('')

    if (progress < 1) {
      requestAnimationFrame(tick)
    } else {
      displayName.value = finalName
    }
  }

  requestAnimationFrame(tick)
})

const hireCtaEl = ref<HTMLElement | null>(null)
const { style: hireCtaStyle } = useMagnetic(hireCtaEl)

// Floating code-symbol particles drifting up through the hero background.
// Randomized per page load — generated client-only (see <ClientOnly> below)
// since Math.random() here would otherwise mismatch between SSR and hydration.
const CODE_SYMBOLS = ['</>', '{ }', '( )', 'AI', '01', '#', 'fn()', '=>', '&&', 'npm i', 'git', 'API']
const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  symbol: CODE_SYMBOLS[Math.floor(Math.random() * CODE_SYMBOLS.length)],
  left: Math.round(Math.random() * 94) + 2,
  delay: (Math.random() * 14).toFixed(1),
  duration: (14 + Math.random() * 10).toFixed(1)
}))
</script>

<template>
  <UPageHero
    :ui="{
      root: 'relative isolate overflow-hidden',
      container: 'py-24 sm:py-32 lg:py-40'
    }"
  >
    <template #top>
      <div class="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>
      <div class="absolute inset-0 -z-10 bg-grid" />

      <ClientOnly>
        <div
          class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <span
            v-for="particle in particles"
            :key="particle.id"
            class="code-particle code-particle--hero"
            :style="{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }"
          >{{ particle.symbol }}</span>
        </div>
      </ClientOnly>

      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-default" />
    </template>

    <template #headline>
      <UBadge
        v-motion
        :initial="{ opacity: 0, y: -12 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        color="primary"
        variant="subtle"
        size="lg"
        class="gap-1.5 font-mono text-xs tracking-widest uppercase"
      >
        <UIcon
          name="i-lucide-sparkles"
          class="size-4"
        />
        [ {{ profile.title }} ]
      </UBadge>
    </template>

    <template #title>
      <span
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
        class="block text-highlighted"
      >
        Hi, I'm <span class="gradient-text text-glow-primary">{{ displayName }}</span>.
      </span>
    </template>

    <template #description>
      <span
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
        class="block"
      >
        {{ profile.tagline }}
      </span>
    </template>

    <template #links>
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        class="flex flex-wrap items-center justify-center gap-3"
      >
        <span
          ref="hireCtaEl"
          class="inline-block"
          :style="hireCtaStyle"
        >
          <UButton
            label="Hire me"
            to="#contact"
            size="xl"
            trailing-icon="i-lucide-handshake"
            class="btn-shine rounded-full shadow-[0_0_24px_-6px_var(--ui-primary)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          />
        </span>
      </div>
    </template>

    <template #bottom>
      <UContainer
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
      >
        <div class="hud-frame grid grid-cols-2 gap-6 border-t border-default p-6 pt-10 sm:grid-cols-4">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center sm:text-left"
          >
            <p class="font-mono-tabular text-glow-primary text-3xl font-bold text-highlighted">
              {{ displayValues[index] }}{{ stat.suffix }}
            </p>
            <p class="mt-1 text-sm text-muted">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </UContainer>
    </template>
  </UPageHero>
</template>
