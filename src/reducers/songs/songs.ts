import songsInitState from './songsInitState';
import {
  songsActionTypes,
  TOGGLE_ARTIST_FOLLWER,
  SET_CURRENTARTISTID,
  SET_CURRENTALBUMID,
  SET_CURRENTSONGID,
} from '../../actions/songs/songs';

export interface ArtistI {
  artistId: number;
  artistName: string;
  artistPhotoPath: string;
  followers: number;
}

interface AlbumI {
  albumId: number;
  albumName: string;
  albumPhotoPath: string;
  released: Date;
  artistId: number;
}
export interface SongI {
  songId: number;
  songName: string;
  path: string;
  albumId: number;
}

export interface SongsI {
  currentArtistId: number | null;
  artist: ArtistI[];
  currentAlbumId: number | null;
  album: AlbumI[];
  currentSongId: number | null;
  songs: SongI[];
}

// 創作者 associate 專輯 associate 歌曲
const initState: SongsI = {
  currentArtistId: null,
  artist: [
    ...songsInitState.artist,
  ],
  currentAlbumId: null,
  album: [
    ...songsInitState.album,
  ],
  currentSongId: null,
  songs: [
    ...songsInitState.songs,
  ],
};

const reducer = (state = initState, action: songsActionTypes): SongsI => {
  switch (action.type) {
    case SET_CURRENTARTISTID:
      return {
        ...state,
        currentArtistId: action.payload.artistId,
      };
    case SET_CURRENTALBUMID:
      return {
        ...state,
        currentAlbumId: action.payload.albumId,
      };
    case SET_CURRENTSONGID:
      return {
        ...state,
        currentSongId: action.payload.songId,
      };
    case TOGGLE_ARTIST_FOLLWER:
      return {
        ...state,
        artist: [
          ...state.artist.map((artist): ArtistI => {
            if (artist.artistId === state.currentArtistId) {
              return {
                ...artist,
                followers: artist.followers + action.payload.toggleNumber,
              };
            }
            return artist;
          }),
        ],
      };
    default:
      return state;
  }
};

export default reducer;
