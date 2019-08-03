export const SET_CURRENTARTISTID = 'SET_CURRENTARTISTID';
export const TOGGLE_ARTIST_FOLLWER = 'TOGGLE_ARTIST_FOLLWER';

interface SetCurrentArtistIdActionI {
  type: typeof SET_CURRENTARTISTID;
  payload: {
    artistId: number;
  };
}

export const setCurrentArtistId = (artistId: number): SetCurrentArtistIdActionI => ({
  type: SET_CURRENTARTISTID,
  payload: {
    artistId,
  },
});

interface ToggleArtistFollwerActionI {
  type: typeof TOGGLE_ARTIST_FOLLWER;
  payload: {
    toggleNumber: number;
  };
}

export const toggleArtistFollower = (toggleNumber: number): ToggleArtistFollwerActionI => ({
  type: TOGGLE_ARTIST_FOLLWER,
  payload: {
    toggleNumber,
  },
});

export type songsActionTypes = SetCurrentArtistIdActionI
| ToggleArtistFollwerActionI;
