import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

 // App config
 const app= express();
 const port=process.env.PORT|| 4000;
connectDB();
connectCloudinary();

 //Middlewares
 app.use(express.json());
 app.use(cors({

 }))

 //api endpoints

app.use('/api/user',userRouter);
app.use('/api/product',productRouter);

 app.get('/',(req,res)=>{
     res.send("app\i working")
 })


 // start the express srver
 app.listen(port,()=> console.log('server stared on port :'+port))