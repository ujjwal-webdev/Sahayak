import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import memories from './images/sahayaklogo.png';
import useStyles from './styles';

const App = () => {
   const classes = useStyles();
   const dispatch = useDispatch();
    
   useEffect(() => {
    dispatch(getPosts());
   }, [dispatch]);
    return(
      
      <Container maxwidth="lg">
         <AppBar className={classes.appBar} position="static" color="inherit">
           <Typography className={classes.heading}variant="h2" align="center">
              Sahayak
           </Typography>
           <img src={memories} className={classes.image}alt="memories"  height={60}></img>
           <div style={{fontSize: "15px", display: "block", color: "grey", width: "fit-content", float: "right", textAlign:"right"}}>~ Developed by Ujjwal & Ananya</div>
         </AppBar>
         <Grow in>
           <Container>
             <Grid container justify="space-between" alignItems="stretch" spacing={3}>
               <Grid item xs={12} sm={7}>
                <Posts/>
               </Grid>
               <Grid item xs={12} sm={4}>
                <Form/>
               </Grid>

             </Grid>
           </Container>
         </Grow>
      </Container>
    );
};

export default  App;
