import { useQuery } from '@tanstack/vue-query'
import { newReleasesService } from "./newReleasesService";
import { ALL_ARTISTS_ID } from '../../constants/constants';
import type { Ref } from 'vue';

export const useGetNewReleases = () => {
  return useQuery({ queryKey: ['new-releases'], queryFn: newReleasesService.getNewReleases })
}

export const useGetNewReleaseArtist = (id: Ref<string>) => {
  return useQuery({
    queryKey: ['new-release-artist', id],
    queryFn: () => newReleasesService.getNewReleaseArtists(id.value),
    enabled: () => id.value !== ALL_ARTISTS_ID
  })
}