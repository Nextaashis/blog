const express = require('express')
const loginRouter = express.Router();
const {userLogin, userLogout } = require('../controller/loginController');

loginRouter.post('/login', userLogin );

loginRouter.post('/logout', userLogout);


module.exports = loginRouter;