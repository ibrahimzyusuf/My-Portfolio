import mongoose from "mongoose";
import joi from "joi";

const ProjectSchema=new mongoose.Schema(
    {
        projectName:{
            type:String,
            minlength:2,
            maxlength:100,
            trim:true,
            required:true
        },
        projectPhoto:{
            type:String,
            trim:true,
            default:"/default_project.jpg"
        },
        projectInitialDesc:{
            type:String,
            trim:true,
        },
        projectDetailedDesc:{
            type:String,
            trim:true
        },
        projectDate:{
            type:String,
            trim:true
        },
        liveDemo:{
            type:String,
            trim:true
        },
        githubRebo:{
            type:String,
            trim:true
        },
        featured:{
            type:Boolean,
            default:false
        },
        imagesGallery:{
            type:[String],
            trim:true,
            default:[]
        }
    },
    {timestamps:true}
)

const Project=mongoose.model('Project',ProjectSchema)

const validateCreateProject=(obj)=>{
    const schema=joi.object({
        projectName:joi.string().min(2).max(100).trim().required(),
        projectDesc:joi.string().trim(),
        projectDate:joi.date()
    })
    return schema.validate(obj)
}

const validateUpdateProject=(obj)=>{
    const schema=joi.object({
        projectName:joi.string().min(2).max(100).trim().required(),
        projectDesc:joi.string().trim(),
        projectDate:joi.date()
    })
    return schema.validate(obj)
}

export {Project,validateCreateProject,validateUpdateProject}