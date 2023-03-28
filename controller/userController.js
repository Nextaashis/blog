const bcrypt = require('bcryptjs');
const newsuser = require ('../model/userModel');
const jwt = require('jsonwebtoken');

const createToken =(id)=>{
  return jwt.sign({id},"1234452121212")
}

const userAll = async (req,res)=>{
      const allUser = await newsuser.find();
      res.status(200).send(allUser);
}

const userSigin = async (req,res)=>{
      const {name, email, password, phone} = req.body;
       
       if(name && email && password){
           const salt = await bcrypt.genSalt(10);
           const hashpassword = await bcrypt.hash(password, salt)
          try{
              const createUser = await newsuser.create({
                name,
                email,
                password: hashpassword,
                phone
              })

              // jwt token create  ....
               const token = createToken(createUser._id)

 
              res.send({token});



          }catch(error){
            console.log(error);
          }
       }
}


const userEdit = (req,res)=>{
    res.send('Hello From Controller.');
}


const userDelete = (req,res)=>{
    res.send('Hello From Controller.');
}



module.exports = {userAll, userSigin, userEdit, userDelete};