import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1>right</h1>
    </Container>
  );
}

export default Rightbar;
