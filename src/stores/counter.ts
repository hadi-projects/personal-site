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
  //
  const show_dialog = ref(false)
  function set_show_dialog() {
    show_dialog.value = !show_dialog.value
  }

  return { count, doubleCount, current_route, increment, set_current_route, show_dialog, set_show_dialog }
})
