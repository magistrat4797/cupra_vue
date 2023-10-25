<template>
  <section class="top-box pt-header flex items-center md:items-end relative h-screen">
    <MainContainer>
      <div
        class="md:pb-[140px] text-white max-w-[740px] text-center md:text-left"
      >
        <template v-if="slots.subtitle">
          <div class="mb-2">
            <h2 class="text-base md:text-lg opacity-50">
              <slot name="subtitle" />
            </h2>
          </div>
        </template>
        <template v-if="slots.title">
          <div class="mb-8 md:mb-12">
            <h1 class="text-[23px] sm:text-xl md:text-3xl font-light leading-snug md:leading-none">
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
    </MainContainer>
  </section>
</template>

<script lang="ts" setup>
import MainContainer from "@/components/MainContainer.vue";
import { useSlots } from "vue";

const slots = useSlots();

defineProps({
  photo: String,
});
</script>

<style lang="scss" scoped>
.top-box {
  background: url("@/assets/images/top-box-bg.jpg") center no-repeat;
}
</style>
