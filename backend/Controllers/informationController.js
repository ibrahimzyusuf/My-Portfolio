import asyncHandler from "express-async-handler";
import Information from '../Models/Information.js'

/**
 * @desc Get all informations
 * @route /api/informations
 * @method GET
 * @access public
 */

const getAllInformationsCtrl=asyncHandler(async(req,res)=>{
    const informations=await Information.findOne()
    res.status(200).json(informations)
})

export default getAllInformationsCtrl