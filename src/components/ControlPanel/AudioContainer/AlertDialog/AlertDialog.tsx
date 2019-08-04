import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';

const img = require('../../../../assets/images/advertisement.png'); // eslint-disable-line @typescript-eslint/no-var-requires

function Transition(props: any, ref: any): JSX.Element {
  return <Slide direction="up" ref={ref} {...props} />;
}

const ForwardRefTransition = forwardRef<unknown, TransitionProps>(Transition);

const useStyles = makeStyles({
  dialogCloseContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    '& > button': {
      position: 'absolute',
    },
  },
});

interface PropsI {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AlertDialogSlide(props: PropsI): JSX.Element {
  const classes = useStyles();

  function handleClose(): void {
    props.setOpen(false);
  }

  return (
    <>
      <Dialog
        open={props.open}
        TransitionComponent={ForwardRefTransition}
        keepMounted
        onClose={handleClose}
        maxWidth="md"
      >
        <div className={classes.dialogCloseContainer}>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

        <img src={img} alt="advertisement" />
      </Dialog>
    </>
  );
}
