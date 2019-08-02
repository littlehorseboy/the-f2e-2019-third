import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import IconButton from '@material-ui/core/IconButton';
import Slider from '@material-ui/core/Slider';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SongsPanel from '../../components/SongsPanel/SongsPanel';
import AudioContainer from '../../components/AudioContainer/AudioContainer';
import ArtistPanel from '../../components/ArtistPanel/ArtistPanel';
import UserPanel from '../../components/UserPanel/UserPanel';

const songPhoto = require('../../assets/images/Ed_Sheeran_-_No._6_Collaborations_Project.png'); // eslint-disable-line @typescript-eslint/no-var-requires

const BorderLinearProgress = withStyles({
  root: {
    height: 12,
    backgroundColor: '#E5B4B7',
  },
  bar: {
    borderRadius: 8,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

const PrettoSlider = withStyles({
  root: {
    height: 8,
  },
  thumb: {
    display: 'none',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  leftPanel: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  artistAndSongsPanel: {
    flexGrow: 1,
    display: 'flex',
  },
  controlPanel: {
    height: 100,
    backgroundImage: 'linear-gradient(to top, #361024 0%, #772020 100%)',
    display: 'flex',
    flexDirection: 'column',
  },
  progressTimeText: {
    color: '#FFFFFF',
    fontSize: '0.9rem',
    paddingLeft: 8,
    paddingRight: 8,
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
      maxWidth: 40,
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
  },
  volumeSliderContainer: {
    width: 100,
  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

  const [value, setValue] = React.useState<number | number[]>(30);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftPanel}>
        <div className={classes.artistAndSongsPanel}>
          <ArtistPanel />

          <SongsPanel />
        </div>

        <div className={classes.controlPanel}>
          <div>
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={50}
            />
          </div>
          <div className={classes.progressTimeText}>
            <div>3:38</div>
            <div>3:39</div>
          </div>
          <div className={classes.playerContainer}>
            <div className={classes.playerTitleContainer}>
              <img src={songPhoto} alt="songPhoto" />
              <div>
                <div>I Don’t Care</div>
                <div>Ed Sheehan (with Justin Bieber)</div>
              </div>
            </div>

            <AudioContainer />

            <div className={classes.volumeContainer}>
              <div>
                <IconButton aria-label="Dashboard" color="inherit">
                  <VolumeUpIcon />
                </IconButton>
              </div>

              <div className={classes.volumeSliderContainer}>
                <PrettoSlider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
              </div>

              <div>
                <IconButton aria-label="Dashboard" color="inherit">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserPanel />
    </div>
  );
}
