import { makeStyles, Container, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import SettingsIcon from '@material-ui/icons/Settings';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ListIcon from '@material-ui/icons/List';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PersonIcon from '@material-ui/icons/Person';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',

    color: 'white',
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    position: 'sticky',
    top: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '1px solid #ece7e7'
    }
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer'
    }
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px'
    }
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <ListIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCameraIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutlineIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMacIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <BookmarkIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <StorefrontIcon className={classes.icon} />
        <Typography className={classes.text}>Market Place</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToAppIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default Leftbar;
