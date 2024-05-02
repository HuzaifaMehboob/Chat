const jwt = require('jsonwebtoken')
const User = require("../models/userModel")
const Authmmiddleware = async(req,res,next)=>{
    const token = req.header('Authorization')
    if(!token){
        return res.send(401).json({msg : "Unauthorized HTTP, token not provided!"})
    }
    const jwt_token = token.replace("Bearer","").trim();
    console.log("Authmiddleware token",jwt_token)
    try{
        const isVerified = jwt.verify(jwt_token,process.env.JWT_SECRET);
        console.log(isVerified.id)
        const user = await User.findOne({_id : isVerified.id}).select({password: 0})
        console.log(user)
        req.user = user
        req.token = token
        req.userID = user._id
        next()
    }
    catch(error){
        return res.send(401).json({msg: "Unauthorized token"})
    }
}

module.exports = Authmmiddleware