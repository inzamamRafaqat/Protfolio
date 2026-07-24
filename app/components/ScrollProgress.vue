<script setup lang="ts">
const progress = ref(0)

function onScroll() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
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
  <div class="fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
    <div
      class="h-full shadow-[0_0_8px_var(--ui-primary)] transition-[width] duration-150 ease-out"
      :style="{
        width: `${progress}%`,
        backgroundImage: 'linear-gradient(90deg, var(--ui-primary), var(--ui-secondary))'
      }"
    />
  </div>
</template>
