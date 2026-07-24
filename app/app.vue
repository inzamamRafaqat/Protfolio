<script setup lang="ts">
import { profile } from '~/data/profile'

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
    }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = `${profile.name} — ${profile.title}`
const description = profile.tagline

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})

const navLinks = [
  { label: 'About', to: '#about' },
  { label: 'Experience', to: '#experience' },
  { label: 'Products', to: '#products' },
  { label: 'Skills', to: '#skills' },
  { label: 'Testimonials', to: '#testimonials' },
  { label: 'Contact', to: '#contact' }
]

const { y: scrollY } = useWindowScroll()
const headerScrolled = computed(() => scrollY.value > 8)

const activeSection = ref('')
let sectionObserver: IntersectionObserver | undefined

onMounted(() => {
  const targets = navLinks
    .map(link => document.querySelector(link.to))
    .filter((el): el is Element => !!el)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

      if (visible) {
        activeSection.value = `#${visible.target.id}`
      }
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  )

  targets.forEach(el => sectionObserver?.observe(el))
})

onUnmounted(() => {
  sectionObserver?.disconnect()
})

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
</script>

<template>
  <UApp>
    <BootSequence />

    <div class="ambient-blobs" />
    <div class="grain-overlay" />
    <CursorGlow />

    <ScrollProgress />

    <UHeader
      :to="'#'"
      :class="{ 'header-scrolled': headerScrolled }"
      :ui="{ root: 'bg-default/95 backdrop-blur-md' }"
      class="transition-shadow duration-300"
    >
      <template #left>
        <NuxtLink
          to="#"
          class="flex items-center gap-2 font-semibold text-highlighted transition-transform duration-200 hover:scale-105"
        >
          <UAvatar
            :text="profile.initials"
            size="sm"
            color="primary"
            class="ring-2 ring-primary/40 ring-offset-2 ring-offset-default"
          />
          <span class="hidden font-mono text-sm tracking-wide sm:inline">{{ profile.name }}</span>
        </NuxtLink>
      </template>

      <UButton
        v-for="link in navLinks"
        :key="link.to"
        :label="link.label"
        :to="link.to"
        color="neutral"
        variant="link"
        class="nav-link"
        :class="{ 'nav-link-active': activeSection === link.to }"
      />

      <template #right>
        <UColorModeButton
          v-motion
          :initial="{ opacity: 0, scale: 0.7 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 400, delay: 300 } }"
        />

        <UButton
          v-for="social in socials"
          :key="social.to"
          :to="social.to"
          target="_blank"
          :icon="social.icon"
          :aria-label="social.label"
          color="neutral"
          variant="ghost"
          class="transition-transform duration-200 hover:scale-110"
        />

        <UButton
          v-if="profile.resumeUrl"
          label="Download CV"
          :to="profile.resumeUrl"
          target="_blank"
          icon="i-lucide-download"
          size="sm"
          class="btn-shine hidden rounded-full sm:inline-flex"
        />
      </template>

      <template #body>
        <div class="flex flex-col gap-1">
          <UButton
            v-for="link in navLinks"
            :key="link.to"
            :label="link.label"
            :to="link.to"
            color="neutral"
            variant="ghost"
            block
            class="justify-start"
          />
        </div>

        <USeparator class="my-4" />

        <div class="flex items-center gap-2">
          <UButton
            v-for="social in socials"
            :key="social.to"
            :to="social.to"
            target="_blank"
            :icon="social.icon"
            :label="social.label"
            color="neutral"
            variant="subtle"
          />
        </div>

        <UButton
          v-if="profile.resumeUrl"
          label="Download CV"
          :to="profile.resumeUrl"
          target="_blank"
          icon="i-lucide-download"
          block
          class="mt-4 rounded-full"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter
      v-motion
      :initial="{ opacity: 0 }"
      :visible-once="{ opacity: 1, transition: { duration: 500 } }"
      :ui="{ bottom: 'border-t border-default bg-elevated/50' }"
    >
      <template #top>
        <div class="flex flex-col items-center gap-6 text-center">
          <NuxtLink
            to="#"
            class="flex items-center gap-2 font-semibold text-highlighted transition-transform duration-200 hover:scale-105"
          >
            <UAvatar
              :text="profile.initials"
              size="md"
              color="primary"
              class="ring-2 ring-primary/40 ring-offset-2 ring-offset-default"
            />
            <span class="font-mono text-base tracking-wide">{{ profile.name }}</span>
          </NuxtLink>

          <nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="nav-link text-sm text-muted transition-colors duration-200 hover:text-highlighted"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <div
            v-if="socials.length"
            class="flex items-center gap-2"
          >
            <UButton
              v-for="social in socials"
              :key="social.to"
              :to="social.to"
              target="_blank"
              :icon="social.icon"
              :aria-label="social.label"
              color="neutral"
              variant="ghost"
              class="rounded-full transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>
      </template>

      <template #bottom>
        <p class="w-full text-center text-sm text-muted">
          © {{ new Date().getFullYear() }} {{ profile.name }}. Built with Nuxt UI.
        </p>
      </template>
    </UFooter>

    <BackToTop />
  </UApp>
</template>
