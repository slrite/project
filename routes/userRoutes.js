const express=require('express');
const{
    registerController,
    loginController,
    updateUserController,
    requireSingIn,
}=require("../controllers/userController");

//router object
const router=express.Router();

//routes
//register || post

router.post("/register",registerController);

//Loging || post

router.post("/login",loginController);

//update || put
router.put("/update-use",requireSingIn,updateUserController);

//exports
module.exports=router;