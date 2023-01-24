import axios from 'axios';
// using it for making api calls

const url = 'http://localhost:5001/posts';


export const fetchPosts = async() =>  await axios.get(url);

export const createPost = async(newPost) => await axios.post(url,newPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);
