import React, { useRef, useEffect } from 'react';
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

const mp3 = require('../../../assets/mp3/Splashing_Around.mp3'); // eslint-disable-line @typescript-eslint/no-var-requires

export default function AudioContainer(): JSX.Element {
  const classes = useStyles();

  const audioEl = useRef<HTMLAudioElement | null>(null);

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
      (audioEl.current as HTMLAudioElement).play();
    }
  }, [songs.currentSongId]);

  const dispatch = useDispatch();

  const hanldePlayOrPauseClick = (): void => {
    if (audioStatus === 'playing') {
      dispatch(audioStop());
    } else if (audioStatus === 'stopped') {
      dispatch(audioPlay());
    }
  };

  return (
    <>
      <audio ref={audioEl} data-testid="audio" src={mp3}>
        <track kind="captions" srcLang="en" label="english_captions" />
      </audio>

      <div className={classes.root}>
        <div>
          <IconButton color="inherit">
            <ShuffleIcon />
          </IconButton>
          <IconButton color="inherit">
            <SkipPreviousIcon />
          </IconButton>

          <IconButton color="inherit" onClick={hanldePlayOrPauseClick}>
            {audioStatus === 'playing'
              ? <PauseIcon />
              : <PlayArrowIcon />}
          </IconButton>

          <IconButton color="inherit">
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
