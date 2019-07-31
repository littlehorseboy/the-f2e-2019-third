import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AudioContainer from '../../components/AudioContainer/AudioContainer';
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
        <div>
          <AudioContainer />
        </div>
        <div className={classes.controlPanel}>

        </div>
      </div>

      <UserPanel />
    </div>
  );
}
