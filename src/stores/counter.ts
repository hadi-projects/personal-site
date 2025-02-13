import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const current_route = ref('');
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function set_current_route(d: string) {
    current_route.value = d
    router.push({ name: d })
  }

  return { count, doubleCount, current_route, increment, set_current_route }
})
