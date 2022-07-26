<template>
  <div>
    TODO - Preliminaries.vue
    <pre>{{ serverData }}</pre>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { serverData } from '../auth.js'

const router = useRouter()
if (serverData.value?.status?.mode !== 'preliminary') router.replace('/')
</script>
