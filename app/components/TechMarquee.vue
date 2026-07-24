<script setup lang="ts">
import { skills } from '~/data/skills'

// Duplicated once so the track can loop seamlessly at a -50% translate.
const items = skills.flatMap(group => group.items)
const loopItems = [...items, ...items]
</script>

<template>
  <div class="marquee group border-y border-default bg-elevated/30 py-4">
    <div class="marquee__track flex w-max items-center gap-10">
      <template
        v-for="(item, index) in loopItems"
        :key="index"
      >
        <span class="font-mono text-xs whitespace-nowrap uppercase tracking-widest text-muted">
          {{ item }}
        </span>
        <span class="text-primary">/</span>
      </template>
    </div>
  </div>
</template>
