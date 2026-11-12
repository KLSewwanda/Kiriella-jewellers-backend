import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from "node:dns";
import authenticate from './middleware/authenticate.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoDBURI = process.env.MONGO_URI;

mongoose.connect(mongoDBURI).then(
    ()=>{
        console.log("Connected to MongoDB successfully")
    }
)

const app = express();

app.use(express.json());

app.use(authenticate)

app.use("/users" , userRouter)

app.listen (3000, ()=>{
    console.log('Server is running on port 3000');
})