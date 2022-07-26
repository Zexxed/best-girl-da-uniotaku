<template>
  <div v-if="state === 'no-api'" class="coming-soon">Em breve!</div>
  <div v-if="state === 'logged-in'">Você está logado!</div>
  <div v-if="state === 'logged-out'">Você não está logado!</div>
  <div v-if="state === 'offline'">Você ou a API estão offline</div>
</template>

<style scoped>
.coming-soon {
  font-style: italic;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { checkLogin } from '../auth.js'

const state = ref('loading')
onMounted(async () => {
  state.value = await checkLogin()
})
</script>
