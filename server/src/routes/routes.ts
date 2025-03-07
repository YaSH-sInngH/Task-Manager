import express from "express";
import { createTask, getTask, updateTask, deleteTask } from "../controllers/task-controller";

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", getTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
