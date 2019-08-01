import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SongsPanel from '../../components/SongsPanel/SongsPanel';
import AudioContainer from '../../components/AudioContainer/AudioContainer';
import UserPanel from '../../components/UserPanel/UserPanel';

const img = require('../../assets/images/astist_photo.png'); // eslint-disable-line @typescript-eslint/no-var-requires

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
  artistPanel: {
    flexBasis: '35%',
    // backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  controlPanel: {
    height: 100,
    backgroundImage: 'linear-gradient(to top, #361024 0%, #772020 100%)',
  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftPanel}>
        <div className={classes.artistAndSongsPanel}>
          <div className={classes.artistPanel}>

          </div>

          <SongsPanel />
        </div>

        <div className={classes.controlPanel}>
          <AudioContainer />
        </div>
      </div>

      <UserPanel />
    </div>
  );
}
