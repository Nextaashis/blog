const bcypt = require('bcryptjs');

const userModel = require('../model/userModel');
const jwt = require('jsonwebtoken');


const createWebToken = (id)=>{
  return jwt.sign({id}, "1233456" , {expiresIn: "3d"})
}

const userLogin= async (req,res)=>{
      const {email, password}= req.body;
        const findEmail = await  userModel.findOne({email});
        if(findEmail){
            try{
                 const passwordCompare = await bcypt.compare(findEmail.password, password);
                  if(passwordCompare){
                     const jsonWebtoken = createWebToken(findEmail._id);
                      res.send({jsonWebtoken});
                  }
            }catch(error){
                console.log(error);
            }
        }
}


const userLogout=(req,res)=>{
    res.send('From user logout.')
}


module.exports = {userLogin, userLogout };


