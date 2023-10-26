<template>
  <div>
  <the-header />
  <hero-section>
    <template #title>Wejdź do świata Cupra. Poznaj prawdziwą moc i&nbsp;sportowego ducha marki.</template>
    <template #subtitle>CUPRA Formentor</template>
    <template #actions>
      <base-link href="#" btn-style="secondary">Ruszaj na jazdę testową</base-link>
    </template>
  </hero-section>
  <car-showcase-section>
    <template #title>Wypróbuj</template>
    <template #subtitle>Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym połączeniem technologii, mocy, elegancji i komfortu.</template>
    <template #left-image>
      <img src="/src/assets/images/cupra_formentor_048.jpg" alt="Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.">
    </template>
    <template #left-image-text>Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.</template>
    <template #right-image>
      <img src="/src/assets/images/cupra_formentor_002.jpg" alt="Podróżuj z rozmachem bez kompromisów.">
    </template>
    <template #right-image-text>Podróżuj z rozmachem bez kompromisów.</template>
    <template #desc-title>Tylko dla odważnych</template>
    <template #desc-info>Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy, odważny i innowacyjny – zapewni Ci to, co najlepsze w marce CUPRA.</template>
    <template #desc-actions>
      <base-link href="#" btn-style="secondary">Umów jazdę próbną</base-link>
    </template>
  </car-showcase-section>
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