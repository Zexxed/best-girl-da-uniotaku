<template>
  <div v-if="serverData">
    <h1>Eliminatórias</h1>
    <p>Você pode votar em quantas garotas você quiser das abaixo nessa etapa:</p>

    <div class="d-flex flex-column flex-md-row flex-items-center flex-md-items-center">
      <div
        v-for="entry of serverData.entries"
        class="col-4 border"
        :key="entry.id"
      >
        <h2>{{ entry.name }}</h2>
        <h3>{{ entry.anime }}</h3>
        <img :src="entry.image" class="col-12">
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { serverData } from '../auth.js'

const router = useRouter()
if (serverData.value?.status?.mode !== 'preliminary') router.replace('/')
</script>
