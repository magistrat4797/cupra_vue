<template>
  <section id="test-drive" class="test-drive bg-secondary-white py-8 md:py-20 lg:py-section">
    <main-container is-small>
      <div class="text-black">
        <div class="text-center w-full mx-auto max-w-[440px] mb-6 md:mb-12 lg:mb-16">
          <h3 class="mb-2 text-xs md:text-base opacity-50">
            <slot name="subtitle" />
          </h3>
          <h2
            class="font-light text-sm-heading md:text-xl leading-snug md:leading-9 lg:text-md-heading lg:leading-tight"
          >
            <slot name="title" />
          </h2>
        </div>
        <form @submit.prevent="submitForm" novalidate>
          <div class="flex justify-center">
            <div class="w-full sm:max-w-form mb-6 md:mb-12">
              <cars-select :modelValue="selectedCarModel" :options="formattedCars" @update:modelValue="selectedCarModel = $event"/>
              <div v-for="input in inputs" :key="input.key">
                <base-input
                  :type="input.type"
                  v-model="formData[input.key]"
                  :placeholder="input.placeholder"
                  :error="findError(input.key)"
                />
              </div>
              <span class="blok text-2xs font-light">* Pole wymagane</span>
            </div>
          </div>
          <div class="test-drive__text text-2xs pb-4 md:pb-6 leading-normal">
            <slot name="text" />
          </div>
          <div class="text-center">
            <base-button type="submit" btn-style="primary">Umów jazdę próbną</base-button>
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
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import { useCarsStore } from '@/stores/carsStore';

import type { FormData, Input } from '@/models/TestDrive';
import type { CarDetails } from '@/models/CarDetails';

const carsStore = useCarsStore();

const cars = ref<CarDetails[]>([]);
const selectedCarModel = ref('');

const formData = ref<FormData>({
  name: '',
  surname: '',
  email: '',
  phone: ''
});

const errors = ref<Array<{ key: string; message: string }>>([]);

const inputs: Input[] = [
  { key: 'name', type: 'text', placeholder: 'Imię *' },
  { key: 'surname', type: 'text', placeholder: 'Nazwisko (opcjonalnie)' },
  { key: 'email', type: 'email', placeholder: 'Adres e-mail *' },
  { key: 'phone', type: 'tel', placeholder: 'Nr. telefonu *' },
];

const findError = (key: string) => {
  const errorObj = errors.value.find(error => error.key === key);
  return errorObj ? errorObj.message : '';
};

const submitForm = () => {
  errors.value = [];

  if (!formData.value.name) {
    errors.value.push({ key: 'name', message: 'Podaj imię' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!formData.value.email) {
    errors.value.push({ key: 'email', message: 'Podaj adres e-mail' });
  } else if (!emailRegex.test(formData.value.email)) {
    errors.value.push({ key: 'email', message: 'Nieprawidłowy format e-maila' });
  }

  if (!formData.value.phone) {
    errors.value.push({ key: 'phone', message: 'Podaj numer telefonu' });
  }

  if (errors.value.length === 0) {
    console.log('submitted');
  }
};

const fetchCars = async () => {
  await carsStore.fetchCars();
  cars.value = carsStore.cars;
  if (cars.value.length > 0) {
    selectedCarModel.value = cars.value[0].model.name;
  }
};

const formattedCars = computed(
  () => cars.value.map(
      car => ({
      value: car.model.name,
      label: car.model.label,
      image: car.image
    })
  )
);

onMounted(fetchCars);
</script>

<style lang="scss" scoped>
  .test-drive__text :deep(a) {
    @apply ease-in-out duration-300 underline hover:text-dark-blue;
  }
</style>