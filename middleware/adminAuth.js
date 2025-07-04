import jwt from 'jsonwebtoken';

const adminAuth= async (req,res,next) =>{
    try{
      const {token} =req.headers;
      if(!token){
        return res.json({success:false,message:"No token provided"});
      }
      const tokendecode=jwt.verify(token,process.env.JWT_SECRET);
        if(tokendecode!==process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            res.json({success:false,message:"Not Authorised login again"})
        }
         next();
    }
    catch(error){
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default adminAuth;