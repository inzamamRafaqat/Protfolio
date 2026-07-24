<script setup lang="ts">
import { products } from '~/data/products'
</script>

<template>
  <UPageSection
    id="products"
    class="scroll-mt-20"
    title="What I've shipped"
    description="Selected products spanning AI tools, compliance technology, offline-first inspections, and full-stack web applications."
    :ui="{ container: 'py-12 sm:py-16 lg:py-20' }"
  >
    <template #headline>
      <span
        v-motion
        :initial="{ opacity: 0, x: -16 }"
        :visible-once="{ opacity: 1, x: 0, transition: { duration: 500 } }"
      >
        Products
      </span>
    </template>

    <UPageGrid class="sm:grid-cols-2 lg:grid-cols-2">
      <div
        v-for="(product, index) in products"
        :key="product.slug"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: (index % 2) * 120 } }"
      >
        <ProductCard :product="product" />
      </div>
    </UPageGrid>
  </UPageSection>
</template>
