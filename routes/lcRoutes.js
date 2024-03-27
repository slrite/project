const express=require("express");
const{requireSingIn}=require("../controllers/userController");

const{
   createLikeController, getAllLikesController,
}=require("../controllers/lcController")

//router object
const router = express.Router();

//create post || post
router.post("/likeComment",requireSingIn,createLikeController);

//get likes
router.get("/lcomment",getAllLikesController);

module.exports=router;