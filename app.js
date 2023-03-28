const express = require('express');
const app =  express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const userRouter = require('./route/userRouter');
const postRouter = require('./route/postRouter');
const loginRouter = require('./route/loginrouter');



 const PORT = process.env.PORT || '3001';

 // Multer file setup

  const storage = multer.diskStorage({
   destination: (req, file, cb)=>{
      cb(null, "public/image/")
   },
   filename: (req,file, cb)=>{
      cb(null, file.originalname);
   }

  })

  const upload = multer({
   storage: storage
  })


 
 // Databae connection 
 mongoose.connect('mongodb://localhost:27017/bloguser').then(()=>{
    console.log('Connection Sucessfull with database.')
 }).catch((error)=>{
    console.log(error);
 })
 
 app.use(cors());  
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));

 app.post('/upload', upload.single('image'),(req,res)=>{
   res.send('Image Uploaded.')
 })


 app.use('/', loginRouter);   // Login Router import from login Router
 app.use('/', userRouter);   // Router import from user Router 
 app.use('/', postRouter);  // Router import from  News post Router
  

 app.listen(PORT,()=>{
     console.log(`Server start @ http://localhost:${PORT} `);
 })
