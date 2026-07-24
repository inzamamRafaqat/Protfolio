<script setup lang="ts">
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <UButton
      v-if="visible"
      icon="i-lucide-arrow-up"
      color="primary"
      variant="soft"
      size="lg"
      aria-label="Back to top"
      class="glow-border fixed bottom-6 right-6 z-40 rounded-full shadow-[0_0_20px_-4px_var(--ui-primary)] transition-transform duration-200 hover:scale-110 active:scale-95"
      @click="scrollToTop"
    />
  </Transition>
</template>
