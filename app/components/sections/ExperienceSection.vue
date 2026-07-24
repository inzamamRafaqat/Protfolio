<script setup lang="ts">
import { experience } from '~/data/experience'

const indexedExperience = experience.map((item, index) => ({
  ...item,
  _index: index,
  ui: item.date === 'Present' ? { indicator: 'pulse-dot' } : undefined
}))
</script>

<template>
  <UPageSection
    id="experience"
    class="scroll-mt-20"
    title="My journey so far"
    description="A timeline of the roles, projects, and milestones that shaped how I build software."
    :ui="{ container: 'max-w-3xl py-12 sm:py-16 lg:py-20' }"
  >
    <template #headline>
      <span
        v-motion
        :initial="{ opacity: 0, x: -16 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 500 } }"
      >
        Experience
      </span>
    </template>

    <UTimeline
      :items="indexedExperience"
      size="lg"
      color="primary"
    >
      <template #wrapper="{ item }">
        <div
          v-motion
          :initial="{ opacity: 0, x: 28 }"
          :visible-once="{ opacity: 1, x: 0, transition: { duration: 550, delay: item._index * 150 } }"
        >
          <p class="text-dimmed text-xs/5">
            {{ item.date }}
          </p>
          <p class="mt-1 font-semibold text-highlighted">
            {{ item.title }}
          </p>
          <p class="text-sm text-muted">
            {{ item.company }}
          </p>
          <p class="mt-1.5 text-sm text-toned">
            {{ item.description }}
          </p>
        </div>
      </template>
    </UTimeline>
  </UPageSection>
</template>
