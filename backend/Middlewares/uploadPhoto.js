import multer from 'multer'
import path,{dirname} from "path";
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

// Photo storage
const photoStorage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../images'))
    },
    filename:function(req,file,cb){
        if (file) {
            cb(null,new Date().toISOString().replace(/:/g,"-")+file.originalname)
        } else {
            cb(null,false)
        }
    }
})

const uploadPhoto=multer({
    storage:photoStorage,
    fileFilter:function(req,file,cb){
        if (file.mimetype.startsWith('image')) {
            cb(null,true)
        } else {
            cb({message:'Unsupported format'},false)
        }
    },
    limits:{fileSize:2*1024*1024} // 2mega
})

export default uploadPhoto