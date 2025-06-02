import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const createToken = (id)=>{
     return jwt.sign({id},process.env.JWT_SECRET )
}

const loginUser= async (req,res) =>{
    try{
        const {email,password}=req.body; 

        const user= await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message: "User not found"});
        }
        const isMatch= await bcrypt.compare(password, user.password);
        if(isMatch){
           const token= createToken(user._id); 
           res.json({success:true,token});
        }
        else{
            res.json({success:false,message: "Invalid password"});
        }
      }
       catch(error){
            console.log(error);
            res.json({success:false, message: "An error occurred while logging in."});
       }
}


const registerUser = async (req, res) => {
     try{
           const {name, email, password} = req.body;
           // Check if user already exists
           const  exists=await userModel.findOne({email});
           if(exists){
                return res.json({success:false,message: "User already exists"});
           }

           // valdating email format and strong passwrd
              if(!validator.isEmail(email)){
                   return res.json({success:false,message: "Invalid email format"});
              }
                if(password.length <8){
                     return res.json({success:false,message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one symbol"});
                }
                // Hashing the password
                const salt= await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(password, salt);

              const newUser=new userModel({
                name,
                email,
                password
              })
                  const user=await newUser.save();
                  const token= createToken(user._id);
                  res.json({success:true,token})

     }catch(error){
              console.log(error);
              res.json({success:false, message: "An error occurred while registering the user."});
     };
     
}
    

const adminLogin= async (req,res) => {
      
}


export { loginUser, registerUser, adminLogin};