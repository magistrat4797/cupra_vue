<template>
  <section class="car-showcase bg-dark-grey py-8 md:py-20 lg:py-section">
    <main-container>
      <div class="text-white">
        <div class="md:max-w-[560px] text-center md:text-left mb-8 md:mb-16">
          <h2
            class="mb-2 md:mb-4 uppercase text-sm-heading sm:text-xl md:text-2xl lg:text-3xl font-light leading-snug md:leading-none"
          >
            <slot name="title" />
          </h2>
          <h3 class="text-base md:text-lg opacity-50 leading-6">
            <slot name="subtitle" />
          </h3>
        </div>
        <div class="flex flex-col md:flex-row gap-8">
          <div class="w-full md:w-3/5">
            <div class="car-showcase__image-block text-center md:text-left">
              <slot name="left-image" />
              <p class="mb-0 mt-2 md:mt-4 text-xs md:text-base opacity-50">
                <slot name="left-image-text" />
              </p>
            </div>
            <div class="md:max-w-[560px] pt-12 md:pt-24 lg:pt-[160px] text-center md:text-left">
              <h3
                class="mb-2 md:mb-4 uppercase text-sm-heading md:text-xl lg:text-2xl font-light leading-tight"
              >
                <slot name="desc-title" />
              </h3>
              <p class="mb-0 text-base md:text-lg opacity-50 leading-6">
                <slot name="desc-info" />
              </p>
              <div class="mt-6 md:mt-8">
                <slot name="desc-actions" />
              </div>
            </div>
          </div>
          <div class="w-full md:w-2/5 md:pt-16">
            <div class="car-showcase__image-block text-center md:text-left">
              <slot name="right-image" />
              <p class="mb-0 mt-2 md:mt-4 text-xs md:text-base opacity-50">
                <slot name="right-image-text" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </main-container>
  </section>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/MainContainer.vue';
</script>

<style lang="scss" scoped>
.car-showcase {
  &__image-block {
    :deep(img) {
      @apply w-full h-full object-cover max-h-[270px] xs:max-h-[350px] sm:max-h-[430px] md:max-h-none;
    }
  }
}
</style>
