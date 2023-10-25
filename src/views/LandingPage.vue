<template>
  <div>
  <the-header />
  <top-box>
    <template #subtitle>CUPRA Formentor</template>
    <template #title>Wejdź do świata Cupra. Poznaj prawdziwą moc i&nbsp;sportowego ducha marki.</template>
    <template #actions>
      <base-link href="#" btn-style="secondary">Ruszaj na jazdę testową</base-link>
    </template>
  </top-box>
  <the-footer />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from '@/components/TheFooter.vue';
import BaseLink from '@/components/base/BaseLink.vue';
import TopBox from '@/components/TopBox.vue';
</script>