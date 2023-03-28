const postmodel = require('../model/postModel');



const allPost = async(req,res)=>{
      const data = await news.find();
       res.send(data);
}

const newPost = async (req,res)=>{
      const {title, image, newsbody} = req.body;
        const newnews = await postmodel.create({
            title,
            image,
            newsbody
        })

        res.send({newnews});

}

const editPost = (req,res)=>{
    res.send('News Post Controller');
}


const deletePost = (req,res)=>{
    res.send('News Post Controller');
}



module.exports = {allPost, newPost, editPost, deletePost};