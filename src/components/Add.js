import { makeStyles, Container, Tooltip, Fab, Modal } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: 10,
    right: 20
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh'
    }
  }
}));

function Add() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title='Add' aria-label='add' onClick={() => setOpen(true)}>
        <Fab color='primary' className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>My Modal</Container>
      </Modal>
    </>
  );
}

export default Add;