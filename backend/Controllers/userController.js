const generateToken = require('../config/generateToken');
const User = require('../models/userModel')


const registerUser = async (req,res)=>{
    
    const {name,email,password}=req.body;
    console.log(req.body)

    const emailExist = await User.findOne({email})
    const userExist = await User.findOne({name})
    if(emailExist)
    {
        res.status(400);
        throw new Error("Email aleady exists")
    }
    if(userExist)
    {
        res.status(400);
        throw new Error("Name aleady taken")
    }
    const pic=null;
    const user = await User.create({name,email,password})

    if(user)
    {
        res.status(201).send({
            _id : user._id,
            name : user.name,
            email : user.email,
            password : user.password,
            pic : user.pic,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400);
        throw new Error("Failed to Create the User")
    }
}
const getUser = async(req,res)=>{
    const userData = req.user
    res.status(200).json({msg:userData})
}
const authUser = async(req,res)=>
{
    const {email,password}=req.body;

    const  user = await User.findOne({email});

    if(user && (await User.matchPassword(password,user.password)) ){
        res.json({
            _id : user._id,
            name : user.name,
            email : user.email,
            password : user.password,
            pic : user.pic,
            token: generateToken(user._id)
        })
    }
}

module.exports = {registerUser,getUser,authUser,getUser}