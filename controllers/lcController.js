const lcModel = require("../models/lcModel");

const createLikeController=async(req,res)=>{
    try{
        const{like,comments}=req.body;

        const likeComment=await lcModel({
            like,
            comments,
            likesBy:req.auth._id,
        }).save();
        res.status(201).send({
            success:true,
            message:'"Post Created Successfully',
            likeComment,
        });
        //console.log(req);
    }catch(error)
    {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Create Post Api",
            error,
        });
    }
};

//Get all likesAndComments
const getAllLikesController=async(req,res)=>{
    try{
        const likes=await lcModel
        .find()
        .populate("likesBy","_id name")
        .sort({createdAt:-1});
        res.status(200).send({
            success:true,
            message:"All Posts Data",
            likes,
        });
    }catch(error)
    {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error Iin Getallposts api",
            error
        });
    }
};

module.exports={createLikeController,getAllLikesController}
