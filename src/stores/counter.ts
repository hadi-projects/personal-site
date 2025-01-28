import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const current_porto = ref('');
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function set_current_porto(d: string) {
    current_porto.value = d
  }

  return { count, doubleCount, current_porto, increment, set_current_porto }
})
