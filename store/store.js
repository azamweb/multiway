import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
    const open = ref(false)
  return {
    open,
  };
});
