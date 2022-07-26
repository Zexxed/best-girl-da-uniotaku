<template>
  <div>
    <a href="https://tracker.uniotaku.com/forums.php?action=viewtopic&topicid=1185">
      <img src="./assets/logo.svg" class="logo" alt="Logo" />
    </a>
    <div class="coming-soon">Em breve!</div>
    <!-- Temporary, just to check if the API is working -->
    <div v-if="isLoggedIn">Você está logado!</div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
}
.coming-soon {
  font-style: italic;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
const isLoggedIn = ref(false)

const apiServer = import.meta.env.VITE_API_SERVER
async function checkLogin () {
  if (!apiServer) return
  const response = await fetch(apiServer)
  isLoggedIn.value = response.ok
}

onMounted(checkLogin)
</script>
