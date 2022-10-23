import express from "express";
import { createRoadmap, deleteRoadmap, getAllRoadmap, getRoadmap, updateRoadmap } from "../controllers/roadmapController.js";

const router = express.Router();

//CREATE
router.post("/", createRoadmap);
//UPDATE
router.put("/:id", updateRoadmap)
//DELETE
router.delete("/:id", deleteRoadmap)
//GET
router.get("/:id", getRoadmap)
//GET ALL
router.get("/", getAllRoadmap)

export default router