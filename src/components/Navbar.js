import React, { useState } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  alpha,
  Badge,
  Avatar
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      display: props => (props.open ? 'flex' : 'none'),
      width: '70%'
    }
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1)
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  icons: {
    alignItems: 'center',

    display: props => (props.open ? 'none' : 'flex')
  },
  badge: {
    marginRight: theme.spacing(2)
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' className={classes.logoLg}>
          DLCC
        </Typography>
        <Typography variant='h6' className={classes.logoSm}>
          dlcc
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder='Search...' className={classes.input} />
          <CancelIcon
            className={classes.cancel}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color='secondary' className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
