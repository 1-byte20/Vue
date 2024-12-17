<template>
<h1>Új feladat</h1>
  <form @submit.prevent="save">
    <input type="text" v-model="title" placeholder="Feladat neve"><br> <br>
    <textarea v-model="desc"></textarea><br><br>
    <input type="date" v-model="date"><br><br>
    <button>Mentés</button>
  </form>
</template>

<script setup>
import { useTaskStore} from '@/stores/tasks';
import {ref} from 'vue'
import {useRoute, useRouter} from 'vue-router';

const tasks = useTaskStore()
const title = ref()
const desc = ref()
const date = ref()
const router = useRouter()

const save = () =>{
  let newId = tasks.tasks.length
  let task = {
    title : title.value,
    desc : desc.value,
    deadline : date.value,
    id : newId
  }
  tasks.tasks.push(task)
  router.push('/')
}
</script>

<style scoped>

</style>
