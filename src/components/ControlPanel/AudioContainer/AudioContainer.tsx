import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeattIcon from '@material-ui/icons/Repeat';
import { storeTypes } from '../../../reducers/configureStore';
import { SongsI } from '../../../reducers/songs/songs';

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

  const [audioStatus, setAudioStatus] = useState<'playing' | 'stopped' | 'paused'>('stopped');

  const audioEl = useRef(null);

  const songs = useSelector((
    state: storeTypes,
  ): SongsI => state.songsReducer);

  useEffect((): void => {
    if (songs.currentSongId) {

    }
  }, [songs.currentSongId]);

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
          <IconButton color="inherit">
            <PlayArrowIcon />
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
