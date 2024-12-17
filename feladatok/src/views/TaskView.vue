<script setup>
  import { useTaskStore } from '@/stores/tasks';
  const tasks = useTaskStore()
</script>

<template>
  <h1>Feladatok listája </h1>
  <div v-for="t in tasks.tasks" :key="t.id" class="task">
    <h3>{{ t.title }}</h3>
    <p>{{ t.desc }}</p>
    <button v-if="t.isFinished">Nincs kész</button>
    <button v-if="!t.isFinished">Kész</button>
  </div>
</template>

<style scoped>
.task{
  padding: 5px;
  width: 25%;
  border:  1px solid;
  border-radius: 5px;
}

</style>