import { Express } from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv/config';
import bodyParser from 'body-parser';

const app = Express();
const PORT = process.env.PORT || 8070;

const URL = process.env.MONGODBURL;

mongoose.connect(URL);

const con = mongoose.con;
con.once('open', () => {
    console.log('mongoDB successfully connected');
});

app.listen(PORT, () =>{
    console.log(`server is up and running on ${PORT}`)
})