import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post.js';

import useStyles from './styles';

const Posts  = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    console.log(posts);
    var defaultText = "Please create a Donation Request!";
    return(
      !posts.length ? <h1  style={{color: "white"}}>{defaultText}</h1> : (
        <Grid className ={classes.container} container alignItems="strech" spacing={3}>
          {
            posts.map((post)=>(
              <Grid key={post._id} item xs={12} sm={6}>
                <Post post={post} />
              </Grid>
            ))
          }
           
        </Grid>
      )
    );
}

export default Posts;