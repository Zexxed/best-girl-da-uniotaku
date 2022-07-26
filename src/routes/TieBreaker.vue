<template>
  <div>
    TODO - TieBreaker.vue
    <pre>{{ serverData }}</pre>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { serverData } from '../auth.js'

const router = useRouter()
if (serverData.value?.status?.mode !== 'tie-breaker') router.replace('/')
</script>
