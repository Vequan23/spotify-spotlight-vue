<script setup lang="ts">
import styles from './NewReleaseListSkeleton.module.css'

const mockReleases = new Array(25).fill(null)
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.skeleton" v-for="(_, index) in mockReleases" :key="index"></div>
  </div>
</template>
