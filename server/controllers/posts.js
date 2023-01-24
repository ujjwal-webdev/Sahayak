import pkg from 'mongoose';
const { Mongoose } = pkg;
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req,res)=>{
   try{
       const postMessages = await PostMessage.find();
       console.log(postMessages);
       res.status(200).json(postMessages);
   } catch(error){
      res.status(404).json({message:error.message});
   }
};

export const createPost = async (req,res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  console.log(newPost);
  try{
     await newPost.save();
     res.status(201).json(newPost);
  }catch(error)
  {
      res.status(409).json({message:error.message});
  }
};

export const deletePost = async (req, res) => {
   const { id } = req.params;
   console.log(id);
   //if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

   await PostMessage.findByIdAndRemove(id);

   res.json({ message: "Post deleted successfully." });
}
// export const updatePost = async(req,res)=>{
//    const { id:_id } = req.params;
//    const post = req.body;
//    if(mongoose.Types.ObjectId.isValid(_id))
//     return res.status(404).send('No post with that id');
   
//    const updatedPost =  await PostMessage.findByIdAndUpdate(_id,post,{new:true});
//    res.json(updatePost);
// }