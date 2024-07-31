<template>
  <div class="input-container mb-3 md:mb-5">
    <input
      :type="type"
      v-model="internalValue"
      :placeholder="placeholder"
      :class="[
        'text-tertiary-grey h-input-mobile md:h-input bg-transparent placeholder:text-tertiary-grey focus:outline-none border-b w-full text-sm md:text-base',
        { 'border-base-red': error, 'border-secondary-grey': !error }
      ]"
    />
    <div v-if="error" class="text-2xs text-base-red text-right leading-5">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue', 'clearError']);

const props = defineProps({
  modelValue: String,
  type: {
    type: String as () => 'text' | 'email' | 'tel',
    default: 'text'
  },
  placeholder: String,
  error: String
});

const internalValue = ref(props.modelValue);

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
  if (props.error) {
    emit('clearError', newValue);
  }
});
</script>
