
import multer from 'multer';

// Set up storage configuration for multer 
const storage= multer.diskStorage({
    filename:function (req,file,callback){
        callback(null,file.originalname)
    }
})

const upload =multer({storage})

export default upload;