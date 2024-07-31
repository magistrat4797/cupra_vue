<template>
    <footer class="footer bg-white py-6 md:py-8 border-t" id="page-footer">
      <main-container>
        <div
          class="flex flex-wrap justify-between items-center flex-col text-center md:flex-row text-xs font-light"
        >
          <div class="mb-4 md:mb-0">Copyright © 2024. All rights reserved. Powered by&nbsp;<a href="https://isulyma.netlify.app/" class="inline-link" title="Ioann Sulyma" target="_blank" rel="nofollow">Ioann&nbsp;Sulyma</a></div>
          <div>
            <ul class="flex justify-center items-center gap-4">
              <li v-for="socialLink in socialLinks" :key="socialLink.name">
                <a
                  :href="socialLink.url"
                  :title="socialLink.name"
                  target="_blank"
                  rel="nofollow"
                  class="social-link text-primary-grey hover:text-tertiary-grey/70 ease-in-out duration-300"
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

<style lang="scss" scoped>
    .social-link {
        display: flex;
        width: 24px;
        height: 24px;
    }
</style>

<script lang="ts" setup>
import MainContainer from '@/components/MainContainer.vue';

import GithubIcon from '@/assets/images/icons/github.svg';
import LinkedinIcon from '@/assets/images/icons/linkedin.svg';

const socialLinks = [
  {
    name: 'Github',
    url: 'https://github.com/magistrat4797',
    icon: GithubIcon
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/isulyma/',
    icon: LinkedinIcon
  }
];
</script>
