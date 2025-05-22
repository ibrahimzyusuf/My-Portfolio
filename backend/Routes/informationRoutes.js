import express from "express";
import getAllInformationsCtrl from "../Controllers/informationController.js";
const router=express.Router()

// /api/informations/
router.get('/',getAllInformationsCtrl)

export default router