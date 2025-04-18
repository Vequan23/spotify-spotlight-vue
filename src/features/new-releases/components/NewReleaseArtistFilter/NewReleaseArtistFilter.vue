<script setup lang="ts">
import SpotifyArtist from '../../types/NewReleases.types.ts'
import { ALL_ARTISTS_ID } from '../../constants/constants'

defineProps<{
  releaseArtists?: SpotifyArtist[]
}>()

const emit = defineEmits<{
  (e: 'onArtistSelection', value: string): void
}>()

const handleChange = (event: Event) => {
  const select = event.target as HTMLSelectElement
  emit('onArtistSelection', select.value)
}
</script>

<template>
  <select @change="handleChange">
    <option :value="ALL_ARTISTS_ID">All Artists</option>
    <option v-for="(artist, index) in releaseArtists" :key="index" :value="artist.id">
      {{ artist.name }}
    </option>
  </select>
</template>
