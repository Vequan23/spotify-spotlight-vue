<script setup lang="ts">
import styles from './NewReleaseList.module.css'
import NewRelease from '../NewRelease/NewRelease.vue'
import { SpotifyAlbum } from '../../types/NewReleases.types.ts'

defineProps<{
  newReleases: SpotifyAlbum[]
}>()
</script>

<template>
  <div :class="styles.container">
    <NewRelease v-for="release in newReleases" :key="release.id" :release="release" />
  </div>
</template>
