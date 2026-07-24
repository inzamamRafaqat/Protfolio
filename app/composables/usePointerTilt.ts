import type { Ref } from 'vue'

export function usePointerTilt(target: Ref<HTMLElement | null>, options?: { max?: number }) {
  const max = options?.max ?? 6
  const reducedMotion = usePreferredReducedMotion()
  const style = ref<{ transform: string, transition: string }>({
    transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)',
    transition: 'transform 400ms ease'
  })

  function onPointerMove(event: PointerEvent) {
    if (reducedMotion.value === 'reduce' || event.pointerType !== 'mouse' || !target.value) return

    const rect = target.value.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5

    style.value = {
      transform: `perspective(800px) rotateX(${(-py * max * 2).toFixed(2)}deg) rotateY(${(px * max * 2).toFixed(2)}deg)`,
      transition: 'transform 60ms linear'
    }
  }

  function onPointerLeave() {
    style.value = {
      transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 400ms ease'
    }
  }

  onMounted(() => {
    target.value?.addEventListener('pointermove', onPointerMove)
    target.value?.addEventListener('pointerleave', onPointerLeave)
  })

  onUnmounted(() => {
    target.value?.removeEventListener('pointermove', onPointerMove)
    target.value?.removeEventListener('pointerleave', onPointerLeave)
  })

  return { style }
}
