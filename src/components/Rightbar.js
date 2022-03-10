import {
  makeStyles,
  Container,
  Typography,
  Link,
  Divider
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(10),
    position: 'sticky',
    top: 0
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555'
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16
  }
}));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{ marginBottom: 20 }}>
        <Avatar
          alt='Remy Sharp'
          src='https://www.cathaypacific.com/content/dam/focal-point/digital-library/destinations/theme/student/theme_student_08_offer.renditionimage.900.600.jpg'
        />
        <Avatar
          alt='Travis Howard'
          src='https://i2.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1'
        />
        <Avatar
          alt='Cindy Baker'
          src='https://angebote.kurier.at/storage/app/public/kurier/images/sT5cd77ITeZnLQy6un29kpBwsE7Zws25YBRr58yk.jpg'
        />
        <Avatar alt='Agnes Walker' src='' />
        <Avatar
          alt='Trevor Henderson'
          src='https://www.advance-he.ac.uk/sites/default/files/2020-11/Student%20in%20library.jpg'
        />
        <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
        <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
        <ImageListItem>
          <img src='https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Chocolate-Chip-Pancakes.png' />
        </ImageListItem>
        <ImageListItem>
          <img src='https://img.taste.com.au/cA3aUeON/taste/2021/11/thermomix-better-for-you-banana-pancakes-174975-2.jpg' />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://simply-delicious-food.com/wp-content/uploads/2019/07/Pancake-board-2.jpg'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://www.eatthis.com/wp-content/uploads/sites/4/2020/07/breakfast-foods.jpg?quality=82&strip=all'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://pinchofyum.com/wp-content/uploads/Breakfast-Sandwich-Recipe.jpg'
            alt=''
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://www.verywellhealth.com/thmb/gF-I-Kf6MyQfEbp1Q9mpXtcENxM=/2880x1920/filters:fill(87E3EF,1)/best-breakfast-choices-and-diabetes-1087468-primary-recirc-603a39fe3b10439eaa9a0cf80a09eec2.jpg'
            alt=''
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href='#' className={classes.link} variant='body2'>
        Sport
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Food
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Music
      </Link>
      <Divider flexItem style={{ marginBottom: 5 }} />
      <Link href='#' className={classes.link} variant='body2'>
        Movies
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Science
      </Link>
      <Link href='#' className={classes.link} variant='body2'>
        Life
      </Link>
    </Container>
  );
}

export default Rightbar;
