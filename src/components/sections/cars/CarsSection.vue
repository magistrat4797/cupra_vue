<template>
  <section id="cars" class="test-drive bg-secondary-white py-8 md:py-20 lg:py-section">
    <cars-carousel :cars="cars" />
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useCarsStore } from '@/stores/carsStore';
import type { CarDetails } from '@/models/CarDetails';

import CarsCarousel from '@/components/CarsCarousel.vue';

const carsStore = useCarsStore();

const cars = ref<CarDetails[]>([]);


const fetchCars = async () => {
  await carsStore.fetchCars();
  cars.value = carsStore.cars;
};

onMounted(fetchCars);
</script>
