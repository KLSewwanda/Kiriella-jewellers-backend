import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoDBURI = process.env.MONGO_URI;

mongoose.connect(mongoDBURI).then(
    ()=>{
        console.log("Connected to MongoDB successfully")
    }
)

const app = express();

app.listen (3000, ()=>{
    console.log('Server is running on port 3000');
})