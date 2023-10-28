<template>
  <label class="base-checkbox flex items-start cursor-pointer mb-4 md:mb-6" @click="toggleCheckbox">
    <input
      type="checkbox"
      v-model="checkedValue"
      :disabled="disabled"
      @change="emitValue"
      class="base-checkbox__input hidden"
    />
    <span
      class="base-checkbox__box relative min-w-checkbox min-h-checkbox border border-secondary-grey mr-3"
    />
    <span>{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean,
  label: String
});

const emit = defineEmits(['update:modelValue']);

const checkedValue = ref(props.modelValue);

const emitValue = () => {
  emit('update:modelValue', checkedValue.value);
};

const toggleCheckbox = (event: Event) => {
  if (props.disabled) {
    event.preventDefault();
  }
};

watch(
  () => props.modelValue,
  (newValue) => {
    checkedValue.value = newValue;
  }
);
</script>

<style lang="scss" scoped>
.base-checkbox {
  &__box:before {
    @apply ease-in-out duration-200 content-[''] absolute left-[3px] right-[3px] top-[3px] bottom-[3px] bg-checkbox-selected opacity-0;
  }
  &__input:checked ~ .base-checkbox__box:before {
    @apply opacity-100;
  }
}
</style>
