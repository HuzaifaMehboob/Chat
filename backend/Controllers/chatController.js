const asyncHandler = require('express-async-handler');
const chatModel = require('../models/chatModel')
const Message = require('../models/messageModel');
const Chat = require('../models/chatModel');
const User = require("../models/userModel");


const accessChat = asyncHandler(async (req,res)=>{
    const {userId} = req.body;

    if(!userId){
        console.log("userId param not sent with the body")
        return res.status(400);
    }
    
    const isChat = await chatModel.find({
        isGroupChat: false,
        $and : [
            {users : {$elemMatch : {$eq : req.user._id}}},
            {users : {$elemMatch : {$eq : userId}}}
        ]

    }).populate("users -password")
    .populate("latestMessage");

    isChat = await User.populate(isChat,{
        path : 'lastMessage.sender',
        select : 'name pic email'
    })

    if(isChat.length > 0){
        res.send(isChat[0])
    }
    else{
        const newChat = {
            chatName : "sender",
            isGroupChat : false,
            users : [req.user._id,userId]
        }
        try{
            const createdChat = await Chat.create(newChat)

            const fullChat =  await Chat.findOne({_id : createdChat._id}).populate("users -password");

            res.status(200).send(fullChat)
        }
        catch(error){
            res.status(400);
            throw new Error(error.message);
        }
    }

})

const fetchChats = asyncHandler(async (req,res)=>{
    try{
    Chat.find({users : {$elemMatch : {$eq : req.user._id}}}).then((data) => res.send(data))
    }
    catch(error){res.status(400).send(error.message)}
})
module.exports = {accessChat,fetchChats};