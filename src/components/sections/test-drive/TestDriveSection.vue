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
        <form id="test-drive-form" @submit.prevent="submitForm" novalidate>
          <div class="flex justify-center">
            <div class="w-full sm:max-w-form mb-6 md:mb-12">
              <cars-select
                :modelValue="selectedCarModel"
                :options="formattedCars"
                @update:modelValue="selectedCarModel = $event"
              />
              <div v-for="input in inputs" :key="input.key">
                <base-input
                  :type="input.type"
                  v-model="formData[input.key]"
                  :placeholder="input.placeholder"
                  :error="getError(input.key)"
                />
              </div>
              <span class="block text-2xs font-light">* Pole wymagane</span>
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
import { ref, computed, watch } from 'vue';

import MainContainer from '@/components/MainContainer.vue';
import CarsSelect from '@/components/CarsSelect.vue';
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';

import { useStore } from '@/stores/store';
import useScroll from '@/composables/useScroll';

import type { FormData, Input } from '@/models/TestDrive';
import type { CarDetails } from '@/models/CarDetails';

const store = useStore();
const { scrollToComponent } = useScroll();

const selectedCarModel = ref('');

const formData = ref<FormData>({
  name: '',
  surname: '',
  email: '',
  phone: ''
});

const props = defineProps<{
  cars: CarDetails[];
}>();

const errors = ref<Array<{ key: string; message: string }>>([]);

const inputs: Input[] = [
  { key: 'name', type: 'text', placeholder: 'Imię *' },
  { key: 'surname', type: 'text', placeholder: 'Nazwisko (opcjonalnie)' },
  { key: 'email', type: 'email', placeholder: 'Adres e-mail *' },
  { key: 'phone', type: 'tel', placeholder: 'Nr. telefonu *' }
];

const getError = (key: string) => {
  const error = errors.value.find((error) => error.key === key);
  return error ? error.message : '';
};

const addValidationError = (key: string, message: string) => {
  errors.value.push({ key, message });
};

const validateField = (field: Input) => {
  const value = formData.value[field.key];
  let hasError = false;
  if (!value) {
    hasError = true;
  }
  if (field.key === 'name' && !value) {
    addValidationError(field.key, 'Podaj imię');
  }

  if (field.key === 'phone') {
    const phoneRegex =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (!value) {
      addValidationError(field.key, 'Podaj numer telefonu');
    } else if (!phoneRegex.test(value)) {
      addValidationError(field.key, 'Nieprawidłowy format telefonu');
    }
  }

  if (field.key === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      addValidationError(field.key, 'Podaj adres e-mail');
    } else if (!emailRegex.test(value)) {
      addValidationError(field.key, 'Nieprawidłowy format e-maila');
    }
  }
  if (hasError) {
    scrollToComponent(null, 'test-drive-form', 84);
  }
};

const submitForm = () => {
  errors.value = [];

  inputs.forEach(validateField);

  if (errors.value.length === 0) {
    const submittedData = {
      selectedCar: selectedCarModel.value,
      formData: formData.value,
      checkboxes: store.filteredCheckboxes
    };

    alert(JSON.stringify(submittedData, null, 2)); // Submit data presenting
  }
};

const getSelectedCar = () => {
  if (props.cars.length > 0) {
    selectedCarModel.value = props.cars[0].model.name;
  }
}

const formattedCars = computed(() =>
  props.cars.map((car) => ({
    value: car.model.name,
    label: car.model.label,
    image: car.image
  }))
);

watch(
  () => props.cars,
  (newVal) => {
    if (newVal.length > 0) {
      getSelectedCar();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.test-drive__text :deep(a) {
  @apply ease-in-out duration-300 underline hover:text-dark-blue;
}
</style>
