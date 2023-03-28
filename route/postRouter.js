const express = require('express');
const postRouter = express.Router();
const {allPost, newPost, editPost, deletePost} = require('../controller/postController');


postRouter.get('/post', allPost);

postRouter.post('/api/post', newPost);

postRouter.put('/post', editPost);

postRouter.delete('/post', deletePost);



module.exports = postRouter;