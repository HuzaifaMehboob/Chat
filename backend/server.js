const express = require("express")
const dotenv = require("dotenv");
const mongoose = require("mongoose")
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const cors=require('cors')
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())
app.use('/user',userRoutes)
app.use('/chats',chatRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server started at ",process.env.PORT) 
    })
})
.catch((error)=>{
    console.log(error);
})
