import asyncHandler from 'express-async-handler'
import { Project,validateCreateProject,validateUpdateProject } from "../Models/Project.js";
import path,{dirname} from 'path'
import { fileURLToPath } from "url";

const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

/**
 * @desc Create new project
 * @route /api/projects
 * @method POST
 * @access Public
 */

const createProjectCtrl=asyncHandler(async(req,res)=>{
    // Validation
    const {error}=validateCreateProject(req.body)
    if (error) {
        return res.status(400).json({message:error.details[0].message})
    }

    let project

    // Upload project photo if i want
    if (req.file) {
        const imagePath=path.join(__dirname,`../images/${req.file.filename}`)

        // Create in DB
        project=await Project.create({
            projectName:req.body.projectName,
            projectPhoto:{url:imagePath},
            projectDesc:req.body.projectDesc,
            projectDate:req.body.projectDate,
        })
    }
    else{
        // Create in DB
        project=await Project.create({
            projectName:req.body.projectName,
            projectDesc:req.body.projectDesc,
            projectDate:req.body.projectDate,
        })
    }

    // Send response
    res.status(201).json({message:'Project created successfully',project})
})


/**
 * @desc Get all projects
 * @route /api/projects
 * @method GET
 * @access Public
 */

const getAllProjectsCtrl=asyncHandler(async(req,res)=>{
    const projects=await Project.find()
    res.status(200).json(projects)
})


/**
 * @desc Get featured projects
 * @route /api/projects/featured
 * @method GET
 * @access Public
 */

const getFeaturedProjectsCtrl=asyncHandler(async(req,res)=>{
    const featuredProjects=await Project.find({featured:true})
    res.status(200).json(featuredProjects)
})


/**
 * @desc Get single project
 * @route /api/projects/:id
 * @method GET
 * @access Public
 */

const getSingleProjectCtrl=asyncHandler(async(req,res)=>{
    const project=await Project.findById(req.params.id)
    if (!project) {
        return res.status(404).json({message:'Project not found'})
    }
    res.status(200).json(project)
})


export {createProjectCtrl,getAllProjectsCtrl,getFeaturedProjectsCtrl,getSingleProjectCtrl}