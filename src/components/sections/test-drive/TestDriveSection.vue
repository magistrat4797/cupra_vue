<template>
  <section id="test-drive" class="test-drive bg-secondary-white py-8 md:py-20 lg:py-section">
    <main-container>
      <div v-for="car in cars" :key="car.model" class="car-item">
        <img :src="`/src/assets/images/cars/${car.image}`" :alt="car.model" />
        <h2>{{ car.model }}</h2>
      </div>
    </main-container>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import MainContainer from '@/components/MainContainer.vue';
import { useCarsStore } from '@/stores/carsStore';
import type { CarDetails } from '@/models/CarDetails';

const carsStore = useCarsStore();

const cars = ref<CarDetails[]>([]);

const fetchCars = async () => {
  await carsStore.fetchCars();
  cars.value = carsStore.cars;
};

onMounted(fetchCars);
</script>
