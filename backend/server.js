const express = require("express")
const dotenv = require("dotenv");
const { yellow } = require("colors");
const mongoose = require("mongoose")
const userRoutes = require('./routes/userRoutes')
const cors=require('cors')
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())
app.use('/user',userRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server started at ",process.env.PORT) 
    })
})
.catch((error)=>{
    console.log(error);
})
