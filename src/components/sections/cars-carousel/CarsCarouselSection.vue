<template>
  <section id="cars" class="test-drive bg-secondary-white py-8 md:py-20 lg:py-section">
    <cars-carousel :cars="cars" />
  </section>
</template>

<script lang="ts" setup>
import CarsCarousel from '@/components/CarsCarousel.vue';

import type { CarDetails } from '@/models/CarDetails';

defineProps<{
  cars: CarDetails[];
}>();
</script>
