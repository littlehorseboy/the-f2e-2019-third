import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AudioContainer from './AudioContainer/AudioContainer';

const songPhoto = require('../../assets/images/Ed_Sheeran_-_No._6_Collaborations_Project.png'); // eslint-disable-line @typescript-eslint/no-var-requires

// #region PlaybackProgressBar
const PlaybackProgressBar = withStyles({
  root: {
    height: 12,
    padding: 0,
  },
  thumb: {
    display: 'none',
  },
  rail: {
    height: 12,
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  track: {
    height: 12,
    backgroundColor: '#E5B4B7',
  },
})(Slider);
// #endregion

// #region VolumeSlider
const VolumeSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    display: 'none',
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
// #endregion

const useStyles = makeStyles({
  controlPanel: {
    height: 100,
    backgroundImage: 'linear-gradient(to top, #361024 0%, #772020 100%)',
    display: 'flex',
    flexDirection: 'column',
  },
  playbackProgressBarContainer: {
    display: 'flex',
  },
  progressTimeText: {
    color: '#FFFFFF',
    fontSize: '0.8rem',
    paddingTop: 4,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },
  playerContainer: {
    paddingLeft: 72,
    paddingRight: 72,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playerTitleContainer: {
    display: 'flex',
    '& > img': {
      maxWidth: 48,
      maxHeight: 48,
    },
    '& > div': {
      color: '#FFFFFF',
      paddingLeft: 16,
      '& > div:nth-child(1)': {
        fontSize: 20,
        fontWeight: 'bold',
      },
    },
  },
  volumeContainer: {
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    '& > div > button > span > svg': {
      fontSize: '1.8rem',
    },
  },
  volumeSliderContainer: {
    width: 100,
  },
});

export default function ControlPanel(): JSX.Element {
  const classes = useStyles();

  const [sliderChangeProgressValue, setSliderChangeProgressValue] = useState<number | number[]>(0);
  const [playbackProgressValue, setPlaybackProgressValue] = useState<number | number[]>(0);
  const [playbackProgressMaxValue, setPlaybackProgressMaxValue] = useState<number | number[]>(0);
  const [volumeValue, setVolumeValue] = useState<number | number[]>(0.5);
  const [muted, setMuted] = useState(false);

  const handlePlaybackProgressSliderChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ): void => {
    setPlaybackProgressValue(newValue);
  };

  const handlePlaybackProgressSliderChangeCommitted = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ): void => {
    setSliderChangeProgressValue(newValue);
  };

  const handleVolumeSliderChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[],
  ): void => {
    setVolumeValue(newValue);
  };

  const handleChangeMuted = (): void => {
    setMuted(!muted);
  };

  return (
    <div className={classes.controlPanel}>
      <div className={classes.playbackProgressBarContainer}>
        <PlaybackProgressBar
          color="secondary"
          value={playbackProgressValue}
          max={playbackProgressMaxValue as number}
          onChange={handlePlaybackProgressSliderChange}
          onChangeCommitted={handlePlaybackProgressSliderChangeCommitted}
        />
      </div>
      <div className={classes.progressTimeText}>
        <div>
          {Math.floor((playbackProgressValue as number) / 60).toString().padStart(2, '0')}
          :
          {((playbackProgressValue as number) % 60).toString().padStart(2, '0')}
        </div>
        <div>
          {Math.floor((playbackProgressMaxValue as number) / 60).toString().padStart(2, '0')}
          :
          {((playbackProgressMaxValue as number) % 60).toString().padStart(2, '0')}
        </div>
      </div>
      <div className={classes.playerContainer}>
        <div className={classes.playerTitleContainer}>
          <img src={songPhoto} alt="songPhoto" />
          <div>
            <div>I Don’t Care</div>
            <div>Ed Sheehan (with Justin Bieber)</div>
          </div>
        </div>

        <AudioContainer
          sliderChangeProgressValue={sliderChangeProgressValue as number}
          setPlaybackProgressValue={setPlaybackProgressValue}
          setPlaybackProgressMaxValue={setPlaybackProgressMaxValue}
          volumeValue={volumeValue as number}
          muted={muted}
        />

        <div className={classes.volumeContainer}>
          <div>
            <IconButton aria-label="Dashboard" color="inherit" onClick={handleChangeMuted}>
              {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
            </IconButton>
          </div>

          <div className={classes.volumeSliderContainer}>
            <VolumeSlider
              value={volumeValue}
              max={1}
              step={0.05}
              onChange={handleVolumeSliderChange}
              aria-labelledby="continuous-slider"
            />
          </div>

          <div>
            <IconButton aria-label="Dashboard" color="inherit">
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
