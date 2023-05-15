import { ref } from "vue"
import { defineStore } from "pinia"

export const useCounterStore = defineStore("user", () => {
  const id = ref(null)
  function isLoggedIn() {
    return id.value !== null
  }

  return { id, isLoggedIn }
})
