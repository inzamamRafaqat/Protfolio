<script setup lang="ts">
import * as THREE from 'three'

const reducedMotion = usePreferredReducedMotion()
const enable3d = computed(() => reducedMotion.value !== 'reduce')

const cameraPosition = new THREE.Vector3(0, 0, 8)
const dirLightPosition = new THREE.Vector3(4, 4, 6)
const pointLightPosition = new THREE.Vector3(-4, -2, 2)
const accentLightPosition = new THREE.Vector3(5, 3, -3)
const dpr = [1, 1.75] as const
</script>

<template>
  <ClientOnly>
    <TresCanvas
      v-if="enable3d"
      class="!absolute inset-0"
      :alpha="true"
      :clear-alpha="0"
      :antialias="true"
      :dpr="dpr"
      power-preference="high-performance"
    >
      <TresPerspectiveCamera
        :position="cameraPosition"
        :fov="45"
      />
      <TresAmbientLight :intensity="0.7" />
      <TresDirectionalLight
        :position="dirLightPosition"
        :intensity="1.4"
        color="#ffffff"
      />
      <TresPointLight
        :position="pointLightPosition"
        :intensity="0.8"
        color="#e2e8f0"
      />
      <TresPointLight
        :position="accentLightPosition"
        :intensity="0.7"
        color="#6366f1"
      />
      <HeroSceneShapes />
    </TresCanvas>

    <template #fallback>
      <div class="absolute inset-0 hero-glow" />
    </template>
  </ClientOnly>
</template>
