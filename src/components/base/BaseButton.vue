<template>
  <button
    class="inline-flex justify-center items-center px-6 min-h-btn outline outline-1 cursor-pointer ease-in-out duration-300"
    :type="type"
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
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  },
  btnStyle: {
    type: String,
    default: 'primary',
    validator: (prop: string) =>
      ['primary', 'secondary', 'primary-outlined', 'secondary-outlined', 'white'].includes(prop)
  }
});
</script>
