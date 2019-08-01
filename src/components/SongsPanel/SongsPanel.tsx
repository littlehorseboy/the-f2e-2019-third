import React from 'react';
import SimpleBar from 'simplebar-react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

require('simplebar/dist/simplebar.min.css');

const useStyles = makeStyles({
  songsPanel: {
    flexGrow: 1,
    height: 'calc(100vh - 100px)',
    overflowY: 'auto',
    color: '#FFFFFF',
    backgroundColor: '#1A1A1A',
  },
  musicNoteIcon: {
    color: '#964A4D',
  },
  songTitle: {

  },
  songList: {

  },
  colorWhite: {
    color: '#FFFFFF',
  },
});

export default function SongsPanel(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.songsPanel}>
      <div className={classes.songTitle}>

      </div>

      <div className={classes.songList}>
        <Table>
          <TableHead>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left"></TableCell>
              <TableCell className={classes.colorWhite} align="left">Calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">Fat&nbsp;(g)</TableCell>
              <TableCell className={classes.colorWhite} align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell className={classes.colorWhite} align="center">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
            <TableRow hover>
              <TableCell className={classes.colorWhite} align="left">
                <MusicNoteIcon className={classes.musicNoteIcon} />
              </TableCell>
              <TableCell className={classes.colorWhite} align="left">calories</TableCell>
              <TableCell className={classes.colorWhite} align="left">fat</TableCell>
              <TableCell className={classes.colorWhite} align="right">carbs</TableCell>
              <TableCell className={classes.colorWhite} align="center">protein</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
