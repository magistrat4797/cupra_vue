<template>
  <a
    class="base-link inline-flex justify-center items-center px-6 min-h-btn outline outline-1 cursor-pointer ease-in-out duration-300"
    @click="handleClick"
    :class="{
      'bg-btn-primary outline-btn-primary hover:outline-btn-primary-hover hover:bg-btn-primary-hover text-white':
        btnStyle === 'primary',
      'bg-transparent outline-black duration-0 hover:outline-2 text-black': btnStyle === 'primary-outlined',
      'bg-btn-secondary outline-btn-secondary hover:outline-btn-secondary-hover hover:bg-btn-secondary-hover text-black':
        btnStyle === 'secondary',
      'bg-transparent  outline-white duration-0 hover:outline-2 text-white': btnStyle === 'secondary-outlined',
      'bg-white outline-white hover:outline-btn-secondary hover:bg-btn-secondary text-black':
        btnStyle === 'white'
    }"
    :href="href"
    :title="title"
    :target="target"
  >
    <slot />
  </a>
</template>

<script lang="ts" setup>
import useScroll from '@/composables/useScroll';

const props = defineProps({
  href: {
    type: String,
    default: '#'
  },
  title: String,
  target: String,
  scrollTo: String,
  btnStyle: {
    type: String,
    default: 'primary',
    validator: (prop: string) =>
      ['primary', 'secondary', 'primary-outlined', 'secondary-outlined', 'white'].includes(prop)
  }
});

const { scrollToComponent } = useScroll();

const handleClick = (event: MouseEvent) => {
  if (props.scrollTo) {
    scrollToComponent(event, props.scrollTo, 84);
  }
};
</script>
