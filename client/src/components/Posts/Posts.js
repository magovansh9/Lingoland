import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

import Post from "./Post/Post";
import useStyles from "./styles.js";

const Posts = ({ setCurrentId }) => {
  const { posts, isLoading } = useSelector((state) => state.posts); // use Selector to return and display the data returned by redux state
  const classes = useStyles();

  if (!posts.length && !isLoading) return "No posts";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={12} md={6} lg={3}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
