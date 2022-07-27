<template>
  <div>
    <h1>Resultados</h1>
    <pre>{{ serverData }}</pre>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { serverData } from '../auth.js'

const router = useRouter()
if (serverData.value?.status?.mode !== 'results') router.replace('/')
</script>
