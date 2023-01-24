import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import { TextField, Paper } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import useStyles from './styles';

import { deletePost } from '../../../actions/posts';

const Post  = ({post}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let addr = "mailto:";
    let addr2 = post.creator;
    addr += addr2;
    const handleDelete = (secret_key,val1)=>{
      // console.log(secret_key);
      // console.log(post.secret_key);
      if(secret_key === val1)
       dispatch(deletePost(post._id));
      else
       alert("Incorrect secret key");
    }
    let val="";
    if(post)
    {
    return(
      <Card className={classes.card}>
          <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
          <div className={classes.overlay} style={{margin: "auto"}}>
            <CardContent style={{padding: "0px"}} >
              <Typography className={classes.title} gutterBottom variant="h5" component="h2" style={{padding: "0px"}} >{post.title}</Typography>
            </CardContent>
            <Typography variant="p">{post.creator}</Typography>
          </div>
          <CardContent>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.message}</Typography>
          </CardContent>
          <div className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          </div>
          
          <CardActions className={classes.cardActions}>
            <a href={addr} style={{ textDecoration: 'none' }}>
           <Button size="small" color="primary" ><ThumbUpAltIcon fontSize="small" /> Donate </Button>
           </a>
          
           <Popup trigger={ <Button size="small" color="primary"><DeleteIcon fontSize="small" /> Delete</Button>} 
           position="right center">
              <TextField name="secret_key" variant="outlined" label="Secret Key" onChange = {(e)=> {
                  val = e.target.value
                  console.log(val)
              } }/>
              <Button onClick = {()=>handleDelete(val,post.secret_key)}>Delete</Button>
           </Popup>
          </CardActions>
      </Card>
   
    );
    }
}

export default Post;