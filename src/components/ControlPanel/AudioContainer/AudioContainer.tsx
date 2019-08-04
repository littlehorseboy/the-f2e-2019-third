import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeattIcon from '@material-ui/icons/Repeat';
import { storeTypes } from '../../../reducers/configureStore';
import { SongsI } from '../../../reducers/songs/songs';
import { audioPlay, audioStop } from '../../../actions/audio/audio';
import { setCurrentSongId } from '../../../actions/songs/songs';

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

  const previousCurrentSongIdRef = useRef<null | number>(null);
  const nextCurrentSongIdRef = useRef<null | number>(null);

  const dispatch = useDispatch();

  const audioEl = useRef<HTMLAudioElement | null>(null);

  (window as any).audioEl = audioEl;

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

  useEffect((): void => {
    if (audioEl) {
      (audioEl.current as HTMLAudioElement).addEventListener('loadedmetadata', (event): void => {
        props.setPlaybackProgressMaxValue(
          Math.floor((event.target as HTMLMediaElement).duration),
        );
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
            dispatch(setCurrentSongId(nextCurrentSongIdRef.current as number));
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

  const songs = useSelector((
    state: storeTypes,
  ): SongsI => state.songsReducer);

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
      dispatch(setCurrentSongId(nextCurrentSongIdRef.current as number));
    }
  };

  return (
    <>
      <audio ref={audioEl} data-testid="audio">
        <track kind="captions" srcLang="en" label="english_captions" />
      </audio>

      <div className={classes.root}>
        <div>
          <IconButton color="inherit">
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
          <IconButton color="inherit">
            <RepeattIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}
