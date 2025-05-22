import express from "express";
import uploadPhoto from "../Middlewares/uploadPhoto.js";
import { createProjectCtrl,getAllProjectsCtrl,getFeaturedProjectsCtrl,getSingleProjectCtrl } from "../Controllers/projectController.js";

const router=express.Router()

// /api/projects
router.route('/').post(uploadPhoto.single('image'),createProjectCtrl)
.get(getAllProjectsCtrl)

// /api/projects/featured
router.route('/featured').get(getFeaturedProjectsCtrl)

// /api/projects/:id
router.route('/:id').get(getSingleProjectCtrl)



export default router