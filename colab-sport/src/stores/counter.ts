import { ref, computed } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
    }
  },
  persist: true,
})
