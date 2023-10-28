<template>
  <span>
    <a href="#" @click.prevent="toggleContent">
      {{ showContent ? labelOpened : label }}
    </a>
    <div
      ref="content"
      class="duration-300 overflow-hidden"
      :style="{ 'max-height': calculatedHeight + 'px' }"
    >
      <span class="block pt-4 md:pt-6">
        <slot name="hidden-text" />
      </span>
    </div>
  </span>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

defineProps({
  label: {
    type: String,
    required: true
  },
  labelOpened: {
    type: String,
    required: true
  }
});

const showContent = ref(false);
const content = ref<HTMLElement | null>(null);
const calculatedHeight = ref(0);

const toggleContent = () => {
  showContent.value = !showContent.value;

  if (showContent.value && content.value) {
    calculatedHeight.value = content.value.scrollHeight;
  } else {
    calculatedHeight.value = 0;
  }
};

watch(showContent, (newVal) => {
  if (!newVal && content.value) {
    calculatedHeight.value = 0;
  }
});
</script>
