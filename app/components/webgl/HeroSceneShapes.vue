<script setup lang="ts">
import * as THREE from 'three'

const groupRef = ref()
const mesh1 = ref()
const mesh2 = ref()
const mesh3 = ref()
const mesh4 = ref()
const mesh5 = ref()

// Shapes are pushed to the periphery and far back so they read as
// atmospheric depth, not clutter competing with the headline text.
const baseY1 = 2.7
const baseY2 = -2.6
const baseY3 = 2.4
const baseY4 = -2.8
const baseY5 = -3.4

const pos1 = new THREE.Vector3(-4.6, baseY1, -6)
const pos2 = new THREE.Vector3(4.8, baseY2, -6.5)
const pos3 = new THREE.Vector3(4.6, baseY3, -7.5)
const pos4 = new THREE.Vector3(-4.4, baseY4, -5.5)
const pos5 = new THREE.Vector3(0.2, baseY5, -9)

const args1 = [0.65, 0] as const
const args2 = [0.5, 0.16, 16, 64] as const
const args3 = [0.55, 0] as const
const args4 = [0.4, 1] as const
const args5 = [0.36, 0.11, 100, 16] as const

// Mostly monochrome silver wireframes — a single shape (mesh1) carries the
// site's one restrained indigo accent instead of a multi-color palette.
const indigo = '#6366f1'
const silver = '#cbd5e1'
const additiveBlending = THREE.AdditiveBlending

// Halo scale factors for the "fake bloom" twin meshes below.
const haloScale114 = new THREE.Vector3(1.14, 1.14, 1.14)
const haloScale116 = new THREE.Vector3(1.16, 1.16, 1.16)

const starCount = 260
const starPositions = new Float32Array(starCount * 3)
for (let i = 0; i < starCount; i++) {
  starPositions[i * 3] = (Math.random() - 0.5) * 20
  starPositions[i * 3 + 1] = (Math.random() - 0.5) * 14
  starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 6
}
const starAttributeArgs = [starPositions, 3] as const

const { x: mouseX, y: mouseY } = useMouse({ type: 'client' })
const { width: winW, height: winH } = useWindowSize()

const { onBeforeRender } = useLoop()

onBeforeRender(({ elapsed }) => {
  if (mesh1.value) {
    mesh1.value.rotation.x = elapsed * 0.22
    mesh1.value.rotation.y = elapsed * 0.35
    mesh1.value.position.y = baseY1 + Math.sin(elapsed * 0.5) * 0.3
  }
  if (mesh2.value) {
    mesh2.value.rotation.x = elapsed * -0.18
    mesh2.value.rotation.y = elapsed * -0.28
    mesh2.value.position.y = baseY2 + Math.sin(elapsed * 0.45 + 1) * 0.35
  }
  if (mesh3.value) {
    mesh3.value.rotation.x = elapsed * 0.26
    mesh3.value.rotation.z = elapsed * 0.42
    mesh3.value.position.y = baseY3 + Math.sin(elapsed * 0.6 + 2) * 0.25
  }
  if (mesh4.value) {
    mesh4.value.rotation.y = elapsed * -0.4
    mesh4.value.rotation.z = elapsed * 0.3
    mesh4.value.position.y = baseY4 + Math.sin(elapsed * 0.65 + 3) * 0.3
  }
  if (mesh5.value) {
    mesh5.value.rotation.x = elapsed * 0.18
    mesh5.value.rotation.y = elapsed * 0.3
    mesh5.value.position.y = baseY5 + Math.sin(elapsed * 0.35 + 4) * 0.3
  }

  if (groupRef.value && winW.value && winH.value) {
    const nx = (mouseX.value / winW.value) * 2 - 1
    const ny = (mouseY.value / winH.value) * 2 - 1
    groupRef.value.rotation.y += (nx * 0.15 - groupRef.value.rotation.y) * 0.02
    groupRef.value.rotation.x += (-ny * 0.08 - groupRef.value.rotation.x) * 0.02
  }
})
</script>

<template>
  <TresGroup ref="groupRef">
    <TresMesh
      ref="mesh1"
      :position="pos1"
    >
      <TresIcosahedronGeometry :args="args1" />
      <TresMeshStandardMaterial
        :color="indigo"
        wireframe
        :transparent="true"
        :opacity="0.55"
        :roughness="0.4"
        :metalness="0.3"
      />

      <!-- Slightly larger additive-blended twin — a cheap "fake bloom" halo
           that inherits this mesh's transform for free since it's a child. -->
      <TresMesh :scale="haloScale114">
        <TresIcosahedronGeometry :args="args1" />
        <TresMeshBasicMaterial
          :color="indigo"
          wireframe
          :transparent="true"
          :opacity="0.22"
          :blending="additiveBlending"
          :depth-write="false"
        />
      </TresMesh>
    </TresMesh>

    <TresMesh
      ref="mesh2"
      :position="pos2"
    >
      <TresTorusGeometry :args="args2" />
      <TresMeshStandardMaterial
        :color="silver"
        wireframe
        :transparent="true"
        :opacity="0.55"
        :roughness="0.4"
        :metalness="0.3"
      />

      <TresMesh :scale="haloScale114">
        <TresTorusGeometry :args="args2" />
        <TresMeshBasicMaterial
          :color="silver"
          wireframe
          :transparent="true"
          :opacity="0.2"
          :blending="additiveBlending"
          :depth-write="false"
        />
      </TresMesh>
    </TresMesh>

    <TresMesh
      ref="mesh3"
      :position="pos3"
    >
      <TresOctahedronGeometry :args="args3" />
      <TresMeshStandardMaterial
        :color="silver"
        wireframe
        :transparent="true"
        :opacity="0.5"
        :roughness="0.4"
        :metalness="0.3"
      />

      <TresMesh :scale="haloScale114">
        <TresOctahedronGeometry :args="args3" />
        <TresMeshBasicMaterial
          :color="silver"
          wireframe
          :transparent="true"
          :opacity="0.18"
          :blending="additiveBlending"
          :depth-write="false"
        />
      </TresMesh>
    </TresMesh>

    <TresMesh
      ref="mesh4"
      :position="pos4"
    >
      <TresIcosahedronGeometry :args="args4" />
      <TresMeshStandardMaterial
        :color="silver"
        wireframe
        :transparent="true"
        :opacity="0.5"
        :roughness="0.4"
        :metalness="0.3"
      />

      <TresMesh :scale="haloScale116">
        <TresIcosahedronGeometry :args="args4" />
        <TresMeshBasicMaterial
          :color="silver"
          wireframe
          :transparent="true"
          :opacity="0.2"
          :blending="additiveBlending"
          :depth-write="false"
        />
      </TresMesh>
    </TresMesh>

    <TresMesh
      ref="mesh5"
      :position="pos5"
    >
      <TresTorusKnotGeometry :args="args5" />
      <TresMeshStandardMaterial
        :color="silver"
        wireframe
        :transparent="true"
        :opacity="0.4"
        :roughness="0.4"
        :metalness="0.3"
      />

      <TresMesh :scale="haloScale114">
        <TresTorusKnotGeometry :args="args5" />
        <TresMeshBasicMaterial
          :color="silver"
          wireframe
          :transparent="true"
          :opacity="0.16"
          :blending="additiveBlending"
          :depth-write="false"
        />
      </TresMesh>
    </TresMesh>

    <TresPoints>
      <TresBufferGeometry>
        <TresBufferAttribute
          attach="attributes-position"
          :args="starAttributeArgs"
        />
      </TresBufferGeometry>
      <TresPointsMaterial
        color="#94a3b8"
        :size="0.022"
        :transparent="true"
        :opacity="0.5"
        :blending="additiveBlending"
        :size-attenuation="true"
      />
    </TresPoints>
  </TresGroup>
</template>
