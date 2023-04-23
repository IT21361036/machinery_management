import Submachine from "../models/Submachine.js";
import Machine from "../models/Machine.js";
import { createError } from "../utils/error.js";

export const createSubmachine = async(req,res,next)=>{
    const machineId = req.params.machineId;
    const newSubmachine = new Submachine(req.body)

    try {
        const savedSubmachines = await newSubmachine.save();
        try{
            await Machine.findByIdAndUpdate(machineId, 
                {$push :{submachines : savedSubmachines._id},
            });
        }catch(err){
            next(err)
        }
        res.status(200).json(savedSubmachines);
    } catch (err) {
        next(err);
    }

};

export const updateSubmachine = async (req, res,next)=>{ 
    try{
        const  updatedSubmachine = await Submachine.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new:true}
            );
        res.status(200).json(updatedSubmachine)
    }catch(err){
       next(err);
    }
}

export const deleteSubmachine = async (req, res,next)=>{
    const machineId = req.params.machineId;
    try{
        await Submachine.findByIdAndDelete(req.params.id);
        try{
            await Machine.findByIdAndUpdate(machineId, 
                {$pull :{submachines : req.params.id},
            });
        }catch(err){
            next(err)
        }
        res.status(200).json("Machine has been deleted");
    }catch(err){
       next(err);
    }
}

export const getSubmachine = async (req, res,next)=>{
    try{
        const submachine = await Submachine.findById(req.params.id);
        res.status(200).json(submachine);
    }catch(err){
       next(err);
    }
}

export const getSubmachines = async (req, res,next)=>{
    
    try{
        const submachines = await Submachine.find();
        res.status(200).json(submachines);
    }catch(err){
       next(err);
    }
}