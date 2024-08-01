import { defineStore } from 'pinia';
import axios from 'axios';

import type { CheckboxState } from '@/models/CheckboxState';

export const useStore = defineStore('store', {
  state: () => ({
    cars: [],
    checkboxes: {} as CheckboxState
  }),
  getters: {
    filteredCheckboxes(): CheckboxState {
      return Object.fromEntries(
        Object.entries(this.checkboxes).filter(([, value]) => value === true)
      );
    }
  },
  actions: {
    async fetchCars() {
      try {
        const response = await axios.get('/data/cars.json');
        this.cars = response.data;
      } catch (error) {
        console.error('Wystąpił problem podczas ładowania danych:', error);
      }
    },
    setCheckbox(key: string, value: boolean) {
      this.checkboxes[key] = value;
    }
  }
});
