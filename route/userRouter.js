const express = require('express');
const userRouter = express.Router();
const {userAll, userSigin, userEdit, userDelete}= require('../controller/userController');



userRouter.get('/api/all', userAll);

userRouter.post('/api/user', userSigin);

userRouter.put('/api/:id', userEdit);

userRouter.delete('/api/:id', userDelete);

module.exports = userRouter;