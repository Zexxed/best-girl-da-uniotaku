<template>
  <div class="text-center pt-8 f2">
    <div v-if="state === 'no-api'" class="text-italic">Em breve! ☜(ﾟヮﾟ☜)</div>
    <div v-if="state === 'logged-in'">Você está logado: redirecionando...</div>
    <div v-if="state === 'logged-out'">Você não está logado: redirecionando...</div>
    <div v-if="state === 'offline'">Você ou a API estão offline ¯\(°_o)/¯</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { checkLogin } from '../auth.js'

const state = ref('loading')
onMounted(async () => {
  state.value = await checkLogin()
})
</script>
