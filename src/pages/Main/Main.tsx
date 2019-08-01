import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import SongsPanel from '../../components/SongsPanel/SongsPanel';
import AudioContainer from '../../components/AudioContainer/AudioContainer';
import ArtistPanel from '../../components/ArtistPanel/ArtistPanel';
import UserPanel from '../../components/UserPanel/UserPanel';

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
  playerContainer: {
    display: 'flex',
  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftPanel}>
        <div className={classes.artistAndSongsPanel}>
          <ArtistPanel />

          <SongsPanel />
        </div>

        <div className={classes.controlPanel}>
          <div>
            <LinearProgress />
          </div>
          <div>
            3:38 3:39
          </div>
          <div className={classes.playerContainer}>
            <div>img</div>
            <div>
              <div>I Don’t Care</div>
              <div>Ed Sheehan (with Justin Bieber)</div>
            </div>
            <AudioContainer />
            <div>音量</div>
            <div>Favorite</div>
          </div>
        </div>
      </div>

      <UserPanel />
    </div>
  );
}
