<template>
  <button
    type="button"
    :class="buttonClasses"
    :style="buttonStyles"
    @click="scrollToTop"
    id="scrollTopBtn"
  >
    <span class="flex justify-center items-center w-full h-full">
      <span class="block relative w-3 h-3 md:w-4 md:h-4 rotate-180">
        <arrow-icon class="absolute inset-0 w-full h-full" />
      </span>
    </span>
  </button>
</template>

<style lang="scss" scoped>
#scrollTopBtn {
  bottom: 1rem;
  right: 1rem;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out,
    transform 0.2s ease-in-out,
    background-color 0.3s ease-in-out;
}
</style>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';
import ArrowIcon from '@/assets/images/icons/arrow.svg';
import useScroll from '@/composables/useScroll';

const { scrollToTop } = useScroll();

const isScrolled = ref(false);
const buttonStyles = ref<{ bottom?: string }>({});

const buttonClasses = computed(() => {
  const baseClasses =
    'fixed cursor-pointer p-1 w-10 h-10 md:w-12 md:h-12 hover:-translate-y-1 text-black bg-btn-secondary hover:bg-btn-secondary-hover z-50';
  return isScrolled.value
    ? `${baseClasses} opacity-100 visible`
    : `${baseClasses} opacity-0 invisible`;
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;

  const myButton = document.getElementById('scrollTopBtn');
  const footer = document.querySelector('.footer');

  if (myButton && footer) {
    const footerRect = footer.getBoundingClientRect();
    const buttonRect = myButton.getBoundingClientRect();
    const buttonPositionBottom = buttonRect.bottom;

    if (footerRect.top < window.innerHeight) {
      const diffHeight = buttonPositionBottom - footerRect.top;
      const computedStyle = window.getComputedStyle(myButton);
      const currentBottom = parseInt(computedStyle.bottom);
      const newBottom = currentBottom + diffHeight + 16;

      buttonStyles.value = { bottom: `${newBottom}px` };
    } else {
      buttonStyles.value = { bottom: '16px' };
    }

    if (buttonStyles.value.bottom === '16px') {
      buttonStyles.value = {};
      myButton.removeAttribute('style');
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
