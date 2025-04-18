<script setup lang="ts">
import styles from './ArtistsDetails.module.css'
import type { SpotifyArtistDetails } from '../../types/NewReleases.types.ts'

const props = defineProps<{
  artist: SpotifyArtistDetails
}>()

const imageUrl = props.artist.images[2].url
const name = props.artist.name
const followers = props.artist.followers.total
const popularity = props.artist.popularity

const formatFollowersToReadable = (num: number): string => {
  return num.toLocaleString()
}
</script>

<template>
  <div :class="styles.container">
    <img :alt="name" :class="styles.image" :src="imageUrl" />
    <p>Followers: {{ formatFollowersToReadable(followers) }}</p>
    <p>Popularity Score: {{ popularity }}</p>
  </div>
</template>
