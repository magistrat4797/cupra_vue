<template>
  <section id="cars" class="test-drive bg-secondary-white py-8 md:py-20 lg:py-section">
    <cars-carousel :cars="cars" />
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useStore } from '@/stores/store';
import type { CarDetails } from '@/models/CarDetails';

import CarsCarousel from '@/components/CarsCarousel.vue';

const store = useStore();

const cars = ref<CarDetails[]>([]);


const fetchCars = async () => {
  await store.fetchCars();
  cars.value = store.cars;
};

onMounted(fetchCars);
</script>
