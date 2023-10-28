<template>
  <footer class="footer bg-white py-6 md:py-11 mt-4 border-t">
    <main-container>
      <div
        class="flex flex-wrap justify-between items-center flex-col md:flex-row text-xs font-light"
      >
        <div class="mb-4 md:mb-0">SEAT CUPRA S.A.U. 2022 ®</div>
        <div class="mb-4 md:mb-0">
          <ul class="footer-links flex-col md:flex-row flex flex-wrap justify-center items-center">
            <li v-for="footerLink in footerLinks" :key="footerLink.name" class="footer-links__item">
              <a
                :href="footerLink.url"
                :title="footerLink.name"
                class="relative text-tertiary-grey hover:underline"
              >
                {{ footerLink.name }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="flex justify-center items-center gap-4 md:gap-8">
            <li v-for="socialLink in socialLinks" :key="socialLink.name">
              <a
                :href="socialLink.url"
                :title="socialLink.name"
                target="_blank"
                class="text-primary-grey hover:text-tertiary-grey/70 ease-in-out duration-300"
              >
                <component :is="socialLink.icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main-container>
  </footer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/MainContainer.vue';

import InstagramIcon from '@/assets/images/icons/instagram.svg';
import VimeoIcon from '@/assets/images/icons/vimeo.svg';

const footerLinks = [
  {
    name: 'Obowiązek informacyjny',
    url: '#'
  },
  {
    name: 'Polityka cookies',
    url: '#'
  }
];

const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: InstagramIcon
  },
  {
    name: 'Vimeo',
    url: 'https://vimeo.com/',
    icon: VimeoIcon
  }
];
</script>

<style lang="scss" scoped>
@import '@/assets/styles/styles.scss';

.footer-links {
  &__item {
    > a {
      @apply px-4;
    }
    @include md {
      &:not(:last-child) {
        & > a {
          &:after {
            content: '';
            @apply absolute top-0 right-0 bottom-0 w-[1px] h-full bg-light-grey;
          }
        }
      }
    }
  }
}
</style>
