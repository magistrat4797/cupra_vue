<template>
  <section class="top-box pt-header flex items-center relative h-screen">
    <main-container class="z-1">
      <div class="text-white max-w-[740px] text-center md:text-left">
        <template v-if="slots.subtitle">
          <div class="mb-2 md:mb-4">
            <h2 class="text-base md:text-lg leading-6">
              <slot name="subtitle" />
            </h2>
          </div>
        </template>
        <template v-if="slots.title">
          <div class="mb-8 md:mb-12">
            <h1
              class="text-sm-heading sm:text-xl md:text-2xl lg:text-3xl font-light leading-snug md:leading-tight xl:leading-none"
            >
              <slot name="title" />
            </h1>
          </div>
        </template>
        <template v-if="slots.actions">
          <div>
            <slot name="actions" />
          </div>
        </template>
      </div>
    </main-container>
  </section>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/MainContainer.vue';
import { useSlots } from 'vue';

const slots = useSlots();
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

.top-box {
  background: url('@/assets/images/top-box-bg.jpg') center no-repeat;
  background-size: cover;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(#000, .45);
  }
  @include xs {
    background-position-x: 55%;
  }
}
</style>
