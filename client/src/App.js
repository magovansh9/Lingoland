import React, { useEffect } from "react";
import { Container, Typography, AppBar, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import duolingo from "./images/duolingo.png";
import useStyles from "./styles.js";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Lingoland
        </Typography>
        <img
          className={classes.image}
          src={duolingo}
          alt='duolingo'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
