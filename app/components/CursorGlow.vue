<script setup lang="ts">
const reducedMotion = usePreferredReducedMotion()
const coarsePointer = import.meta.client ? window.matchMedia('(pointer: coarse)').matches : false
const enabled = computed(() => reducedMotion.value !== 'reduce' && !coarsePointer)

const x = ref(0)
const y = ref(0)
const visible = ref(false)

function onPointerMove(event: PointerEvent) {
  x.value = event.clientX
  y.value = event.clientY
  visible.value = true
}

function onPointerLeave() {
  visible.value = false
}

onMounted(() => {
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  document.documentElement.addEventListener('pointerleave', onPointerLeave)
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  document.documentElement.removeEventListener('pointerleave', onPointerLeave)
})
</script>

<template>
  <ClientOnly>
    <div
      v-if="enabled"
      class="cursor-glow"
      :style="{ opacity: visible ? 1 : 0 }"
    >
      <div
        class="cursor-glow__dot"
        :style="{ transform: `translate(${x}px, ${y}px)` }"
      />
    </div>
  </ClientOnly>
</template>
