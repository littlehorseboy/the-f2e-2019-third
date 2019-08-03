import React, { useState } from 'react';
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

const songPhoto = require('../../assets/images/Ed_Sheeran_-_No._6_Collaborations_Project.png'); // eslint-disable-line @typescript-eslint/no-var-requires

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
      borderBottom: '1px solid #707070',
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  colorWhite: {
    color: '#FFFFFF',
  },
});

export default function SongsPanel(): JSX.Element {
  const classes = useStyles();

  const [albumLiked, setAlbumLiked] = useState(false);

  const handleAlbumLikeClick = (): void => {
    setAlbumLiked(!albumLiked);
  };

  return (
    <div className={classes.songsPanel}>
      <div className={classes.songTitle}>
        <div>
          <img src={songPhoto} alt="songPhoto" className={classes.songPhoto} />
        </div>
        <div className={classes.songTitleContent}>
          <div>2019</div>
          <div>No.6 Collaborations Project</div>
          <div>
            <div>
              <Button variant="contained" color="primary">PLAY</Button>
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
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">Beautiful People (featuring Khalid)</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
            <TableRow hover className={classes.tableRow}>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon color="primary" />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">1</TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="center">fat</TableCell>
              <TableCell className={classes.colorWhite} align="center">carbs</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
