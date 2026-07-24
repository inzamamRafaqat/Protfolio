<script setup lang="ts">
import { profile } from '~/data/profile'
import { skills } from '~/data/skills'

const focusAreas = skills.map(group => group.category)

const socials = computed(() => {
  const items = []

  if (profile.github) {
    items.push({ icon: 'i-simple-icons-github', to: profile.github, label: 'GitHub' })
  }

  if (profile.linkedin) {
    items.push({ icon: 'i-simple-icons-linkedin', to: profile.linkedin, label: 'LinkedIn' })
  }

  if (profile.twitter) {
    items.push({ icon: 'i-simple-icons-x', to: profile.twitter, label: 'X / Twitter' })
  }

  return items
})

// Drop a real photo at /public/portrait.jpg (or /public/portrait.png) to
// replace the placeholder monogram below — no code changes needed.
const portraitSrc = '/portrait.jpg'
const portraitFailed = ref(false)
</script>

<template>
  <UPageSection
    id="about"
    class="scroll-mt-20"
    title="Building products that hold up in production"
    orientation="horizontal"
    reverse
    :ui="{ container: 'gap-12 sm:gap-16 py-12 sm:py-16 lg:py-20' }"
  >
    <template #headline>
      <span
        v-motion
        :initial="{ opacity: 0, x: -16 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 500 } }"
      >
        About
      </span>
    </template>

    <template #description>
      <p
        v-for="(paragraph, index) in profile.bio"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
        :class="index > 0 ? 'mt-4' : ''"
      >
        {{ paragraph }}
      </p>
    </template>

    <UPageCard
      v-motion
      :initial="{ opacity: 0, x: 24 }"
      :visible-once="{ opacity: 1, x: 0, transition: { duration: 600 } }"
      variant="subtle"
      spotlight
      spotlight-color="primary"
      class="glass-panel glow-border overflow-hidden"
      :ui="{ container: 'p-0!', header: 'w-full', body: 'w-full' }"
    >
      <template #header>
        <div class="relative isolate h-40 w-full overflow-hidden bg-elevated/50 sm:h-48">
          <!-- Ambient "coding" backdrop — dimmed, non-functional decoration. -->
          <pre
            aria-hidden="true"
            class="code-backdrop absolute inset-0 overflow-hidden p-5 font-mono text-[11px] leading-5 text-dimmed select-none"
          ><span class="text-primary">const</span> engineer = {
  name: <span class="text-secondary">'{{ profile.name }}'</span>,
  stack: [<span class="text-secondary">'React'</span>, <span class="text-secondary">'TypeScript'</span>, <span class="text-secondary">'Node.js'</span>, <span class="text-secondary">'AI'</span>],
  focus: <span class="text-secondary">'ship fast, ship clean'</span>,
}

<span class="text-primary">export async function</span> build(idea) {
  <span class="text-primary">const</span> plan = <span class="text-primary">await</span> design(idea)
  <span class="text-primary">const</span> code = <span class="text-primary">await</span> implement(plan)
  <span class="text-primary">return</span> deploy(code)
}</pre>

          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-elevated" />

          <div class="glass-panel absolute bottom-3 left-3 flex items-center gap-2 rounded-full px-3 py-1.5">
            <span class="pulse-dot size-2 rounded-full bg-primary" />
            <span class="font-mono text-xs uppercase tracking-widest text-highlighted">Open to work</span>
          </div>
        </div>
      </template>

      <!-- Circular portrait — sits outside the banner's own overflow-hidden
           so it can straddle the seam: half over the banner, half over the
           card body below, offset to the right, "overlapping avatar" style. -->
      <div class="absolute top-40 right-6 z-10 -translate-y-1/2 sm:top-48 sm:right-8">
        <div class="relative size-48 sm:size-56">
          <div class="orbit-ring" />
          <div class="glass-panel glow-border relative size-full overflow-hidden rounded-full ring-4 ring-default">
            <!-- ClientOnly avoids a hydration race: the SSR-rendered <img>'s
                 error event can fire (and be lost) before Vue attaches the
                 @error listener, since the browser starts loading it from
                 the static HTML before hydration even begins. -->
            <ClientOnly>
              <img
                v-if="!portraitFailed"
                :src="portraitSrc"
                :alt="`Portrait of ${profile.name}`"
                class="h-full w-full object-cover"
                @error="portraitFailed = true"
              >
              <div
                v-else
                class="flex h-full w-full items-center justify-center"
              >
                <span class="font-display gradient-text text-5xl font-bold">
                  {{ profile.initials }}
                </span>
              </div>

              <template #fallback>
                <div class="flex h-full w-full items-center justify-center">
                  <span class="font-display gradient-text text-5xl font-bold">
                    {{ profile.initials }}
                  </span>
                </div>
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>

      <div class="px-8 pt-3 pb-8">
        <div class="sm:pr-40">
          <p class="text-lg font-semibold text-highlighted">
            {{ profile.name }}
          </p>
          <p class="text-sm text-muted">
            {{ profile.role || profile.title }}<span v-if="profile.company"> · {{ profile.company }}</span>
          </p>
          <p
            v-if="profile.location"
            class="text-sm text-muted"
          >
            {{ profile.location }}
          </p>

          <div
            v-if="socials.length"
            class="mt-3 flex items-center gap-2"
          >
            <UButton
              v-for="social in socials"
              :key="social.to"
              :to="social.to"
              target="_blank"
              :icon="social.icon"
              :aria-label="social.label"
              color="neutral"
              variant="soft"
              size="sm"
              class="rounded-full transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>

        <USeparator class="my-6" />

        <p class="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
          Focus areas
        </p>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(area, index) in focusAreas"
            :key="area"
            v-motion
            :initial="{ opacity: 0, scale: 0.8 }"
            :visible-once="{ opacity: 1, scale: 1, transition: { duration: 350, delay: 300 + index * 80 } }"
            color="neutral"
            variant="subtle"
            size="lg"
            class="transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
          >
            {{ area }}
          </UBadge>
        </div>
      </div>
    </UPageCard>
  </UPageSection>
</template>
