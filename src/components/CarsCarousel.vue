<template>
  <div class="cars-carousel">
    <carousel v-bind="settings" :breakpoints="breakpoints" :wrapAround="true">
      <slide v-for="car in cars" :key="car.model.name">
        <div class="px-4 md:px-0">
          <div>
            <h2 class="text-lg md:text-md-heading lg:text-lg-heading leading-none pb-4 md:pb-8 lg:pb-14">{{ car.model.name }}</h2>
            <img :src="`/src/assets/images/cars/${car.image}`" :alt="car.model.name" />
          </div>
          <div class="flex justify-center">
            <div class="flex flex-col justify-center w-full max-w-carousel-slide-info">
              <div class="mt-2 md:mt-4 lg:mt-8 mb-4 md:mb-8 lg:mb-12 px-12 md:px-4">
                <p class="mb-0 font-light text-xs">{{ car.specs.powerDetails }}</p>
              </div>
              <div class="flex flex-wrap justify-between items-center text-xs font-light">
                <div class="w-full md:w-1/3 md:px-4 mb-1 md:mb-0">
                  <p class="mb-0">Dostępny w leasingu z {{ car.specs.leaseAvailability }} opłaty własnej</p>
                </div>
                <div class="w-1/2 md:w-1/3 md:px-4">
                  <p class="mb-0">Rata netto/mies. od* <span class="block text-lg font-medium leading-none">{{ car.specs.monthlyRate }}</span></p>
                </div>
                <div class="w-1/2 md:w-1/3 md:px-4">
                  <p class="mb-0">Cena brutto już od <span class="block text-lg font-medium leading-none">{{ car.specs.grossPrice }}</span></p>
                </div>
              </div>
              <div class="mt-6 md:mt-10 lg:mt-12">
                <base-link
                  btn-style="primary"
                  scroll-to="test-drive"
                >
                  Umów jazdę próbną
                </base-link>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import BaseLink from '@/components/base/BaseLink.vue';

import { Carousel, Slide, Navigation } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

defineProps({
  cars: {
    type: Object,
    default: () => {}
  }
});

const settings = ref({
  itemsToShow: 1,
  transition: 300,
});

const breakpoints = ref({
  1024: {
    itemsToShow: 1.4,
  },
  1280: {
    itemsToShow: 1.6,
  },
  1400: {
    itemsToShow: 1.8,
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

$nav-button-size-mobile: 37px;
$nav-button-size-desktop: 50px;
  .carousel {
    :deep(.carousel__prev),
    :deep(.carousel__next) {
      width: $nav-button-size-mobile;
      height: $nav-button-size-mobile;
      font-size: 23px;
      @apply bg-white text-tertiary-grey hover:bg-btn-secondary mx-0;
      @include md {
        width: $nav-button-size-desktop;
        height: $nav-button-size-desktop;
        font-size: 25px;
      }
    }
    :deep(.carousel__prev) {
      @apply left-4 lg:left-[12vw] xl:left-[16vw] 2xl:left-[21vw];
    }
    :deep(.carousel__next) {
      @apply right-4 lg:right-[12vw] xl:right-[16vw] 2xl:right-[21vw];
    }
    :deep(.carousel__slide) {
      @apply opacity-50;
    }
    :deep(.carousel__slide--active) {
      @apply opacity-100;
    }
  }
</style>