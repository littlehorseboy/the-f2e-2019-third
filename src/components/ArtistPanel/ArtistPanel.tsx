import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { storeTypes } from '../../reducers/configureStore';
import { SongsI, ArtistI } from '../../reducers/songs/songs';
import { toggleArtistFollower, setCurrentArtistId } from '../../actions/songs/songs';

const useStyles = makeStyles({
  artistPanel: {
    color: '#FFFFFF',
    flexBasis: '35%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  dashboardContainer: {
    textAlign: 'right',
    paddingTop: 64,
    paddingRight: 32,
  },
  icon: {
    color: '#FFFFFF',
  },
  artistContainer: {
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)',
    paddingTop: 128,
    paddingBottom: 32,
    paddingLeft: 64,
    paddingRight: 32,
    '& > div:nth-child(1)': {
      color: '#E5B4B7',
    },
    '& > div:nth-child(2)': {
      fontSize: 24,
    },
    '& > div:nth-child(3)': {
      '& > div:nth-child(1)': {
        fontSize: '0.7rem',
      },
      paddingTop: 20,
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  followButton: {
    width: 150,
    borderRadius: 24,
    fontWeight: 'bold',
    borderColor: '#FFFFFF',
  },
  playButton: {
    width: 150,
    borderRadius: 24,
    fontWeight: 'bold',
  },
});

export default function ArtistPanel(): JSX.Element {
  const classes = useStyles();

  const songs = useSelector((
    state: storeTypes,
  ): SongsI => state.songsReducer);

  const dispatch = useDispatch();

  const findArtist = songs.artist.find((artist): ArtistI => artist);

  useEffect((): void => {
    if (findArtist) {
      dispatch(setCurrentArtistId(findArtist.artistId));
    }
  });

  const handleToggleArtistFollower = (): void => {
    dispatch(toggleArtistFollower(1));
  };

  return (
    <div className={classes.artistPanel} style={{
      backgroundImage: findArtist ? `url(${findArtist.artistPhotoPath})` : '',
    }}>
      <div className={classes.dashboardContainer}>
        <IconButton aria-label="Dashboard">
          <DashboardIcon fontSize="large" className={classes.icon} />
        </IconButton>
      </div>
      <div className={classes.artistContainer}>
        <div>ARTIST</div>
        <div>{findArtist && findArtist.artistName}</div>
        <div>
          <div>
            <div>{findArtist && findArtist.followers.toLocaleString()}</div>
            <div>Follwers</div>
          </div>
          <div>
            <Button
              variant="outlined"
              color="primary"
              className={classes.followButton}
              onClick={handleToggleArtistFollower}
            >
              FOLLOWING
            </Button>
          </div>
          <div>
            <Button variant="contained" color="primary" className={classes.playButton}>PLAY</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
