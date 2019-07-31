import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
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
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  songsPanel: {
    flexGrow: 1,
    color: '#FFFFFF',
    backgroundColor: '#1A1A1A',
    display: 'flex',
    flexDirection: 'column',
  },
  musicNoteIcon: {
    color: '#964A4D',
  },
  songTitle: {
    height: 300,
  },
  songList: {
    flexGrow: 1,
    flexBasis: 'auto',
    overflowY: 'auto',
    height: 0,
  },
  colorWhite: {
    color: '#FFFFFF',
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
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className={classes.controlPanel}>
          <AudioContainer />
        </div>
      </div>

      <UserPanel />
    </div>
  );
}
