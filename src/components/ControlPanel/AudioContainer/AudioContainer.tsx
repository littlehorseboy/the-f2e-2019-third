import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import random from 'lodash/random';
import shuffle from 'lodash/shuffle';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeattIcon from '@material-ui/icons/Repeat';
import { storeTypes } from '../../../reducers/configureStore';
import { SongsI, SongI } from '../../../reducers/songs/songs';
import { audioPlay, audioStop } from '../../../actions/audio/audio';
import { setCurrentSongId } from '../../../actions/songs/songs';
import AlertDialog from './AlertDialog/AlertDialog';

const useStyles = makeStyles({
  root: {
    color: '#FFFFFF',
    '& > div > button > span > svg': {
      fontSize: '1.8rem',
    },
    '& > div > button:nth-child(3)': {
      border: '1px solid #FFFFFF',
    },
  },
});

interface PropsI {
  sliderChangeProgressValue: number;
  setPlaybackProgressValue: React.Dispatch<React.SetStateAction<number | number[]>>;
  setPlaybackProgressMaxValue: React.Dispatch<React.SetStateAction<number | number[]>>;
  volumeValue: number;
  muted: boolean;
}

export default function AudioContainer(props: PropsI): JSX.Element {
  const classes = useStyles();

  const [alertDialogOpen, setAlertDialogOpen] = React.useState(false);

  const dispatch = useDispatch();

  const playMode = useRef<'classic' | 'shuffle' | 'repeat'>('classic');

  const previousCurrentSongIdRef = useRef<null | number>(null);
  const nextCurrentSongIdRef = useRef<null | number>(null);

  const audioEl = useRef<HTMLAudioElement | null>(null);
  // (window as any).audioEl = audioEl;

  const songs = useSelector((
    state: storeTypes,
  ): SongsI => state.songsReducer);

  const currentId = useRef<number | null>(null);

  useEffect((): void => {
    currentId.current = songs.currentSongId;
  }, [songs.currentSongId]);

  useEffect((): void => {
    if (audioEl) {
      (audioEl.current as HTMLAudioElement).volume = props.volumeValue;
    }
  }, [props.volumeValue]);

  useEffect((): void => {
    if (audioEl) {
      (audioEl.current as HTMLAudioElement).muted = props.muted;
    }
  }, [props.muted]);


  const setNextAndPreviousSongId = (): void => {
    if (songs.currentSongId) {
      const findSong = songs.songs
        .find((song): boolean => song.songId === songs.currentSongId);

      if (playMode.current === 'classic' || playMode.current === 'repeat') {
        // 填下一首的 songId 進 nextCurrentSongIdRef
        let findNextSong = songs.songs
          .filter((song): boolean => song.albumId === songs.currentAlbumId)
          .find((song): boolean => song.songId === (findSong ? findSong.songId + 1 : null));
        if (!findNextSong) {
          [findNextSong] = songs.songs
            .filter((song): boolean => song.albumId === songs.currentAlbumId);
        }

        if (findNextSong) {
          nextCurrentSongIdRef.current = findNextSong.songId;
        }

        // 填上一首的 songId 進 previousCurrentSongIdRef
        let findPreviousSong = songs.songs
          .filter((song): boolean => song.albumId === songs.currentAlbumId)
          .find((song): boolean => song.songId === (findSong ? findSong.songId + -1 : null));
        if (!findPreviousSong) {
          [findPreviousSong] = songs.songs.slice(-1);
        }

        if (findPreviousSong) {
          previousCurrentSongIdRef.current = findPreviousSong.songId;
        }
      } else if (playMode.current === 'shuffle') {
        // 填下一首的 songId 進 nextCurrentSongIdRef
        const filterSongs = songs.songs
          .filter((song): boolean => song.albumId === songs.currentAlbumId
            && song.songId !== songs.currentSongId);
        if (filterSongs.length > 1) {
          const findNextSong = (shuffle(filterSongs) as SongI[])
            .find((song: SongI): SongI => song);

          if (findNextSong) {
            nextCurrentSongIdRef.current = findNextSong.songId;
          }
        }

        // 填上一首的 songId 進 previousCurrentSongIdRef
        if (filterSongs.length > 1) {
          const filterSongsOneMoreTime = filterSongs
            .filter((song): boolean => song.songId !== nextCurrentSongIdRef.current);

          if (filterSongsOneMoreTime) {
            const findPreviousSong = (shuffle(filterSongsOneMoreTime) as SongI[])
              .find((song: SongI): SongI => song);

            if (findPreviousSong) {
              previousCurrentSongIdRef.current = findPreviousSong.songId;
            }
          }
        }
      }
    }
  };

  useEffect((): void => {
    if (audioEl) {
      (audioEl.current as HTMLAudioElement).addEventListener('loadedmetadata', (event): void => {
        props.setPlaybackProgressMaxValue(
          Math.floor((event.target as HTMLMediaElement).duration),
        );

        // 廣告隨機跳 六分之一
        const pandoraBox = random(0, 5);
        if (!pandoraBox) {
          setAlertDialogOpen(true);
        }
      });
      (audioEl.current as HTMLAudioElement).addEventListener('timeupdate', (event): void => {
        props.setPlaybackProgressValue(
          Math.floor((event.target as HTMLMediaElement).currentTime),
        );
      });
      (audioEl.current as HTMLAudioElement).addEventListener('ended', (): void => {
        dispatch(audioStop());
        if (nextCurrentSongIdRef.current) {
          setTimeout((): void => {
            setNextAndPreviousSongId();
            if (playMode.current === 'repeat') {
              dispatch(setCurrentSongId(currentId.current as number));
            } else {
              dispatch(setCurrentSongId(nextCurrentSongIdRef.current as number));
            }
            dispatch(audioPlay());
          }, 500);
        }
      });
    }
  }, [audioEl]);

  useEffect((): void => {
    if (audioEl) {
      (audioEl.current as HTMLAudioElement).currentTime = props.sliderChangeProgressValue;
    }
  }, [props.sliderChangeProgressValue]);

  const audioStatus = useSelector((
    state: storeTypes,
  ): 'paused' | 'playing' | 'stopped' => state.audioReducer.audioStatus);

  useEffect((): void => {
    if (audioStatus === 'playing') {
      if (songs.currentSongId) {
        (audioEl.current as HTMLAudioElement).play();
      }
    } else if (audioStatus === 'stopped') {
      (audioEl.current as HTMLAudioElement).pause();
    }
  }, [audioStatus]);

  useEffect((): void => {
    if (songs.currentSongId) {
      const findSong = songs.songs
        .find((song): boolean => song.songId === songs.currentSongId);
      (audioEl.current as HTMLAudioElement).src = findSong ? findSong.path : '';

      setNextAndPreviousSongId();
    }
  }, [songs.currentSongId]);

  const hanldePlayOrPauseClick = (): void => {
    if (audioStatus === 'playing') {
      dispatch(audioStop());
    } else if (audioStatus === 'stopped') {
      dispatch(audioPlay());
    }
  };

  const handleSkipPreviousSong = (): void => {
    if (previousCurrentSongIdRef.current) {
      if (audioStatus === 'playing') {
        setTimeout((): void => {
          dispatch(audioPlay());
        }, 300);
      }
      dispatch(audioStop());
      setNextAndPreviousSongId();
      dispatch(setCurrentSongId(previousCurrentSongIdRef.current as number));
    }
  };

  const handleSkipNextSong = (): void => {
    if (nextCurrentSongIdRef.current) {
      if (audioStatus === 'playing') {
        setTimeout((): void => {
          dispatch(audioPlay());
        }, 300);
      }
      dispatch(audioStop());
      setNextAndPreviousSongId();
      dispatch(setCurrentSongId(nextCurrentSongIdRef.current as number));
    }
  };

  const handleChangeShuffleMode = (): void => {
    if (playMode.current === 'shuffle') {
      playMode.current = 'classic';
    } else {
      playMode.current = 'shuffle';
    }
  };

  const handleChangeRepeatMode = (): void => {
    if (playMode.current === 'repeat') {
      playMode.current = 'classic';
    } else {
      playMode.current = 'repeat';
    }
  };

  return (
    <>
      <audio ref={audioEl} data-testid="audio">
        <track kind="captions" srcLang="en" label="english_captions" />
      </audio>

      <div className={classes.root}>
        <div>
          <IconButton
            color="inherit"
            style={{ backgroundColor: playMode.current === 'shuffle' ? 'rgba(150, 74, 77, 0.3)' : '' }}
            onClick={handleChangeShuffleMode}
          >
            <ShuffleIcon />
          </IconButton>
          <IconButton color="inherit" onClick={handleSkipPreviousSong}>
            <SkipPreviousIcon />
          </IconButton>

          <IconButton color="inherit" onClick={hanldePlayOrPauseClick}>
            {audioStatus === 'playing'
              ? <PauseIcon />
              : <PlayArrowIcon />}
          </IconButton>

          <IconButton color="inherit" onClick={handleSkipNextSong}>
            <SkipNextIcon />
          </IconButton>
          <IconButton
            color="inherit"
            style={{ backgroundColor: playMode.current === 'repeat' ? 'rgba(150, 74, 77, 0.3)' : '' }}
            onClick={handleChangeRepeatMode}
          >
            <RepeattIcon />
          </IconButton>
        </div>
      </div>

      <AlertDialog open={alertDialogOpen} setOpen={setAlertDialogOpen} />
    </>
  );
}
