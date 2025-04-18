<script setup lang="ts">
import styles from './NewRelease.module.css'
import type { SpotifyAlbum } from '../../types/NewReleases.types.ts'
import BaseLink from '@/components/common/BaseLink.vue'

const props = defineProps<{
  release?: SpotifyAlbum
}>()

if (!props.release) {
  throw new Error('Release prop is required')
}

const { name, artists, images, release_date } = props.release
const formattedDate = new Date(release_date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
const imageUrl = images[0].url
const artistName = artists[0].name
const artistLink = artists[0].external_urls.spotify
</script>

<template>
  <div>
    <img alt="" :class="styles.artwork" :src="imageUrl" />
    <div :class="styles.metadataContainer">
      <p :class="styles.name">{{ name }}</p>
      <BaseLink :href="artistLink" :class="styles.artistName">
        {{ artistName }}
      </BaseLink>
      <p :class="styles.date">{{ formattedDate }}</p>
    </div>
  </div>
</template>
