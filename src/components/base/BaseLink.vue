<template>
  <a
    class="inline-flex justify-center items-center px-6 min-h-btn outline outline-1 cursor-pointer"
    @click="scrollToComponent($event, scrollTarget)"
    :class="{
      'bg-btn-primary outline-btn-primary hover:outline-btn-primary-hover hover:bg-btn-primary-hover text-white': btnStyle === 'primary',
      'bg-transparent outline-black hover:outline-2 text-black': btnStyle === 'primary-outlined',
      'bg-btn-secondary outline-btn-secondary hover:outline-btn-secondary-hover hover:bg-btn-secondary-hover text-black': btnStyle === 'secondary',
      'bg-transparent  outline-white hover:outline-2 text-white': btnStyle === 'secondary-outlined',
    }"
    :href="href"
    :title="title"
    :target="target"
  >
    <slot />
  </a>
</template>

<script lang="ts" setup>

defineProps({
  href: { type: String, required: true },
  title: String,
  target: String,
  scrollTarget: String,
  btnStyle: {
    type: String,
    default: "primary",
    validator: (prop: string) =>
      ["primary", "secondary", "primary-outlined", "secondary-outlined"].includes(prop),
  },
});

const scrollToComponent = (event: MouseEvent, scrollTarget: string | undefined) => {
  if (!scrollTarget) return;
  const position = document.getElementById(scrollTarget)?.offsetTop;
  if (position == null) return;
  event.preventDefault();
  window.scrollTo({ top: position - 84, behavior: "smooth" });
};
</script>
