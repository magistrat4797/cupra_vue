<template>
  <section id="test-drive" class="test-drive bg-secondary-white py-8 md:py-20 lg:py-section">
    <main-container is-small>
      <div class="text-black">
        <div class="text-center w-full mx-auto max-w-[440px] mb-6 md:mb-12 lg:mb-16">
          <h3 class="mb-2 text-xs md:text-base opacity-50">
            <slot name="subtitle" />
          </h3>
          <h2
            class="font-light text-sm-heading md:text-xl md:leading-9 lg:text-md-heading lg:leading-tight"
          >
            <slot name="title" />
          </h2>
        </div>
        <form>
          <div class="flex justify-center">
            <div class="w-full max-w-form">
              <cars-select :modelValue="selectedCarModel" :options="formattedCars" @update:modelValue="selectedCarModel = $event"/>
            </div>
          </div>
          <p>INPUTY</p>
          <div class="test-drive__text text-xs pb-4 md:pb-6">
            <slot name="text" />
          </div>
          <div class="text-center">
            <slot name="actions" />
          </div>
        </form>
      </div>
    </main-container>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

import MainContainer from '@/components/MainContainer.vue';
import CarsSelect from '@/components/CarsSelect.vue';

import { useCarsStore } from '@/stores/carsStore';
import type { CarDetails } from '@/models/CarDetails';

const carsStore = useCarsStore();

const cars = ref<CarDetails[]>([]);
const selectedCarModel = ref('');

const fetchCars = async () => {
  await carsStore.fetchCars();
  cars.value = carsStore.cars;
  if (cars.value.length > 0) {
    selectedCarModel.value = cars.value[0].model.name;
  }
};

const formattedCars = computed(() => cars.value.map(car => ({
  value: car.model.name,
  label: car.model.label,
  image: car.image
})));

onMounted(fetchCars);
</script>

<style lang="scss" scoped>
  .test-drive__text :deep(a) {
    @apply underline text-base-blue hover:text-dark-blue;
  }
</style>