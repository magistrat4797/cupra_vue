<template>
  <button
    type="button"
    :class="buttonClasses"
    @click="scrollToTop"
  >
    <span class="flex justify-center items-center w-full h-full">
      <span class="block relative w-3 h-3 md:w-4 md:h-4 rotate-180">
        <arrow-icon class="absolute inset-0 w-full h-full" />
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, computed } from "vue";
import ArrowIcon from '@/assets/images/icons/arrow.svg';

import useScroll from '@/composables/useScroll';

const { scrollToTop } = useScroll();

const isScrolled = ref(false);

const buttonClasses = computed(() => {
  const baseClasses = "transform duration-300 fixed cursor-pointer p-1 w-10 h-10 md:w-12 md:h-12 bottom-4 right-4 md:bottom-8 md:right-8 hover:-translate-y-1 text-black bg-btn-secondary hover:bg-btn-secondary-hover z-50";
  return isScrolled.value ? `${baseClasses} opacity-100 visible` : `${baseClasses} opacity-0 invisible`;
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>