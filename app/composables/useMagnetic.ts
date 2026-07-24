import type { Ref } from 'vue'

export function useMagnetic(target: Ref<HTMLElement | null>, options?: { strength?: number }) {
  const strength = options?.strength ?? 0.3
  const reducedMotion = usePreferredReducedMotion()
  const style = ref<{ transform: string, transition: string }>({
    transform: 'translate(0px, 0px)',
    transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
  })

  function onPointerMove(event: PointerEvent) {
    if (reducedMotion.value === 'reduce' || event.pointerType !== 'mouse' || !target.value) return

    const rect = target.value.getBoundingClientRect()
    const relX = event.clientX - (rect.left + rect.width / 2)
    const relY = event.clientY - (rect.top + rect.height / 2)

    style.value = {
      transform: `translate(${(relX * strength).toFixed(1)}px, ${(relY * strength).toFixed(1)}px)`,
      transition: 'transform 80ms linear'
    }
  }

  function onPointerLeave() {
    style.value = {
      transform: 'translate(0px, 0px)',
      transition: 'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)'
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
