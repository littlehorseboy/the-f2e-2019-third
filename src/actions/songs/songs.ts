export const SET_CURRENTARTISTID = 'SET_CURRENTARTISTID';
export const SET_CURRENTALBUMID = 'SET_CURRENTALBUMID';
export const SET_CURRENTSONGID = 'SET_CURRENTSONGID';
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

interface SetCurrentAlbumIdActionI {
  type: typeof SET_CURRENTALBUMID;
  payload: {
    albumId: number;
  };
}

export const setCurrentAlbumtId = (albumId: number): SetCurrentAlbumIdActionI => ({
  type: SET_CURRENTALBUMID,
  payload: {
    albumId,
  },
});

interface SetCurrentSongIdActionI {
  type: typeof SET_CURRENTSONGID;
  payload: {
    songId: number;
  };
}

export const setCurrentSongId = (songId: number): SetCurrentSongIdActionI => ({
  type: SET_CURRENTSONGID,
  payload: {
    songId,
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
| SetCurrentAlbumIdActionI
| SetCurrentSongIdActionI
| ToggleArtistFollwerActionI;
