import express from "express";
import { countByCity, countByType, createMachine,
         deleteMachine, 
         getMachine, 
         getMachines, 
         updateMachine 
} from "../controllers/machine.js";
import Machine from "../models/Machine.js";
import {verifyAdmin} from "../utils/verifyToken.js"

const router = express.Router();

//CREATE
router.post("/",verifyAdmin,createMachine);

//UPDATE
router.put("/:id",verifyAdmin,updateMachine)
//DELETE
router.delete("/:id",verifyAdmin, deleteMachine)
//GET
router.get("/find/:id", getMachine)
//GET ALL
router.get("/", getMachines)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)


export default router;