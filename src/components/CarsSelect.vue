<template>
  <div ref="selectRef" class="cars-select relative cursor-pointer mb-4 md:mb-5">
    <div class="cars-select__option-selected" @click="showOptions = !showOptions">
      <div class="cars-select__option">
        <div class="flex items-center">
          <div class="cars-select__option-image">
            <img :src="`/src/assets/images/cars/miniatures/${selectedOption?.image}`" :alt="selectedOption?.label" />
          </div>
          <div class="text-2xs xs:text-xs md:text-base">
            {{ selectedOption?.label }}
          </div>
        </div>
        <span class="block mx-2 xs:mx-4 relative w-3 h-3 xs:w-4 xs:h-4 transform duration-300" :class="{ 'rotate-180': showOptions }">
          <arrow-icon class="absolute inset-0 w-full h-full"/>
        </span>
      </div>
    </div>
    <div v-if="showOptions" class="cars-select__options-list absolute left-0 right-0 top-full z-1">
      <div class="cars-select__option" v-for="option in filteredOptions" :key="option.value" @click="selectOption(option.value)">
        <div class="flex items-center">
          <div class="cars-select__option-image">
            <img :src="`/src/assets/images/cars/miniatures/${option.image}`" :alt="option.label" />
          </div>
          <div class="text-2xs xs:text-xs md:text-base pr-2 xs:pr-4">
            {{ option.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ArrowIcon from '@/assets/images/icons/arrow.svg';

import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import type { SelectOption } from '@/models/SelectOption';

const selectRef = ref<HTMLElement | null>(null);
const showOptions = ref(false);

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  options: {
    type: Array as () => SelectOption[],
    required: true,
    default: () => []
  }
});

const filteredOptions = computed(() => {
  return props.options.filter(option => option.value !== props.modelValue);
});

const outsideClickListener = (event: Event) => {
  if (showOptions.value && selectRef.value && !selectRef.value.contains(event.target as Node)) {
    showOptions.value = false;
  }
};

onMounted(() => {
  window.addEventListener('click', outsideClickListener);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', outsideClickListener);
});

const emit = defineEmits(['update:modelValue']);

const selectOption = (value: string) => {
  emit('update:modelValue', value);
  showOptions.value = false;
};

const selectedOption = computed(() => {
  return props.options.find(option => option.value === props.modelValue);
});
</script>

<style lang="scss" scoped>
  .cars-select {
    &__option {
      @apply relative flex items-center justify-between h-20 xs:h-28 md:h-select-option z-1;
      &:after {
        @apply content-[''] absolute right-0 top-0 h-full border border-secondary-grey -z-1 bg-secondary-white w-full xs:w-[calc(100%-50px)];
      }
      & + .cars-select__option {
        &:after {
          @apply border-t-0;
        }
      }
      &-image {
        @apply w-full max-w-[150px] xs:max-w-[280px];
      }
      .cars-select__options-list & {
        &:after {
          @apply border-t-0;
        }
        @apply hover:text-dark-blue;
      }
    }
  }
</style>