import { defineStore } from 'pinia';
import axios from 'axios';

export const useCarsStore = defineStore('cars', {
  state: () => ({
    cars: []
  }),
  actions: {
    async fetchCars() {
      try {
        const response = await axios.get('src/data/cars.json');
        this.cars = response.data;
      } catch (error) {
        console.error('Wystąpił problem podczas ładowania danych:', error);
      }
    }
  }
});
