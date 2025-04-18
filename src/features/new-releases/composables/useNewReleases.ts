import { useGetNewReleases, useGetNewReleaseArtist } from '../services/newReleasesService/useNewReleasesService'
import { ref, computed } from 'vue';
import { ALL_ARTISTS_ID } from '../constants/constants';

export const useNewReleases = () => {
  const { data: newReleasesResponse, isPending: isFetchingReleases } = useGetNewReleases();
  const selectedArtistId = ref(ALL_ARTISTS_ID);
  const { data: selectedArtistDetails, isPending: isFetchingSelectingArtistsDetails } = useGetNewReleaseArtist(selectedArtistId);

  const newReleases = computed(() => newReleasesResponse?.value?.items || []);

  const releaseArtists = computed(() =>
    newReleases.value?.map((release) => release?.artists?.[0]) || []
  );

  const filteredReleases = computed(() => {
    if (!newReleases.value) return [];

    return newReleases.value.filter((release) => {
      if (selectedArtistId.value === ALL_ARTISTS_ID) return true;
      return release?.artists?.[0].id === selectedArtistId.value;
    });
  });

  const handleArtistSelection = (artistId: string) => {
    selectedArtistId.value = artistId;
  };


  return {
    releaseArtists,
    filteredReleases,
    handleArtistSelection,
    selectedArtistDetails,
    isFetchingReleases,
    isFetchingSelectingArtistsDetails,
    selectedArtistId
  }
}