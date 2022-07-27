<template>
  <div>
    <h1>Votação</h1>
    <pre>{{ serverData }}</pre>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { serverData } from '../auth.js'

const router = useRouter()
if (serverData.value?.status?.mode !== 'voting') router.replace('/')
</script>
