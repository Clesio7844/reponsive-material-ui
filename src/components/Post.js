import {
  makeStyles,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  media: {
    height: '250px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.breakpoints.down('sm')]: {
      height: 150
    }
  },
  card: {
    marginBottom: theme.spacing(5)
  }
}));

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://media.istockphoto.com/photos/beautiful-smiling-female-college-student-picture-id1340766096?b=1&k=20&m=1340766096&s=170667a&w=0&h=P-ay9mgiAn5O_eg3JOfaKIpDTu-_p70NyIsEhVcEFco='
          title='My Post'
        />
        <CardContent>
          <Typography gutterBottom variant='h5'>
            My First Post
          </Typography>
          <Typography variant='body2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            officia sint minima labore error accusamus, culpa mollitia deserunt
            itaque obcaecati voluptatum laboriosam quaerat quasi similique est?
            Veniam similique eveniet voluptates corporis quo voluptatem
            perspiciatis iste blanditiis id. Labore, placeat reprehenderit.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            officia sint minima labore error accusamus, culpa mollitia deserunt
            itaque obcaecati voluptatum laboriosam quaerat quasi similique est?
            Veniam similique eveniet voluptates corporis quo voluptatem
            perspiciatis iste blanditiis id. Labore, placeat reprehenderit
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
