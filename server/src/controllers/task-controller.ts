import { Request, Response } from "express";
import Task from "../models/Task";

export const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, description, status, due_date } = req.body;
        const task = await Task.create({ title, description, status, due_date });
        res.status(201).json({ message: "Task Created Successfully", task });
    } catch (error) {
        res.status(500).json({ error: "Failed to create task" });
    }
};

export const getTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Task not found, failed to retrieve" });
    }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const [updated] = await Task.update(req.body, { where: { id } });

        if (!updated) {
            res.status(404).json({ error: "Task not found" });
            return;
        }
        res.status(200).json({ message: "Task updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to update task" });
    }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const deleted = await Task.destroy({ where: { id } });

        if (!deleted) {
            res.status(404).json({ error: "Task not found" });
            return;
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete task" });
    }
};
