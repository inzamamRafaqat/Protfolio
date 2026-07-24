<script setup lang="ts">
import { profile } from '~/data/profile'

const formEndpoint = `https://formsubmit.co/${profile.email}`
</script>

<template>
  <UPageSection
    id="contact"
    class="scroll-mt-20"
  >
    <UPageCTA
      v-motion
      :initial="{ opacity: 0, scale: 0.97 }"
      :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500 } }"
      title="Let's build something great"
      description="Open to full-stack and AI engineering roles - reach out and let's talk about how I can help your team ship."
      variant="subtle"
      class="glass-panel glow-border relative isolate overflow-hidden"
    >
      <template #top>
        <div class="absolute inset-0 -z-10 bg-grid" />
        <div class="absolute inset-0 -z-10 hero-glow" />
      </template>

      <template #body>
        <form
          v-if="profile.email"
          :action="formEndpoint"
          method="POST"
          class="glass-panel glow-border mx-auto max-w-lg space-y-4 rounded-xl p-6 text-left sm:p-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New portfolio inquiry"
          >
          <input
            type="hidden"
            name="_template"
            value="table"
          >

          <div class="grid gap-4 sm:grid-cols-2">
            <UFormField label="Name">
              <UInput
                name="name"
                autocomplete="name"
                placeholder="Your name"
                class="w-full"
                required
              />
            </UFormField>
            <UFormField label="Email">
              <UInput
                name="email"
                type="email"
                autocomplete="email"
                placeholder="you@example.com"
                class="w-full"
                required
              />
            </UFormField>
          </div>

          <UFormField label="Message">
            <UTextarea
              name="message"
              placeholder="What are you looking to build?"
              :rows="4"
              class="w-full"
              required
            />
          </UFormField>

          <div class="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p class="text-xs text-muted">
              Messages are sent directly to {{ profile.email }}.
            </p>
            <UButton
              type="submit"
              label="Send message"
              trailing-icon="i-lucide-send"
              class="btn-shine w-full shrink-0 rounded-full sm:w-auto"
            />
          </div>
        </form>
      </template>
    </UPageCTA>
  </UPageSection>
</template>
