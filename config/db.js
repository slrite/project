const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017/Register");
    }catch(error)
    {
        console.log(`error in connection DB ${error}`);
    }
}

module.exports=connectDB;