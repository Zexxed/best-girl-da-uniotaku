<template>
  <div>
    Processando login...
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { checkToken } from '../auth.js'

const route = useRoute()
const router = useRouter()

async function checkLoginWrapped () {
  try {
    await checkToken(route.query.token)
  } catch {
    router.push('/')
  }
}

onMounted(checkLoginWrapped)
</script>
