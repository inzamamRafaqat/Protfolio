<script setup lang="ts">
// One-time terminal-style boot overlay shown on first load per browser
// session (gated by sessionStorage) — skipped entirely under
// prefers-reduced-motion so it never blocks or distracts.
const reducedMotion = usePreferredReducedMotion()
const show = ref(false)
const lines = ref<string[]>([])

const SCRIPT = [
  '> establishing_connection... ok',
  '> loading_portfolio... ok',
  '> ready_'
]

onMounted(() => {
  if (reducedMotion.value === 'reduce') return

  try {
    if (sessionStorage.getItem('portfolio-boot-seen')) return
    sessionStorage.setItem('portfolio-boot-seen', '1')
  } catch {
    // Storage blocked (privacy mode, embedded preview, etc.) — just skip the boot screen.
    return
  }

  show.value = true
  document.body.style.overflow = 'hidden'

  let finished = false

  function finish() {
    if (finished) return
    finished = true
    document.body.style.overflow = ''
    show.value = false
  }

  // Hard failsafe: no matter what happens in the typing loop below, this
  // guarantees the overlay can never get stuck covering the page.
  setTimeout(finish, 4000)

  let lineIndex = 0

  function typeLine() {
    if (lineIndex >= SCRIPT.length) {
      setTimeout(finish, 400)
      return
    }

    const full = SCRIPT[lineIndex] ?? ''
    let charIndex = 0
    lines.value.push('')

    const interval = setInterval(() => {
      charIndex++
      lines.value[lineIndex] = full.slice(0, charIndex)
      if (charIndex >= full.length) {
        clearInterval(interval)
        lineIndex++
        setTimeout(typeLine, 150)
      }
    }, 16)
  }

  setTimeout(typeLine, 250)
})
</script>

<template>
  <ClientOnly>
    <Transition
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-500 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-default"
      >
        <div class="font-mono text-sm sm:text-base">
          <p
            v-for="(line, i) in lines"
            :key="i"
            class="text-highlighted"
          >
            {{ line }}<span
              v-if="i === lines.length - 1"
              class="animate-pulse text-primary"
            >_</span>
          </p>
        </div>
      </div>
    </Transition>
  </ClientOnly>
</template>
