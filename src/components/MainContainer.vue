<template>
  <div
    class="main-container max-w-container w-full mx-auto px-4"
    :class="{ 'md:max-w-container-sm': isSmall }"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isSmall: Boolean
});
</script>
