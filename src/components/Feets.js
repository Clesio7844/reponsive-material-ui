import { makeStyles, Container } from '@material-ui/core';
import Post from './Post';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}));

function Feets() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
}

export default Feets;
