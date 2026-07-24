<script setup lang="ts">
import { testimonials } from '~/data/testimonials'
</script>

<template>
  <UPageSection
    id="testimonials"
    class="scroll-mt-20"
    title="What people say"
    description="A few words from people I've worked with — placeholders for now, swap these for the real thing once you have them."
    :ui="{ container: 'py-12 sm:py-16 lg:py-20' }"
  >
    <template #headline>
      <span
        v-motion
        :initial="{ opacity: 0, x: -16 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 500 } }"
      >
        Testimonials
      </span>
    </template>

    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-3">
      <UPageCard
        v-for="(item, index) in testimonials"
        :key="item.name"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
        variant="subtle"
        spotlight
        spotlight-color="primary"
        class="glass-panel glow-border group transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1"
      >
        <template #leading>
          <div class="flex size-12 items-center justify-center rounded-xl bg-primary/10 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <UIcon
              name="i-lucide-quote"
              class="size-6 text-primary"
            />
          </div>
        </template>

        <template #description>
          <p class="text-sm text-toned">
            {{ item.quote }}
          </p>

          <div class="mt-6 flex items-center gap-3 border-t border-default pt-4">
            <UAvatar
              :text="item.initials"
              size="sm"
              color="primary"
            />
            <div>
              <p class="text-sm font-semibold text-highlighted">
                {{ item.name }}
              </p>
              <p class="text-xs text-muted">
                {{ item.role }}
              </p>
            </div>
          </div>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
