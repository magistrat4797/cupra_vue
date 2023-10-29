<template>
  <div>
    <the-header />
    <hero-section>
      <template #title
        >Wejdź do świata Cupra. Poznaj prawdziwą moc i&nbsp;sportowego ducha marki.</template
      >
      <template #subtitle>CUPRA Formentor</template>
      <template #actions>
        <base-link btn-style="secondary" scroll-to="test-drive">Ruszaj na jazdę testową</base-link>
      </template>
    </hero-section>
    <car-showcase-section>
      <template #title>Wypróbuj</template>
      <template #subtitle
        >Zobacz, poczuj i przekonaj się, czym jest CUPRA. Poznaj samochody, które są wyjątkowym
        połączeniem technologii, mocy, elegancji i komfortu.</template
      >
      <template #left-image>
        <img
          src="/src/assets/images/cupra_formentor_048.jpg"
          alt="Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale."
        />
      </template>
      <template #left-image-text
        >Design inspirowany wyścigami, stworzony z niezwykłą dbałością o detale.</template
      >
      <template #right-image>
        <img
          src="/src/assets/images/cupra_formentor_002.jpg"
          alt="Podróżuj z rozmachem bez kompromisów."
        />
      </template>
      <template #right-image-text>Podróżuj z rozmachem bez kompromisów.</template>
      <template #desc-title>Tylko dla odważnych</template>
      <template #desc-info>
        Model CUPRA, który idealnie wpisuje się w DNA marki. Unikalny SUV coupé, wyjątkowy, odważny
        i innowacyjny – zapewni Ci to, co najlepsze w marce CUPRA.
      </template>
      <template #desc-actions>
        <base-link btn-style="secondary" scroll-to="test-drive">Umów jazdę próbną</base-link>
      </template>
    </car-showcase-section>
    <cars-carousel-section :cars="cars" />
    <car-features-section :features="features" />
    
    <test-drive-section :cars="cars">
      <template #subtitle>Jazda próbna</template>
      <template #title>Umów się na bezpłatną jazdę próbną</template>
      <template #text>
        <p>
          Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w celu przedstawienia
          informacji handlowej w wybrany przez Ciebie sposób w związku z przesłanym zapytaniem.
          <show-more-link label="Czytaj więcej" label-opened="Zwiń">
            <template #hidden-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque interdum
              leo vitae interdum. Mauris at justo nec lorem scelerisque fringilla. Nunc viverra
              sapien ac erat efficitur, sed porttitor lectus feugiat. Sed sollicitudin ullamcorper
              arcu, ac venenatis diam porttitor eu. Duis vel leo ornare, malesuada tellus ut,
              blandit ipsum. Phasellus convallis viverra ligula, eu viverra velit lobortis ac.
              Aliquam ac urna viverra mi euismod convallis nec egestas leo. Praesent tempor ut quam
              non congue. In ut scelerisque felis. Nulla non urna augue. Sed sodales non urna a
              fringilla. Vestibulum facilisis posuere mattis. Etiam elit nunc, scelerisque vitae
              magna eu, ornare tincidunt mauris.
            </template>
          </show-more-link>
        </p>
        <p>
          Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości przedstawiania Ci
          atrakcyjnych ofert / promocji produktów, akcesoriów i usług marki CUPRA w przyszłości.
        </p>
        <template v-for="checkbox in consentCheckboxes" :key="checkbox.key">
          <base-checkbox
            :label="checkbox.label"
            :model-value="store.checkboxes[checkbox.key]"
            @update:modelValue="updateCheckbox(checkbox.key, $event)"
          />
        </template>
        <p>
          Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych
          oraz do wycofania w&nbsp;każdym momencie swojej zgody.
        </p>
        <p>
          Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego celu.
        </p>
        <p>
          Administratorem Twoich danych jest Plichta spółka z ograniczoną odpowiedzialnością Spółka
          Komandytowa, z&nbsp;siedzibą w Wejherowie przy ulicy Gdańskiej 13c. Zapraszamy do
          zapoznania się z naszą polityką prywatności umieszczoną pod linkiem:
          <a
            href="https://www.plichta.com.pl/polityka-prywatnosci"
            title="Polityka prywatności"
            target="_blank"
            >https://www.plichta.com.pl/polityka-prywatnosci</a
          >
        </p>
      </template>
      <template #actions>
        <base-button type="submit" btn-style="primary">Umów jazdę próbną</base-button>
      </template>
    </test-drive-section>
    <the-footer />
    <scroll-top-button />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import ShowMoreLink from '@/components/ShowMoreLink.vue';
import BaseLink from '@/components/base/BaseLink.vue';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseCheckbox from '@/components/base/BaseCheckbox.vue';
import ScrollTopButton from "@/components/ScrollTopButton.vue";
import HeroSection from '@/components/sections/hero/HeroSection.vue';
import CarShowcaseSection from '@/components/sections/car/CarShowcaseSection.vue';
import CarsCarouselSection from '@/components/sections/cars-carousel/CarsCarouselSection.vue';
import CarFeaturesSection from '@/components/sections/car/CarFeaturesSection.vue';
import TestDriveSection from '@/components/sections/test-drive/TestDriveSection.vue';

import { useStore } from '@/stores/store';

import type { CarDetails } from '@/models/CarDetails';

const store = useStore();

const cars = ref<CarDetails[]>([]);

const updateCheckbox = (key: string, value: boolean) => {
  store.setCheckbox(key, value);
};

const fetchCars = async () => {
  await store.fetchCars();
  cars.value = store.cars;
};

onMounted(fetchCars);

const consentCheckboxes = [
  {
    key: 'general_consent',
    label:
      'Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa w celu przedstawienia mi informacji marketingowych i handlowych dotyczących produktów i usług marki CUPRA oraz innych powiązanych z marką CUPRA akcesoriów, produktów i usług motoryzacyjnych za pomocą:'
  },
  {
    key: 'email',
    label: 'E-mail'
  },
  {
    key: 'phone',
    label: 'Telefon'
  },
  {
    key: 'sms_mms',
    label: 'Wiadomość SMS/MMS'
  }
];

const features = [
  {
    title: 'Poczuj pełną wolność jazdy dzięki licznym innowacjom.',
    subtitle: 'Technologia',
    image: 'cupra_formentor_294.jpg',
    action: {
      text: 'Umów jazdę próbną',
      href: '#',
      btnStyle: 'white',
      scrollTo: 'test-drive'
    }
  },
  {
    title: 'Crossover emanujący gracją, dynamizmem i czystym wyrafinowaniem.',
    subtitle: 'Potęga Designu',
    image: 'cupra_formentor_418.jpg',
    action: {
      text: 'Umów jazdę próbną',
      href: '#',
      btnStyle: 'white',
      scrollTo: 'test-drive'
    }
  },
  {
    title: 'Idealny komfort. Unikalny wystrój wnętrza stworzony w stylu CUPRY.',
    subtitle: 'Design wnętrza',
    image: 'cupra_formentor_381.jpg',
    action: {
      text: 'Umów jazdę próbną',
      href: '#',
      btnStyle: 'white',
      scrollTo: 'test-drive'
    }
  }
];
</script>
