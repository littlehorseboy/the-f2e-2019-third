import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SongsPanel from '../../components/SongsPanel/SongsPanel';
import ArtistPanel from '../../components/ArtistPanel/ArtistPanel';
import UserPanel from '../../components/UserPanel/UserPanel';
import ControlPanel from '../../components/ControlPanel/ControlPanel';

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

        <ControlPanel />
      </div>

      <UserPanel />
    </div>
  );
}
