import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth:"10%",
    maxHeight: "300",
    marginLeft: "1rem",
  },
  media: {
    objectFit: 'scale-down'
  }
}));

export const ServiceCard = function({title,imagePath, change}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={() => {
      change(title)
    }}>
        <CardActionArea>
          {/* add simple image */}
          <CardMedia 
            component="img"
            className = {classes.media}
            image={imagePath}
            title={title}
            height="128"
            weidth="128"
          />
          <CardContent>
            <Typography variant="body2" component="h6">
                {title.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
    </Card>
  );
}

export const DashboardCard = function(prop) {
  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: "70%",
      display: "flex",
      justifyContent: "center",
    },
    cardRoot: {
      width: "100%",
    },
    title: {
      fontSize: 20,
      fontWeight: theme.typography.fontWeightBold,
      textAlign: "left",
      verticalAlign: "center"
    },
    pushRight: {
      flexGrow: 1,
    },
    value: {
      fontWeight: theme.typography.fontWeightBold,
      marginRight: '1%',
    }
  }));
  const classes = useStyles();

  return(
    <Container className={classes.root} maxWidth="sm">
      <Card className={classes.cardRoot} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Typography className={classes.title} color="textPrimary">
                {prop.title}
              </Typography>
              <Typography className={classes.title} color="textSecondary">
                {prop.moreInfo}
              </Typography>
            </Grid>
            <div className={classes.pushRight}></div>
            <Grid item xs={3}>
              <Typography className={classes.value} variant="body1">
                {prop.value}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
