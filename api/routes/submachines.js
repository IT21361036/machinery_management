import express from "express";
import { 
    createSubmachine,
    deleteSubmachine, 
    getSubmachine, 
    getSubmachines, 
    updateSubmachine } from "../controllers/submachine.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:machineId",verifyAdmin ,createSubmachine);

//UPDATE
router.put("/:id",verifyAdmin,updateSubmachine);
//DELETE
router.delete("/:id/:machineId",verifyAdmin, deleteSubmachine);
//GET
router.get("/:id", getSubmachine);
//GET ALL
router.get("/", getSubmachines);

export default router