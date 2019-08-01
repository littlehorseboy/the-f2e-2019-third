import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const homeSvg = require('../../assets/images/UserPanel/home-52.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const musicSvg = require('../../assets/images/UserPanel/ic_library_music_48px.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const archiveSvg = require('../../assets/images/UserPanel/archive-2.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const zoomSvg = require('../../assets/images/UserPanel/zoom-2.svg'); // eslint-disable-line @typescript-eslint/no-var-requires
const gearSvg = require('../../assets/images/UserPanel/settings-gear-63.svg'); // eslint-disable-line @typescript-eslint/no-var-requires

const useStyles = makeStyles({
  root: {
    width: 80,
    minHeight: '100vh',
    backgroundColor: '#4B3434',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  betweenTop: {
    minHeight: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
  },
  betweenBottom: {
    minHeight: 170,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 42,
  },
  avatar: {
    width: 56,
    height: 56,
    marginBottom: 24,
  },
});

export default function UserPanel(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.betweenTop}>
        <Avatar className={classes.avatar}>H</Avatar>

        <IconButton aria-label="homeSvg">
          <img src={homeSvg} alt="homeSvg" />
        </IconButton>

        <IconButton aria-label="musicSvg">
          <img src={musicSvg} alt="musicSvg" />
        </IconButton>

        <IconButton aria-label="archiveSvg">
          <img src={archiveSvg} alt="archiveSvg" />
        </IconButton>
      </div>

      <div className={classes.betweenBottom}>
        <IconButton aria-label="zoomSvg">
          <img src={zoomSvg} alt="zoomSvg" />
        </IconButton>

        <IconButton aria-label="gearSvg">
          <img src={gearSvg} alt="gearSvg" />
        </IconButton>
      </div>
    </div>
  );
}
