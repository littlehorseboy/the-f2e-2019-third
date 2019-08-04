import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AudioContainer from './AudioContainer/AudioContainer';
import { storeTypes } from '../../reducers/configureStore';
import { SongsI } from '../../reducers/songs/songs';

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
    minWidth: 310,
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
    minWidth: 310,
    justifyContent: 'flex-end',
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
  const [volumeValue, setVolumeValue] = useState<number | number[]>(0.7);
  const [muted, setMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const songs = useSelector((
    state: storeTypes,
  ): SongsI => state.songsReducer);

  const findSong = songs.songs
    .find((song): boolean => song.songId === songs.currentSongId);

  const findAlbum = songs.album
    .find((album): boolean => album.albumId === (findSong ? findSong.albumId : null));

  const findArtist = songs.artist
    .find((artist): boolean => artist.artistId === (findAlbum ? findAlbum.artistId : null));

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

  const hanldeChangeIsLiked = (): void => {
    setIsLiked(!isLiked);
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
          <img src={findAlbum ? findAlbum.albumPhotoPath : ''} alt="songPhoto" />
          <div>
            <div>{findSong ? findSong.songName : ''}</div>
            <div>{findArtist ? findArtist.artistName : ''}</div>
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
            <IconButton aria-label="Dashboard" color="inherit" onClick={hanldeChangeIsLiked}>
              {isLiked
                ? <FavoriteIcon />
                : <FavoriteBorderOutlinedIcon />}
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
