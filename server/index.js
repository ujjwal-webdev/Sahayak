import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import e from 'cors';

import postRoutes from './routes/posts.js';

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts',postRoutes);

const CONNECTION_URL = 'mongodb+srv://ujjwal:ujjwal123@cluster0.karoui1.mongodb.net/test?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

// if(process.env.NODE_ENV == "production")
// {
//   app.use(express.static("client/build"));
// }

mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true})
  .then(()=> app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
  .catch((error)=>console.log(`Error is ${error.message}`));
