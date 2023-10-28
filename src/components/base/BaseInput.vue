<template>
  <div class="input-container mb-4 md:mb-5">
    <input
      :type="type"
      v-model="internalValue"
      :placeholder="placeholder"
      class="text-tertiary-grey h-input-mobile md:h-input bg-transparent placeholder:text-tertiary-grey focus:outline-none border-b border-secondary-grey w-full text-sm md:text-base"
    />
    <div v-if="error" class="text-2xs text-red-500 text-right leading-normal">
      {{ error }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: String,
  type: {
    type: String as () => 'text' | 'email' | 'tel',
    default: 'text'
  },
  placeholder: String,
  error: String,
});

const internalValue = ref(props.modelValue);

watch(internalValue, newValue => {
  emit('update:modelValue', newValue);
});

</script>