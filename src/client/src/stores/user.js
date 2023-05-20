import { ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => {
    const id = ref(null)
    function isLoggedIn() {
      return id.value != null
    }

    function logout() {
      id.value = null
    }

    return { id, isLoggedIn, logout }
  },
  persist: true,
})
