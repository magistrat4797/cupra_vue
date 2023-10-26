<template>
  <section class="car-features bg-dark-grey py-8 md:py-20 lg:py-section">
    <main-container>
      <div class="flex flex-col gap-8 md:gap-20 xl:gap-40">
        <div class="car-feature flex flex-col" v-for="feature in features" :key="feature.title">
          <div class="md:w-1/2 lg:w-full lg:max-w-[550px] xl:max-w-[670px] lg:z-1">
            <div
              class="car-feature__info text-center md:text-left mb-8 md:mb-0 bg-dark-grey md:h-full lg:h-auto lg:px-14 lg:pb-8 xl:px-29 xl:pb-16"
            >
              <div class="text-white">
                <h3 class="mb-2 text-xs md:text-base opacity-50">
                  {{ feature.subtitle }}
                </h3>
                <h2
                  class="font-light text-sm-heading md:text-xl md:leading-9 lg:text-md-heading lg:leading-tight"
                >
                  {{ feature.title }}
                </h2>
              </div>
              <div class="mt-4 sm:mt-6 md:mt-12">
                <base-link
                  :href="feature.action.href"
                  :btn-style="feature.action.btnStyle"
                  :scroll-to="feature.action.scrollTo"
                >
                  {{ feature.action.text }}
                </base-link>
              </div>
            </div>
          </div>
          <div class="car-feature__image-block md:w-1/2 lg:w-full">
            <img
              class="w-full h-full object-cover"
              :src="`/src/assets/images/${feature.image}`"
              :alt="feature.title"
            />
          </div>
        </div>
      </div>
    </main-container>
  </section>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/MainContainer.vue';
import BaseLink from '@/components/base/BaseLink.vue';

import type { CarFeature } from '@/models/CarFeature';

defineProps({
  features: {
    type: Array as () => CarFeature[],
    required: true
  }
});
</script>

<style lang="scss" scoped>
.car-feature {
  &:nth-child(odd) {
    @apply md:flex-row-reverse;
    .car-feature__info {
      @apply md:max-lg:pl-10;
    }
    .car-feature__image-block {
      @apply lg:-mr-20;
    }
  }
  &:nth-child(even) {
    @apply md:flex-row;
    .car-feature__info {
      @apply md:max-lg:pr-10;
    }
    .car-feature__image-block {
      @apply lg:-ml-20;
    }
  }
}
</style>
