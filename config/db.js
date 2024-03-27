const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://2140145:cCmh81F1k63bA3fK@cluster0.xvuetvz.mongodb.net/register");
    }catch(error)
    {
        console.log(`error in connection DB ${error}`);
    }
}

module.exports=connectDB;
