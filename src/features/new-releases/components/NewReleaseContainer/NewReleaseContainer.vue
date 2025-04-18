<script setup lang="ts">
import styles from './NewReleaseContainer.module.css'
import NewReleaseArtistFilter from '../NewReleaseArtistFilter/NewReleaseArtistFilter.vue'
import NewReleasesList from '../NewReleaseList/NewReleaseList.vue'
import NewReleaseListSkeleton from '../NewReleaseListSkeleton/NewReleaseListSkeleton.vue'
import ArtistDetails from '../ArtistDetails/ArtistDetails.vue'
import { useNewReleases } from '../../composables/useNewReleases.ts'
const {
  releaseArtists,
  filteredReleases,
  handleArtistSelection,
  selectedArtistDetails,
  isFetchingReleases,
} = useNewReleases()
</script>

<template>
  <div :class="styles.container">
    <div>
      <div :class="styles.headerContainer">
        <h1>Spotify Album Releases</h1>
        <NewReleaseArtistFilter
          v-if="releaseArtists.length"
          :releaseArtists="releaseArtists ?? []"
          @onArtistSelection="handleArtistSelection"
        />
      </div>
      <NewReleaseListSkeleton v-if="isFetchingReleases" />
      <NewReleasesList v-else :newReleases="filteredReleases ?? []" />
    </div>
    <ArtistDetails v-if="selectedArtistDetails" :artist="selectedArtistDetails" />
  </div>
</template>
