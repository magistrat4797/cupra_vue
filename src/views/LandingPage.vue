<template>
  <div>
  <the-header />
  <hero-section>
    <template #subtitle>CUPRA Formentor</template>
    <template #title>Wejdź do świata Cupra. Poznaj prawdziwą moc i&nbsp;sportowego ducha marki.</template>
    <template #actions>
      <base-link href="#" btn-style="secondary">Ruszaj na jazdę testową</base-link>
    </template>
  </hero-section>
  <car-showcase-section />
  <car-features-section />
  <the-footer />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from '@/components/TheFooter.vue';
import BaseLink from '@/components/base/BaseLink.vue';
import HeroSection from '@/components/sections/hero/HeroSection.vue';
import CarShowcaseSection from '@/components/sections/car/CarShowcaseSection.vue';
import CarFeaturesSection from '@/components/sections/car/CarFeaturesSection.vue';
</script>