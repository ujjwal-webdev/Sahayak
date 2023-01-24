import React,{ useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form  = () => {
    const [ postData, setPostData ] = useState({
      creator:'',
      secret_key:'',
      title:'',
      message:'',
      tags:'',
      selectedFile:''
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const clear = () => {
    setPostData({ creator: '',  secret_key:'',title: '', message: '', tags: '', selectedFile: '' });
    };
    const handleSubmit = (e)=>{
       e.preventDefault();
       dispatch(createPost(postData));
       clear();
    }
    return(
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6"></Typography>
        <TextField name="creator" variant="outlined" label="Creator_id" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField type="password" name="secret_key" variant="outlined" label="Secret Key" fullWidth value={postData.secret_key} onChange={(e) => setPostData({ ...postData, secret_key: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Create Donation Request</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    );
}

export default Form;