<script setup lang="ts">
import { skills } from '~/data/skills'
import { expertise } from '~/data/expertise'
</script>

<template>
  <UPageSection
    id="skills"
    class="scroll-mt-20"
    title="Tools of the trade"
    description="The stack behind the products above — picked based on what a project actually needs, not habit."
    :ui="{ container: 'py-12 sm:py-16 lg:py-20' }"
  >
    <template #headline>
      <span
        v-motion
        :initial="{ opacity: 0, x: -16 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 500 } }"
      >
        Skills
      </span>
    </template>

    <div class="glass-panel glow-border mb-10 rounded-lg p-6 sm:p-8">
      <p class="mb-6 text-xs font-medium uppercase tracking-wide text-muted">
        Core expertise
      </p>
      <div class="space-y-5">
        <div
          v-for="(item, index) in expertise"
          :key="item.label"
        >
          <div class="mb-1.5 flex items-center justify-between">
            <span class="text-sm font-medium text-highlighted">{{ item.label }}</span>
            <span class="font-mono-tabular text-xs text-muted">{{ item.level }}%</span>
          </div>
          <div class="relative h-1.5 w-full rounded-full bg-elevated">
            <div
              v-motion
              :initial="{ scaleX: 0 }"
              :visible-once="{ scaleX: 1, transition: { duration: 800, delay: index * 120 } }"
              class="h-full origin-left rounded-full"
              :style="{
                width: `${item.level}%`,
                backgroundImage: 'linear-gradient(90deg, var(--ui-primary), var(--ui-secondary))'
              }"
            />
            <div
              class="absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-primary ring-4 ring-default"
              :style="{ left: `calc(${item.level}% - 6px)` }"
            />
          </div>
        </div>
      </div>
    </div>

    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-4">
      <UPageCard
        v-for="(group, index) in skills"
        :key="group.category"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
        :icon="group.icon"
        :title="group.category"
        variant="subtle"
        spotlight
        spotlight-color="primary"
        class="glass-panel glow-border transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1"
      >
        <template #description>
          <div class="flex flex-wrap gap-1.5">
            <UBadge
              v-for="(item, itemIndex) in group.items"
              :key="item"
              v-motion
              :initial="{ opacity: 0, y: 6 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 300, delay: index * 100 + 150 + itemIndex * 40 } }"
              color="neutral"
              variant="subtle"
              size="sm"
              class="transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
            >
              {{ item }}
            </UBadge>
          </div>
        </template>
      </UPageCard>
    </UPageGrid>
  </UPageSection>
</template>
