import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    oddOrEven: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
  },
  actions: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
});
