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
  },
});

export default function Main(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.leftPane}>
        <AudioContainer />
      </div>

      <RightPaneToolbar />
    </div>
  );
}
