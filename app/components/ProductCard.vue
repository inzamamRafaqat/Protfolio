<script setup lang="ts">
import type { Product } from '~/data/products'

defineProps<{
  product: Product
}>()

const accentStyles: Record<Product['color'], { icon: string, text: string, bar: string, glow: string }> = {
  blue: {
    icon: 'bg-blue-500/10 text-blue-500 dark:text-blue-400',
    text: 'text-blue-500 dark:text-blue-400',
    bar: 'from-blue-500 to-blue-300',
    glow: 'hover:shadow-[0_0_32px_-10px_#3b82f6]'
  },
  violet: {
    icon: 'bg-violet-500/10 text-violet-500 dark:text-violet-400',
    text: 'text-violet-500 dark:text-violet-400',
    bar: 'from-violet-500 to-violet-300',
    glow: 'hover:shadow-[0_0_32px_-10px_#8b5cf6]'
  },
  emerald: {
    icon: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400',
    text: 'text-emerald-500 dark:text-emerald-400',
    bar: 'from-emerald-500 to-emerald-300',
    glow: 'hover:shadow-[0_0_32px_-10px_#10b981]'
  },
  amber: {
    icon: 'bg-amber-500/10 text-amber-500 dark:text-amber-400',
    text: 'text-amber-500 dark:text-amber-400',
    bar: 'from-amber-500 to-amber-300',
    glow: 'hover:shadow-[0_0_32px_-10px_#f59e0b]'
  },
  rose: {
    icon: 'bg-rose-500/10 text-rose-500 dark:text-rose-400',
    text: 'text-rose-500 dark:text-rose-400',
    bar: 'from-rose-500 to-rose-300',
    glow: 'hover:shadow-[0_0_32px_-10px_#f43f5e]'
  }
}

const cardEl = ref<HTMLElement | null>(null)
const { style: tiltStyle } = usePointerTilt(cardEl)
</script>

<template>
  <div
    ref="cardEl"
    :style="tiltStyle"
  >
    <UPageCard
      variant="subtle"
      spotlight
      spotlight-color="primary"
      class="glass-panel glow-border group overflow-hidden transition-all duration-300 ease-out will-change-transform hover:-translate-y-1"
      :class="accentStyles[product.color].glow"
      :ui="{ container: 'p-6 sm:p-8', header: 'w-full', body: 'w-full' }"
    >
      <template #header>
        <div
          class="-mx-6 -mt-6 mb-2 h-1 w-full bg-gradient-to-r sm:-mx-8 sm:-mt-8"
          :class="accentStyles[product.color].bar"
        />
      </template>

      <template #leading>
        <div
          class="ring-2 ring-current/20 flex size-14 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
          :class="accentStyles[product.color].icon"
        >
          <UIcon
            :name="product.icon"
            class="size-7 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </template>

      <template #title>
        <div class="flex items-center gap-2">
          <span class="text-lg">{{ product.name }}</span>
          <UButton
            v-if="product.link"
            :to="product.link"
            target="_blank"
            icon="i-lucide-arrow-up-right"
            size="xs"
            color="neutral"
            variant="ghost"
            :aria-label="`Open ${product.name}`"
          />
        </div>
        <p
          class="mt-1 text-sm font-medium"
          :class="accentStyles[product.color].text"
        >
          {{ product.tagline }}
        </p>
      </template>

      <template #description>
        <p>{{ product.description }}</p>

        <ul class="mt-4 space-y-2">
          <li
            v-for="highlight in product.highlights"
            :key="highlight"
            class="flex items-start gap-2 text-sm text-toned"
          >
            <UIcon
              name="i-lucide-check"
              class="mt-0.5 size-4 shrink-0"
              :class="accentStyles[product.color].text"
            />
            <span>{{ highlight }}</span>
          </li>
        </ul>
      </template>

      <template #footer>
        <div class="flex flex-wrap gap-1.5">
          <UBadge
            v-for="tech in product.stack"
            :key="tech"
            color="neutral"
            variant="subtle"
            size="sm"
            class="transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
          >
            {{ tech }}
          </UBadge>
        </div>
      </template>
    </UPageCard>
  </div>
</template>
