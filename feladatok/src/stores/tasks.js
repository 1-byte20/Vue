import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref([
    {
        title : "Első feladat",
        desc : "Részletes leírás",
        deadline : "2025-01-01",
        isFinished : true,
        id : 1
    },
    {
        title : "Halészlé",
        desc : "ide kerül a recept",
        deadline : "2024-12-24",
        isFinished : false,
        id : 2
    }
  ])
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

  return { tasks }
})
