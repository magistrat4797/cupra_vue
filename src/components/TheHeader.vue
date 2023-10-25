<template>
  <header
    class="header fixed top-0 left-0 right-0 z-100 bg-secondary-white"
    ref="header"
  >
    <main-container>
      <div class="header-box flex flex-wrap justify-between items-center min-h-header h-auto">
        <div class="flex items-center mr-4 xl:mr-16 2xl:mr-24">
          <a href="#">
            <LogoIcon/>
          </a>
        </div>
        <span
          class="hamburger xl:hidden"
          @click="menuToggle"
          :class="{ open: open }"
        >
          <span class="hamburger__line"></span>
          <span class="hamburger__line"></span>
          <span class="hamburger__line"></span>
        </span>
        <div
          class="header-nav overflow-hidden xl:overflow-visible duration-300 ease-in-out absolute left-0 right-0 xl:static h-[calc(100vh-84px)] xl:h-full top-[84px] justify-center xl:flex-1 xl:justify-between flex flex-col xl:flex-row items-center xl:opacity-100 xl:visible"
          :class="[open ? 'animated opacity-1 visible' : 'opacity-0 invisible']"
        >
          <ul class="flex items-center flex-col mb-16 xl:mb-0 w-full xl:w-auto xl:flex-row gap-2 xl:gap-8">
            <li
              v-for="navLink in navLinks"
              :key="navLink.name"
              class="header-nav__item w-full xl:w-auto"
            >
              <a
                href="#"
                :data-target="navLink.target"
                class="flex justify-center xl:justify-start items-center relative h-10 xl:h-header font-light text-md xl:text-base hover:underline"
                @click.prevent="scrollToComponent(navLink)"
              >
                {{ navLink.name }}
              </a>
            </li>
          </ul>
          <div class="flex flex-wrap flex-col w-full xl:w-auto xl:flex-row items-center gap-4 xl:gap-6">
            <a href="tel:+48585066565" class="text-center w-full xl:w-auto text-md xl:text-xs xl:mr-6 font-medium hover:underline">+48 58 506 65 65</a>
            <base-link href="#" btn-style="primary-outlined" class="w-full max-w-[200px] xl:w-auto">Zapytaj o ofertę</base-link>
            <base-link href="#" btn-style="primary" class="w-full max-w-[200px] xl:w-auto" data-target="testdrive">Umów jazdę próbną</base-link>
          </div>
        </div>
      </div>
    </main-container>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import type { NavLink } from '@/models/Navigation';

import MainContainer from "@/components/MainContainer.vue";
import BaseLink from "@/components/base/BaseLink.vue";

import LogoIcon from "@/assets/images/logo.svg";

const navLinks = [
  { name: "Samochody", target: "cars" },
  { name: "Jazda próbna", target: "testdrive" },
  { name: "Oferta" },
  { name: "Salony Cupra" },
];

const open = ref(false);
const header = ref("");

const checkIsOverflowHidden = () => {
  return window.innerWidth >= 1280 && document.body.classList.contains("overflow-hidden");
};

const menuToggle = () => {
  open.value = !open.value;
  
  const isOverflowHiddenCurrent = checkIsOverflowHidden();

  if (open.value) {
    document.body.classList.toggle("overflow-hidden", !isOverflowHiddenCurrent);
    return;
  }

  document.body.classList.remove("overflow-hidden");
};

const handleResize = () => {
  const isOverflowHiddenCurrent = checkIsOverflowHidden();

  if (!open.value) return;

  if (isOverflowHiddenCurrent) {
    open.value = false;
    document.body.classList.remove("overflow-hidden");
  }
};

onMounted(() => {
  window.addEventListener("resize", () => {
    handleResize();
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    handleResize();
  });
});

const scrollToComponent = (link: NavLink) => {
  if (!link.target) return;
  
  const element = document.getElementById(link.target);
  
  if (!element) return;
  
  const position = element.offsetTop;
  window.scrollTo({ top: position - 84, behavior: "smooth" });
  
  if (window.innerWidth < 1280) {
    menuToggle();
  }
};
</script>

<style lang="scss" scoped>
.animated {
  &::before {
    transform: translate(0, 0) scale(2) !important;
  }
}
.hamburger {
  @apply relative w-7 h-8 cursor-pointer;
  &__line {
    @apply block absolute h-[2px] w-full bg-black rounded opacity-100 ease-in-out duration-300 rotate-0;
    &:nth-child(1) {
      top: 7px;
    }
    &:nth-child(2) {
      top: 14px;
    }
    &:nth-child(3) {
      top: 21px;
    }
    .hamburger.open & {
      &:nth-child(1) {
        top: 14px;
        transform: rotate(135deg);
      }
      &:nth-child(2) {
        opacity: 0;
        transform: translateX(-13px);
      }
      &:nth-child(3) {
        top: 14px;
        transform: rotate(-135deg);
      }
    }
  }
}
.header {
  &-nav {
    &::before {
      @apply content-[''] absolute top-0 right-0 bg-secondary-white ease-in-out duration-300 rounded-full w-full h-full -z-1 translate-x-full -translate-y-full xl:hidden;
    }
  }
}
</style>
