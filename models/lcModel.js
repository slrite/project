const mongoose=require('mongoose');

//schema
const LCommentSchema=new mongoose.Schema({
    like:{
        type:Number,
        default:0
    },
    comments:{
        type:[String],
        default:[]
    },
    likesBy:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})


module.exports=mongoose.model("LComment",LCommentSchema);