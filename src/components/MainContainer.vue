<template>
  <div
    class="container w-full mx-auto px-4"
    :class="[isSmall ? 'max-w-container-sm' : 'max-w-container']"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isSmall: Boolean
});
</script>
