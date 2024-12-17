<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <nav>
    <RouterLink to="/">Feladatok </RouterLink> 
    <RouterLink to="/newtask">Új feladat</RouterLink>
  </nav>
 <RouterView/>
</template>

