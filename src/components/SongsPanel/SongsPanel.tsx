import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { storeTypes } from '../../reducers/configureStore';
import { SongsI } from '../../reducers/songs/songs';
import { audioPlay, audioStop } from '../../actions/audio/audio';
import { setCurrentSongId } from '../../actions/songs/songs';

const useStyles = makeStyles({
  songsPanel: {
    flexGrow: 1,
    height: 'calc(100vh - 100px)',
    overflowY: 'auto',
    color: '#FFFFFF',
    backgroundColor: '#1A1A1A',
  },
  songTitle: {
    marginTop: 64,
    marginBottom: 32,
    marginLeft: 40,
    marginRight: 40,
    display: 'flex',
  },
  songPhoto: {
    width: 110,
  },
  songTitleContent: {
    paddingLeft: 48,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    '& > div:nth-child(1)': {
      color: '#707070',
    },
    '& > div:nth-child(2)': {
      fontSize: 32,
      fontWeight: 'bold',
    },
    '& > div:nth-child(3)': {
      display: 'flex',
      alignItems: 'center',
      '& div:first-child': {
        flexGrow: 1,
      },
      '& div:first-child > button': {
        width: 150,
        borderRadius: 24,
      },
    },
  },
  songList: {
    '& th, td': {
      borderBottom: '1px solid rgba(255, 225, 255, 0.1)',
    },
  },
  tableRow: {
    cursor: 'pointer',
    '&.current': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  colorWhite: {
    color: '#FFFFFF',
  },
});

export default function SongsPanel(): JSX.Element {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [albumLiked, setAlbumLiked] = useState(false);

  const songs = useSelector((
    state: storeTypes,
  ): SongsI => state.songsReducer);

  const album = songs.album
    .find((albumObj): boolean => albumObj.albumId === songs.currentAlbumId);

  const songsInAlbum = songs.songs
    .filter((song): boolean => song.albumId === (album ? album.albumId : null));

  const handlePlayFirstSong = (): void => {
    dispatch(audioPlay());
  };

  const handleAlbumLikeClick = (): void => {
    setAlbumLiked(!albumLiked);
  };

  const handleClickSetCurrentSongId = (songId: number): void => {
    dispatch(audioStop());
    dispatch(setCurrentSongId(songId));
    setTimeout((): void => {
      dispatch(audioPlay());
    }, 300);
  };

  return (
    <div className={classes.songsPanel}>
      <div className={classes.songTitle}>
        <div>
          <img src={album ? album.albumPhotoPath : ''} alt="songPhoto" className={classes.songPhoto} />
        </div>
        <div className={classes.songTitleContent}>
          <div>2019</div>
          <div>{album ? album.albumName : ''}</div>
          <div>
            <div>
              <Button variant="contained" color="primary" onClick={handlePlayFirstSong}>PLAY</Button>
            </div>
            <div>
              <IconButton color="inherit" onClick={handleAlbumLikeClick}>
                {albumLiked
                  ? <FavoriteIcon />
                  : <FavoriteBorderIcon />}
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.songList}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.colorWhite} align="left"></TableCell>
              <TableCell className={classes.colorWhite} align="left"></TableCell>
              <TableCell className={classes.colorWhite} align="left">
                <Typography color="primary">TITLE</Typography>
              </TableCell>
              <TableCell className={classes.colorWhite} align="center">
                <Typography color="primary">LENGTH</Typography>
              </TableCell>
              <TableCell className={classes.colorWhite} align="center">
                <FavoriteIcon color="primary" />
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {songsInAlbum.map((song, index): JSX.Element => (
              <TableRow
                key={song.songId}
                hover
                className={classNames(
                  classes.tableRow,
                  { current: song.songId === songs.currentSongId },
                )}
                onClick={(): void => handleClickSetCurrentSongId(song.songId)}>
                <TableCell className={classes.colorWhite} align="left">
                  <MusicNoteIcon color="primary" />
                </TableCell>
                <TableCell className={classes.colorWhite} align="left" style={{ fontSize: 16 }}>
                  {index + 1}
                </TableCell>
                <TableCell className={classes.colorWhite} align="left" style={{ fontSize: 20 }}>
                  {song.songName}
                </TableCell>
                <TableCell className={classes.colorWhite} align="center">{song.songLength}</TableCell>
                <TableCell className={classes.colorWhite} align="center">
                  {(song.followers).toLocaleString()}
                  <IconButton color="inherit" style={{ padding: 4, marginLeft: 8 }}>
                    <FavoriteBorderIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
