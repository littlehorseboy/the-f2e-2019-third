import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AudioContainer from '../../components/AudioContainer/AudioContainer';
import RightPaneToolbar from '../../components/RightPaneToolbar/RightPaneToolbar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  leftPane: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  playerToolbar: {
    height: 100,
    backgroundImage: 'linear-gradient(to top, #361024 0%, #772020 100%)',
  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftPane}>
        <div>
          <AudioContainer />
        </div>
        <div className={classes.playerToolbar}>

        </div>
      </div>

      <RightPaneToolbar />
    </div>
  );
}
